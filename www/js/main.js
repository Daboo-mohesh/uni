function calculate(){
			var num1 = parseInt(document.querySelector('#number1').value);
			var num2 = parseInt(document.getElementById('number2').value);
			var operator = document.getElementById('dropdown').value;
			var output;
			var result;
			
			if(operator == "1"){
				output = num1 + num2;
				result = num1+" + "+num2
			}else if(operator == "2"){
				output = num1 - num2;
				result = num1+" - "+num2
			}else if(operator == "3"){
				output = num1 * num2;
				result = num1+" * "+num2
			}else if(operator == "4"){
				output = num1 / num2;
				result = num1+" / "+num2
			}
			
			document.getElementById('result').innerHTML = result;
			document.getElementById('answer').innerHTML = output;	
}