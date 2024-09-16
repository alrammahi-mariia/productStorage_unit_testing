# ProductStorage API

## data

Data is in a json array which is as default storage. Id is unique. An item name is unique, so for example `"name": "Mercury" ` can't exist twice in json. We assume that the json file is valid and no fields are missing. Name and type fields cannot be an empty string; price and amount cannot be null or undefined; colors cannot be an empty array. Details field can be missing from the product object.

### datastorage.json (default)

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
  }
]
```

## Class ProductStorage

## Constructor

### **constructor(data)**

Initializes ProductStorage object

> Parameters:
>
> > The data storage json object is passed as a parameter to the constructor.

> Returns:
>
> >

> Throws:
>
> > If the parameter is missing, constructor throws an error `'data storage missing'`

## Methods

### **get_amount_of_product_by_id(searchKey)**

returns the amount of the product matching the id

> Parameters:
>
> > searchKey is the id of the product

> Returns:
>
> > returns the amount of product matching the searchKey name or null if no match is found

> Throws:
>
> > If a parameter searchValue is missing, an exeption `'missing parameter'` is thrown

### **get_details(searchKey)**

searches the product matching the searchKey and if match is found returns the details object otherwise null is returned

> Parameters:
>
> > searchKey is the id of the product

> Returns:
>
> > returns the details object of the product matching the searchKey. If no product matching the given searchKey is found or searchKey is missing, null will be returned

> Throws:
>
> >

### **get_total_price_of_products_by_type(searchValue)**

returns the total price of all products that have the same type than the given searchValue

> Parameters:
>
> > searchValue is the type of the product to be searched

> Returns:
>
> > total cumulative price of products matching the searchValue

> Throws:
>
> > if no product with the given searchValue is found throws an exeption `'nothing found with given searchValue'`. If a parameter searchValue is missing, an exeption `'missing parameter'` is thrown

### **get_All_products_By_type(searchValue)**

searches products with given type

> Parameters:
>
> > searchValue is the type of the product to be searched

> Returns:
>
> > Returns an array of product objects of given type. If no product of given type is found, returns an empty array.

> Throws:
>
> > If a parameter searchValue is missing, an exeption `'missing parameter'` is thrown

### **get_product_colors(searchKey)**

Returns an array of product colors. If none found, returns an empty array.

> Parameters:
>
> > searchKey is the id of the product

> Returns:
>
> > colors of the product as an array or if none is found or it is empty or parameter searchKey is missing, returns an empty array.

> Throws:
>
> >
