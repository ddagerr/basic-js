module.exports = function transform(arr) {
  if(!Array.isArray(arr)) {
    throw new Error();
  }
    let result=[]
    let disc=0
    for (let i=0; i<arr.length;i++){
      if(arr[i]=="--discard-next"){
         result.push(undefined)
         i++
      }
        else{
          if(arr[i]=="--discard-prev"){
                 result.pop()
          } 
            else{
              if(arr[i]=="--double-prev"){
                if(arr[i-1]!=disc){
                  result.push(result[result.length-1])
                }
              } 
                else{    
                  if(arr[i]=="--double-next"){
                    if(arr[i+1]!=disc){
                      result.push(arr[i+1])
                    }
                  } else result.push(arr[i])
  
                }
            }
        }
    }
    const res = result.filter(function(x) {
      return x !== undefined;
    });
    return res
}
