# Test cases for getDetails method

## **get_details(searchKey)**

This method searches the product matching the searchKey and if match is found returns the details object. SearchKey is the id of the product.

The example of return object:

```json

  "details": {
      "model": "silver",
      "comments": "high capacity",
      "consumption": "A"
    }
```

If no match is found `null` is returned.

If the searchKey is missing, `null` is returned.

All tests are using default test data from datastorage.json.

```js
const storage = new ProductStorage(defaultData);
```

### Test 1: details of the product with id: 1

```js
storage.get_details(1);
```

returns

```json
{
  "model": "gold",
  "comments": "no comments",
  "consumption": "D"
}
```

### Test 2: details of the product with id: 4

```js
storage.get_details(4);
```

returns

```json
{
  "model": "VIP",
  "comments": "no comments",
  "consumption": "C"
}
```

### Test 3: no product matching searchKey is found

```js
storage.get_details(7);
```

returns `null`

### Test 4: the searchKey is missing

```js
storage.get_details();
```

returns `null`

### Test 5: the product match is found but details object does not exist

```js
storage.get_details(5);
```

returns `null`
