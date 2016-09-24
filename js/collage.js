/*
*	Plugin: Images auto colage v 2.0
*	Author: Alexandr Drozd
*	Year: 2016
*/
(function($){
	$.fn.collage = function(opts){
		this.each(function(){
			var opts = opts || {
				maxHeight: 200,
				margin: 3
			}, d = {
				width: this.clientWidth,
				img: $(this).find('img')
			}, widths = [], s = [0, []], r = [], l = 0, i = 0;
			d.img.each(function(c, e){
				var width = Math.round(e.naturalWidth/e.naturalHeight*opts.maxHeight);
				widths.push(width);
				s[0] = s[0]+width;
			});
			while(l < Math.ceil(s[0]/d.width-1)){
				r[l] = [];
				s[1][l] = 0;
				while(i < widths.length && s[1][l]+(r[l].length*opts.margin)<d.width+opts.margin){
					r[l].push(widths[i]);
					s[1][l] = s[1][l]+widths[i];
					i++;
					if(i == widths.length-1){
						r[l].push(widths[i]);
						s[1][l] = s[1][l]+widths[i];
						l++;
						break;
					}
				}
				l++;
			}
			e = 0;
			for(var i = 0; i < r.length; i++){
				for(var j = 0; j < r[i].length; j++){
					var k = (d.width-((r[i].length-1)*opts.margin))/s[1][i], _s = {
						width: r[i][j]*k+'px',
						height: k*opts.maxHeight+'px'
					};
					if(j < r[i].length-1) _s.marginRight = opts.margin+'px';
					if(i < r.length-1) _s.marginBottom = opts.margin+'px';
					d.img.eq(e).css(_s);
					e++;
				}
			}
		});
	};
})(jQuery);
