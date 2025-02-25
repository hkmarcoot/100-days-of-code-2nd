## On 'mouseenter'

Another popular jQuery event listener is mouseenter. The mouseenter event triggers a callback function when a user enters the area that a targeted element occupies.

To listen for a mouse enter event, we can use the mouseenter event listener. Take a look at this code and compare it with the click function you learned in the previous exercises:

```
$('.example-class').on('mouseenter',  () => {
    // Execute code here when mouse enters .example-class
});

```

- As before, .on() is called on a jQuery object that selects .example-class elements.
- The first argument for .on() is the 'mouseenter' event handler. The code above will trigger the callback function when the mouse enters an .example-class element’s area.
