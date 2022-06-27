var page0001 = {};
(function(page0001){
	page0001.name = 'Souleman';
	page0001.sayHello = function() {
		apex.message.showPageSuccess(`hello ${page0001.name}`);
	};
	page0001.nestedNS = {
		xyz : function()
		{
			alert('Good Bye '+ page0001.name);
		}
	}
})(window.page0001 = window.page0001 || {});
