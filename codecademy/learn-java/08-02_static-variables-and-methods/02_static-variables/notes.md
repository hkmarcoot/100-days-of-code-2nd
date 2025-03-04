## Static Variables

We’ll begin writing our own static methods soon, but before we do, let’s take a look at static variables. Much like static methods, you can think of static variables as belonging to the class itself instead of belonging to a particular object of the class.

Just like with static methods, we can access static variables by using the name of the class and the . operator. Finally, we declare static variables by using the static keyword during declaration. This keyword usually comes after the variable’s access modifier (public or private).

When we put this all together, we might end up with a class that looks something like this:

```
public class Dog{

  // Static variables
  public static String genus = "Canis";

  //Instance variables
  public int age;
  public String name;

  public Dog(int inputAge, String inputName){
    this.age = inputAge;
    this.name = inputName;
  }
}

```

Since all dogs share the same genus, we could use a static variable to store that information for the entire class. However, we want each dog to have its own unique name and age, so those aren’t static. We could now access this static variable in a main() function like so:

```
public class Dog{
  //Variables, constructors and methods defined here

  public static void main(String[] args){
    System.out.println(Dog.genus); // Prints Canis
  }
}

```

Unlike static methods, you can still access static variables from a specific object of the class. However, no matter what object you use to access the variable, the value will always be the same. You can think of it as all objects of the class sharing the same variable

```
public static void main(String[] args){
  Dog snoopy = new Dog(3, "Snoopy");
  Dog ringo = new Dog(5, "Ringo");

  System.out.println(Dog.genus); // Prints Canis
  System.out.println(snoopy.genus); // Prints Canis
  System.out.println(ringo.genus); // Prints Canis
}

```

Finally, you might have seen a few static variables before. If you want easy access to the largest possible integer, you can get it by using Integer.MAX_VALUE. If you look at the official documentation you’ll see that this variable is public, static, and final. (final means that you can’t change the variable’s value after creating it.) We’re starting to know a lot of Java keywords!
