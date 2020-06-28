const prompt = require('prompt-sync')();

let sum = 0;
let choice = "yes"
while(choice === "yes"){
	console.log("Hey there, We have the following items in our shop:\n")
	console.log("1) Soap - 10 rupees/item\n" +
  		"2) Tooth Paste 20 rupees/item \n" +
  		"3) Ice cream 30 rupees/item")
	let item = prompt('What do you want to purchase today ?');
	let qty = prompt('How many ? ');
	x = item == 1 ? 10*qty : (item == 2 ? 20*qty : 30*qty)
	sum+= x
	choice = prompt('Anything else (yes/no)?')
	console.log(choice)
}
console.log('calculating your bill..'+
	`your bill is ${sum}`);
