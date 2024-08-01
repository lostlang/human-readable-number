module.exports = function toReadable(number) {
	if (number === 0) {
		return "zero";
	}
	let out = [];
	out.push(thirdDigit(Math.floor(number / 100)));
	number %= 100;
	if (Math.floor(number / 10) === 1) {
		out.push(firstTwoDigit(number % 10));
	} else {
		out.push(secondDigit(Math.floor(number / 10)));
		out.push(firstDigit(number % 10));
	}
	return out.filter((el) => el).join(" ");
};

function firstDigit(number) {
	return [
		"",
		"one",
		"two",
		"three",
		"four",
		"five",
		"six",
		"seven",
		"eight",
		"nine",
	][number];
}

function secondDigit(number) {
	return [
		"",
		"",
		"twenty",
		"thirty",
		"forty",
		"fifty",
		"sixty",
		"seventy",
		"eighty",
		"ninety",
	][number];
}

function firstTwoDigit(number) {
	return [
		"ten",
		"eleven",
		"twelve",
		"thirteen",
		"fourteen",
		"fifteen",
		"sixteen",
		"seventeen",
		"eighteen",
		"nineteen",
	][number];
}

function thirdDigit(number) {
	return [
		"",
		"one hundred",
		"two hundred",
		"three hundred",
		"four hundred",
		"five hundred",
		"six hundred",
		"seven hundred",
		"eight hundred",
		"nine hundred",
	][number];
}
