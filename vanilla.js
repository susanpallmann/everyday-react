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
	
	$('.next-day').click(function (e) {
		$('#day-overview').fadeOut(200);
		setTimeout(function(){
			let currentDate = $('#written-date').text();
			let dateSplit = currentDate.split('-');
			let dateActual = new Date(parseInt(dateSplit[0]), parseInt(dateSplit[1]) - 1, parseInt(dateSplit[2]));
			let dateNext = dateActual.setDate(dateActual.getDate() + 1 );
			let dateIntermediate = new Date(dateNext);
			let year = dateIntermediate.getFullYear();
			let month = dateIntermediate.getMonth() + 1;
			let day = dateIntermediate.getDate();
			let dateFormatted = year + '-' + month + '-' + day;
			readDay(dateFormatted, populateDayOverview, null);
			$('#written-date').text(dateFormatted);
			$('#day-overview').fadeIn(200);
		}, 200);
		e.preventDefault();
	});
	
	$('.previous-day').click(function (e) {
		$('#day-overview').fadeOut(200);
		setTimeout(function(){
			let currentDate = $('#written-date').text();
			let dateSplit = currentDate.split('-');
			let dateActual = new Date(parseInt(dateSplit[0]), parseInt(dateSplit[1]) - 1, parseInt(dateSplit[2]));
			let dateNext = dateActual.setDate(dateActual.getDate() - 1 );
			let dateIntermediate = new Date(dateNext);
			let year = dateIntermediate.getFullYear();
			let month = dateIntermediate.getMonth() + 1;
			let day = dateIntermediate.getDate();
			let dateFormatted = year + '-' + month + '-' + day;
			readDay(dateFormatted, populateDayOverview, null);
			$('#written-date').text(dateFormatted);
			$('#day-overview').fadeIn(200);
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
	
	// Changes splash view mode to display main splash screen
	$('#edit-day').click(function(e) {
		let currentDate = $('#written-date').text();
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

function determineEnterLoadingBar(data) {
	// Determines how many categories are in this data set
	let quantity = Object.keys(data).length;
	// Determines percentage value of each category
	let increment = Math.round(100 / quantity);
	// Preparing an array for containing values
	let amounts = [];
	// For the amount of increments (quantity)
	for (var i = 0; i < quantity; i++) {
		// add increment to array
		let amount = i*increment;
		amounts.push(amount)
	}
	// An added value, 100, for confirmation screen
	amounts.push(100);
	return amounts;
}
