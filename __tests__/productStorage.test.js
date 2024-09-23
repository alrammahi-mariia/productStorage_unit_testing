"use strict";

const ProductStorage = require("../productStorage");
const defaultData = require("../datastorage.json");

// Test cases for constructor

describe("Testing constructor", () => {
  test("Test 1: missing parameter throw an exception", () => {
    expect(() => new ProductStorage()).toThrow("data storage missing");
  });
});

// end of constructor test cases

// Test cases for getAmountOfProductById
describe("Testing getAmountOfProductById", () => {
  test("Test 1: product id 2", () => {
    const storage = new ProductStorage(defaultData);
    expect(storage.get_amount_of_product_by_id(2)).toEqual(150);
  });

  test("Test 2: product id 4", () => {
    const storage = new ProductStorage(defaultData);

    expect(storage.get_amount_of_product_by_id(4)).toEqual(20);
  });

  test("Test 3: no match is found", () => {
    const storage = new ProductStorage(defaultData);

    expect(storage.get_amount_of_product_by_id(6)).toBeNull();
  });

  test("Test 4: searchKey is missing", () => {
    const storage = new ProductStorage(defaultData);

    expect(() => storage.get_amount_of_product_by_id()).toThrow(
      "missing parameter"
    );
  });
});
// end of getAmountOfProductById test cases

// Test cases for getDetailsTestCases

describe("Testing getDetailsTestCases", () => {
  test("Test 1: product id 1", () => {
    const storage = new ProductStorage(defaultData);
    const expectedResult = [
      {
        model: "gold",
        comments: "no comments",
        consumption: "D",
      },
    ];
    expect(storage.get_details(1)).toEqual(expectedResult);
  });

  test("Test 2: product id 4", () => {
    const storage = new ProductStorage(defaultData);
    const expectedResult = [
      {
        model: "VIP",
        comments: "no comments",
        consumption: "C",
      },
    ];
    expect(storage.get_details(4)).toEqual(expectedResult);
  });

  test("Test 3: no product matching searchKey is found", () => {
    const storage = new ProductStorage(defaultData);
    expect(storage.get_details(7)).toBeNull();
  });

  test("Test 4: the searchKey is missing", () => {
    const storage = new ProductStorage(defaultData);
    expect(storage.get_details()).toBeNull();
  });

  test("Test 5: the product match is found but details object does not exist", () => {
    const storage = new ProductStorage(defaultData);
    expect(storage.get_details(5)).toBeNull();
  });
});

//end of getDetailsTestCases

// Test cases for getTotalPriceOfProductsByType
describe("Testing getTotalPriceOfProductsByType", () => {
  test("Test 1: total price for product type: monitor", () => {
    const storage = new ProductStorage(defaultData);
    expect(storage.get_total_price_of_products_by_type("monitor")).toEqual(236);
  });

  test("Test 2: total price for product type: phone", () => {
    const storage = new ProductStorage(defaultData);
    expect(storage.get_total_price_of_products_by_type("phone")).toEqual(25);
  });

  test("Test 3: total price for product type: toaster", () => {
    const testData = [
      {
        id: 1,
        name: "Mercury",
        type: "monitor",
        price: 200,
        amount: 100,
        colors: ["black", "yellow", "green"],
        details: {
          model: "gold",
          comments: "no comments",
          consumption: "D",
        },
      },
      {
        id: 2,
        name: "Future 2025",
        type: "monitor",
        price: 36,
        amount: 150,
        colors: ["orange", "red", "black"],
        details: {
          model: "silver",
          comments: "high capacity",
          consumption: "A",
        },
      },
      {
        id: 3,
        name: "Beast II",
        type: "toaster",
        price: 10,
        amount: 7,
        colors: ["white", "green", "yellow"],
        details: {
          model: "chrome",
          comments: "-",
          consumption: "D",
        },
      },
      {
        id: 4,
        name: "MaxEffect 2000",
        type: "tv",
        price: 25,
        amount: 20,
        colors: ["yellow", "blue", "red"],
        details: {
          model: "VIP",
          comments: "no comments",
          consumption: "C",
        },
      },
      {
        id: 5,
        name: "Tako delux",
        type: "phone",
        price: 25,
        amount: 20,
        colors: ["black", "green", "yellow"],
      },
      {
        id: 6,
        name: "Wilfa 390",
        type: "toaster",
        price: 50,
        amount: 14,
        colors: ["black", "grey", "white"],
        details: {
          model: "Basic",
          comments: "popular",
          consumption: "A",
        },
      },
    ];

    const storage = new ProductStorage(testData);
    expect(storage.get_total_price_of_products_by_type("toaster")).toEqual(60);
  });

  test("Test 4: no product with a given type is found", () => {
    const storage = new ProductStorage(defaultData);
    expect(() => storage.get_total_price_of_products_by_type("fridge")).toThrow(
      "nothing found with given searchValue"
    );
  });

  test("Test 5: searchValue parameter is missing", () => {
    const storage = new ProductStorage(defaultData);
    expect(() => storage.get_total_price_of_products_by_type()).toThrow(
      "missing parameter"
    );
  });
});

// end of GetAllProductsByType

describe("Testing GetAllProductsByType", () => {
  test("Test 1: type: monitor", () => {
    const expectedResult = [
      {
        id: 1,
        name: "Mercury",
        type: "monitor",
        price: 200,
        amount: 100,
        colors: ["black", "yellow", "green"],
        details: {
          model: "gold",
          comments: "no comments",
          consumption: "D",
        },
      },
      {
        id: 2,
        name: "Future 2025",
        type: "monitor",
        price: 36,
        amount: 150,
        colors: ["orange", "red", "black"],
        details: {
          model: "silver",
          comments: "high capacity",
          consumption: "A",
        },
      },
    ];

    const storage = new ProductStorage(defaultData);
    expect(storage.get_all_products_by_type("monitor")).toEqual(expectedResult);
  });

  test("Test 2: type: tv", () => {
    const expectedResult = [
      {
        id: 4,
        name: "MaxEffect 2000",
        type: "tv",
        price: 25,
        amount: 20,
        colors: ["yellow", "blue", "red"],
        details: {
          model: "VIP",
          comments: "no comments",
          consumption: "C",
        },
      },
    ];

    const storage = new ProductStorage(defaultData);
    expect(storage.get_all_products_by_type("tv")).toEqual(expectedResult);
  });

  test("Test 3: no product of given type is found", () => {
    const storage = new ProductStorage(defaultData);
    expect(storage.get_all_products_by_type("x")).toEqual([]);
  });

  test("Test 4: missing parameter", () => {
    const storage = new ProductStorage(defaultData);
    expect(() => storage.get_all_products_by_type()).toThrow(
      "missing parameter"
    );
  });

  test("Test 5.1: type is empty string, testing with default data", () => {
    const storage = new ProductStorage(defaultData);
    expect(storage.get_all_products_by_type("")).toEqual([]);
  });

  test("Test 5.2: type is empty string, testing with modified data", () => {
    const testData = [
      {
        id: 3,
        name: "Beast II",
        type: "toaster",
        price: 10,
        amount: 7,
        colors: ["white", "green", "yellow"],
        details: {
          model: "chrome",
          comments: "-",
          consumption: "D",
        },
      },
      {
        id: 4,
        name: "MaxEffect 2000",
        type: "",
        price: 25,
        amount: 20,
        colors: ["yellow", "blue", "red"],
        details: {
          model: "VIP",
          comments: "no comments",
          consumption: "C",
        },
      },
      {
        id: 5,
        name: "Tako delux",
        type: "phone",
        price: 25,
        amount: 20,
        colors: ["black", "green", "yellow"],
      },
    ];

    const expectedResult = [
      {
        id: 4,
        name: "MaxEffect 2000",
        type: "",
        price: 25,
        amount: 20,
        colors: ["yellow", "blue", "red"],
        details: {
          model: "VIP",
          comments: "no comments",
          consumption: "C",
        },
      },
    ];

    const storage = new ProductStorage(testData);
    expect(storage.get_all_products_by_type("")).toEqual(expectedResult);
  });
});

// end of getAllProductsByType

// Test cases for getProductColors

describe("Testing getProductColors", () => {
  test("Test 1: product id 1", () => {
    const storage = new ProductStorage(defaultData);
    expect(storage.get_product_colors(1)).toEqual(["black", "yellow", "green"]);
  });

  test("Test 2: product id 4", () => {
    const storage = new ProductStorage(defaultData);
    expect(storage.get_product_colors(4)).toEqual(["yellow", "blue", "red"]);
  });

  test("Test 3: searchKey is missing", () => {
    const storage = new ProductStorage(defaultData);
    expect(storage.get_product_colors()).toEqual([]);
  });

  test("Test 4: no colors array found", () => {
    const storage = new ProductStorage(defaultData);
    expect(storage.get_product_colors(19)).toEqual([]);
  });

  test("Test 5: colors array is empty, testing with modified data", () => {
    const testData = [
      {
        id: 4,
        name: "MaxEffect 2000",
        type: "tv",
        price: 25,
        amount: 20,
        colors: [],
        details: {
          model: "VIP",
          comments: "no comments",
          consumption: "C",
        },
      },
    ];
    const storage = new ProductStorage(testData);
    expect(storage.get_product_colors(4)).toEqual([]);
  });
});

// end of getProductColors
