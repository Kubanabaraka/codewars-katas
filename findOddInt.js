
 
  const occur = (arr)=>{
 const count = {}
 
 arr.forEach(num=>{
     count[num]=(count[num]|| 0 ) + 1
 })
   const oddOcc = Object.keys(count).filter(num=>count[num]%2!==0).map(Number)
   return oddOcc.length > 0 ? Number(oddOcc[0]) : undefined;
  }
  
console.log(occur([1,1,2]))//2