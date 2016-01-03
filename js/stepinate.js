(function ($) {

    $.fn.extend({
        stepinate: function (custom) {
			var s = {
				next: 'Next Page',
				prev: 'Previous Page',
				pageSelector: '.page',
				nextClass: 'nextPage',
				prevClass: 'prevPage',
				openPage: 0,
				animPageHide: {'opacity':0},
				animPageShow: {'opacity':1},
				animHideSpeed: 200,
				animShowSpeed: 500
			};
			$.extend(s, custom);
			var $pages = $(this).find(s.pageSelector),
			    nextPage = '<div class="'+s.nextClass+'">'+s.next+'</div>',
			    prevPage = '<div class="'+s.prevClass+'">'+s.prev+'</div>',
			    pageTurn = function(next) {
				var step = next?1:-1;
				$pages.eq(s.openPage).animate(s.animPageHide, 200, function() {
					$(this).hide();
					s.openPage += step;
					$pages.eq(s.openPage).show().animate(s.animPageShow, 500);
				});
			    };
			
			$pages.hide().eq(s.openPage).show().css(s.animPageShow);

            		$pages.each(function(i) {
				if (i>0) $(this).append(prevPage);
				if (i<$pages.length-1) $(this).append(nextPage);
			}).on('click', '.'+s.nextClass.replace(' ','.')+', .'+s.prevClass.replace(' ','.'), function() {
				pageTurn((this.className === s.nextButton));
			});

			return this;
        }
    });

})(jQuery);
