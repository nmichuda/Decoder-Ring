// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius");


describe("polybius() submission tests written by Thinkful", () => {
    
      it("properly encodes a message", () => {
        const message = "message";
        const actual = polybius(message);
        const expected = "23513434112251";
  
        expect(actual).to.equal(expected);
      });
  
      it("i and j both become 42", () => {
        const message = "jiggle";
        const actual = polybius(message);
        const expected = "424222221351";
  
        expect(actual).to.equal(expected);
      });
  
      it("ignores spaces", () => {
        const message = "my message";
        const actual = polybius(message);
        const expected = "2345 23513434112251";
  
        expect(actual).to.equal(expected);
      });
    
  
    
      it("correctly decodes a message", () => {
        const message = "23513434112251";
        const actual = polybius(message, false);
        const expected = "message";
  
        expect(actual).to.equal(expected);
      });
  
      it("42 becomes both i and j", () => {
        const message = "424222221351";
        const actual = polybius(message, false);
  
        expect(actual).to.include("i");
        expect(actual).to.include("j");
      });
  
      it("decode ignores spaces", () => {
        const message = "2345 23513434112251";
        const actual = polybius(message, false);
        const expected = "my message";
  
        expect(actual).to.equal(expected);
      });
  
      it("returns false if numbers are odd", () => {
        const message = "123456789";
        const actual = polybius(message, false);
  
        expect(actual).to.be.false;
      });
    });

  