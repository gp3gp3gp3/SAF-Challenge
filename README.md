# SAF CODING CHALLENGE

The challenge for this code was to take two text files and output into the console.

To run this code clone this repository and run `npm install`

To run tests run `npm test`

To run build run `npm start`

---

Initially when I saw the project it seemed very straightforward.  I immediately started running code in the browser to try and get some ideas on how to approach iterating through the array and getting the correct return values.  While the positive month and best months were easy to figure out, the cumulative return was of course not as straightforward.  After taking some time to research how a cumulative return is computed, I figured out the proper way to use the reduce function to get the correct number.

Once I had that worked out, I then went to writing my initial node environment and my test suite for the server side Javascript.  After working out some kinks surrounding rounding off amounts, I wrote all the proper tests and got the code to run correctly outputting the right information.

I had planned on also creating a ruby file with Rspec with the same code after running it in Javascript, but I had reached the allotted 3 hours to complete this.
