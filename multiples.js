
function solution(number){
  const m3 =[]
  const m5 = []
  let sum;
  for(let i=1;i<number;i++){
      m3.push(3*i)
  }
  for(let i=1;i<number;i++){
      m5.push(5*i)
  }
  sum = m3.concat(m5)
  sum = new Set(sum)
  const result = [...sum]
 
  return result.filter(num=>num<number).reduce((acc,num)=> acc+num,0)
}
console.log(solution(10))