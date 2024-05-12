//your JS code here. If required.
function show_alert() {
	let fname = document.getElementById("fname").value;
	let lname = document.getElementById("lname").value;
	let pnumber = document.getElementById("pnumber").value;
	let emailid = document.getElementById("emailid").value;
	alert("First Name: "+fname+" Last Name: "+lname+" Phone Number: "+pnumber+" Email ID: "+emailid);
	return false;
}

let alertdialogue = document.getElementById("loginForm");
alertdialogue.addEventListener("submit",show_alert);