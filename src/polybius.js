// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    // your solution code here
    let output = ""; //initialize an output string
    const arrayKey = ["A","F","L","Q","V","B","G","M","R","W","C","H","N","S","X","D","I/J","O","T","Y","E","K","P","U","Z"]; //create an array of letters that will be used to decode the message
    //console.log(!isNaN(input.replace(" ",""))); //was going to have function figure out whether input needed to be decoded or not but then realized I am an idiot
    if(encode){ //if encode is true, run the encode branch
      const capInput = input.toUpperCase(); //set the input the all caps to make it easier
      for(let i=0; i<capInput.length; i++){ //go through all characters in the input
        const tempChar = capInput[i]; //set temp variable to each letter in the string
        if(tempChar === " "){ //if the character is a space, ignore and add to the output string
          output += tempChar;
        }
        else{ //if character is not a space, encode
          const tempIndex = arrayKey.findIndex((index)=> index.includes(tempChar)) + 1; //set temp variable to the index in the arrayKet that the character is at +1 because the array is 1 based, not 0 based.
          //console.log(tempIndex);
          let row = tempIndex % 5; //set row variable to equal the remainder when divided by 5.
          if(row === 0){ //if the remainder is 0, it should be in the 5th column, so set row to 5.
            row = 5;
          }
          const column = (tempIndex - row) / 5 + 1; //set column equal to the index - the row (to get a divisible by 5 number), then add 1 because its a 1 based system.
          output += column; //output is +equal to the column followed by the row
          output += row;
        }
      }
   }
   else{ //if encode is false, run the decode branch
    if(input.replace(" ","").length % 2 ===1){ //if the length is divisible by 2 without spaces, it is valid. else return false.
      return false;
    }
    for(let i=0; i<input.length; i++){
      if(input[i]===" "){ //ignore spaces and send them straight to the output
        output += input[i];
      }
      else{
      const tempChar = input[i] +  input[i+1]; //set a temp variable to the i and i+1 characters
      const arrIndex = ((parseInt(tempChar[0]) - 1 ) * 5) + (parseInt(tempChar[1]) - 1); //make an arrIndex variable equal to the position equivalent of the input digits (2 at a time). reverse of the encode.
      i++; //increment i inside for loop so that the loop only grabs every two digits.
      output += arrayKey[arrIndex]; //add the digit at the arrIndex position of the key to the output
     // console.log(arrayKey[arrIndex]);
      }
    }
   }


   // console.log(output);
    
    return output.toLowerCase(); //convert output to lowercase. started out with everything in upper case and am too lazy to change it all to lowercase.
  }

  return {
    polybius,
  };
})();



module.exports = { polybius: polybiusModule.polybius };
