const formatValue = (
  value: string | number | boolean
): string | number | boolean => {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else {
    return !value;
  }
};

const getLength = (value: string | any[]): number => {
  if (Array.isArray(value)) {
    return value.length;
  } else {
    return value.length;
  }
};

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}

type TBook = {
  title: string;
  rating: number;
};

const filterByRating = (arr: TBook[]): TBook[] => {
  return arr.filter((item) => item.rating >= 4);
};

type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

const filterActiveUsers = (arr: User[]): User[] => {
  return arr.filter((user) => user.isActive === true);
};

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (book: Book) => {
  console.log(
    `Title: ${book.title}, Author: ${book.author}, Published: ${
      book.publishedYear
    }, Available: ${book.isAvailable ? "Yes" : "No"}`
  );
};

type Alphanumeric = number | string;

const getUniqueValues = (
  arr1: Alphanumeric[],
  arr2: Alphanumeric[]
): Alphanumeric[] => {
  const uniqueValueArr: Array<Alphanumeric> = [];

  for (let i = 0; i < arr1.length; i++) {
    const currValue = arr1[i];
    let isExist: boolean = false;

    for (let j = 0; j < uniqueValueArr.length; j++) {
      if (currValue === uniqueValueArr[j]) {
        isExist = true;
        break;
      }
    }

    if (!isExist) {
      uniqueValueArr[uniqueValueArr.length] = currValue as Alphanumeric;
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    const currValue = arr2[i];
    let isExist: boolean = false;

    for (let j = 0; j < uniqueValueArr.length; j++) {
      if (currValue === uniqueValueArr[j]) {
        isExist = true;
        break;
      }
    }

    if (!isExist) {
      uniqueValueArr[uniqueValueArr.length] = currValue as Alphanumeric;
    }
  }

  return uniqueValueArr;
};

type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};

const calculateTotalPrice = (arr: Product[]): number => {
  return arr.reduce((acc, curr) => {
    if (curr.discount) {
      const subTotal = curr.price * curr.quantity;
      const discount = (subTotal * curr.discount) / 100;
      const total = subTotal - discount;
      return (acc += total);
    } else {
      return (acc += curr.price * curr.quantity);
    }
  }, 0);
};
