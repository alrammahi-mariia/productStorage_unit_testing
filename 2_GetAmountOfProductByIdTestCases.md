# Test cases for get_amount_of_product_by_id

## **get_amount_of_product_by_id(searchKey)**

The method searches the given searchKey which is the id of the product and returns the amount of the product matching the id.

```js
100;
```

If no match is found, the method returns `null`.

If a parameter searchKey is missing, an exeption `'missing parameter'` is thrown.

All tests are using the default data.

Create product storage with default data.

```js
const storage = new ProductStorage(defaultData);
```

## Test 1: get_amount_of_product_by_id with id:2

```js
storage.get_amount_of_product_by_id(2);
```

expect return

```js
150;
```

## Test 2: get_amount_of_product_by_id with id:4

```js
storage.get_amount_of_product_by_id(4);
```

expect return

```js
20;
```

## Test 3: get_amount_of_product_by_id no match is found

```js
const storage = new ProductStorage(defaultData);
storage.get_amount_of_product_by_id(6);
```

expect return `null`

## Test 4: searchKey is missing

```js
const storage = new ProductStorage(defaultData);
storage.get_amount_of_product_by_id();
```

expect to throw an exception: `'missing parameter'`

<!-- ## Test 4: Wrong searchKey

```js
const storage = new ProductStorage(defaultData);
storage.get_amount_of_product_by_id("1");
```

expect return `null`

## Test 5: no products in the product storage

create storage with an empty array

```js
const register = new ProductStorage([]);
storage.get_amount_of_product_by_id(2);
```

expect return `null`

## Test 6: the amount field is empty

Test data:

```json
    {
    "id": 2,
    "name": "Future 2025",
    "type": "monitor",
    "price": 36,
    "amount": ,
    "colors": ["orange", "red", "black"],
    "details": {
      "model": "silver",
      "comments": "high capacity",
      "consumption": "A"
    }
  }
```

Create storage with test data

```js
const storage = new ProductStorage(testData);
storage.get_amount_of_product_by_id(2);
```

expect return `null`

## Test 7: the amount field is missing

Test data:

```json
{
  "id": 2,
  "name": "Future 2025",
  "type": "monitor",
  "price": 36,
  "colors": ["orange", "red", "black"],
  "details": {
    "model": "silver",
    "comments": "high capacity",
    "consumption": "A"
  }
}
```

Create storage with test data

```js
const storage = new ProductStorage(testData);
storage.get_amount_of_product_by_id(2);
```

expect return `null` -->
