## Query Parameters

Query parameters appear in URLs beginning with a question mark (?) and are followed by a parameter name assigned to a value. They are optional and are most often used to search, sort and/or filter resources.

For example, if you were to visit the URL below…

```
https://www.google.com/search?q=codecademy

```

… you would be taken to Google’s /search page displaying results for the search term codecademy. In this example, the name of the query parameter is q.

Query parameters can be useful in determining which content to display to our user and React Router provides a mechanism for grabbing query parameter values with the useSearchParams() hook. This hook returns a URLSearchParams object and a function we can use to update it.

Consider this example of a SortedList component:

```
import { useSearchParams } from 'react-router-dom';

// Rendered when a user visits "/list?order=DESC"
export const SortedList = (numberList) => {
  const [ searchParams, setSearchParams ] = useSearchParams();
  const sortOrder = searchParams.get('order');
  console.log(sortOrder); // Prints "DESC"
};

```

Let’s break down this example:

First, we import useSearchParams() and call it within SortedList to get the URLSearchParams object. This object has a .get() method for retrieving query parameter values.

Finally, to get the value of a specific query parameter, we pass in the name of the query parameter whose value we want to obtain, as a string ('order'), to the queryParams.get() method. The value ('DESC') is then stored in the variable order.

Let’s expand the SortedList example so that the component uses the order value to render a list of data either in ascending order, in descending order, or in its natural order.

```
import { useSearchParams } from 'react-router-dom'

// Rendered when a user visits "/list?order=DESC"
export const SortedList = (numberList) => {
  const [ searchParams, setSearchParams ] = useSearchParams();
  const sortOrder = searchParams.get('order');

  if (sortOrder === 'ASC') {
    // render the numberList in ascending order
  } else if (sortOrder === 'DESC') {
    // render the numberList in descending order
  } else {
    // render the numberList as is
  }
}

```

Now, if the user were to visit /list?order=DESC, the value 'DESC' would be extracted and we can render the SortedList component in descending order. Likewise, visiting /list?order=ASC will render the list in ascending order. Finally, since query parameters are optional, if we were to visit /list, the SortedList component would render in its natural order.

Imagine we have a List component with a sort button that we wanted to use to update the URL to /list?order=ASC, then render SortedList. We can use the setSearchParams() function to do this. For example:

```
import { useSearchParams } from 'react-router-dom';

// Rendered when a user visits "/list"
export const List = (numberList) => {
  const [ searchParams, setSearchParams ] = useSearchParams();

  // render the numberList in ascending order
  <button click={ () => setSearchParams( {order: 'ASC'} ) }>
    Sort
  </button>
}

```

When a user clicks on the Sort button we’ll update the path to /list?order=ASC, which will cause our SortedList component to render.

useSearchParams works great when we want to access the current path’s query parameters or alter them but what if we want to navigate to a path and include query parameters too? Well, for this scenario we’ll need to use the createSearchParams() utility function from react-router-dom with the useNavigate hook we learned about previously.

For example, if we wanted to directly navigate to /list?order=ASC from the root (/) path we’d do something like this:

```
import { useNavigate, createSearchParams } from 'react-router-dom';
// get navigate function
const navigate = useNavigate();

// define an object where the key is is the query parameter name and value is query parameter value
const searchQueryParams = {
  order: 'ASC'
}

// use createSearchParams which takes an object and transforms it to a query string of the form order=ASC
const searchQueryString = createSearchParams(searchQueryParams);

// force a navigate by passing in an object with pathname indicating that path to navigate and search indicating the query parameters to append
navigate({
  pathname:'/list',
  search: `?${searchQueryString}`
})

```

The important things to note about the example above are that we:

Define an object representing the query parameters we want and call it searchQueryParams.
Pass searchQueryParams to createSearchParams which will transform it from an object to a query string form.
Call useNavigate and pass an object with pathname and search keys where pathname is a string indicating where to navigate to and search is a string indicating the query string to append to the path.
Note that we need to include the ? which is why we use a template string here.

Great job learning about query parameters let’s now practice adding some filtering to our articles by using them.
