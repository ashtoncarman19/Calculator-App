  /*
  This function allows whatever button you click 
  to add that operator or number to the div with the class 'display'
  whithout creating a new div
  */
  function displayClick(Text){
    const display = document.querySelector('.output');
    let node = document.createTextNode (Text)
    display.appendChild(node);
}

  /*
  This function clears the contents of the div class 'output'
  */
  function clearContent(elementID) {
    document.querySelector(elementID).innerHTML = "";
}

  /*
  This function deletes the latest number or symbol in
  the contents of the div class 'output'
  */
  function backspace(){
    document.querySelector('.output').innerHTML.slice(0, -1)
    }
  /*
  This function splits the contents of the div 'output' wherever the operator is placed,
  then takes the two seperate strings that are created and converts them into numbers
  */
  function getTwoNumbers(){
    let display = document.querySelector('.output').innerHTML;
    let firstNumber = parseFloat(display, 10)
    console.log(firstNumber);

    /*
      All of these if statements are searching for which operator was used
      in the equation that was typed into the 'output' div, 
      and depending on which operator was used it performs the calculation that was entered
    */
      if (display.indexOf('+') > -1)
  {
        secondPart = display.substring(display.indexOf("+")+ 1);
        secondNumber = parseFloat(secondPart, 10);
        result = parseFloat(firstNumber + secondNumber)
    }
  
      if (display.indexOf('-') > -1)
  {
        secondPart = display.substring(display.indexOf("-")+ 1);
        secondNumber = parseFloat(secondPart, 10);
        result = parseFloat(firstNumber - secondNumber)
    }

      if (display.indexOf('x') > -1)
  {
        secondPart = display.substring(display.indexOf("x")+ 1);
        secondNumber = parseFloat(secondPart, 10);
        result = parseFloat(firstNumber * secondNumber)
    }
    
      if (display.indexOf('÷') > -1)
  {
        secondPart = display.substring(display.indexOf("÷")+ 1);
        secondNumber = parseFloat(secondPart, 10);
        result = parseFloat(firstNumber / secondNumber).toPrecision(7)
    }

      if (display.indexOf('^') > -1)
  {
        secondPart = display.substring(display.indexOf("^")+ 1);
        secondNumber = parseFloat(secondPart, 10);
        result = Math.pow(firstNumber,secondNumber)
    }
  
  console.log(secondNumber)
  console.log(result)

  /*
      This displayes the new result in the 'display' div 
  */
  document.querySelector('.output').innerHTML = result

}
