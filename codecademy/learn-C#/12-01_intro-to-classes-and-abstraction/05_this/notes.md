## this

Using the this keyword, we can refer to the current instance of a class inside its methods.

Consider this revision of the Shape class from the previous exercise:

```
class Shape {
  public int area;
  public void IncreaseArea(int amount)
  {
    this.area += amount;
  }
}

```

Here, we’ve updated area += amount to this.area += amount. In most cases, including this one, this is not necessary and does not alter the behavior of the code. For this example, it only clarifies visually that area is an instance variable.

In the next exercise, we will explore a use case where this is sometimes required.
