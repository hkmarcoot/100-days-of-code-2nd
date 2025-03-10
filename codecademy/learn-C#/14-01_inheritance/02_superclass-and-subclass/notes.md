## Superclass and Subclass

In inheritance, one class inherits the members of another class. The class that inherits is called a subclass or derived class. The other class is called a superclass or base class.

In our car example, Sedan and Truck are subclasses (or derived classes). They will inherit members from a new class called Vehicle, which is the superclass (or base class).

Before using inheritance, both classes had:

- Wheels, LicensePlate, and Speed properties
- Honk(), SpeedUp(), and SlowDown() methods
- similar constructors

We can pull these out of both classes and put them in a Vehicle class. Sedan and Truck will still have access to those members, but we only need to write them in one place.

A class can also be both a superclass and a subclass, meaning we can create complex inheritance hierarchies. Building on the Vehicle and Truck example, a new PickupTruck class could inherit from Truck, which inherits from Vehicle. Vehicle could then inherit from a new Machine superclass.

In this hierarchy, PickupTruck inherits directly from Truck, but also inherits indirectly from Vehicle and Machine. Multiple classes may inherit directly from a single superclass, as both Sedan and Truck inherit from Vehicle. However, a class may only inherit directly from one superclass.
