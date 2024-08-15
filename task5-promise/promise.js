const fetchUSer = new Promise((resolve, reject) => {
    // producer code
    let user = {
        fname: 'roshi',
        lname: 'gunda'
    }
    if (user) {
        if (user.admin) {
            resolve(`${fname} is the admin`);
        } else {
            reject('is not the admin');
        }
    } else {
        reject(new Error(`${fname} user is not defined`));
    }
})

// consumer code
fetchUSer.then((response) => console.log(response)).catch((error) => console.log(error))

console.log('----------------------------------------------')

///////////////// create a promise function to read data from an array

const arrData = [
    {id: 1, name: 'likhi'},
    {id: 2, name: 'roshi'},
    {id: 3, name: 'devki'}
];

const fetchData = (id) => {
    return new Promise((resolve, reject) => {
        const data = arrData.find(item => item.id == id);
        if (data) {
            resolve(data);
        } else {
            reject(new Error('Data is invalid'))
        }
    });
};

fetchData(3).then(response => console.log(response)).catch(error => console.log(error))
fetchData(6).then(response => console.log(response)).catch(error => console.log(error))

console.log('----------------------------------------------')

/////////////////// simple promise with setTimeOut

const setTime = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("promise is resolved")
    }, 2000);
    // 2000 = 2000 millisec ==> 2 sec ==> the code will be executed after specified time i.e 2 sec here
});

setTime.then(response => console.log(response));

//////////////////// Chaining promises

const chainPromise = new Promise ((resolve, reject) => {
    resolve(1)
});

chainPromise
.then(response => {
    console.log(response);
    return response*2;
})
.then(response => {
    console.log(response);
    return response*3;
})
.then(response => {
    console.log(response);
    if (response === 6) {
        throw new Error('something is wrong');
    }
})
.catch(error => console.log(error))

////////////

const prom = new Promise ((resolve, reject) => {
    // reject('this promise is rejected'); --> shows that the promise is rejected as a string given
    reject(new Error('this promise is rejected')); // gives that the promise is rejected as an error stmt given but not actually an error in code
});

prom.then(response => console.log(response)).catch(error => console.log(error))