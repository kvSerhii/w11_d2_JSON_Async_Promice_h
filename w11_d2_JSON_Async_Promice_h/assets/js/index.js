'use strict'

//#region  JSON
/* const user = {
    name: 'name',
    surname: 'surname',
    age: 20,
    isMale: false,
};

const jsonUser = JSON.stringify(user);

const parseUser = JSON.parse(jsonUser);

console.log(user);
console.log(jsonUser);
console.log(parseUser);

const users = [];
for (let i = 0; i < 10; i++) {
    users.push({
        'name': `name ${i}`,
        'surname': `surname ${i}`,
    })
}
const jsonUsers = JSON.stringify(users);
const parseUsers = JSON.parse(jsonUsers);

console.log(users);
console.log(jsonUsers);
console.log(parseUsers); */
//#endregion JSON

//#region Async intro
/* const square = document.getElementById('item');
let deg = 0;

setInterval(rotateFun, 1000 / 60);

function rotateFun() {
    square.style.transform = `rotate(${++deg}deg)`;
}

const button = document.getElementsByTagName('button')[0];
button.onclick = function() {
    alert();
}; */
//#endregion Async

//#region Async Promise Examples
/* Promise:
    - pending (?) 
    - resolve (fulfilled)
    - rejected
    */

/* const isIHaveEnoughMoney = true;

// promise
const buyNewCar = new Promise(
    (resolve, reject) => {
        if (isIHaveEnoughMoney) {
            const car = {
                model: "Ford",
                color: "black",
                year: 1969,
                price: 61000,
            };
            resolve(car);
        } else {
            const reason = new Error("Unfortunately");
            reject(reason);
        }
    }
);

async function BuyCar() {
    try {
        console.log('before I know how much money I have');
        let mycar = await buyNewCar;
        console.log('after I know');
    } catch (error) {
        console.log(error.message);
    }
}

(async() => {
    await BuyCar();
})(); */

// var1
/* const promise1 = new Promise(myFun1);

function myFun1(resolve, reject) {
    console.log("Hello");
} */

// var2
/* const promise2 = new Promise(
    function(resolve, reject) {
        console.log("Hello");
    }
); */
//#endregion Async

//#region Promise Practice
/* const check = true;
const promise11 = new Promise(func1);

function func1(resolve, reject) {
    if (check) {
        resolve(alert("true"));
    } else {
        reject(alert("false"));
    }
} */

/* const p1 = Promise.resolve(700);
const p2 = Promise.resolve(true);
const p3 = Promise.resolve("700");
const p4 = Promise.resolve(Symbol());
const p5 = Promise.resolve(null);
const p6 = Promise.resolve(undefined);
const p7 = Promise.resolve({});

//#region Async function
// use async await
async function logData() {
    const promiseValue1 = await p1;
    console.log(promiseValue1);
    const promiseValue2 = await p2;
    console.log(promiseValue2);
    const promiseValue3 = await p3;
    console.log(promiseValue3);
    const promiseValue4 = await p4;
    console.log(promiseValue4);
    const promiseValue5 = await p5;
    console.log(promiseValue5);
    const promiseValue6 = await p6;
    console.log(promiseValue6);
    const promiseValue7 = await p7;
    console.log(promiseValue7);
}

const p8 = Promise.reject(700);
p8
    .then(console.log)
    .catch(console.error);

async function logData2() {
    try {
        const promiseValue8 = await p8;
        console.log(promiseValue8);
    } catch (e) {
        console.error(e);
    }
}

logData();
logData2(); */



//#endregion Async function

//#endregion Promise Practice


//#region Read JSON

fetch('../../users.json')
    .then(response => response.json())
    .then(appendUsersToList)
    .catch(console.error);

function appendUsersToList(users) {
    const usersListElem = document.getElementById('usersList');
    users.forEach(element => {
        user => {
            usersListElem.appendChild(createCard(user));
        }
    });
}

function createCard(user) {
    const userListItem = document.createElement('li');
    usersListElem.setAttribute('id', user.id);
    usersListElem.classList.add('userListItem');
    const userIm = document.createElement('img');
    userIm.setAttribute('src', user.imageSrc);
    const userImgCont = document.createElement('div');
    userImgCont.classList.add(userIm);
    const userFullNameElem = document.createElement('h3');
    userFullNameElem.classList.add('userFullName');
    userFullNameElem.innerText = `user.name user.surname`;
    return userListItem;
}

//#endregion Read JSON