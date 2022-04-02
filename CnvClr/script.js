var R,G,B,H,S,L;
// HEX输入时更新
ihex.oninput = function(){
	this.value = this.value.replace(/[^#\da-f]/gi,'');
	HEXto(this.value);
	toHSL(R,G,B);
	irgb.value = RGB;
	ihsl.value = HSL;
}
// RGB输入时更新
irgb.oninput = function(){
	RGBto(this.value);
	toHEX(R,G,B);
	toHSL(R,G,B);
	ihex.value = HEX;
	ihsl.value = HSL;
}
// HSL输入时更新
ihsl.oninput = function(){
	HSLto(this.value);
	toHEX(R,G,B);
	ihex.value = HEX;
	irgb.value = RGB;
}

// HEX转RGB
function HEXto(hex){
	hex = hex.replace(/[#]/g,'');
	HEX = '#'+hex;
	switch(hex.length){
		case 3:
			R = parseInt(hex.substr(0,1).repeat(2),16);
			G = parseInt(hex.substr(1,1).repeat(2),16);
			B = parseInt(hex.substr(2,1).repeat(2),16);
			break;
		case 6:
			R = parseInt(hex.substr(0,2),16);
			G = parseInt(hex.substr(2,2),16);
			B = parseInt(hex.substr(4,2),16);
			break;
		default:
			R = 'ERROR';
			HEX = '错误';
			break;
	}

	putRGB(R,G,B);
}
// RGB提取参数
function RGBto(rgb){
	var rgb = rgb.replace(/[rgb()]/gi,'').split(',');
	R = rgb[0];
	G = rgb[1];
	B = rgb[2];if(!B){B = 0;}

	putRGB(R,G,B);
}
// HSL转RGB
function HSLto(hsl){
	var hsl = hsl.replace(/[hsl(%)]/gi,'').split(',');
	H = hsl[0]%360;
	S = hsl[1]/100;
	L = hsl[2]/100;
	var x,y,m,rgb = [];
	x = (1-Math.abs(L*2-1))*S;
	y = (1-Math.abs(H/60%2-1))*x;
	m = L-x/2;
	switch (Math.floor(H/60)) {
		case 0:
			rgb = [x,y,0];
			break;
		case 1:
			rgb = [y,x,0];
			break;
		case 2:
			rgb = [0,x,y];
			break;
		case 3:
			rgb = [0,y,x];
			break;
		case 4:
			rgb = [y,0,x];
			break;
		case 5:
			rgb = [x,0,y];
			break;
	}
	R = (rgb[0]+m)*255;
	G = (rgb[1]+m)*255;
	B = (rgb[2]+m)*255;

	putRGB(R,G,B);
	HSL = 'HSL'+'('+Math.round(H*10)/10+','+Math.round(S*1000)/10+'%,'+Math.round(L*1000)/10+'%)';
}

function toHEX(R,G,B){
	var r,g,b;
	r = parseInt(R).toString(16);if(r.length<2){r = '0'+r;}
	g = parseInt(G).toString(16);if(g.length<2){g = '0'+g;}
	b = parseInt(B).toString(16);if(b.length<2){b = '0'+b;}
	hex = r+g+b;
	if(hex.length == 6){
		HEX = '#'+hex;
	}else{
		HEX = '错误';
	}
}

function toHSL(R,G,B){
	// RGB转为0至1的值
	var r,g,b;
	r = R/255;
	g = G/255;
	b = B/255;
	// 选出最值
	var max = Math.max(r,g,b);
	var min = Math.min(r,g,b);
	var M = (max+min);
	var m = (max-min);
	// 色相H
	var h;
	switch(max){
		case min:
			h = 0;
			break;
		case r:
			h = (g-b)/m%6;
			break;
		case g:
			h = (b-r)/m+2;
			break;
		case b:
			h = (r-g)/m+4;
			break;
	}
	if(h<0){
		h += 6;
	}
	H = h*60;
	// 亮度L
	L = M/2;
	// 饱和度S
	if(!m){
		S = 0;
	}else{
		S = m/(1-Math.abs(L*2-1));
	}
	if(H >= 0 & S >= 0 & L >= 0){
		HSL = 'HSL'+'('+Math.round(H*10)/10+','+Math.round(S*1000)/10+'%,'+Math.round(L*1000)/10+'%)';
	}else{
		HSL = '错误';
	}
}

function putRGB(R,G,B){
	if(R >= 0 & G >= 0 & B >= 0 & R <= 255 & G <= 255 & B <= 255){
		RGB = 'RGB'+'('+Math.round(R)+','+Math.round(G)+','+Math.round(B)+')';
	}else{
		RGB = '错误';
	}
}
