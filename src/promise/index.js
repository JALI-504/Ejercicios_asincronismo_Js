const algoVaPasar = () =>{
    return new Promise((resolve, reject)=>{
        if(true){
            resolve('Heyyy!');
        }else{
            reject('Whooops!');
        }
    });
};

algoVaPasar()
    .then(response => console.log(response))
    .catch(error =>console.log(error));

const algoVaPasar2=()=>{
    return new Promise((resolve, reject) =>{
        if(true){
            setTimeout (() =>{
                resolve('True')
            }, 2000);
        }else{
            const error = new Error('Wooops!');
            reject(error);
        }
    });
}

algoVaPasar2()
    .then(response => console.log(response))
    .catch(error =>console.log(error));

    Promise.all([algoVaPasar(), algoVaPasar2()])
        .then(response => {
            console.log('Array of results', response);
        })
        .catch(err =>{
            console.error(err);
        })