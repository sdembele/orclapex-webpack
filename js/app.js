var app = {};
(function(app){
	app.username = apex.item('P9999_USERNAME').getValue();
	app.sayHello = function() {
		apex.message.showPageSuccess(`Thanks ${app.username}`);
	};
    
	app.nestedNS = {
		xyz : function(a) 
		{
			alert('Hello ' + a);
		}
	}
})(window.app = window.app || {});

