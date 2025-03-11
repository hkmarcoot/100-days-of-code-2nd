## String as a Class

We can confirm that String is a class by looking up the String class documentation and trying some of the methods and properties listed there.

This example uses Length and Contains().

```
string s = "Hello World";
Console.WriteLine(s.Length); // Prints 11
Console.WriteLine(s.Contains("o")); // Prints True

```

The Contain() method takes either a string or char as an argument and will return true if it occurs within the string object the method is called on. Otherwise, it returns false.

We’ve already seen one static property, Empty and one static method, IsNullOrEmpty():

```
string s = String.Empty;
bool isEmpty = String.IsNullOrEmpty(s); // true

```

Another useful string method is Replace(), which takes two string arguments. It takes the string object it is called on, finds every instance of the first argument, and replaces each with the second argument, then returns the result:

```
string s = "thud ud a test";
s = s.Replace("ud", "is");
Console.WriteLine(s); // Prints "this is a test"

```
