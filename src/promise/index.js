const promise = new promise((resolve, reject) => {
  setTimeout(() => {
    resolve('success');
  }, 1000);
})

const cows =9

const countCows = new Promise((resolve, reject) => {
    if (cows > 10) {
      resolve('success');
    } else {
      reject('There are no enough cows');
    }
})

countCows.then((result) => {
    console.log(result);}).catch((error) => {
    console.log(error);}).finally(() => {
        console.log( 'fin del programa')})