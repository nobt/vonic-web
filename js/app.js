(function (VonicUI, dependencies, components) {
	var $ = dependencies.jQuery;
	var Vue = dependencies.Vue;
	var Vonic = dependencies.Vonic;
	var utils = VonicUI.utils;

	var routes = VonicUI.routes;
	Vue.use(Vonic.app, {
	  routes: routes.maps
	});

})(VonicUI, {
    jQuery : jQuery,
    Vue: Vue,
    Vonic: Vonic,
    win: window	
}, VonicUI.components);
