console.log("******FOR loop example**********")
var dolls = ["Elsa", "Anna", "Barbie", "Sophia"];
var stuffies = ["Penguin", "Giraffe", "Celestia", "Owlie"];
var toys = [dolls, stuffies];
console.log("my solution")
for(var i=0; i<toys[0].length; i++)
	{
		console.log(toys[0][i]);
}
for(var j=0; j<toys[1].length; j++)
	{
		console.log(toys[1][j]);
}

console.log("*********WHILE loop example*************")
x=99;
while(x>0){
	console.log(x + " bottles of beer on the wall, " + x + " bottles of beer...");
	x=x-1;
	console.log("Take one down, pass it around, " + x + " bottles of beer on the wall.")
}
console.log("Go Home!");

console.log("*********SCOPE example*************");
console.log("Declare global var N1 is 15");
var N1 = 15;
function some_V(){
	console.log("Global Variable inside global function is: " + N1);
}
function some_Z(){
	var N1 = 20;
	console.log("Local Variable inside local function is: " + N1);
	return N1;
}
console.log("Checking outside local function for value of N1: " + N1);
console.log("Checking outside local with return of N1: " + some_Z());
console.log("Checking outside for N1 global again: " + N1);

