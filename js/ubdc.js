(function(window,document){
	var ubdc=new Object();//="define me";
	//if(typeof(window.ubdc) =="undefined"){
	if(!hasInstalled()){
                //find cookie and get the terminal device ID
		var deviceId = getCookie("deviceId");
                if( typeof(deviceId) == "undefined"|| deviceId ==""){
			deviceId = uuid();
			setCookie("deviceId",deviceId,50*365);

		}
		ubdc.guid=deviceId;
	
     		//collect runtime information
               
		ubdc.runtime=gatherRuntime();
                

                //get screen information
                ubdc.screenInfo = gatherScreenInfo();
		
		//get page  information
		ubdc.pageInfo=gatherPageInfo();
	
		//setup page timer and unload event handler 
		
		
		//set the mouse tracer to record the mouse event
		
		
		window.ubdc=ubdc;
	}
	
	function gatherRuntime(){
 		var nav = new Object();
                //don't parse detail information here, which should be done in analysis
                nav.appCodeName= window.navigator.appCodeName;
                nav.appName=window.navigator.appName;
                nav.platform = window.navigator.platform;
                nav.userAgent=window.navigator.userAgent;
                nav.ospu=window.navigator.oscpu;
                //ubdc.navigator=nav;
                return nav;
	}
	function gatherScreenInfo(){
		var si = new Object();
                si.width=window.screen.width;
		si.height=window.screen.height;
		si.availHeight=window.screen.availHeight;
		si.availWidth=window.screen.availWidth;
		return si;
        }

	function guid() {
  		function S4() {
    			return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
  		}
  		return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
	}
        function guid_2(){
    		return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        		var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
        		return v.toString(16);
    		});

	}
        function uuid() {
	    var s = [];
	    var hexDigits = "0123456789abcdef";
	    for (var i = 0; i < 36; i++) {
		s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
	    }
	    s[14] = "4";  // bits 12-15 of the time_hi_and_version field to 0010
	    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);  // bits 6-7 of the clock_seq_hi_and_reserved to 01
	    s[8] = s[13] = s[18] = s[23] = "-";
	 
	    var uuid = s.join("");
	    return uuid;
	}
        function setCookie(cname,cvalue,exdays){
		var d = new Date();
		d.setTime(d.getTime()+(exdays*24*60*60*1000));
		var expires = "expires="+d.toGMTString();
		document.cookie = cname+"="+cvalue+"; "+expires;
	}
	function getCookie(cname){
		var name = cname + "=";
		var ca = document.cookie.split(';');
		for(var i=0; i<ca.length; i++) {
			var c = ca[i].trim();
			if (c.indexOf(name)==0) { return c.substring(name.length,c.length); }
		}
		return "";
	}
        function gatherPageInfo(){
    		

		function getTitle(){
			return window.top.document.title;
		}
		function getUrl(){
			return window.top.location.href;
		}

		function getReferrer() {
			 var referrer = ''; 
			 try { 
				referrer = window.top.document.referrer; 
			 }  catch(e) {
				if(window.parent) {
					try { 
						referrer = window.parent.document.referrer; 
					} catch(e2) {
						referrer = ''; 
					} 
				} 
			} 
			if(referrer === '') {
				referrer = document.referrer;
			} 
			return referrer; 
		}

		var pi = new Object();
		pi.title=getTitle();
		pi.url=getUrl();
		pi.referrer=getReferrer();
		return pi;
	}

})(window,document);
