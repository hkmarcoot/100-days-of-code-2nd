## Value Types

To better understand reference types, let’s examine the other kind of type: value types. While reference-type variables refer to a place in memory, value-type variables hold the actual data.

int is a value type, so the variable num holds the value 6:

```
int num = 6;

```

Because value types hold the data itself, if we create a variable of a value type and set it equal to another existing variable of the same type, the value will be copied into a new memory address and stored in the new variable. The 2 variables will not be linked as with reference types:

```
int num1 = 6;
int num2 = num1;
num2 = 7;

Console.WriteLine(num1); // Prints 6
Console.WriteLine(num2); // Prints 7

```

Every “primitive” data type is a value type, including:

- int
- double
- bool
- char

You might have noticed that string is missing here. It works a bit differently, so it will be covered in a later lesson.

To put it another way, a reference is like directions to a house, which “points” to the location but isn’t the actual house. A value type is the house itself!
