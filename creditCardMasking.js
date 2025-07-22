function maskify(cc) {
if(cc.length<4){
    return cc
}
const unmask = cc.slice(-4)
const mask = cc.slice(0,cc.length-4)
return '#'.repeat(mask.length)+unmask
}
console.log((maskify(('4556364607935616'))))