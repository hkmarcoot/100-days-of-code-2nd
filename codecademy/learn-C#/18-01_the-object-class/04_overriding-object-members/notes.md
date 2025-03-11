## Overriding Object Members

The Equals() and ToString() methods in Object are virtual, so they can be overridden.

For example, we can override ToString() in the Novel class:

```
class Novel
{
  /* Other members omitted */

  public override string ToString()
  {
    return $"This Novel is currently on page {CurrentPage}.";
  }
}

```

Now any Novel instance will use this version of the method:

```
Novel nl = new Novel(7);
Console.WriteLine(nl.ToString());
// Output: "This Novel is currently on page 7."

```
