var x = 0
function coolsauce(){
x += 1
console.log(x);
}
setInterval(coolsauce, 10);
if(x > Number.MAX_SAFE_INTEGER){
  x = infinity
}
