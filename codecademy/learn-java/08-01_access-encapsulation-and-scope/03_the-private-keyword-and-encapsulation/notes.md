## The private Keyword and Encapsulation

By now you’re probably catching onto what the private keyword does. When a Class’ instance variable or method is marked as private, that means that you can only access those structures from elsewhere inside that same class. Let’s look back at our DogSchool example:

```
public class DogSchool{

  public void makeADog(){
    Dog cujo = new Dog("Cujo", 7);
    System.out.println(cujo.age);
    cujo.speak();
  }
}

```

makeADog is trying to directly access Dog‘s .age variable. It’s also trying to use the .speak() method. If those are marked as private in the Dog class, the DogSchool class won’t be able to do that. Other methods within the Dog class would be able to use .age or .speak() (for example, we could use cujo.age within the Dog class), but other classes won’t have access.

Keep Reading: AP Computer Science A Students

At this point, you might be thinking to yourself “Why even bother with any of this? In the last exercise, my code was broken until I flipped some variables and methods to public. Why don’t I just make everything public?”

While those are valid points, sometimes restricting our code is actually useful from a design perspective. This is one of the core ideas behind encapsulation. By making our instance variables (and some methods) private, we encapsulate our code into nice little bundles of logic.

For example, a Bank object doesn’t necessarily need to know the inner workings of a CheckingAccount object. It doesn’t need to know that the money is stored in a field named money, or that interest is added to an account by using a method named .addInterest(). In fact, if it had access to those fields or methods, it’s possible that someone using a Bank object could change things in a CheckingAccount without realizing it. By limiting access by using the private keyword, we are able to segment, or encapsulate, our code into individual units.

Note that we don’t necessarily want to completely block everything from other classes. In the next exercise, we’ll get into when you might want to make methods public — we’ll take a look at getter and setter methods.
