  const haciendoAlgoAsync = () =>{
      return new Promise ((resolve, reject) =>{
          (true)
          ?   setTimeout(() => resolve('Do Something Async'),3000)
          : reject(new Error('TEst Error'));
      });
  }

  const haciendoAlgo = async() =>{
      const algunasCosas = await haciendoAlgoAsync();
      console.log(algunasCosas);
  }

  console.log('Before');
  haciendoAlgo();
  console.log('After');

  const otraFuncion = async () =>{
      try{
        const algunasCosas = await haciendoAlgoAsync();
        console.log(algunasCosas);
      }catch(error){
          console.error(error);
      }
  }

  console.log('Before 1');
  haciendoAlgo();
  console.log('After 1');