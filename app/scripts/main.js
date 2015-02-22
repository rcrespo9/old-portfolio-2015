'use strict';

var app = app || {};

app.particleEffect = (function() {
	var s;

	return {
		
		settings: {
			theBody: $('body'),
			introLine: $('.intro-line')
		},

		init: function() {
			s = this.settings;
			this.startParticles();
		},

		whichAnimationEvent: function() {
			var t;
			var el = document.createElement('fakeelement');

			var animations = {
			    'animation'      : 'animationend',
			    'OAnimation'     : 'oAnimationEnd',
			    'MozAnimation'   : 'animationend',
			    'WebkitAnimation' : 'webkitAnimationEnd'
			};

			for (t in animations){
				if (el.style[t] !== undefined){
					return animations[t];
				}
			}
		},

		startParticles: function() {
			var animationEvent = this.whichAnimationEvent();
			var particleColor = '#34495e';

			s.introLine.one(animationEvent, function() {

				s.theBody.particleground({
				    dotColor: particleColor,
				    lineColor: particleColor,
				    density: 16000
				});

			});
		}

	};

}());

app.mobileBrowserFallback = (function() {
	var s;

	return {
		settings: {
			theHTML: $('html')
		},

		init: function() {
			s = this.settings;
			this.oldAndroid();
		},

		oldAndroid: function() {
			if($.browser.android && $.browser.versionNumber < 4.4) {
				s.theHTML.addClass('old-android');
			}
		}
	};

}());

$(function() {
	app.particleEffect.init();
	app.mobileBrowserFallback.init();
});