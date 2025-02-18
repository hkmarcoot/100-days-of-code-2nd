## Variable Scope

Passing arguments into a function and returning values is a clear way to define the interface between the function and the rest of the code. This is the preferred method of exchanging information within a program since it is straightforward to see the data a function depends on from the function parameter list.

Consider the following function. It returns a number of days left of feed depending on the number of chickens and the rate at which they consume it.

```
function calculateDaysLeft($feed_quantity, $number, $rate)
{
  $result = $feed_quantity / ($number * $rate);
  return $result;
}
echo calculateDaysLeft(300, 2, 30);

```

You can immediately see that this function depends on three pieces of information to provide an answer:

$feed_quantity
$number
$rate
We also echo what is returned by the function, instead of a variable from inside the function. If we attempted to:

```
echo $result;

```

outside of the function, it would throw an error (Undefined variable). This is due to variable scope. Each function has its own local scope. This means that any variables defined within the function’s code block can only be accessed within the code block itself.

However, if many functions depend on the same piece of information, it can be beneficial to have a variable that can be accessed anywhere without being passed in. To do this, we have to use the global keyword to tell PHP to look in the global scope for the variable, instead of the local scope of the function.

```
$feed_quantity = 300;
function calculateDaysLeft($number, $rate)
{
  global $feed_quantity;
  $result = $feed_quantity / ($number * $rate);
  return $result;
}
echo calculateDaysLeft(2, 120);

```

When using this pattern, it becomes slightly more difficult to determine what information this function depends on. Make sure to consider this trade-off when implementing your own functions.

Note that the global keyword is not used when invoking functions. Once a function has been defined, it can be used within the same code block or even within other function code blocks. This code will print “This works!” to the console.

```
function first()
{
  echo "This works!\n";
}
function second()
{
  first();
}
second();

```
