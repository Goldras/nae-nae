var x = 0
function coolsauce(){
x += 1
if(x > Number.MAX_SAFE_INTEGER){
    x = infinity
  }
}
setInterval(coolsauce, 10);