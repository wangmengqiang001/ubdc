(function(window,document){
	//full url path
	var ubdcURL="../js/ubdc.js";
	
	//check whether it is installed already
	if( !hasInstalled() ){
		installJS(ubdcURL);		
	}
	
	 
	
	function installJS(urljs){
		var scripts=document.getElementsByTagName("script");
		var ubdcScript=document.createElement("Script");
		ubdcScript.src=urljs;
		scripts[0].parentNode.insertBefore(ubdcScript,scripts[0]);
	}

})(window,document);

function hasInstalled(){
	return typeof(window.ubdc)!="undefined" ;
}
