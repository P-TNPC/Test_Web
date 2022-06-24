document.querySelector('#生').onmousedown = function () {
	if ("vibrate" in navigator) {
		// vibration API supported
		navigator.vibrate([15, 100, 10]);
	} else if (navigator.webkitVibrate) {
		navigator.webkitVibrate([15, 100, 10]);
	}
}

document.addEventListener('DOMContentLoaded', () => {
	var duration = 750;
	// 样式string拼凑
	var forStyle = (position) => {
		var cssStr = '';
		for (let key in position) {
			cssStr += key + ':' + position[key] + ';';
		};
		return cssStr;
	}
	// 获取点击位置
	var forRect = (target) => {
		var position = target.getBoundingClientRect(),
			ele = document.documentElement;
		return {
			top: position.top + window.pageYOffset - ele.clientTop,
			left: position.left + window.pageXOffset - ele.clientLeft
		}
	}
	var show = (event) => {
		var pDiv = event.target,
			cDiv = document.createElement('div');
		pDiv.appendChild(cDiv);
		var rectObj = forRect(pDiv),
			_height = event.pageY - rectObj.top,
			_left = event.pageX - rectObj.left,
			_scale = 'scale(' + pDiv.clientWidth / 100 * 10 + ')';
		var position = {
			top: _height + 'px',
			left: _left + 'px'
		};
		cDiv.className = cDiv.className + " 波";
		cDiv.setAttribute("style", forStyle(position));
		var finishStyle = {
			opacity: 0,
			transform: _scale,
			top: _height + "px",
			left: _left + "px",
		};
		setTimeout(() => {
			cDiv.setAttribute("style", forStyle(finishStyle));
			setTimeout(() => {
				pDiv.removeChild(cDiv);
			}, duration);
		}, 100);
	}
	document.querySelector('#罩').addEventListener('click', e => show(e), !1);
	document.querySelector('#生').addEventListener('click', e => show(e), !1);
}, !1);
