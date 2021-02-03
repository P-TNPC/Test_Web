$.ajax({
    url: 'http://127.0.0.1:8011/D.php',
	dataType: 'xml',
	success: function (data){
        var boom = $(data).find("[dn='day']").find("[cityname='化州市']");
		var 城 = boom.attr('cityname');
        var 现 = boom.attr('temNow');
		var 类 = boom.attr('stateDetailed');
        var 时 = boom.attr('time');
        $('#气').html(现+'℃ '+类);
    }
}
);
