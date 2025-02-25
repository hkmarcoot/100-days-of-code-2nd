## Intro to the Grid

Bootstrap simplifies the layout of a website using a grid system. For us to fully take advantage of Bootstrap’s grid system, we need to understand how to structure our HTML.

At the heart of it, containers are the basis of Bootstrap’s grid. Inside containers, we nest rows as immediate children. Then, nested inside rows are columns. Inside columns, we put our actual content. Take a look below at an example of this nesting pattern. Don’t worry about the syntax of rows and columns just yet, but do take note of how our HTML is organized:

```
<div class="container">
  <div class="row">
    <div class="col">
      <!-- A column inside a row inside a container! -->
    </div>
  </div>
</div>

```

We can gain even more control of our layout once we start nesting rows inside columns and setting widths for our columns! But, first, let’s review how to create a layout using Bootstrap.
