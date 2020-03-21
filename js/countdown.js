'use strict';

var eventDate = new Date("Jan 1, 2021 00:00:00").getTime();

var countdown = setInterval(function(){

	//Get todays date and time
	var currentdate = new Date().getTime();

	var timeRemaining = eventDate - currentdate;

	var days = Math.floor(timeRemaining / (1000*60*60*24));
	var hours = Math.floor((timeRemaining % (1000*60*60*24) )/ (1000*60*60));
	var minutes = Math.floor((timeRemaining % (1000*60*60) )/ (1000*60));
	var seconds = Math.floor((timeRemaining % (1000*60) )/ (1000));

	document.getElementById('days').innerHTML = days;
	document.getElementById('hrs').innerHTML = hours;
	document.getElementById('min').innerHTML = minutes;
	document.getElementById('sec').innerHTML = seconds;


}, 1000);
