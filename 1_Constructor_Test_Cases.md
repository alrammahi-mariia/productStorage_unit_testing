# Test cases for the constructor

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

### Test 1: missing parameter throws an exception

```js
new ProductStorage();
```

expect:

Throws an exception `'data storage missing'`
