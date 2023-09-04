// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    if(!alphabet || alphabet.length !== 26){ //if there is no alphabet or the length is not exactly 26, return false.
      return false;
    }
   // console.log(alphabet.replaceAll("c",""));
    for(let i = 0; i<alphabet.length; i++){ //iterate through the alphabet
    
      const tempAlphabet = alphabet.replace(alphabet[i],""); //for each letter in the alphabet provided, create a temp string that has all occurances of each character deleted
      
      if(tempAlphabet.includes(alphabet[i])){ //if the difference in length is greater than one (I.E. more than one character was deleted), there is a duplicate in alphabet. return false
        return false;
      }

    }
    



    let output = ""; //create output string
    const lowerInput = input.toLowerCase(); //set input to lowercase
    if(encode){ //if encode is true, run encode branch
      for(let i=0;i<input.length;i++){
        if(input[i]===" "){ //if character is a space, dont encore and put straight into output string
          output += input[i]
        }
        else{
        const tempChar = alphabet[(lowerInput.charCodeAt(i)-97)]; //get the character code for the character, subtract 97 (because lower case alphabeticals are 97 to 122), then get the character associated with that index in the input alphabet
        output += tempChar; //add translated character to the output string.
        }

      }
      //console.log(output);
      return output;
    }
    else{ //if encode is false, do decode branch
      for(let i=0; i<input.length;i++){
        if(input[i] === " "){ //ignore spaces
          output += input[i];
        }
        else{
          const tempIndex = alphabet.indexOf(input[i]); //set temp variable to be the index that character to be decoded is at in the provided alphabet
          const tempChar = String.fromCharCode(tempIndex + 97); //convert index to a character by adding 97 to the index, then converting to a character using that as unicode
          output += tempChar;
          //console.log(tempChar);
        }
      }
      return output;
    }
}

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
