//Task 1

const books = [
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    numberOfPages: 281,
    genre: "Fiction",
    awards: ["Pulitzer Prize", "Brotherhood Award", "Paperback of the Year"],
  },
  {
    title: "1984",
    author: "George Orwell",
    numberOfPages: 328,
    genre: "Dystopian",
    awards: ["Prometheus Hall of Fame Award", "Time's Top 100 Novels"],
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    numberOfPages: 180,
    genre: "Classic",
    awards: ["Modern Library's Top 100", "National Book Award Nominee"],
  },
  {
    title: "Moby Dick",
    author: "Herman Melville",
    numberOfPages: 635,
    genre: "Adventure",
    awards: ["Regarded as a Great American Novel", "Part of the Western Canon"],
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    numberOfPages: 432,
    genre: "Romance",
    awards: ["BBC's Big Read", "Guardian's 100 Best Novels"],
  },
];

function calculateAveragePages(books) {
  let sum = 0;
  for (let i = 0; i < books.length; i++) {
    sum += Number(books[i].numberOfPages);
  }
  const average = sum / books.length;
  return average;
}

console.log(`The average number of pages is ${calculateAveragePages(books)}`);

//Task 2

function repeatString(str, n) {
  let newStr = "";
  for (let i = 0; i < n; i++) {
    newStr += str;
  }
  return newStr;
}

const inputStr = prompt("Enter the string");
const inputN = prompt("How many times do you want it to repeat?");

alert(repeatString(inputStr, Number(inputN)));

// //Task 3

function calculateAverage(arr) {
  let sum = 0;
  let num = 0;
  for (const arrNum of arr) {
    sum += Number(arrNum);
    num++;
  }

  const avg = sum / num;
  return avg;
}

let arrInput = prompt(
  "Enter numbers separated by commas (for example: 1, 2, 3)",
);
let arr = arrInput.split(", ");

alert(`Average of the numbers you entered is ${calculateAverage(arr)}`);

// //Task 4

function countEvenNumbers(arr) {
  let evenArr = [];
  for (const arrElem of arr) {
    if (+arrElem % 2 === 0) {
      evenArr.push(+arrElem);
    }
  }
  return evenArr;
}

let input = prompt("Enter numbers separated by commas (for example, 1, 2, 3)");
let array = input.split(", ");
alert(countEvenNumbers(array).join(", "));
