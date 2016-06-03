$(".animsition").animsition({
  inClass: 'fade-in-right-lg',
  outClass: 'fade-out-right-lg',
  linkElement: 'header a',
  inDuration: 1000,
  outDuration: 500
});

$('.header').sticky();

$('.header').on('sticky-start', function() {
	$('.description').html('We build <strong>great</strong> apps');
})

$('.header').on('sticky-end', function() {
	$('.description').html('We build apps');
})

$('#projectHelp').sticky();

$('#projectHelp').on('sticky-start', function() {
	$('#projectHelp').html('Want us to work on your project? <a href="#">Email Us</a>');
})

$('#projectHelp').on('sticky-end', function() {
	$('#projectHelp').html('Want us to work on your project?');
})