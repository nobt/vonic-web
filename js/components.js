/*
* 简单的组件的方法
*/
(function (VonicUI, dependencies, components) {
	var $ = dependencies.jQuery;
	var utils = VonicUI.utils;
  
	components.Index = function(resolve, reject){
		var options = {
			template: '#index',
			data: function() {
			  return {
			    msg: 'Hello! Vonic.',
			    title: '关于'  
			  }
			}    
		};
		utils.asyncComponent(options,resolve, reject); 
	}

	components.About = function(resolve, reject){
		var options = {				
			  template: '#about',
			  data: function(){
			    return {
			        msg: 'about',
			        message: '你好'  
			    }
			  },
			  mounted: function(){
			    
			  }
		}
		utils.asyncComponent(options,resolve, reject);	
	}

})(VonicUI, {
    jQuery : jQuery
}, VonicUI.components);
