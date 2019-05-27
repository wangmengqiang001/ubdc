(function(window,document){
	//full url path
	var ubdcURL="../js/ubdc.js";
	
	//check whether it is installed already
	if( !hasInstalled() ){
		installJS(ubdcURL);		
	}
	
	 
	
	function installJS(urljs){
		var head=document.getElementsByTagName("head");
		var scripts=document.getElementsByTagName("script");
		var ubdcScript=document.createElement("Script");
		ubdcScript.src=urljs;
		head[0].insertBefore(ubdcScript,scripts[0]);
	}

})(window,document);

function hasInstalled(){
	return typeof(window.ubdc)!="undefined" ;
}
