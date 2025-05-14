//spy (watch a file is working or something is working or not)
//In Jest, spying means watching a real function to see how it’s 
// used during a test — without replacing its actual implementation (unless you want to)

function myFunction() {
    console.log("Original function");
  }
  
  module.exports = { myFunction }; 