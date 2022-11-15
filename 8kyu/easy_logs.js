// Add two logs with base X, with the value of A and B. Example log A + log B 
// where the base is X.

function logs(x , a, b){
	return Math.log(b) / Math.log(x) + Math.log(a) / Math.log(x)
  
  // OR
  // return (Math.log(a*b) / Math.log(x))
}