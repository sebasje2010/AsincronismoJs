const fnAsync = () => {
  return new Promise((resolve, reject) => {
    (true)
        ? setTimeout(() => resolve('Async successful'), 2000)
        : reject(new Error('Async failed'));
    });
}

const anotherAsync = async () => {
    const something = await fnAsync();
    console.log(something); // Async successful tercero
    console.log('Hello'); //Cuarto
}
console.log('Started'); //Primero
anotherAsync();
console.log('Finished'); //Segundo