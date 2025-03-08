## Method Overloading

If we read the Microsoft documentation for Math.Round(), it has at least least 8 different versions! They all have the same name, Math.Round(), but each has a unique set of parameters.

This is using method overloading, and each “version” is called an overload. Though they have the same name, overloads have either:

- different parameter types
- different number of parameters

Overloading is useful when we want the same method to have different behavior based on its inputs. Let’s examine this concept with these two overloads:

- Math.Round(Double, Int32)
- Math.Round(Double)

The first overload, Math.Round(Double, Int32), rounds the double to the int‘s number of decimal points:

```
Math.Round(3.14159, 2); // returns 3.14

```

The second, Math.Round(Double), rounds the double to the nearest integer:

```
Math.Round(3.14159); // returns 3

```

We can overload a method by defining two methods with the same name but different sets of parameters.

```
static int Add(int a, int b)
{
  return a + b;
}

static int Add(int a, int b, int c)
{
  return a + b + c;
}

```
