function isDivisibleBy(num, divisor) {
	return num % divisor == 0;
}

function clear() {
	var clearer = " ";
	document.getElementById('paragraph').innerHTML = clearer;
}

function reversestring(string) {
	return string.split('').reverse().join('');
}

function palindromecheck(num) {
	var x = num.toString();
	var y = reversestring(x);
	if (x === y) {
		return true;
	}
	else {
		return false;
	}
}

function multiples() {
	
	var total = 0;

	var inputTaker = document.getElementById('textToChange').value;

	for (var i = 1; i < inputTaker; i++) {
		if (isDivisibleBy(i, 3) || isDivisibleBy(i, 5)) {
			total += i;
			document.getElementById('paragraph').innerHTML = total;
		}
	}
}

function fibonacci() {
	var inputTaker2 = document.getElementById('textToChange2').value;
	var sumEven = 0;
	var x = 2;
	var y = 1;
	var y1 = 1;
	while (x < inputTaker2) {
		if (x % 2 === 0) {
			sumEven += x
		}
		y = y1;
		y1 = x;
		x = x + y;
	}
	document.getElementById('paragraph2').innerHTML = sumEven
}

function primefactors(num) {
	var factors = [];
	for (var i = 2; i <= num; i++) {
		while (isDivisibleBy(num, i)) {
			factors.push(i);
			num = num / i;
		}
	}
	return factors;
}

function prime() {
	var inputTaker3 = document.getElementById('textToChange3').value;
	var factors = primefactors(inputTaker3);
	var answer = factors[factors.length - 1];
	document.getElementById('paragraph3').innerHTML = answer;
}

function palindrome () {
	var answer = 0;
	for (var a = 100; a < 1000; a + 2) {
		for (var b = 101; b < 1000; b + 2) {
			var x = a * b;
			if (palindromecheck(x)) {
				answer = x;
			}
			else {
				x = x;
			}
		}
	}
	document.getElementById('paragraph4').innerHTML = answer;
}