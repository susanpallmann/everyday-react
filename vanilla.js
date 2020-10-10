function initializeButtons() {
	$('.next-day').click(function (e) {
		let currentDate = $('#written-date').text();
		let dateSplit = currentDate.split('-');
		let dateActual = new Date(parseInt(dateSeparated[0]), parseInt(dateSeparated[1]) - 1, parseInt(dateSeparated[2]));
		let dateNext = dateActual.setDate(dateActual.getDate() + 1 );
		let dateIntermediate = new Date(dateNext);
		console.log(dateIntermediate);
		let year = dateIntermediate.getFullYear();
		let month = dateIntermediate.getMonth() + 1;
		let day = dateIntermediate.getDate();
		let dateFormatted = year + '-' + month + '-' + day;
		console.log(dateFormatted);
		//readDay(date, populateDayOverview);
		e.preventDefault();
	});
	
	$('.previous-day').click(function (e) {
		let currentDate = $('#written-date').text();
		let dateSplit = currentDate.split('-');
		console.log(dateSplit);
		let currentDateObject = new Date(dateSplit[0], dateSplit[1] - 1, dateSplit[2]);
		console.log(currentDateObject);
		//readDay(date, populateDayOverview);
		e.preventDefault();
	});
}

$(document).ready(function() {
	// Changes splash view mode to display log in screen
	$('.nav-log-in').click(function(e) {
		$('#splash-start').fadeOut(200);
		$('#splash-sign-up').fadeOut(200);
		setTimeout(function(){
			$('#splash-log-in').fadeIn(200);
		}, 200);
		e.preventDefault();
	});
	
	// Changes splash view mode to display sign up screen
	$('.nav-sign-up').click(function(e) {
		$('#splash-start').fadeOut(200);
		$('#splash-log-in').fadeOut(200);
		setTimeout(function(){
			$('#splash-sign-up').fadeIn(200);
		}, 200);
		e.preventDefault();
	});
	
	// Changes splash view mode to display main splash screen
	$('.nav-back').click(function(e) {
		$('#splash-log-in').fadeOut(200);
		$('#splash-sign-up').fadeOut(200);
		setTimeout(function(){
			$('#splash-start').fadeIn(200);
		}, 200);
		e.preventDefault();
	});
});

// Appends error message (parameter message) to a specific element (parameter element)
function appendError(element, message) {
	element.append('<p class="error-message">' + message + '</p>');
}

// Removes error message element from specific element (parameter element)
function clearError(element) {
	element.find('.error-message').remove();
}
