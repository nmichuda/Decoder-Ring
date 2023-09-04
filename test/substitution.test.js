// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution tests", () => {
    
      it("return false if no alphabet", () => {
        const message = "message";
        const actual = substitution(message);
        expect(actual).to.be.false;
      });
  
      it("return false if alphabet isnt 26 letters", () => {
        const message = "message";
        const alphabet = "bad";
        const actual = substitution(message, alphabet);
        expect(actual).to.be.false;
      });
  
      it("return false if alhpabet doesnt contain only unique characters", () => {
        const message = "message";
        const alphabet = "aaaaaaaaaaaaaabbbbbbbbbbb";
        const actual = substitution(message, alphabet);
        expect(actual).to.be.false;
      });
   
  
    
      it("properly encodes test message", () => {
        const message = "message";
        const alphabet = "plmoknijbuhvygctfxrdzeswaq";
        const actual = substitution(message, alphabet);
        const expected = "ykrrpik";
  
        expect(actual).to.equal(expected);
      });
  
      it("encode works with unique alphabet characters", () => {
        const message = "message";
        const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
        const actual = substitution(message, alphabet);
        const expected = "ysii.rs";
  
        expect(actual).to.equal(expected);
      });
  
      it("encoding keeps spaces", () => {
        const message = "my message";
        const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
        const actual = substitution(message, alphabet);
        const expected = "yp ysii.rs";
  
        expect(actual).to.equal(expected);
      });
    
  
    
      it("properly decodes message", () => {
        const message = "ykrrpik";
        const alphabet = "plmoknijbuhvygctfxrdzeswaq";
        const actual = substitution(message, alphabet, false);
        const expected = "message";
  
        expect(actual).to.equal(expected);
      });
  
      it("decoding works with all characters", () => {
        const message = "ysii.rs";
        const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
        const actual = substitution(message, alphabet, false);
        const expected = "message";
  
        expect(actual).to.equal(expected);
      });
  
      it("decoding preserves spqaces", () => {
        const message = "yp ysii.rs";
        const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
        const actual = substitution(message, alphabet, false);
        const expected = "my message";
  
        expect(actual).to.equal(expected);
      });
    });
  