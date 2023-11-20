const fetchData = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      let success = false;
      if(success){
        resolve('data fetched');
      }
      else{
        reject('data rejected');
      }
    }, 1000);
  });
  
  fetchData.then((data)=>{
    console.log(data);
  }).catch((err)=>{
    console.log(err);
  });