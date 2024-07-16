const crypto = require('crypto');

// Example command-line arguments
const args = process.argv.slice(2);
const operation = args[0];

function calculation() {
    if (operation === "random") {
        if (args.length < 2) {
            console.log("Provide length for random number generation.");
            return;
        }

        // Step 1: Parse length
        const length = parseInt(args[1]);
        console.log(`Requested length for random bytes: ${length}`);

        // Step 2: Generate random bytes
        const randomBytes = crypto.randomBytes(length);
        console.log(`Generated random bytes buffer: ${randomBytes}`);

        // Step 3: Convert to binary string
        const binaryString = randomBytes.toString('binary');
        console.log(`Converted to binary string: ${binaryString}`);
    } else {
        console.log("Please enter a valid operation: random");
    }
}

calculation();
