## Overriding Methods

Sometimes, we want to change how methods behave for subclasses from the original parent definition. This is called overriding a method. To do this, define a new method within the subclass with the same name as the parent method.

For example, our Pet class might have a type() method:

```
class Pet {
  function type() {
    return "pet";
  }
}

```

But in our Dog class, we want to update this message:

```
class Dog extends Pet{
  function whatIsThis() {
    return "dog";
  }
}

```

We can call the parent’s definition of the method within the subclass using parent:: followed by the method name:

```
class Dog extends Pet{
  function type() {
    return "dog";
  }
  function classify(){
    echo "This " . parent::type() . " is of type " . $this->type();
    // Prints: This pet is of type dog
  }
}

```
