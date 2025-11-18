# 2. What is the use of the keyof keyword in TypeScript? Provide an example.

`keyof` is an operator used in TypeScript to use the keys/properties of a type to create a new type but the keys/properties are in union, meaning it can be any of the keys. Let's have a look at the example below -

```jsx
type Vehicle = {
  bike: string;
  car: string;
  yacht: string;
};

type Owner1 = "bike" | "car" | "yacht"; // manually
type Owner2 = keyof Vehicle; // using keyof operator

const person1: Owner1 = "car";
const person2: Owner2 = "bike";
```

Here the `Owner1` and `Owner2` are same variable but first one, we are declaring it manually. Second one, we are declaring it automatically using keyof operator.

Let's look at another example to understand how we can use it with objects -

```jsx
const user = {
  name: "Saad",
  age: 24,
  address: "Rajshahi",
};

const getPropertyValue = (obj: object, key: string) => {
  return obj[key];
};

const result1 = getPropertyValue(user, "name");
const result2 = getPropertyValue(user, "something");
console.log(result1);
console.log(result2);
```

This code will work if we ask for properties that actually exist; it’ll return the value as expected. But the issue arises when we ask for the value of a property that does not exist. It would return undefined in that case. It’ll also show a warning on the return statement. This is where the Typescript keyof constraint comes in.

```jsx
type User = {
  name: string;
  age: number;
  address: string;
};

const user = {
  name: "Saad",
  age: 24,
  address: "Rajshahi",
};

// Can be used for any objects
const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
  return obj[key];
};

const result1 = getPropertyValue(user, "name");
console.log(result1);
// const result2 = getPropertyValue(user, "something"); // show warning because the property "something" does not exist in "user" object.
// console.log(result2);
```

We are defining that the `Y` property must be something that `X` object aka `user` object has.

### Conclusion:

So, we can use the `keyof` operator to define new types and also use it for objects with a mix of constraint to make our code more robust and bug free.

---

# 5. Provide an example of using union and intersection types in TypeScript.

Typescript is build on top of JavaScript but it has more benefits. Two of those benefits are Union and intersection types. They are one of the most important methods used in Typescript. These methods makes our code reusable, flexible and cleaner. First we'll define what they are.

### Union Type

We can use union types to define a new type by combining 2 types but the new type can take the form of any of the 2 types.

```tsx
type Student = {
  institute: string;
  roll: number;
};

type officeWorker = {
  company: string;
  designation: string;
  experience: number;
};

type Person = Student | officeWorker;
```

We can also use it to declare variables where multiple values can be available.

```tsx
type Vehicle = {
  brand: string;
  model: string;
  year: number;
  drivetrain: AWD | RWD | FWD;
};
```

As we can see here that the drivetrain property here is dynamic and can be any 3 of them.

Union type is very useful when we are working of multiple types of parameters in a function -

```tsx
  const printType = (param: string | number) {
    if(typeof param === "string") {
      console.log("This is a string type value")
    } else if(typeof param === "number") {
      console.log("This is a number type value")
    } else {
      console.log("Invalid Value")
    }
  }
```

So, we use Union types when we are working with multiple types of value or variables. We can create dynamic functions and types with Union type.

### Intersection Type

We can use the intersection type to create new type where it must contain the properties of all the types.

```tsx
type User = {
  username: string;
  email: string;
};

type AdminPrivilege = {
  isAdmin: boolean;
};

type Admin = User & AdminPrivilege;
```

This way we can make our types reusable which will keep our code DRY(Do not Repeat Yourself).

### Conclusion

Union and Intersection Types makes our code more cleaner and maintainable. As this gives us warning where we makes any mistakes, that way it's also less bug free.
