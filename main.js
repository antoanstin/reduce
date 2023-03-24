const numbers=[1,2,3,4,5];
var a=numbers.reduce(function(a,b)
{
	return a+b*2;
},10);
console.log(a);