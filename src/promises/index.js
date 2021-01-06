const somethinWillHappen = ()=>{
    return new Promise((resolve, reject)=>{
        if(true){
            resolve('hey!');
        }else{
            reject('honooo!');
        }
    })
}

somethinWillHappen()
.then(response => console.log(response))
.catch(err => console.error(err));


const somethinWillHappen2 = () =>{
    return new Promise((resolve, reject)=>{
        if(true){
            setTimeout(()=>{
                resolve('True');
            }, 2000)
        }else{
            const error = new Error ('Wooooops!');
            reject(error);
        }
    })
}

somethinWillHappen2()
.then(response => console.log(response))
.catch(err => console.error(err));


Promise.all([somethinWillHappen(), somethinWillHappen2()])
.then(response=>{
    console.log('Array of results', response)
})
.catch(err =>{
    console.error(err);
})