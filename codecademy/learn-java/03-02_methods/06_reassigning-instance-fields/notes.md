## Reassigning Instance Fields

Earlier, we thought about a Savings Account as a type of object we could represent in Java.

Two of the methods we need are depositing and withdrawing:

```
public class SavingsAccount{
  double balance;
  public SavingsAccount(double startingBalance){
    balance = startingBalance;
  }

  public void deposit(double amountToDeposit){
     //Add amountToDeposit to the balance
  }

  public void withdraw(double amountToWithdraw){
     //Subtract amountToWithdraw from the balance
  }

  public static void main(String[] args){

  }
}

```

These methods would change the value of the variable balance. We can reassign balance to be a new value by using our assignment operator, =, again.

```
public void deposit(double amountToDeposit){
  double updatedBalance = balance + amountToDeposit;
  balance = updatedBalance;
}

```

Now, when we call deposit(), it should change the value of the instance field balance:

```
public static void main(String[] args){
  SavingsAccount myAccount = new SavingsAccount(2000);
  System.out.println(myAccount.balance);
  myAccount.deposit(100);
  System.out.println(myAccount.balance);
}

```

This code first prints 2000, the initial value of myAccount.balance, and then prints 2100, which is the value of myAccount.balance after the deposit() method has run.

Changing instance fields is how we change the state of an object and make our objects more flexible and realistic.
