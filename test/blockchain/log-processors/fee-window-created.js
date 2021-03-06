"use strict";

const assert = require("chai").assert;
const setupTestDb = require("../../test.database");
const { processFeeWindowCreatedLog, processFeeWindowCreatedLogRemoval } = require("../../../build/blockchain/log-processors/fee-window-created");

const getFeeWindow = (db, params, callback) => {
  db("fee_windows").first(["feeWindow", "feeWindowId", "endTime"]).where({feeWindow: params.log.feeWindow}).asCallback(callback);
};

describe("blockchain/log-processors/fee-window-created", () => {
  const test = (t) => {
    it(t.description, (done) => {
      setupTestDb((err, db) => {
        assert.isNull(err);
        db.transaction((trx) => {
          processFeeWindowCreatedLog(trx, t.params.augur, t.params.log, (err) => {
            assert.isNull(err);
            getFeeWindow(trx, t.params, (err, records) => {
              t.assertions.onAdded(err, records);
              processFeeWindowCreatedLogRemoval(trx, t.params.augur, t.params.log, (err) => {
                getFeeWindow(trx, t.params, (err, records) => {
                  t.assertions.onRemoved(err, records);
                  done();
                });
              });
            });
          });
        });
      });
    });
  };
  test({
    description: "reporting window created",
    params: {
      log: {
        universe: "0x000000000000000000000000000000000000000b",
        feeWindow: "0xf000000000000000000000000000000000000000",
        startTime: 1510065473,
        endTime: 1512657473,
        id: 40304,
        blockNumber: 160101,
      },
      augur: {
        api: {
          FeeWindow: {
            getFeeToken: (p, callback) => {
              callback(null, "FEE_TOKEN");
            },
          },
        },
      },
    },
    assertions: {
      onAdded: (err, records) => {
        assert.isNull(err);
        assert.deepEqual(records, {
          endTime: 1512657473,
          feeWindow: "0xf000000000000000000000000000000000000000",
          feeWindowId: 40304,
        });
      },
      onRemoved: (err, records) => {
        assert.isNull(err);
        assert.isUndefined(records);
      },
    },
  });
});
