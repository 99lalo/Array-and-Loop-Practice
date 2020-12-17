var arrayOfCelsiusValues = [-2,34,56,-10];

var arrayOfFahrenheitValues = arrayOfCelsiusValues.map(function(value){
	let farenheit = ((value * (9/5)) + 32);
    return farenheit;
	
	
});

console.log(arrayOfFahrenheitValues);