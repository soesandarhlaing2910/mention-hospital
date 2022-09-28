$(document).ready(function(){


	// Start Header Section
	// Start banner section


	// End banner sextion
	// End Header Section

	// Start Info Section
	$(window).scroll(function(){
		let getscrollpoint = $(this).scrollTop();
		// console.log(getscrollpoint);

		if(getscrollpoint >= 220){
			$(".infotexts").addClass("fromlefts");
			$(".infopics").addClass("fromrights");

		}else{
			$(".infotexts").removeClass("fromlefts");
			$(".infopics").removeClass("fromrights");
		}
	});
	// End Info Section



// Start ADV Section
$("#videos").click(function(){
	var getmodal = $(this).data("bs-target");
	var getvideosrc = $(this).data('video');
	var videourlwithauto = getvideosrc+"?autoplay=1";

	$(getmodal + " iframe").attr("src",videourlwithauto);

	$(getmodal+ " button.btn-close").click(function(){
		$(getmodal+ " iframe").attr("src",getvideosrc);
	});

	$(getmodal).click('hidden-bs-modal',function(){
		$(getmodal+ " iframe").attr("src",getvideosrc);
	});


});
// End ADV Section




// Start Premisis Section
	$("#lightslider").lightSlider({
		// auto: true,
		item: 4,
        loop: true,
        loop: true,
        slideMove: 1,
        speed: 600
	}).play();
// End Premisis Section



// Start Footer Section

	$("#getyear").text(new Date().getUTCFullYear());
// End Footer Section




// Start Pricing Section

	$(window).scroll(function(){
		let getscrolltop = $(this).scrollTop();
		// console.log(getscrolltop);

		if(getscrolltop >= 2700){
			$(".cardones").addClass("movelefts");
			$(".cardtwos").addClass("movebuttoms");
			$(".cardthrees").addClass("moverights");
		}else{

			$(".cardones").removeClass("movelefts");
			$(".cardtwos").removeClass("movebuttoms");
			$(".cardthrees").removeClass("moverights");
		}
	});
// End Pricing Section


// Start Join Us Section

	$("#accordion").accordion();
// End Join Us Section



// Start Progress



$(window).scroll(function(){
	var getprogress = $("#progresses");
	var getprogressval = $("#progressvalues");
	var getscrollvalue = $(this).scrollTop();
	// console.log(getscrollvalue);

	// st * 100 /(projheight - currheight)

// By jQuery
	// var getscrollheight =$(document).height(); //project height
	// console.log(getscrollheight);

	// var getclientheight =$(window).height(); //current window position height
	// console.log(getclientheight);

	// var calculateheight = getscrollheight - getclientheight;
	// console.log(calculateheight);

	// var getfinalheight = Math.round(getscrollvalue * 100 / calculateheight);


// By JavaScript
	var getscrollheight =document.documentElement.scrollHeight; //project height
	// console.log(getscrollheight);
	var getclientheight =document.documentElement.clientHeight; //current window position height
	// console.log(getclientheight);
	var calculateheight = getscrollheight - getclientheight;
	// console.log(calculateheight);
	var getfinalheight = Math.round(getscrollvalue * 100 / calculateheight);


	getprogressval.text(`${getfinalheight}%`);
	getprogress.css({
		"background":`conic-gradient(steelblue ${getfinalheight}%,#eee ${getfinalheight}%)`
	});
});
// End Progress


});
