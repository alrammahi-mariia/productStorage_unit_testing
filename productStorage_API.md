# ProductStorage API

## Constructor

### **constructor(jsondata)**

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
