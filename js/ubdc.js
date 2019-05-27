(function(window,document){
	var ubdc=new Object();//="define me";
	//if(typeof(window.ubdc) =="undefined"){
	if(!hasInstalled()){
		//collect information
		var nav = new Object();
		//
		nav.appCodeName= window.navigator.appCodeName;
		nav.appName=window.navigator.appName;
		nav.platform = window.navigator.platform;
		nav.userAgent=window.navigator.userAgent;
		nav.ospu=window.navigator.oscpu;
		ubdc.navigator=nav;
		
		//find cookie and get the terminal device ID, 
		
		//store the application ID
		
		//setup timer to record 
		
		
		//set the mouse tracer to record the mouse event
		
		
		window.ubdc=ubdc;
	}
	
	function gatherRuntime(){
		
	}
	
	

})(window,document);