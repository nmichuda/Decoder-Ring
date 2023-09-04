// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here
    if(!shift || shift > 25 || shift < -25){ //if the shift is more or less than 25 or is not present, return false
      return false;
    }
    let actualShift = shift //set variable to shift
    if(!encode){ //if encode is false, set the shift value to be the negative of the input so that it decodes instead
      actualShift = shift * -1;
    }

    if(actualShift < 0){ //if the shift is less than 0, add 26 to set it to the positive shift equivalent
      actualShift = actualShift + 26;
    }
    let output = ""; //initialize an output string
    let lowerInput = input.toLowerCase(); //set the input to lowercase
    for(let i=0;i<lowerInput.length;i++){
      
      let coded = lowerInput.charCodeAt(i); //grab the unicode code for each character
      if(coded > 96 && coded < 123){ //if the unicode is more than 96 or less than 123 (IE lowercase a to lowercase z)
        output += String.fromCharCode((((coded - 97 + actualShift) % 26 ) + 97)); //add the string conversion of the shifted unicode to the output string
      }
      else{ //if character is not a lowercase letter, just add to output string instead of shifting
        output += lowerInput[i];
      }
      
    }
    
    
    return output;
    
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
  