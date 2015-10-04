'use strict';

(function (window, document) {
    
	var Banner = function(){

		var init = function(){
			if (Enabler.isInitialized()) {
		        enablerInitHandler();
		    } else {
		        Enabler.addEventListener(studio.events.StudioEvent.INIT, enablerInitHandler);
		    }
		};

		var enablerInitHandler = function(){
			bannerClickThrough();
			extratoll();
		};

		var bannerClickThrough = function(){
			document.querySelector('.background_exit_dc').addEventListener('click', function(){
				Enabler.exit('clickthrough');
			});
		};

	


		var extratoll = function(){
			document.getElementById('cta').addEventListener('click', function(){
				Enabler.exit('cta_clickthrough');

			
			
			});
		};

		return { init : init };

	}();



 



	// initializing banner
	window.addEventListener('load', function(){
		Banner.init();
	});


})(window, document, undefined);