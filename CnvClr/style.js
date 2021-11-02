fhex = document.querySelector('#fhex');
frgb = document.querySelector('#frgb');
fhsl = document.querySelector('#fhsl');
ihex = document.querySelector('#ihex');
irgb = document.querySelector('#irgb');
ihsl = document.querySelector('#ihsl');
var erro = 'rput erro';

document.activeElement.oninput = function(){
	actp = document.activeElement.parentNode;
		document.querySelector('#chex').style.setProperty('--colr',HEX);
		document.querySelector('#crgb').style.setProperty('--colr',RGB);
		document.querySelector('#chsl').style.setProperty('--colr',HSL);
	var err = '错误';
	if(HEX == err | RGB == err | HSL == err){
		actp.className = erro;
      	document.querySelector('#tclr').content = '#888';
	}else{
		fhex.className = 'rput';
		frgb.className = 'rput';
		fhsl.className = 'rput';
      	document.querySelector('#tclr').content = HEX;
		document.querySelector('#main').style.setProperty('--cola',HEX);
		document.querySelector('h1').style.setProperty('--colr',HEX);
	}
}