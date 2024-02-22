//Date object
var todayObj = new Date();

//Variables for alternating greetings
var timeNow = todayObj.getHours();
var welcomeMessage;

//Alternating greetings based on current time
if (timeNow > 18) {
	welcomeMessage = 'Good Evening';
}
else if (timeNow > 12) {
	welcomeMessage = 'Good Afternoon';
}
else if (timeNow > 0) {
	welcomeMessage = 'Good Morning';
}
else {
	welcomeMessage = 'Welcome';
}

//Element that has an id of greeting
var el = document.getElementById('greeting');

//Replace the content of that element with welcome message
el.textContent = welcomeMessage;

