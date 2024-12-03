const remindMeTo = (task) => {
  return `Remember to ${task}!!!`;
};

const remindMeLater = (task) => {
  return () => {
    // call remindMeTo
    return remindMeTo(task);
  };
};

console.log(remindMeTo("call mom"));

const reminder = remindMeLater("get groceries");
console.log(reminder());
