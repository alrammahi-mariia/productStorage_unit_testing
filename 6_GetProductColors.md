# Test cases for getProductColors

## **get_product_colors(searchKey)**

Returns an array of product colors. If none found, returns an empty array. searchKey is the id of the product. Return colors of the product as an array.

If none is found or it is empty or parameter searchKey is missing, returns an empty array.

Example return with searchKey 1:

```json
["black", "yellow", "green"]
```

### Test 1: product id 1

Test uses the default data

```js
const storage = new ProductStorage(defaultData);
storage.get_product_colors(1);
```

expected return

```json
["black", "yellow", "green"]
```

### Test 2: product id 4

Test uses the default data

```js
const storage = new ProductStorage(defaultData);
storage.get_product_colors(4);
```

expected return

```json
["yellow", "blue", "red"]
```

### Test 3: searchKey is missing

Test uses the default data

```js
const storage = new ProductStorage(defaultData);
storage.get_product_colors();
```

expected return

```json
[]
```

### Test 4: no colors array found

Test uses default data

```js
const storage = new ProductStorage(defaultData);
storage.get_product_colors(19);
```

expected return

```json
[]
```

### Test 5: colors array is empty

Test uses modified data

```json
[
  {
    "id": 4,
    "name": "MaxEffect 2000",
    "type": "tv",
    "price": 25,
    "amount": 20,
    "colors": [],
    "details": {
      "model": "VIP",
      "comments": "no comments",
      "consumption": "C"
    }
  }
]
```

```js
const storage = new ProductStorage(modifiedData);
storage.get_product_colors(4);
```

expected return

`json []`
