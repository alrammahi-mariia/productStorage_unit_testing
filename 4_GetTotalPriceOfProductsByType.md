# Test cases for getTotalPriceOfProductsByType

## **get_total_price_of_products_by_type(searchValue)**

Returns the total price of all products that have the same type than the given searchValue. SearchValue is the type of the product to be searched.

Example return value:

```js
236;
```

If no product with the given searchValue is found throws an exeption `'nothing found with given searchValue'`.

If a parameter searchValue is missing, an exeption `'missing parameter'` is thrown.

### Test 1: total price for product type: monitor

```js
const storage = new ProductStorage(defaultData);
storage.get_total_price_of_products_by_type("monitor");
```

returns

```js
236;
```

### Test 2: total price for product type: phone

```js
const storage = new ProductStorage(defaultData);
storage.get_total_price_of_products_by_type("phone");
```

returns

```js
25;
```

### Test 3: total price for product type: toaster, use the modified test data.

Create modified test data:

```json
[
  {
    "id": 1,
    "name": "Mercury",
    "type": "monitor",
    "price": 200,
    "amount": 100,
    "colors": ["black", "yellow", "green"],
    "details": {
      "model": "gold",
      "comments": "no comments",
      "consumption": "D"
    }
  },
  {
    "id": 2,
    "name": "Future 2025",
    "type": "monitor",
    "price": 36,
    "amount": 150,
    "colors": ["orange", "red", "black"],
    "details": {
      "model": "silver",
      "comments": "high capacity",
      "consumption": "A"
    }
  },
  {
    "id": 3,
    "name": "Beast II",
    "type": "toaster",
    "price": 10,
    "amount": 7,
    "colors": ["white", "green", "yellow"],
    "details": {
      "model": "chrome",
      "comments": "-",
      "consumption": "D"
    }
  },
  {
    "id": 4,
    "name": "MaxEffect 2000",
    "type": "tv",
    "price": 25,
    "amount": 20,
    "colors": ["yellow", "blue", "red"],
    "details": {
      "model": "VIP",
      "comments": "no comments",
      "consumption": "C"
    }
  },
  {
    "id": 5,
    "name": "Tako delux",
    "type": "phone",
    "price": 25,
    "amount": 20,
    "colors": ["black", "green", "yellow"]
  },
  {
    "id": 6,
    "name": "Wilfa 390",
    "type": "toaster",
    "price": 50,
    "amount": 14,
    "colors": ["black", "grey", "white"],
    "details": {
      "model": "Basic",
      "comments": "popular",
      "consumption": "A"
    }
  }
]
```

```js
const storage = new ProductStorage(modifiedData);
storage.get_total_price_of_products_by_type("toaster");
```

returns

```js
60;
```

### Test 4: no product with a given type is found

```js
const storage = new ProductStorage(defaultData);
storage.get_total_price_of_products_by_type("fridge");
```

throws an exception `'nothing found with given searchValue'`.

### Test 5: searchValue parameter is missing

```js
const storage = new ProductStorage(defaultData);
storage.get_total_price_of_products_by_type();
```

throws an exception `'missing parameter'`
