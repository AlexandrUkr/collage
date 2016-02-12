/*
*	Plugin: Images auto colage v 1.1
*	Author: Alexandr Drozd
*	Year: 2016
*/
(function($){
	$.fn.colage = function(p){
		Array.prototype.sum = function(){
			return this.reduce(function(a,b){
				return  +b+a;
			}, 0);
		}
		$(this).each(function(){
			var b = $(this), it = b.find(p.it || 'img'), pw = p.width || b.get(0).clientWidth,
			pc = pw/100, avh = p.AverageHeight || 175, m = p.margin || 3;
			b.css({'width' : pw+'px','clear' : ''});
			it.css({'display': 'block','float': 'left'});
			var ws = [], rs = [], rn = 0, id = 0;
				for(var i = 0; i < it.length; i++) ws.push(Math.round(it[i].width/it[i].height*avh));
			while(rn < Math.ceil(ws.sum()/pw)){
				rs[rn] = [];
					while(id < ws.length && rs[rn].sum()+(rs[rn].length*m) < pw+m){
						rs[rn].push(ws[id]);
						id++;
						if(id == ws.length-1){
							rs[rn].push(ws[id]);
							rn++;
							break;
						}
					}
				rn++;
			}
			id = 0;
			for(var i = 0; i < rs.length; i++){
				try{
					for(var j = 0; j < rs[i].length; j++){
						it[id].style.width = rs[i][j]*((pw-((rs[i].length-1)*m))/rs[i].sum())/pc+'%';
						it[id].style.height = ((pw-((rs[i].length-1)*m))/rs[i].sum())*avh/pc+'%';
						if(j < rs[i].length-1) it[id].style.marginRight = (m/pc)+'%';
						if(i < rs.length-1) it[id].style.marginBottom = (m/pc)+'%';
						id++;
					}
				} catch(e){}
			}
		});
		delete Array.prototype.sum;
	};
})(jQuery);
