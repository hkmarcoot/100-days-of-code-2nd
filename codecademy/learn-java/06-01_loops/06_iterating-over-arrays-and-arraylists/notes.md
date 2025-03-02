For example, if we wanted to add 1 to every int item in an array secretCode, we could do this:

```
for (int i = 0; i < secretCode.length; i++) {
  // Increase value of element value by 1
  secretCode[i] += 1;
}

```

Traversing an ArrayList looks very similar:

```
for (int i = 0; i < secretCode.size(); i++) {
  // Increase value of element value by 1
  int num = secretCode.get(i);
  secretCode.set(i, num + 1);
}

```

For example, let’s use a while loop to traverse through an array:

```
int i = 0; // initialize counter

while (i < secretCode.length) {
  secretCode[i] += 1;
  i++; // increment the while loop
}

```

Traversing through an ArrayList with a while loop would look like this:

```
int i = 0; // initialize counter

while (i < secretCode.size()) {
  int num = secretCode.get(i);
  secretCode.set(i, num + 1);
  i++; // increment the while loop
}

```
