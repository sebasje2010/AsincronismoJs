function* gen(){
    yield 1;
    yield 2;
    yield 3;
}

const genObj = gen();
console.log(genObj.next().value);   //solo itera el primer valor
console.log(genObj.next().value);   //solo itera el segundo valor
console.log(genObj.next().value);   //solo itera el tercer valor


function* iterate(array){
    for(let value of array){
        yield value
    }
}

const it = iterate(['Pedro','Pablo','Juan','Daniel','Cristian']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
