## References of Different Types

Object-oriented programming can make using references more complex.

In our previous example, both references to the Encyclopedia object were of type Encyclopedia:

```
Encyclopedia enc1 = new Encyclopedia();
Encyclopedia enc2 = enc1;

```

In addition to referencing an instance with its class name, it can also be referenced using the name of any type in its inheritance hierarchy or of any interface it implements. Encyclopedia inherits from the base class Book and implements the interface IFlippable.

```
class Encyclopedia: Book, IFlippable {
    //...
}

```

This means we can reference Encyclopedia objects as either Book or IFlippable:

```
Encyclopedia enc = new Encyclopedia();
IFlippable fEnc = enc;
Book bEnc = enc;

```

Now enc, fEnc, and bEnc all refer to the same object.

A reference only has access to members of the type it is defined as. fEnc can only access members in the IFlippable interface, and bEnc can only access members in the Book superclass.
