## Remove Duplicate Code

At the start of this lesson, we had duplicated code in Sedan and Truck. We know that duplicated code leads to errors, so we created a superclass, Vehicle, to contain the shared code.

But one version of the duplicated code lives on in Truck! Once we have Truck inherit from Vehicle, we can remove that code as well. At that point, we’ll have three classes with Speed, LicensePlate, SlowDown(), etc., but they’ll only be written in one place.
