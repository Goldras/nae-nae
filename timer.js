var x = 0
function unitTimer(){
x += 1
console.log(x);
}
setInterval(unitTimer, 10);
if(x > Number.MAX_SAFE_INTEGER){
  x = infinity
}
