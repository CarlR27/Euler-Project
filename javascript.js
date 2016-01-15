//Index functions to be called later

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

function primecheck(num) { // Not currently used
	if (isNaN(num) || !isFinite(num) || num % 1 || num < 2) {
		return false;
	};
	if (num % 2 == 0) {
		return (num == 2);
	}
	var m = Math.sqrt(num);
	for (var i = 3; i <= m; i += 2) {
		if (num % i == 0) {
			return false;
		}
	}
	return true;
}

function sumofsquares(num) {
	var sum = 0;
	for (var a = 1; a <= num; a++) {
		sum = sum + (a*a);
	}
	return sum;
}

function square(num) {
	var sum = 0;
	for (var a = 1; a <= num; a++) {
		sum = sum + a;
	}
	return sum = (sum*sum);
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

// Begin called functions for the buttons.

function multiples() { // Problem 1
	
	var total = 0;
	var starttime = new Date().getTime();
	var inputTaker = document.getElementById('textToChange').value;

	for (var i = 1; i < inputTaker; i++) {
		if (isDivisibleBy(i, 3) || isDivisibleBy(i, 5)) {
			total += i;
			document.getElementById('paragraph').innerHTML = total;
		}
	}
	var endtime = new Date().getTime();
	var calculatetime = (endtime - starttime);
	document.getElementById('paragraph_1').innerHTML = calculatetime;
}

function fibonacci() { // Problem 2
	var inputTaker2 = document.getElementById('textToChange2').value;
	var starttime = new Date().getTime();
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
	document.getElementById('paragraph2').innerHTML = sumEven;
	var endtime = new Date().getTime();
	var calculatetime = (endtime - starttime);
	document.getElementById('paragraph2_1').innerHTML = calculatetime;
}

function prime() { // Problem 3
	var inputTaker3 = document.getElementById('textToChange3').value;
	var starttime = new Date().getTime();
	var factors = primefactors(inputTaker3);
	var answer = factors[factors.length - 1];
	document.getElementById('paragraph3').innerHTML = answer;
	var endtime = new Date().getTime();
	var calculatetime = (endtime - starttime);
	document.getElementById('paragraph3_1').innerHTML = calculatetime;
}

function palindrome () { // Problem 4
	var answer = 0;
	var largex = 0;
	var largey = 0;
	var starttime = new Date().getTime();
	for (var a = 100; a < 1000; a++) {
		for (var b = 101; b < 1000; b++) {
			var x = a * b;
			if (palindromecheck(x)) {
				if (x > answer) {
					answer = x;
					largex = a;
					largey = b;
				}
				else {
					answer = answer;
				}
			}
			else {
				x = x;
			}
		}
	}
	document.getElementById('paragraph4').innerHTML = answer;
	document.getElementById('paragraph4_1').innerHTML = largex;
	document.getElementById('paragraph4_2').innerHTML = largey;
	var endtime = new Date().getTime();
	var calculatetime = (endtime - starttime);
	document.getElementById('paragraph4_3').innerHTML = calculatetime;
}

function smallestmultiple() { // Problem 5
	var answer = 0;
	var starttime = new Date().getTime();
	for(var i = 1; i <= 10000000000; i++){
	    var found = false;
	    for(var e = 2; e <= 20; e++){
	        if (i % e === 0) {
	            found = true;
	        }
	        else {
	        	found = false;
	        	break;
	        }
	    }
	    if (found) {
	        answer = i;
	        break;
	    }
	}
	document.getElementById('paragraph5').innerHTML = answer;
	var endtime = new Date().getTime();
	var calculatetime = (endtime - starttime);
	document.getElementById('paragraph5_1').innerHTML = calculatetime;
}

function Sumsquaredifference() { // Problem 6
	var inputTaker6 = document.getElementById('textToChange6').value;
	var starttime = new Date().getTime();
	var a = sumofsquares(inputTaker6);
	var b = square(inputTaker6);
	var answer = (b-a);
	document.getElementById('paragraph6').innerHTML = answer;
	var endtime = new Date().getTime();
	var calculatetime = (endtime - starttime);
	document.getElementById('paragraph6_1').innerHTML = calculatetime;
}

function primefinder() { // Problem 7
	var inputTaker7 = document.getElementById('textToChange7').value;
	var starttime = new Date().getTime();
	var primeset = [2];
	var next = 3;
	while (primeset.length < inputTaker7) {
		next += 2;
		if (next % 2 == 0) { continue; }
		p = true;
		for (var j in primeset) {
			if ( next % primeset[j] == 0) {
				p = false;
				break;
			}
		}
		if (p) { primeset.push(next);}
	}
	answer = primeset[primeset.length - 1];
	document.getElementById('paragraph7').innerHTML = answer;
	var endtime = new Date().getTime();
	var calculatetime = (endtime - starttime);
	document.getElementById('paragraph7_1').innerHTML = calculatetime;
}

function largestproduct() { // Problem 8 -- Sort of works...
	var starttime = new Date().getTime();
	var a = '7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450'
	var b = a.split('');
	var pos1 = 0;
	var pos2 = pos1 + 12;
	var answer = 1;
	var curprod;

	while ( pos1 <= b.length - 13) {
		curprod = 1;
		for (var i in b.slice(pos1, pos2 + 1)) {
			curprod *= b[i];
		}

		if ( curprod > answer) { answer = curprod; }
		pos1 += 1;
		pos2 = pos1 + 12;
	}
	var endtime = new Date().getTime();
	var calculatetime = (endtime - starttime);
	document.getElementById('paragraph8').innerHTML = answer;
	document.getElementById('paragraph8_1').innerHTML = calculatetime;
}

