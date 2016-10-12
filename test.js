$('#pushState').on('click', function () {

	var url = '/push_' + Math.floor(Math.random() * 100);
	history.pushState(null, 'test', url);

	$('#log').append('<p><b>push</b> ' + url + '</p>');
	console.log('push ' + url);
});


$('#hashChange').on('click', function () {

	var hash = 'hash_' + Math.floor(Math.random() * 100);
	window.location.hash = hash;

	$('#log').append('<p><b>hash</b> ' + hash + '</p>');
	console.log('hash ' + hash);
});


$('#location').on('click', function () {

	$('#log').append('<p><b>window.location</b> ' + window.location.href + '</p>');
	console.log('window.location ' + window.location.href);
});


$(window).bind('popstate', function(event) {

	$('#log').append('<p><b>pop</b> ' + window.location.href + '</p>');
	console.log('pop ' + window.location.href);
});


$(window).bind('hashchange', function() {

	$('#log').append('<p><b>hashchange</b> ' + window.location.href + '</p>');
	console.log('hashchange ' + window.location.href);
});


$('#refresh').on('click', function () {

	googletag.pubads().refresh([gptadslots[1]]);

	$('#log').append('<p><b>refresh ad</b></p>');
	console.log('refresh ad');
});


$('#reload').on('click', function () {

	$('#iframe')[0].contentWindow.location = 'frame.html' + '?rnd=' + Math.floor(Math.random()*100)+1;

	$('#log').append('<p><b>reload ad iframe</b></p>');
	console.log('reload ad iframe');
});


$("#iframe").on("load", function () {

	$('#log').append('<p><b>iframe window.location</b> ' + $('#iframe')[0].contentWindow.location.href + '</p>');
	console.log('iframe window.location ' + $('#iframe')[0].contentWindow.location.href);
});


$('#back').on('click', function () {

	window.history.back();

	$('#log').append('<p><b>back()</b> ' + window.location.href + '</p>');
	console.log('back() ' + window.location.href);
});


$('#go-back').on('click', function () {

	window.history.go(-1);

	$('#log').append('<p><b>go(-1)</b> ' + window.location.href + '</p>');
	console.log('go(-1) ' + window.location.href);
});
