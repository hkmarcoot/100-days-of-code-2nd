public class Store {
    // instance fields
    String productType;
    double price;
    double tax = 0.08;
      
    // constructor method
    public Store(String product, double initialPrice) {
      productType = product;
      price = initialPrice;
    }
      
    // increase price method
    public void increasePrice(double priceToAdd){
      double newPrice = price + priceToAdd;
      price = newPrice;
    }
      
    // get price with tax method
    public double getPriceWithTax(){
      double totalPrice = price + price * tax;
      return totalPrice;
    }
  
  }
