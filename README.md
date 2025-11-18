# 2. What is the use of the keyof keyword in TypeScript? Provide an example.

`keyof` হল একটি অপারেটর যা টাইপস্ক্রিপ্টে ব্যবহৃত হয় এবং এর দ্বারা একটি টাইপের কী/প্রোপার্টি ব্যবহার করে নতুন টাইপ তৈরি করা যায়, কিন্তু সেক্ষেত্রে কী/প্রোপার্টিগুলি ইউনিওন অবস্থায় থাকে। অর্থাৎ যখন এই নতুন টাইপ টি ব্যবহার করা হবে কোন ভ্যারিয়েবলের জন্য তখন এর ভ্যালু যেকোনো কী/প্রোপার্টি হতে পারে। আরও বুঝতে নীচের উদাহরণটি একবার দেখে নেওয়া যাক -

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

এখানে `Owner1` এবং `Owner2` একই ধরণের কিন্তু প্রথমটি, আমরা এটি ম্যানুয়ালি ঘোষণা করছি। দ্বিতীয়টি, আমরা keyof অপারেটর ব্যবহার করে এটি স্বয়ংক্রিয়ভাবে ঘোষণা করছি।

আসুন আরেকটি উদাহরণ দেখি কিভাবে আমরা এটি অবজেক্ট এর সাথে ব্যবহার করতে পারি -

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

এই কোডটি তখনই কাজ করবে যখন আমরা এমন প্রোপার্টির ভ্যালু বের করি যা আসলে বিদ্যমান; এটি প্রত্যাশা অনুযায়ী মান প্রদান করবে। কিন্তু সমস্যাটি তখন দেখা দেয় যখন আমরা এমন একটি প্রোপার্টির মান বের করতে চাই যা অবজেক্টে বিদ্যমান নেই। সেই ক্ষেত্রে এটি undefined ফেরত দেয়। এবং এটির রিটার্ন স্টেটমেন্টেও একটি সতর্কতা দেখাবে। এখানেই টাইপস্ক্রিপ্টের keyof সীমাবদ্ধতা বা কনস্ট্রেইন্ট আসে।

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

আমরা সংজ্ঞায়িত করছি যে `Y` প্রোপার্টি টি এমন কিছু হতে হবে যা `X` অবজেক্ট ওরফে `user` অবজেক্টে আছে।

### উপসংহারঃ

সুতরাং, আমরা নতুন টাইপ সংজ্ঞায়িত করতে `keyof` অপারেটর ব্যবহার করতে পারি এবং অবজেক্টের ক্ষেত্রে অপারেটরের সাথে কন্সট্রেইন্ট ব্যাবহার করে আমরা আমাদের কোডকে আরও শক্তিশালী এবং বাগ মুক্ত করতে পারি।

---

# 5. Provide an example of using union and intersection types in TypeScript.

টাইপস্ক্রিপ্ট জাভাস্ক্রিপ্টের উপরে তৈরি কিন্তু এর আরও সুবিধা রয়েছে। এর মধ্যে দুটি সুবিধা হল ইউনিয়ন এবং ইন্টারসেকশন টাইপ। এগুলি টাইপস্ক্রিপ্টে ব্যবহৃত সবচেয়ে গুরুত্বপূর্ণ পদ্ধতিগুলির মধ্যে একটি। এই পদ্ধতিগুলি আমাদের কোডকে পুনঃব্যবহারযোগ্য, নমনীয় এবং পরিষ্কার করে তোলে। প্রথমে আমরা এগুলি কী তা সংজ্ঞায়িত করব।

### Union Type

আমরা ইউনিয়ন ব্যবহার করে দুটি টাইপের সমন্বয় করে একটি নতুন টাইপ তৈরি করতে পারি তবে নতুন টাইপটি সমন্বয়কৃত দুটি টাইপের যেকোনো একটির রূপ নিতে পারে।

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

আমরা এটি ব্যবহার করে এমন ভেরিয়েবল ঘোষণা করতে পারি যেখানে একাধিক মান পাওয়া যেতে পারে।

```tsx
type Vehicle = {
  brand: string;
  model: string;
  year: number;
  drivetrain: "AWD" | "RWD" | "FWD";
};
```

আমরা এখানে দেখতে পাচ্ছি যে এখানকার ড্রাইভট্রেন প্রোপার্টি টি পরিবর্তনশীল এবং ৩টির মধ্যে যেকোনো ১টি হতে পারে।

যখন আমরা একটি ফাংশনে একাধিক ধরণের প্যারামিটার নিয়ে কাজ করি তখন Union type খুবই কার্যকর -

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

তাই, আমরা যখন একাধিক ধরণের মান বা ভেরিয়েবল নিয়ে কাজ করি তখন Union types ব্যবহার করি। আমরা Union type দিয়ে পরিবর্তনশীল ফাংশন এবং types তৈরি করতে পারি।

### Intersection Type

আমরা ইন্টারসেকশন টাইপ ব্যবহার করে দুইটি টাইপের সমন্বয় করে নতুন আরেকটি টাইপ তৈরি করতে পারি যেখানে সমন্বয়কৃত দুইটি টাইপের সকল প্রোপার্টি থাকবে।

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

এইভাবে আমরা আমাদের টাইপগুলিকে পুনঃব্যবহারযোগ্য করে তুলতে পারি যা আমাদের কোড DRY (Do not Repeat Yourself) রাখবে।

### উপসংহারঃ

Union এবং Intersection Types আমাদের কোডকে আরও পরিষ্কার এবং রক্ষণাবেক্ষণযোগ্য করে তোলে। যেহেতু এটি আমাদের কোন ভুল করার সময়েই সতর্ক করে, তাই কোডে বাগ আসার সম্ভাবনা কমে যায়।
