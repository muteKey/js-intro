let sayHi = function() {
	alert("Hello!")
}

function ask(question, yes, no) {
	if (confirm(question)) yes()
	else no();
}

function showOk() {
	alert("You agreed")
}

function showCancel() {
	alert("You canceled")
}

ask("Are you ok?", showOk, showCancel)