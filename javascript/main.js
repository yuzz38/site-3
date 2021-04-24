$(function(){
		$('.header-botton').on('click', function(){
			$('.HPPC').toggleClass('header-item--active');
			$('.header').toggleClass('header-active');
		});
		var btn = $('.botton');

		$(window).scroll(function() {
		  if ($(window).scrollTop() > 300) {
		    btn.addClass('show');
		  } else {
		    btn.removeClass('show');
		  }
		});
		btn.on('click', function(e) {
			  e.preventDefault();
			  $('html, body').animate({scrollTop:0}, '300');
			});
		$("a.scrollto").click(function() {
		    var elementClick = $(this).attr("href")
		    var destination = $(elementClick).offset().top;
		    jQuery("html:not(:animated),body:not(:animated)").animate({
		      scrollTop: destination
		    }, 800);
		    return false;
		  });
		$("a.log-login").click(function(e) {
			e.preventDefault();
			var destinationPopup = $(this).attr("href");
			$(destinationPopup).addClass('show');
			
			$('.popup__body').animate({
        		 'top':'0'
       			},500);
			$(destinationPopup + ' .popup-close').click(function(e){
				e.preventDefault();
				$('.popup__body').animate({
        		 'top':'-1200'
       			},100);
				$(destinationPopup).removeClass('show');
				
			});
		});
		$('.owl-carousel').owlCarousel({
		    loop:true,
		    margin:10,
		    nav:true,
		  	
		    responsive:{
		        0:{
		            items:1
		        },
		        600:{
		            items:3
		        },
		        1000:{
		            items:3
		        }
    		}
		})
});
