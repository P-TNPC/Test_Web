setInterval("计()",1000)

var 标;

function 计(){

    var 今 = new Date();

    var 月 = 今.getMonth()+1;if(月 < 10){月 = '0'+月};

    var 日 = 今.getDate();if(日 < 10){日 = '0'+日};

    var 时 = 今.getHours();if(时 < 10){时 = '0'+时};

    var 星 = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];var 周 = 星[今.getDay()];

    var 分 = 今.getMinutes();if(分 < 10){分 = '0'+分};

    var 秒 = 今.getSeconds();//if(秒 < 10){秒 = '0'+秒};

    var 日期 = 月+'.'+日+' '+周;

    	console.log(标)

    if(秒%2){

    	//var 闪 = '时间 行 点';

       	document.getElementById("点").innerHTML=':';

    }else{

    	//var 闪 = '时间 行 占';

       	document.getElementById("点").innerHTML=' ';

    }

    

    if(分!=标){

        标 = 分;

    document.getElementById("日期").innerHTML=日期;

    document.getElementById("时").innerHTML=时;

    //document.getElementById("点").className=闪;

    document.getElementById("分").innerHTML=分;

    //document.getElementById("秒").innerHTML=秒;

    }

}
