window.onload = function() {
	let menuBtn = document.querySelector('.menu-main-test');
	let menu = document.querySelector('.main-menu');
	let input = document.querySelector('#check-menu');
	
	menuBtn.onclick = function(e) {
		e.preventDefault();
		input.toggleAttribute('checked');
		menu.classList.toggle('hidden');
	};


	// Slick

	$('.reviews-items').slick({
		  infinite: true,
		  slidesToShow: 2,
		  slidesToScroll: 1,
		  nextArrow: '<img class="arrow-right" src="img/arrow-right.png">',
		  prevArrow: '<img class="arrow-left" src="img/arrow-right.png">',
		  responsive: [
		   		 {
			      breakpoint: 992,
			      settings: {
				        slidesToShow: 1,
				        slidesToScroll: 1,
				        nextArrow: '<img class="arrow-right" src="img/arrow-right-xs.png">',
		 				prevArrow: '<img class="arrow-left" src="img/arrow-right-xs.png">'
		      			}
    				}]
	});


	// $('.reviews-items').slick({
	// 	dots: true,
	//   	infinite: true,
	//   	speed: 300,
	//   	slidesToShow: 2,
	//   	adaptiveHeight: true,
	 //  ,
		// nextArrow: $('.arrow-right')
	//  //  	
	// });

}