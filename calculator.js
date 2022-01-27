const add = function(a,b) {
    return a + b;
        
    };
    
    const subtract = function(a,b) {
      return a - b;
        
    };
    
    
    const sum = function(numbers) {
      let x = numbers.reduce(function(prev,curr){
      return curr + prev;
    },0);
        return x;
    };
    
    const multiply = function(array) {
      var sum = 1;
      for (var i = 0; i < array.length; i++) {
          sum = sum * array[i];
      }
      return sum;
    }
    
    
    const power = function(a,b) {
      return Math.pow(a,b)
    
    };
    /*
    const factorial = function(number) {
        let result = number;
      if (number === 0 || number === 1)
        return 1;
    
      while (number > 1 ){
        number--;
        result *= number
      }
      return result;
    };
    */
    const divide = function(a,b){
      return a % b;
}
//let numKey = document.querySelector("")
//numKey.addEventListener("click", function(e){


function displayClick(Text){
 /* const display = document.querySelector(".display");

  const content = document.createElement('div');
  content.classList.add('content');
  content.textContent = String;
  display.appendChild(content);
*/
  //const display = document.getElementById('.display');
  //display.innerHTML += (a);

  const display = document.querySelector('.display');
  let node = document.createTextNode (Text)
  display.appendChild(node);
}

  function clearContent(elementID) {
    document.querySelector(elementID).innerHTML = "";
}

function solve(){

}