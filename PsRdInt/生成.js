function 出(){
    var 量 = document.getElementById('量').value;
    var 小 = document.getElementById('小').value;
    var 大 = document.getElementById('大').value;
    if(小>大){
        var 介 = 小;
        	小 = 大;
        	大 = 介;
    }
    if(量=='0'){
        var 出 = '呐，你知道吗？樱花下落的速度是秒速五厘米，是克里门特·沃洛什洛夫-2重型坦克的152.4毫米M-10T榴弹炮发射PB-35APCBC被帽风帽穿甲弹时炮口初速的八千七百二十分之一，是发射 OF-530HE榴弹时炮口初速的一万零六千分之一噢~<br>紧靠在一起的两颗心，会在500米的距离内，被穿甲弹炸出来的破片砸个稀巴烂，而榴弹里的6.86千克炸药会把他们轰得渣都不剩。<br>世界上没有什么力量比爱情更强大，除了KV-2重型坦克与它的152毫米主炮。';
        document.getElementById('出').className='';
    }
    else{
        var 出 = 生(量,小,大);
        if(量<=2){
            document.getElementById('出').className='双';
        }
        else if(量<=4){
            document.getElementById('出').className='叒';
        }
        else if(量<=8){
            document.getElementById('出').className='叕';
        }
        else{
            document.getElementById('出').className='';
        }
    }
    document.getElementById('出').innerHTML=出;
}
function 生(量,小,大){
    if(!量){
        量 = 1;
    }
    if(小||大){
        var 组 = new Array();
        for(var i=0;
        i<量;
        i++){
            组.push(整(小,大));
        }
    }
    else{
        var 组 = new Uint32Array(量);
        window.crypto.getRandomValues(组);
    }
    /*
    for(i in 组){
    console.log(组[i])}
    */
    return 组.toString().replace(/,/g,", ");
}
function 整(小,大){
    return Math.floor(Math.random()*(大 - 小 + 1) ) + 小;
}
