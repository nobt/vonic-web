(function (VonicUI, dependencies, components) {
	var $ = dependencies.jQuery;


	function loadTemplate(template) {
	    var version = VonicUI.config.version;
	    var promise;
	    var pathRegex = new RegExp(/^([a-z_\-\s0-9\.\/]+)+\.html$/);
	    var isTemplateUrl = pathRegex.test(template);
	    if(isTemplateUrl){
	        promise = $.get(template + '?v=' + version);
	    } else {
	        var html = $(template).html();
	        promise = $.Deferred().resolve(html).promise();
	    }
	    return promise;
	}

	function asyncComponent(options, resolve, reject) {
	    var promise;
	    var pathRegex = new RegExp(/^([a-z_\-\s0-9\.\/]+)+\.html$/);
	    var isTemplateUrl = pathRegex.test(options.template);
	    if(isTemplateUrl){
	        promise = $.get(options.template);
	    } else {
	        var html = $(options.template).html();
	        promise = $.Deferred().resolve(html).promise();
	    }
	    promise.then(function (html) {
	        options.mixins = options.mixins || [];
	        var component = $.extend({}, options, {template: html});
	        resolve(component);
	    }).fail(function (xhr, status, error) {
	        reject(error);
	    });
	}

	$.extend(true, VonicUI, {
		utils: {
			asyncComponent: asyncComponent
		}
	});	

})(VonicUI, {
    jQuery : jQuery
}, VonicUI.components);
