$(document).ready(function () {
	$("#button").on("click", function (e) {
		e.preventDefault();

		var kombucha = parseInt($("#kombucha").val());
		var coffee = parseInt($("#coffee").val());

		$(".x").text(kombucha);
		$(".y").text(coffee);


		var totalKplusC = addition(kombucha, coffee);
		var totalKminusC = subtraction(kombucha, coffee);
		var totalKtimesC = multiply(kombucha, coffee);
		var totalKdivC = divide(kombucha, coffee);

		$("#addition .z").text(totalKplusC);
		$("#multiply .z").text(totalKtimesC);
		$("#subtract .z").text(totalKminusC);
		$("#divide .z").text(totalKdivC);

		// $("#answer").val(poop);

		console.log(totalCost);

		$("#totals").text("This is how much caffeine you've had! " + totalCaffeine + " And this is how much it cost! " + totalCost);

	});

	$("#button2").on("click", function (e) {
		e.preventDefault();

		var d = parseFloat($("#d").val());
		var e = parseFloat($("#e").val());
		var f = parseFloat($("#f").val());

		var poop = quadSolve(d, e, f);

		$("#answer2").val(anything);
	});
});

function addition(x, y) {
	var poop = x + y;
	return poop;
}

function subtraction(x, y) {
	var sub = x - y;
	return sub;
}

function multiply(x, y) {
	var mul = x * y;
	return mul;
}

function divide(x, y) {
	var div = x / y;
	return div;
}
