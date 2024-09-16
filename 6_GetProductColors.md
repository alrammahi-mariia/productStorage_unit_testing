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
storage.get_product_colors(5);
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
      "colors": [],
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
]
```

```js
const storage = new ProductStorage(modifiedData);
storage.get_product_colors(4);
```

expected return

`json []`
