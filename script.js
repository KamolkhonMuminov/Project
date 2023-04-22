// const arr = [1, 2, 3];
// console.log(arr[1]);

// const mass = ["Kamolxon", "Muminov", "Ziyodjon o'g'li"];
// console.log(mass[2]);


// const obj = {
//     'Anna': 500,
//     'Alice': 800
// }

// const storeName = 'My cool Store';
// const storeDescription = {
//     open: true,
//     budget: 10000,
//     employees: ['Kamal', 'Mumin'],
//     products: {
//         water: 100,
//         bread: 250
//     }
// }


// const result = confirm("Are you here?");
// console.log(result);

// const answer = +prompt("Are you 18 years old?", "18");
// console.log(answer + 5);


// const answers = [];
// answers[0] = prompt("What is your name?");
// answers[1] = prompt("What is your Second name?");
// answers[2] = prompt("What is your age?");

// document.write(answers);

// const category = 'toys';
// console.log(`https://someurl.com/${category}/5`);

// const user = "Kamal";
// alert(`Hello, ${user}`);

// console.log('arr' + "- object");

// let incr = 10,
//      decr = 10;

//     //  ++incr;
//     //  --decr;

// // console.log(++incr);
// // console.log(--decr);

// // console.log(5%2);
// // console.log(4*2 == 8)

// const isChecked = true,
//       isClose = false;
// console.log(isChecked || isClose);

const numberOfFilms = +promt("How many films did you watch?" '');

const personalMoviesDB = {
    count: 'numberOfFilms',
    movies: {},
    actors: [],
    genres: [],
    privat: false
};
const a = promt('Your last watched movie' ''),
      b = +promt('What is your rate' ''),
      c = promt('Your last watched movie' ''),
      d = +promt('What is your rate' '');

personalMoviesDB.movies[a] = b;
personalMoviesDB.movies[c] = d;

console.log(personalMoviesDB);