## Classes: Multiple Fields

Objects are not limited to a single instance field. We can declare as many fields as necessary for our program’s requirements. To illustrate this, let’s add two more instance fields to our Car instances.

We’ll add a boolean isRunning, which represents whether the car engine is on or not, and an int velocity, which indicates the speed at which the car is traveling.

```
public class Car {
  String color;

  // new fields!
  boolean isRunning;
  int velocity;

  // new parameters that correspond to the new fields
  public Car(String carColor, boolean carRunning, int milesPerHour) {
    color = carColor;

    // assign new parameters to the new fields
    isRunning = carRunning;
    velocity = milesPerHour;
  }
}

```

```
Public class Main(){

  public static void main(String[] args) {
    // new values passed into the method call
    Car ferrari = new Car("red", true, 27);
    Car renault = new Car("blue", false, 70);

    System.out.println(renault.isRunning); // false
    System.out.println(ferrari.velocity); // 27
  }
}

```

Now, the constructor has two new parameters: boolean carRunning and int speed`.

Remember, it’s important to pass the arguments in the same order as they are listed in the parameters.

```
// values match types, no error
Car honda = new Car("green", false, 0);

// values do not match types, error!
Car junker = new Car(true, 42, "brown");

```
