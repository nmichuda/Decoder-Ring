// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("Caesar Tests", ()=>{
    it("return false if shift is set to 0", ()=>{
        const message = "test message";
        const shift = 0;
        const actual = caesar(message,shift);


        
        expect(actual).to.be.false;
    });
    it("return false if shift is over 25", ()=>{
        const message = "test message";
        const shift = 26;
        const actual = caesar(message,shift);


        expect(actual).to.be.false;
    });
    it("return false if shift is under -25", ()=>{
        const message = "test message";
        const shift = -26;
        const actual = caesar(message,shift);


        expect(actual).to.be.false;
    });
    
    
    it("properly encodes a message with correct shift", () => {
        const message = "message";
        const shift = 1;
        const actual = caesar(message, shift);
        const expected = "nfttbhf";

        expect(actual).to.equal(expected);
    });

    it("encode ignores spaces", () => {
        const message = "a message.";
        const shift = 3;
        const actual = caesar(message, shift);
        const expected = "d phvvdjh.";

        expect(actual).to.equal(expected);
    });

    it("encode is not case sensitive", () => {
        const message = "A Message";
        const shift = 3;
        const actual = caesar(message, shift);
        const expected = "d phvvdjh";

        expect(actual).to.equal(expected);
    });


    it("encodes with a negative shift", () => {
        const message = "message";
        const shift = -1;
        const actual = caesar(message, shift);
        const expected = "ldrrzfd";

        expect(actual).to.equal(expected);
    });
      
    
    
    it("properly decodes a message", () => {
        const message = "nfttbhf";
        const shift = 1;
        const actual = caesar(message, shift, false);
        const expected = "message";

        expect(actual).to.equal(expected);
    });

    it("decode ignores spaces", () => {
        const message = "d phvvdjh.";
        const shift = 3;
        const actual = caesar(message, shift, false);
        const expected = "a message.";

        expect(actual).to.equal(expected);
    });

    it("decode is not case sensitive", () => {
        const message = "D pHvvdjh";
        const shift = 3;
        const actual = caesar(message, shift, false);
        const expected = "a message";

        expect(actual).to.equal(expected);
    });

    it("decode works with negative shift", () => {
        const message = "ldrrzfd";
        const shift = -1;
        const actual = caesar(message, shift, false);
        const expected = "message";

        expect(actual).to.equal(expected);
    });

})