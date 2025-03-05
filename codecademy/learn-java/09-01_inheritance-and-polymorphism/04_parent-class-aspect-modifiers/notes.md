## Parent Class Aspect Modifiers

You may recall that Java class members use private and public access modifiers to determine whether they can be accessed from outside the class. So does a child class inherit its parent’s private members?

Well, no. But there is another access modifier we can use to keep a parent class member accessible to its child classes and to files in the package it’s contained in — and otherwise private: protected.

| Modifier    | Class | Package | Child Class | Global |
| ----------- | ----- | ------- | ----------- | ------ |
| public      | V     | V       | V           | V      |
| protected   | V     | V       | V           | X      |
| no modifier | V     | V       | X           | X      |
| private     | V     | X       | X           | X      |

Here’s what protected looks like in use:

```
class Shape {

  protected double perimeter;

}

// any child class of Shape can access perimeter

```

In addition to access modifiers, there’s another way to establish how child classes can interact with inherited parent class members: using the final keyword. If we add final after a parent class method’s access modifier, we disallow any child classes from changing that method. This is helpful in limiting bugs that might occur from modifying a particular method.

Though it is not required, there is an established order when two or more field modifiers are used (eg. public final). To learn more about this read the documentation.
