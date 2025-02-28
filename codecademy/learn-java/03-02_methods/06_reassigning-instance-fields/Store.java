public class Store {
    // instance fields
    String productType;
    public double price;
      
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
      
  }
