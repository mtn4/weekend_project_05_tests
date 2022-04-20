const { test, expect } = require("@jest/globals");
const carMarket = require("./CarsAgFull");

const marketObj = {
  sellers: [
    {
      agencyName: "Best Deal",
      cash: 1245000,
      credit: 200000,
      agencyId: "Plyq5M5AZ",

      cars: [
        {
          brand: "bmw",
          models: [
            {
              name: "3",
              year: 2015,
              price: 137000,
              carNumber: "AZJZ4",
              ownerId: "Plyq5M5AZ",
            },
            {
              name: "X6",
              year: 2020,
              price: 966500,
              carNumber: "S6DL1",
              ownerId: "Plyq5M5AZ",
            },
          ],
        },
        {
          brand: "toyota",
          models: [
            {
              name: "Land Cruiser",
              year: 2020,
              price: 336300,
              carNumber: "6rvXw",
              ownerId: "Plyq5M5AZ",
            },
            {
              name: "Hilux",
              year: 2005,
              price: 35005,
              carNumber: "MWXBG",
              ownerId: "Plyq5M5AZ",
            },
            {
              name: "Corolla",
              year: 2020,
              price: 111900,
              carNumber: "hCzl-",
              ownerId: "Plyq5M5AZ",
            },
          ],
        },
        {
          brand: "Ford",
          models: [
            {
              name: "Focus",
              year: 2020,
              price: 98200,
              carNumber: "kN3HP",
              ownerId: "Plyq5M5AZ",
            },
            {
              name: "Focus",
              year: 2005,
              price: 6502,
              carNumber: "LJTCs",
              ownerId: "Plyq5M5AZ",
            },
          ],
        },
        {
          brand: "Alpha romeo",
          models: [
            {
              name: "Romeo Julia",
              year: 2020,
              price: 275406,
              carNumber: "2kjy7",
              ownerId: "Plyq5M5AZ",
            },
            {
              name: "Romeo Stelvio",
              year: 2019,
              price: 215403,
              carNumber: "7A5b-",
              ownerId: "Plyq5M5AZ",
            },
          ],
        },
        {
          brand: "Chevrolet",
          models: [
            {
              name: "Traverse",
              year: 2020,
              price: 201102,
              carNumber: "QwBOT",
              ownerId: "Plyq5M5AZ",
            },
            {
              name: "Impala",
              year: 2019,
              price: 165041,
              carNumber: "2v4jt",
              ownerId: "Plyq5M5AZ",
            },
            {
              name: "Malibu",
              year: 2017,
              price: 75405,
              carNumber: "O4_Jv",
              ownerId: "Plyq5M5AZ",
            },
          ],
        },
      ],
    },
  ],
  customers: [
    {
      name: "Lilah Goulding",
      id: "BGzHhjnE8",
      cars: [
        {
          name: "Corolla",
          year: 2013,
          price: 40570,
          carNumber: "16da1",
          ownerId: "BGzHhjnE8",
        },
      ],
      cash: 35000,
    },
    {
      name: "Ravi Murillo",
      id: "2RprZ1dbL",
      cars: [
        {
          name: "M5",
          year: 2019,
          price: 578054,
          carNumber: "WIh0U",
          ownerId: "2RprZ1dbL",
        },
        {
          name: "Spider",
          year: 2012,
          price: 81520,
          carNumber: "RLS4q",
          ownerId: "2RprZ1dbL",
        },
      ],
      cash: 278542,
    },
    {
      name: "Aleksander Carr",
      id: "pAuFtn_WA",
      cars: [
        {
          name: "Highlander",
          year: 2018,
          price: 214503,
          carNumber: "2WU_y",
          ownerId: "pAuFtn_WA",
        },
      ],
      cash: 125402,
    },
    {
      name: "Lana Edge",
      id: "cnTobUDy6",
      cars: [
        {
          name: "F250",
          year: 2020,
          price: 198500,
          carNumber: "Xxcy_",
          ownerId: "cnTobUDy6",
        },
        {
          name: "Hilux",
          year: 2005,
          price: 35005,
          carNumber: "VSCUj",
          ownerId: "cnTobUDy6",
        },
      ],
      cash: 7000,
    },
    {
      name: "Nikita Philip",
      id: "5x2tMcX4R",
      cars: [
        {
          name: "Impala",
          year: 2016,
          price: 65042,
          carNumber: "LKInp",
          ownerId: "5x2tMcX4R",
        },
      ],
      cash: 40541,
    },
    {
      name: "Bob Steel",
      id: "Wm6BkA1F0",
      cars: [],
      cash: 15732,
    },
    {
      name: "Will Reyes",
      id: "FQvNsEwLZ",
      cars: [
        { name: "X6", year: 2020, price: 966500, ownerId: "FQvNsEwLZ" },
        {
          name: "Land Cruiser",
          year: 2020,
          price: 336300,
          carNumber: "vaJvd",
          ownerId: "FQvNsEwLZ",
        },
        {
          name: "Romeo Julia",
          year: 2020,
          price: 275406,
          carNumber: "qLoYR",
          ownerId: "FQvNsEwLZ",
        },
        {
          name: "Explorer",
          year: 2020,
          price: 265200,
          carNumber: "tlGRq",
          ownerId: "FQvNsEwLZ",
        },
      ],
      cash: 1547242,
    },
  ],
};

const marketObjSecond = {
  sellers: [
    {
      agencyName: "Best Deal",
      cash: 1245000,
      credit: 200000,
      agencyId: "Plyq5M5AZ",

      cars: [
        {
          brand: "bmw",
          models: [
            {
              name: "3",
              year: 2015,
              price: 137000,
              carNumber: "AZJZ4",
              ownerId: "Plyq5M5AZ",
            },
            {
              name: "X6",
              year: 2020,
              price: 966500,
              carNumber: "S6DL1",
              ownerId: "Plyq5M5AZ",
            },
          ],
        },
        {
          brand: "Chevrolet",
          models: [
            {
              name: "Traverse",
              year: 2020,
              price: 201102,
              carNumber: "QwBOT",
              ownerId: "Plyq5M5AZ",
            },
            {
              name: "Impala",
              year: 2019,
              price: 165041,
              carNumber: "2v4jt",
              ownerId: "Plyq5M5AZ",
            },
            {
              name: "Malibu",
              year: 2017,
              price: 75405,
              carNumber: "O4_Jv",
              ownerId: "Plyq5M5AZ",
            },
          ],
        },
      ],
    },
  ],
};
const sellersArr = [
  {
    agencyName: "Best Deal",
    carsAmount: 5,
    cash: 1245000,
    credit: 200000,
    agencyId: "Plyq5M5AZ",

    cars: [
      {
        brand: "bmw",
        models: [
          {
            name: "3",
            year: 2015,
            price: 137000,
            carNumber: "AZJZ4",
            ownerId: "Plyq5M5AZ",
          },
          {
            name: "X6",
            year: 2020,
            price: 966500,
            carNumber: "S6DL1",
            ownerId: "Plyq5M5AZ",
          },
        ],
      },
      {
        brand: "Chevrolet",
        models: [
          {
            name: "Traverse",
            year: 2020,
            price: 201102,
            carNumber: "QwBOT",
            ownerId: "Plyq5M5AZ",
          },
          {
            name: "Impala",
            year: 2019,
            price: 165041,
            carNumber: "2v4jt",
            ownerId: "Plyq5M5AZ",
          },
          {
            name: "Malibu",
            year: 2017,
            price: 75405,
            carNumber: "O4_Jv",
            ownerId: "Plyq5M5AZ",
          },
        ],
      },
    ],
  },
];
const agency = {
  agencyName: "Best Deal",
  cash: 1245000,
  credit: 200000,
  agencyId: "Plyq5M5AZ",

  cars: [
    {
      brand: "bmw",
      models: [
        {
          name: "3",
          year: 2015,
          price: 137000,
          carNumber: "AZJZ4",
          ownerId: "Plyq5M5AZ",
        },
        {
          name: "X6",
          year: 2020,
          price: 966500,
          carNumber: "S6DL1",
          ownerId: "Plyq5M5AZ",
        },
      ],
    },
    {
      brand: "toyota",
      models: [
        {
          name: "Land Cruiser",
          year: 2020,
          price: 336300,
          carNumber: "6rvXw",
          ownerId: "Plyq5M5AZ",
        },
        {
          name: "Hilux",
          year: 2005,
          price: 35005,
          carNumber: "MWXBG",
          ownerId: "Plyq5M5AZ",
        },
        {
          name: "Corolla",
          year: 2020,
          price: 111900,
          carNumber: "hCzl-",
          ownerId: "Plyq5M5AZ",
        },
      ],
    },
    {
      brand: "Ford",
      models: [
        {
          name: "Focus",
          year: 2020,
          price: 98200,
          carNumber: "kN3HP",
          ownerId: "Plyq5M5AZ",
        },
        {
          name: "Focus",
          year: 2005,
          price: 6502,
          carNumber: "LJTCs",
          ownerId: "Plyq5M5AZ",
        },
      ],
    },
    {
      brand: "Alpha romeo",
      models: [
        {
          name: "Romeo Julia",
          year: 2020,
          price: 275406,
          carNumber: "2kjy7",
          ownerId: "Plyq5M5AZ",
        },
        {
          name: "Romeo Stelvio",
          year: 2019,
          price: 215403,
          carNumber: "7A5b-",
          ownerId: "Plyq5M5AZ",
        },
      ],
    },
    {
      brand: "Chevrolet",
      models: [
        {
          name: "Traverse",
          year: 2020,
          price: 201102,
          carNumber: "QwBOT",
          ownerId: "Plyq5M5AZ",
        },
        {
          name: "Impala",
          year: 2019,
          price: 165041,
          carNumber: "2v4jt",
          ownerId: "Plyq5M5AZ",
        },
        {
          name: "Malibu",
          year: 2017,
          price: 75405,
          carNumber: "O4_Jv",
          ownerId: "Plyq5M5AZ",
        },
      ],
    },
  ],
};
const models = [
  {
    name: "3",
    year: 2015,
    price: 137000,
    carNumber: "AZJZ4",
    ownerId: "Plyq5M5AZ",
  },
  {
    name: "X6",
    year: 2020,
    price: 966500,
    carNumber: "S6DL1",
    ownerId: "Plyq5M5AZ",
  },
  {
    name: "Traverse",
    year: 2020,
    price: 201102,
    carNumber: "QwBOT",
    ownerId: "Plyq5M5AZ",
  },
  {
    name: "Impala",
    year: 2019,
    price: 165041,
    carNumber: "2v4jt",
    ownerId: "Plyq5M5AZ",
  },
  {
    name: "Malibu",
    year: 2017,
    price: 75405,
    carNumber: "O4_Jv",
    ownerId: "Plyq5M5AZ",
  },
];
const brands = ["bmw", "Chevrolet"];
const willCars = [
  { name: "X6", year: 2020, price: 966500, ownerId: "FQvNsEwLZ" },
  {
    name: "Land Cruiser",
    year: 2020,
    price: 336300,
    carNumber: "vaJvd",
    ownerId: "FQvNsEwLZ",
  },
  {
    name: "Romeo Julia",
    year: 2020,
    price: 275406,
    carNumber: "qLoYR",
    ownerId: "FQvNsEwLZ",
  },
  {
    name: "Explorer",
    year: 2020,
    price: 265200,
    carNumber: "tlGRq",
    ownerId: "FQvNsEwLZ",
  },
];
const will = {
  name: "Will Reyes",
  id: "FQvNsEwLZ",
  cars: [
    { name: "X6", year: 2020, price: 966500, ownerId: "FQvNsEwLZ" },
    {
      name: "Land Cruiser",
      year: 2020,
      price: 336300,
      carNumber: "vaJvd",
      ownerId: "FQvNsEwLZ",
    },
    {
      name: "Romeo Julia",
      year: 2020,
      price: 275406,
      carNumber: "qLoYR",
      ownerId: "FQvNsEwLZ",
    },
    {
      name: "Explorer",
      year: 2020,
      price: 265200,
      carNumber: "tlGRq",
      ownerId: "FQvNsEwLZ",
    },
  ],
  cash: 1547242,
};
const customers = [
  "Lilah Goulding",
  "Ravi Murillo",
  "Aleksander Carr",
  "Lana Edge",
  "Nikita Philip",
  "Bob Steel",
  "Will Reyes",
];
test("setAmountOfCarsToBuyToAllAgencys", () => {
  expect(
    carMarket.setAmountOfCarsToBuyToAllAgencys(marketObjSecond)
  ).toStrictEqual(sellersArr);
});

test("getAgencyByName", () => {
  expect(carMarket.getAgencyByName(marketObj, "Best Deal")).toStrictEqual(
    agency
  );
});

test("getAgencyIdByName", () => {
  expect(carMarket.getAgencyIdByName(marketObj, "Best Deal")).toBe("Plyq5M5AZ");
});

test("getAllAgenciesName", () => {
  expect(carMarket.getAllAgenciesName(marketObj)).toStrictEqual([
    agency.agencyName,
  ]);
});

test("getAllCarToBuy", () => {
  expect(carMarket.getAllCarToBuy(marketObjSecond)).toStrictEqual(models);
});

test("getAllCarToBuyByAgencyId", () => {
  expect(
    carMarket.getAllCarToBuyByAgencyId(marketObjSecond, "Plyq5M5AZ")
  ).toStrictEqual(models);
});

test("getAllBrandsToBuyAgencyId", () => {
  expect(
    carMarket.getAllBrandsToBuyAgencyId(marketObjSecond, "Plyq5M5AZ")
  ).toStrictEqual(brands);
});

test("getCustomerByName", () => {
  expect(carMarket.getCustomerByName(marketObj, "Will Reyes")).toStrictEqual(
    will
  );
});

test("getCustomerIdByName", () => {
  expect(carMarket.getCustomerIdByName(marketObj, "Will Reyes")).toBe(
    "FQvNsEwLZ"
  );
});

test("getAllCustomersNames", () => {
  expect(carMarket.getAllCustomersNames(marketObj)).toStrictEqual(customers);
});

test("getAllCustomerCars", () => {
  expect(carMarket.getAllCustomerCars(marketObj, "FQvNsEwLZ")).toStrictEqual(
    willCars
  );
});

test("getCustomerCash", () => {
  expect(carMarket.getCustomerCash(marketObj, "FQvNsEwLZ")).toBe(1547242);
});

test("decrementOrIncrementCashOfAgency", () => {
  expect(
    carMarket.decrementOrIncrementCashOfAgency(marketObjSecond, "Plyq5M5AZ", 47)
  ).toBe(1245047);
});

test("decrementOrIncrementCreditOfAgency", () => {
  expect(
    carMarket.decrementOrIncrementCreditOfAgency(
      marketObjSecond,
      "Plyq5M5AZ",
      47
    )
  ).toBe(200047);
});

let carObject = {
  name: "Prius",
  year: 2019,
  price: 124050,
  carNumber: "ZfbqH",
  ownerId: "oqQmsZoUo",
};
let newCustomerCars = [
  { name: "X6", year: 2020, price: 966500, ownerId: "FQvNsEwLZ" },
  {
    name: "Land Cruiser",
    year: 2020,
    price: 336300,
    carNumber: "vaJvd",
    ownerId: "FQvNsEwLZ",
  },
  {
    name: "Romeo Julia",
    year: 2020,
    price: 275406,
    carNumber: "qLoYR",
    ownerId: "FQvNsEwLZ",
  },
  {
    name: "Explorer",
    year: 2020,
    price: 265200,
    carNumber: "tlGRq",
    ownerId: "FQvNsEwLZ",
  },
  {
    name: "Prius",
    year: 2019,
    price: 124050,
    carNumber: "ZfbqH",
    ownerId: "FQvNsEwLZ",
  },
];
test("setCarToCostumer", () => {
  expect(
    carMarket.setCarToCostumer(marketObj, "FQvNsEwLZ", carObject)
  ).toStrictEqual(newCustomerCars);
});

let deletedCustomerCars = [
  { name: "X6", year: 2020, price: 966500, ownerId: "FQvNsEwLZ" },
  {
    name: "Land Cruiser",
    year: 2020,
    price: 336300,
    carNumber: "vaJvd",
    ownerId: "FQvNsEwLZ",
  },
  {
    name: "Romeo Julia",
    year: 2020,
    price: 275406,
    carNumber: "qLoYR",
    ownerId: "FQvNsEwLZ",
  },
  {
    carNumber: "ZfbqH",
    name: "Prius",
    ownerId: "FQvNsEwLZ",
    price: 124050,
    year: 2019,
  },
];

test("deleteCarOfCostumer", () => {
  expect(
    carMarket.deleteCarOfCostumer(marketObj, "FQvNsEwLZ", "tlGRq")
  ).toStrictEqual(deletedCustomerCars);
});

test("decrementOrIncrementCashOfCostumer", () => {
  expect(
    carMarket.decrementOrIncrementCashOfCostumer(marketObj, "FQvNsEwLZ", 43)
  ).toBe(1547285);
});
