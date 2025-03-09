## Get-Only Properties

We have learned how to use properties for field validation. By applying public or private, we can have greater control over field access.

For our Area property, if we want programs to be able to get the value, but not set it, we can do one of the following:

- Omit the set() method.
- Make the set() method private.

Example without set():

```
public string Area
{
  get { return area; }
}

```

Attempting to set Area results in:

```
error CS0200: Property or indexer 'Shape.Area' cannot be assigned to (it is read-only)

```

Example with private set():

```
public int Area
{
  get { return area; }
  private set { area = value; }
}

```

Attempting to set Area in Main() results in:

```
error CS0272: The property or indexer 'Shape.Area' cannot be used in this context because the set accessor is inaccessible

```

Setting Area without including set() results in an error regardless of where it is accessed. When set() is private, we get an error only outside the Shape class.

Generally, we prefer a private set() because it allows other class methods to set the property.
