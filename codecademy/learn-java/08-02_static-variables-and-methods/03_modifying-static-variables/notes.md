## Modifying Static Variables

Now that we’ve created a couple of static variables, let’s start to edit them. The good news is that editing static variables is similar to editing any other variable. Whether you’re writing code in a constructor, a non-static method, or a static method, you have access to static variables.

Before we jump into the checkpoints, let’s think about times when you might want to edit static variables. Often times, you’ll see static variables used to keep track of information about all objects of a class. For example, our variable numATMs is keeping track of the total number of ATMs in the system. Therefore, every time an ATM is created (using the constructor), we should increase that variable by 1. If we could somehow destroy an ATM, the method that destroys it should decrease numATMs static variable by 1.

Similarly, we have a variable named totalMoney. This variable is keeping track of all money across all ATMs. Whenever we remove money from an ATM using the non-static withdrawMoney() method, we should modify the money instance variable for that particular ATM as well as the totalMoney variable. In doing so, all ATMs will know how much money is in the system.
