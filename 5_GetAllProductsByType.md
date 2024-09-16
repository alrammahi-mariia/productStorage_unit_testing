# Test cases for GetAllProductsByType

## **get_All_products_By_type(searchValue)**

The method searches products with given type. searchValue is the type of the product to be searched.

Returns an array of product objects of given type.

If no product of given type is found, returns an empty array.

If a parameter searchValue is missing, an exeption `'missing parameter'` is thrown.

The format of the returned object array for the product `type: 'monitor'`:

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
  }
]
```

### Test 1: type:monitor

Test uses the default data

```js
const storage = new ProductStorage(defaultData);
storage.get_all_products_by_type("monitor");
```

returns

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
  }
]
```

### Test 2: type:tv

Test uses the default data

```js
const storage = new ProductStorage(defaultData);
storage.get_all_products_by_type("tv");
```

returns

```json
[
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
  }
]
```

### Test 3: no product of given type is found

Test uses the default data

```js
const storage = new ProductStorage(defaultData);
storage.get_all_products_by_type("x");
```

returns []

### Test 4: Missing parameter

Test uses the default data

```js
const storage = new ProductStorage(defaultData);
storage.get_all_products_by_type();
```

throws an exception `'missing parameter'`

### Test 5. Testing type ""

#### 5.1: testing with default data

```js
const storage = new ProductStorage(defaultData);
storage.get_all_products_by_type("");
```

returns []

#### 5.2: testing with modified data

Using modified data:

```json
[
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
    "type": "",
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
  }
]
```

```js
const storage = new ProductStorage(modifiedData);
storage.get_all_products_by_type("");
```

returns

```json
[
  {
    "id": 4,
    "name": "MaxEffect 2000",
    "type": "",
    "price": 25,
    "amount": 20,
    "colors": ["yellow", "blue", "red"],
    "details": {
      "model": "VIP",
      "comments": "no comments",
      "consumption": "C"
    }
  }
]
```
