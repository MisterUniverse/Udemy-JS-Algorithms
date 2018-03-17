// Write a function that takes in a string for your first name, a string for your last name and returns them formatted in a sentence.

```function formatName(first, last) {
	// I use 3 different ways
	let say = "Hi my name is ";
	console.log(`Hi my name is ${first} ${last}`);
	console.log("Hi my name is " + first + " " + last + ".");
	console.log(say.concat(first,'', last, '.'));
}
formatName('Desmond', 'Harris');
```
