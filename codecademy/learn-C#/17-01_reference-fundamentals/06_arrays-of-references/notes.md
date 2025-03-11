## Arrays of References

Imagine we wanted to Flip() each object from a group of Encyclopedia and Novel types:

```
Novel nov1 = new Novel();
Novel nov2 = new Novel();
Encyclopedia enc1 = new Encyclopedia();
Encyclopedia enc2 = new Encyclopedia();
nov1.Flip();
nov2.Flip();
enc1.Flip();
enc2.Flip();

```

The preceding code works, but it would be faster and safer to store the references in an array and loop through them. But would it be an array of Novel[], an array of Encyclopedia[], or something else?

We can create references to Encyclopedias and Novels as IFlippables. Instead of dealing with individual variables, we can use an array of IFlippable references:

```
IFlippable[] flippables = new IFlippable[] { new Novel(), new Novel(), new Encyclopedia(), new Encyclopedia()};

```

To Flip() each element, we can write a foreach loop:

```
foreach (IFlippable f in flippables)
{
  f.Flip();
}

```

We can only access the functionality defined in the interface. For example, we couldn’t access f.Title because Title isn’t a property defined in IFlippable.
