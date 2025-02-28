Object-oriented programming revolves around classes and objects. The class is a fundamental concept of OOP and programs in Java are built with multiple classes and their objects.

Let’s review what we’ve learned throughout this lesson:

- A class is a blueprint to create instances. It defines the state and behavior of these instances.
- Every class has a special method called constructor which is invoked when a new object is created. Constructors initialize the state of newly created instances.
- Instance fields define the characteristics of an object. We can declare them within a class but outside of any method or constructor.
- We use the dot operator (.) to access the instance fields.
- A program can have multiple classes, instances, and instance fields as per our program’s requirements.

Later, we will explore how a program can be made from multiple classes. For now, our programs have a single class.

```
public class Dog {
 // instance field
 public String breed;

 // constructor method
 public Dog(String dogBreed) {

   // value of parameter dogBreed assigned to instance field breed
   breed = dogBreed;
 }
}

```

```
  public static void main(String[] args) {
    // create instance: use 'new' operator and invoke constructor
    Dog fido = new Dog("poodle");

    // fields are accessed using: the instance name, `.` operator, and the field name.
    System.out.println(fido.breed);  // Prints "poodle"
  }


```
