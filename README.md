# Dev Stack

Dev Stack is a responsive React application where users can explore modern web development technologies and build their own personalized developer stack.

##Technologies Used

- React
- JavaScript
- Tailwind CSS
- React Toastify
- JSON
- Vite

## Key Features

- Explore a collection of modern development technologies loaded dynamically from JSON data.
- Add technologies to a personalized stack and remove individual items or clear the entire stack.
- Responsive design with duplicate prevention, loading state, disabled added buttons, and toast notifications.

## React Questions & Answers

### 1. What is JSX?

JSX is a syntax extension for JavaScript that allows us to write HTML-like code inside JavaScript. It makes React components easier to create and understand.

### 2. What is the difference between Props and State?

Props are used to pass data from one component to another. State is used to store and manage data inside a component. Props cannot be changed by the receiving component, but State can be updated when needed.

### 3. What is the useState hook?

useState is a React Hook used to store and update data inside a component. When the state changes, React updates the UI automatically.

### 4. What is the useEffect hook?

useEffect is a React Hook used to perform side effects, such as fetching data from an API or JSON file when a component loads.

### 5. Why do we use a key with the map() function in React?

A key helps React identify each item in a list. It helps React update the correct item efficiently when the list changes.

### 6. What is conditional rendering in React?

Conditional rendering means showing different content based on a condition. For example, we can show one message when the stack is empty and another content when items are added.

### 7. How can we pass data from a parent component to a child component?

We can pass data from a parent component to a child component using Props. We can also pass a function as a Prop so the child component can send an action back to the parent.