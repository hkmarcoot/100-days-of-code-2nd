## Object in Plain Sight

At the very beginning of your C# journey, we learned about Console.WriteLine(). We’ve used this tool with nearly every type, from int and bool to Encyclopedia and Novel:

```
bool b = true;
Novel n = new Novel();
Console.WriteLine(b);
Console.WriteLine(n);

```

We can use this same tool with every type because every type inherits from Object!

Under the hood, Console.WriteLine() uses ToString(), which is defined in Object. Every object needs some kind of string representation to be printed in text. These two lines are equivalent:

```
Console.WriteLine(b);
Console.WriteLine(b.ToString());

```
