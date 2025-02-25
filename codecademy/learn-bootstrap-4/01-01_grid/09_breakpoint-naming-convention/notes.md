## Breakpoint Naming Convention

Using Bootstrap, we can freely change the layout of our content using grid. We can even customize how our content on the grid changes based on breakpoints (extra small, small, medium, large, extra large). To incorporate these breakpoints into our code, we have to follow Bootstrap’s class naming convention.

The naming convention follows a pattern of "col-{breakpoint}-{width}". Let’s break this pattern down:

- As seen before "col" refers to a column.
- {breakpoint} can be sm, md, lg, or xl. Notice that there is no extra small or xs breakpoint. If we omit {breakpoint}, it is by default for extra small screens.
- {width} can be set from 1 to 12 and assigns a width to the column.
- When we set a {breakpoint}-{width}, it means that we want our column to have that set width for screens that fit in the specified breakpoint range and other larger screens.

For instance:

```
<div class="col-sm-8">
</div>

```

The column in the example will be as wide as 8 individual columns on small screen sizes and also any larger screens (medium, large, and extra large). In the next exercise, we’ll go over how to customize our layout for every breakpoint. For now, let’s get comfortable with Bootstrap’s naming convention. To get even more information check out Bootstrap’s grid options documentation.

https://getbootstrap.com/docs/4.2/layout/grid/#grid-options
