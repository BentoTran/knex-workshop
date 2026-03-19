exports.seed = async function (knex) {
  await knex("vehicles").del();
  await knex("vehicles").insert([
    {
      id: 1,
      vin: "1HGBH41JXMN109186",
      year: 2022,
      horse_power: '203hp',
      color: "White",
      mpg: 32,
      models_id: 1,
    },
    {
      id: 2,
      vin: "2T1BURHE0JC043821",
      year: 2023,
      horse_power: '382hp',
      color: "Black",
      mpg: 26,
      models_id: 2,
    },
    {
      id: 3,
      vin: "3FADP4EJ0EM196587",
      year: 2021,
      horse_power: '182hp',
      color: "Blue",
      mpg: 30,
      models_id: 3,
    },
  ]);
};
