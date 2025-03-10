## Using Interfaces and Inheritance

You may have noticed that the syntax indicating that a class will implement an interface is the same as the syntax for inheriting from a base class — this is on purpose, as the two are very similar!

So why does C# provide both? Recall that with inheritance, a subclass may only inherit directly from a single base class. What if there are classes in different inheritance hierarchies that should implement similar behaviors? With inheritance alone, it would become unwieldy to ensure that all of the appropriate classes implement the attributes and behaviors they should.

But a class can implement one or more interfaces, even if it also inherits from a base class! For example, the Sedan class may inherit from a Vehicle class while also implementing the IAutomobile interface:

```
class Sedan : Vehicle, IAutomobile
{
}

```

While inheritance allows one class to pass members along to a subclass, an interface is like a contract, specifying members that a class is obligated to implement. If there are changes to the Vehicle or Sedan class definitions that compromise Sedan implementing IAutomobile correctly, the C# compiler will produce errors indicating so, allowing us to rectify the discrepancy.

Note that when inheriting and implementing an interface, the superclass must be specified first, followed by any interfaces the class will implement, separated by commas.
