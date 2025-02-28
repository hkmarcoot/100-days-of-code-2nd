## Classes: Instance Fields

A real car has characteristics such as brand, model, year, color, etc. In a Java object representing a car, these characteristics are represented by instance fields or instance variables.

In the last exercise, we created an object, but our object has no characteristics! We’ll add characteristics to our class by including instance fields or instance
Preview: Docs Loading link description
variables
.

Let’s revisit the Car class example.

We want our Car objects to have different colors, so we declare an instance field called color. Instance variables are often characterized by their “has-a” relationship with the object. For example, a Car “has-a” color, “has-a” make, “has-a” model name, and “has-a” model year.

Think about what qualities other than color a car might have.

```
public class Car {

 /*
 declare fields inside the class
 by specifying the type and name
 */

 public String color;
 public int year;
 public String modelName;
 public String make;

 public Car() {
   /*
   instance fields available in
   scope of the constructor method
   */
 }
}

```

Instance variables are specific to each instance of the class which means that each object created from the class will have its own copy of these variables. These fields can be set in the following three ways:

- If they are public, they can be set like this instanceName.fieldName = someValue;

- They can be set by class methods.

- They can be set by the constructor method (shown in the next exercise).

Let’s practice this concept by adding characteristics to a class that represents a dog.
