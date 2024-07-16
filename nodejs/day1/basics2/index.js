const crypto = require('crypto');

const args=process.argv.slice(2);
// console.log(args);
const operation=args[0];
// console.log(operation);

function calculation() {
    if (operation==="add") {
        if (args.length < 3 ) {
            console.log("please type 2  number");
            return;
        }
        console.log(Number(args[1]) + Number(args[2]))
    }
   else if (operation==="sub") {
        if (args.length < 3 ) {
            console.log("please type 2  number");
            return;
        }
        console.log(Number(args[1]) - Number(args[2]))
    }
   else if (operation==="mult") {
        if (args.length < 3 ) {
            console.log("please type 2  number");
            return;
        }
        console.log(Number(args[1]) * Number(args[2]))
    }
   else if (operation==="divide") {
        if (args.length < 3 ) {
            console.log("please type 2  number");
            return;
        }
        console.log(Number(args[1]) / Number(args[2]))
    }
   else if (operation==="sin") {
        if (args.length < 2 ) {
            console.log("please type 1  number");
            return;
        }
        console.log(Math.sin(Number(args[1])))
    }
   else if (operation==="cos") {
        if (args.length < 2 ) {
            console.log("please type 1  number");
            return;
        }
        console.log(Math.cos(Number(args[1])))
    }
   else if (operation=="tan") {
        if (args.length <= 2 ) {
            console.log("please type 1  number");
            return;
        }
        console.log(Math.tan(Number(args[1])))
    }

    else if (operation === "random") {
        if (args.length < 2) {
            console.log("Provide length for random number generation.");
            return;
        }
        const length =parseInt(args[1])
        const randomBytes=crypto.randomBytes(length);
        console.log(randomBytes.toString('binary'));



    }

    else{
        console.log("enter a valid num and operation between sin cos tan add sub mult divide")
    }
}
calculation()

