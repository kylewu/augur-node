import * as Knex from "knex";

exports.seed = async (knex: Knex): Promise<any> => {
  // Deletes ALL existing entries
  return knex("markets").del().then((): void => {
    // Inserts seed entries
    knex.batchInsert("markets", [{
      market_id: "0x0000000000000000000000000000000000000001",
      universe: "0x000000000000000000000000000000000000000b",
      market_type: "categorical",
      num_outcomes: 8,
      min_price: "0",
      max_price: "1",
      market_creator: "0x0000000000000000000000000000000000000b0b",
      creation_time: 1506473474,
      creation_block_number: 1400000,
      creation_fee: "10",
      market_creator_fee_rate: "0.01",
      category: "test category",
      tag1: "test tag 1",
      tag2: "test tag 2",
      volume: "0",
      shares_outstanding: "0",
      reporting_window: "0x1000000000000000000000000000000000000000",
      end_time: 1506573470,
      short_description: "This is a categorical test market created by b0b.",
      designated_reporter: "0x0000000000000000000000000000000000000b0b",
      designated_report_stake: "10",
      resolution_source: "http://www.trusted-third-party.com",
      num_ticks: 24
    }, {
      market_id: "0x0000000000000000000000000000000000000002",
      universe: "0x000000000000000000000000000000000000000b",
      market_type: "binary",
      num_outcomes: 2,
      min_price: "0",
      max_price: "1",
      market_creator: "0x0000000000000000000000000000000000000b0b",
      creation_time: 1506480000,
      creation_block_number: 1400100,
      creation_fee: "10",
      market_creator_fee_rate: "0.01",
      category: "test category",
      tag1: "test tag 1",
      tag2: "test tag 2",
      volume: "0",
      shares_outstanding: "0",
      reporting_window: "0x1000000000000000000000000000000000000000",
      end_time: 1506573480,
      short_description: "This is a binary test market created by b0b.",
      designated_reporter: "0x0000000000000000000000000000000000000b0b",
      designated_report_stake: "10",
      resolution_source: "http://www.trusted-third-party.com",
      num_ticks: 2
    }, {
      market_id: "0x0000000000000000000000000000000000000003",
      universe: "0x000000000000000000000000000000000000000b",
      market_type: "binary",
      num_outcomes: 2,
      min_price: "0",
      max_price: "1",
      market_creator: "0x000000000000000000000000000000000000d00d",
      creation_time: 1506480015,
      creation_block_number: 1400101,
      creation_fee: "10",
      market_creator_fee_rate: "0.01",
      category: "test category",
      tag1: "test tag 1",
      tag2: "test tag 2",
      volume: "0",
      shares_outstanding: "0",
      reporting_window: "0x1000000000000000000000000000000000000000",
      end_time: 1506573500,
      short_description: "This is another binary test market created by d00d.",
      designated_reporter: "0x000000000000000000000000000000000000d00d",
      designated_report_stake: "10",
      resolution_source: "http://www.ttp-inc.com/0000000000000000000000000000000000000003",
      num_ticks: 16
    }], 1000);
  });
};