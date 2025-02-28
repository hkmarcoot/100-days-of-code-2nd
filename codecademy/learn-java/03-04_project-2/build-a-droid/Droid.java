public class Droid {
    int batteryLevel;
    String name;
  
    // Constructor
    public Droid(String droidName){
      name = droidName;
      batteryLevel = 100;
    }
  
    // Method
    public void performTask(String task){
      System.out.println( name + " is performing task: " + task );
      batteryLevel -= 10;
    }
  
    // toString Method
    public String toString(){
      return "Hello, I’m the droid: " + name;
    }
  
    // main()
    public static void main(String[] args) {
      Droid codey = new Droid("Codey");
      System.out.println(codey);
  
      codey.performTask("dancing");
    }
  }
  
