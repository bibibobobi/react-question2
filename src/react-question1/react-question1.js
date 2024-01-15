// 1.
/**  
There is an array, each item has such format: 
{firstName: 'xxx', lastName: 'xxx', customerID: 'xxx', note: 'xxx',  profession: ‘xxx’} 
lastName, note can be empty, customerID can only be a set of digital  numbers. 
profession can only have ‘student’, ‘freelancer’, ‘productOwner’,  ‘engineer’ or ‘systemAnalytics’. 
**/
/**  
Q1. Please follow the principle (‘firstName’ + ‘lastName’ + ‘customerID’)  to sort this array and print it out. 
**/

function sortUserName(users) {
  // Validate and filter the data based on criteria
  const validatedUsers = users.filter((user) => {
    const isNonEmptyString = (value) =>
      typeof value === 'string' && value.trim() !== ''

    const isValidFirstName = isNonEmptyString(user.firstName)
    const isValidLastName = typeof user.lastName === 'string'
    const isValidNote = typeof user.note === 'string'
    const isValidCustomerID = /^\d+$/.test(user.customerID)
    const isValidProfession = [
      'student',
      'freelancer',
      'productOwner',
      'engineer',
      'systemAnalytics',
    ].includes(user.profession)

    return (
      isValidFirstName &&
      isValidLastName &&
      isValidNote &&
      isValidCustomerID &&
      isValidProfession
    )
  })

  // Sorting the validated data based on the combination of 'firstName', 'lastName', and 'customerID'
  validatedUsers.sort((a, b) => {
    const keyA = `${a.firstName}${a.lastName}${a.customerID}`
    const keyB = `${b.firstName}${b.lastName}${b.customerID}`
    return keyA.localeCompare(keyB)
  })

  // Printing the sorted and validated data
  validatedUsers.forEach((user) => {
    console.log(user)
  })
}

// test data:
const users = [
  {
    firstName: 'John',
    lastName: 'Doe',
    customerID: '123',
    note: 'Lorem',
    profession: 'student',
  },
  {
    firstName: 'Alice',
    lastName: '',
    customerID: '456',
    note: '',
    profession: 'freelancer',
  },
  {
    firstName: 'Sponge',
    lastName: 'Bob',
    customerID: '4lllk43',
    note: 'test wrong customer ID format',
    profession: 'freelancer',
  },
  {
    firstName: 'Lily',
    lastName: '',
    customerID: '453',
    note: 'test wrong profession',
    profession: 'singer',
  },
  {
    firstName: '',
    lastName: 'Chang',
    customerID: '489',
    note: 'test empty first name',
    profession: 'engineer',
  },
  {
    firstName: 'Fay',
    lastName: 'Wong',
    customerID: '',
    note: 'test empty customerID',
    profession: 'engineer',
  },
]

sortUserName(users)

/**  
Q2. Please sort by ‘profession’ to follow the principle.  (‘systemAnalytics’ > ‘engineer’ > ‘productOwner’ > ‘freelancer’ >  ‘student’’) 
**/
function sortByType(users) {
  // Validate and filter the data based on criteria
  const validatedUsers = users.filter((user) => {
    const isNonEmptyString = (value) =>
      typeof value === 'string' && value.trim() !== ''

    const isValidFirstName = isNonEmptyString(user.firstName)
    const isValidLastName = typeof user.lastName === 'string'
    const isValidNote = typeof user.note === 'string'
    const isValidCustomerID = /^\d+$/.test(user.customerID)
    const isValidProfession = [
      'student',
      'freelancer',
      'productOwner',
      'engineer',
      'systemAnalytics',
    ].includes(user.profession)

    return (
      isValidFirstName &&
      isValidLastName &&
      isValidNote &&
      isValidCustomerID &&
      isValidProfession
    )
  })

  // Sorting the validated data based on the order of professions
  validatedUsers.sort((a, b) => {
    const professionOrder = {
      systemAnalytics: 1,
      engineer: 2,
      productOwner: 3,
      freelancer: 4,
      student: 5,
    }

    return professionOrder[a.profession] - professionOrder[b.profession]
  })

  // Printing the sorted and validated data
  validatedUsers.forEach((user) => {
    console.log(user)
  })
}

// test data:
const users2 = [
  {
    firstName: 'John',
    lastName: 'Doe',
    customerID: '123',
    note: 'Lorem',
    profession: 'student',
  },
  {
    firstName: 'Alice',
    lastName: '',
    customerID: '456',
    note: '',
    profession: 'freelancer',
  },
  {
    firstName: 'Sponge',
    lastName: 'Bob',
    customerID: '443ttr',
    note: 'test wrong customer ID format',
    profession: 'freelancer',
  },
  {
    firstName: 'Lily',
    lastName: '',
    customerID: '411',
    note: '',
    profession: 'productOwner',
  },
  {
    firstName: 'Vivian',
    lastName: 'Chang',
    customerID: '453',
    note: '',
    profession: 'engineer',
  },
  {
    firstName: 'Fay',
    lastName: 'Wong',
    customerID: '489',
    note: '',
    profession: 'systemAnalytics',
  },
]

sortByType(users2)

//////////////////////////////
// 2.
// The CSS rule .container .shop-list .item is trying to select elements with the class "item"
// that are descendants of an element with the class "shop-list"
// which, in turn, is a descendant of an element with the class "container".
// However, the "item" class is directly applied to the <li> elements,
// not to an additional wrapper with the class "item".
/*
.container .shop-list { 
    color: green; 
   } 
   .container .shop-list:first-child {
     color: blue;
   }
   .container .shop-list li:nth-child(odd) {
     background-color: #f7f7f7; 
   }
   */

//////////////////////////////
// 3.
function getUniqueNumbers(items) {
  // Filter out empty values
  let nonEmptyItems = items.filter((item) => item !== '')

  // Use Set to automatically remove duplicates
  let uniqueNumbersSet = new Set(nonEmptyItems)

  // Convert Set back to an array
  let uniqueNumbersArray = Array.from(uniqueNumbersSet)

  return uniqueNumbersArray
}

let items = [
  1,
  1,
  1,
  5,
  2,
  3,
  4,
  3,
  3,
  3,
  3,
  3,
  3,
  7,
  8,
  5,
  4,
  9,
  0,
  1,
  3,
  2,
  6,
  7,
  5,
  4,
  4,
  7,
  8,
  8,
  0,
  1,
  2,
  3,
  1,
  '',
  '',
]

let result = getUniqueNumbers(items)
console.log(result)

//////////////////////////////
// 4.
/*
Interface:
An interface in TypeScript is a way to define a contract for an object. 
It specifies the properties and methods an object must have, without providing an implementation. 
Interfaces are useful for enforcing a specific structure on objects and ensuring that certain properties or methods are present.
*/
// Example of Interface:
interface Person {
  firstName: string
  lastName: string
  age: number
}

function greet(person: Person): string {
  return `Hello, ${person.firstName} ${person.lastName}!`
}

let myFriend: Person = {
  firstName: 'Fay',
  lastName: 'Wong',
  age: 30,
}

console.log(greet(myFriend))

/*
Enum:
An enum in TypeScript is a way to define a set of named constant values. 
Enums make the code more readable and maintainable by providing a clear and meaningful name to a set of related values.
 */
// Example of Interface:
// Define an enum for colors
enum Colors {
  Red = '#FF0000',
  Green = '#00FF00',
  Blue = '#0000FF',
  Yellow = '#FFFF00',
  Purple = '#800080',
}

// Function that accepts a color enum value and returns a message
function describeColor(color: Colors): string {
  switch (color) {
    case Colors.Red:
      return 'The color is red, the color of passion and energy.'
    case Colors.Green:
      return 'The color is green, the color of nature and harmony.'
    case Colors.Blue:
      return 'The color is blue, the color of calmness and trust.'
    case Colors.Yellow:
      return 'The color is yellow, the color of joy and happiness.'
    case Colors.Purple:
      return 'The color is purple, the color of creativity and luxury.'
    default:
      return 'Unknown color.'
  }
}

// Using the enum values
let selectedColor: Colors = Colors.Blue

// Calling the function with the enum value
console.log(describeColor(selectedColor))

//////////////////////////////
// 5.
/* The problem with the provided code is related to the asynchronous nature of the setState function in React. 
The setState function does not immediately update the state; instead, 
it schedules an update and continues with the rest of the code. Therefore, 
if you call setState multiple times in quick succession, 
you might not get the expected result because the state updates may not have taken effect yet.

In the handleAddCount method, setState are called three times in a row,
Due to the asynchronous nature of setState, these updates may be batched together, 
resulting in only one actual increment of the count.

To fix this issue, we should use the functional form of setState when the new state depends on the previous state:
*/
handleAddCount() {
  this.setState((prevState) => ({ count: prevState.count + 1 }));
  this.setState((prevState) => ({ count: prevState.count + 1 }));
  this.setState((prevState) => ({ count: prevState.count + 1 }));
}

//////////////////////////////
// 6.

import React, { useState } from 'react'

const SearchBox = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const debounce = (func, delay) => {
    let timeoutId;
    return function (...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
  };

  const handleOnChange = (event) => {
    const { value } = event.target;
    setSearchTerm(value);

    // Debounce the ajax call by 500 milliseconds
    debounce(makeAjaxCall, 500)();
  };

  const makeAjaxCall = () => {
    console.log('Making ajax call with search term:', searchTerm);
  };

  return <input type="search" name="p" onChange={handleOnChange} />;
};

export default SearchBox;
