## Reference vs. Value Comparison

When we compare value types with ==, the C# compiler performs a value comparison. For example, this prints true because the value 6 is equal to the value 6:

```
int int1 = 6;
int int2 = 6;
Console.WriteLine(int1 == int2);
// Output: true

```

When we compare reference types with ==, the C# compiler performs a referential comparison, which means it checks if two variables refer to the same memory location.

For example, this prints false:

```
Encyclopedia e1 = new Encyclopedia(50);
Encyclopedia e2 = new Encyclopedia(50);
Console.WriteLine(e1 == e2);
// Output: false

```

We constructed two different Encyclopedia objects that happen to have the same values. However, since they are separate instances, e1 has a different memory location than e2, so they are not considered equal.

We would need to assign one as a pointer to another for them to be considered equal:

```
Encyclopedia e1 = new Encyclopedia(50);
Encyclopedia e2 = e1;
Console.WriteLine(e1 == e2);
// Output: true

```
