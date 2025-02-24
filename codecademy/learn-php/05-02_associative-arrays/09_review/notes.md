You learned so much in this lesson! Let’s review:

- Associative arrays are data structures in which string or integer keys are associated with values.
- We use the => operator to associate a key with its value. $my_array = ["panda"=>"very cute"]
- To print an array’s keys and their values, we can use the print_r() function.
- We access the value associated with a given key by using square brackets ([ ]). For example: $my_array["panda"] will return "very cute".
- We can assign values to keys using this same indexing syntax and the assignment operator (=): $my_array["dog"] = "good cuteness";
- This same syntax can be used to change existing elements. $my_array["dog"] = "max cuteness";
- We can remove a key=>value pair entirely using the PHP unset() function.
- Keys can be integers. In fact, ordered arrays are just arrays in which integer keys have been assigned to the values automatically.
- In PHP, associative arrays and ordered arrays are different uses of the same data type.
- The union (+) operator takes two array operands and returns a new array with any unique keys from the second array appended to the first array.
- When writing a function with array parameters, we can pass the array by value or by reference depending on our intent.
