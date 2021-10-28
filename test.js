//Write a program that takes in an unlimited number of command line arguments
//and prints the sum of them. IF any argument is not a who;e number or is negative do not add to the sum.

//process.argv
// the argument that are processed into
console.log(process.argv);
//1. is the node version
//2. the file location
// REPL from the terminal use 'node'
const args = process.argv;
const shiftedValue = args.shift();
//console.log(args)
//args.shift(); //remove the first element from the array and deletes it
//open zshell terminal
//args.shift();
const sliced = args.slice(2);
console.log(sliced);
//console.log(process.argv)
//const input = [ '1', '5', '10'];//

let sum = 0;

for (const num of sliced) { //make sure to declare the variable as a const
  const converted = Number(num);// commenting the variable as a name, convert to a number
  if (Number.isInteger(converted) > 0) { // converting to a whole number and not a negative number
    sum += converted;
  }
}
console.log(sum);
//git push origin master
//git remote -v
//git


