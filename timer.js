var x = 0
function coolsauce(){
x += 0.001
console.log(x);
}
setInterval(coolsauce, 10);
if(x > Number.MAX_SAFE_INTEGER){
  x = infinity
}
