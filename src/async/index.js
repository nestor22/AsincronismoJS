const doSomethingAsync = ()=>{
    return new Promise((resolve, reject)=>{
        (true)
        ? setTimeout(()=>resolve('do something asyc'),3000)
        :reject(new Error ('Test Error'))
    })
}


const doSomethingAsync2 = async()=>{
    const something = await doSomethingAsync();
    console.log(something);
}

console.log('Before');
doSomethingAsync2();
console.log('after')

const anotherFunction = async()=>{
    try{
        const something = await doSomethingAsync();
        console.log(something)

    }catch(error){
        console.error(error)
    }
    
}
console.log('Before');
anotherFunction();
console.log('after')
