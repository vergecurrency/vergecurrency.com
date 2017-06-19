var currentTime = Date.now() || +new Date();

var radiotype = 'shoutcast2';   // icecast, shoutcast1, shoutcast2
var radiolink = 'http://104.131.121.96:8000/stream';
var title = "";
var volumez = 100;
var autoplayz = false;


setTimeout("processLastNew();", 2000);


setTimeout(function(){ radioTitle(radiotype, radiolink); historyBox(radiotype, radiolink);}, 2000);
setInterval(function(){radioTitle(radiotype, radiolink);}, 10000);
setInterval(function(){historyBox(radiotype, radiolink);}, 30000);

 

//setInterval(function(){autoReconnect();}, 5000);

function autoReconnect()
{

console.log( jQuery('#jquery_jplayer_1').data().jPlayer.status.paused );

if(jQuery('#jquery_jplayer_1').data().jPlayer.status.paused )  //&& butclick==false
{

console.log("Auto Re-Connecting to stream server...");
streamani("Auto Re-connect: Connecting to stream server...");

/*var MP3Url = radiolink+"?hash="+currentTime
var stream = {
		mp3: MP3Url
	};
jQuery('#jquery_jplayer_1').jPlayer("setMedia", stream).jPlayer("play");*/

jQuery(".jp-play").click();
//jQuery(this).jPlayer("setMedia", stream).jPlayer("play");

}

}


function radioTitle(radiotype, radiolink)
{

jQuery.ajax({
    url: 'metadata/metadata.php?radiotype='+ radiotype +'&url='+ radiolink,
    type: 'GET',
    cache: false,
    success: function(result) {
        // TODO: update the DOM with the results
		//$('#current-track').html(result);
		jQuery(".jp-title").html(result); 
				
		//var iiart = result.split('-');
					
		searchAlbumsTop(result);
		
    }
});

}





function historyBox(radiotype, radiolink)
{

$.ajax({
    url: 'metadata/metadata-history.php?radiotype='+ radiotype +'&url='+ radiolink,
    type: 'GET',
	contentType: "text/html;charset=ISO-8859-1",
    cache: false,
    success: function(result) {
        // TODO: update the DOM with the results
		//$('#current-track').html(result);
		$('#playlist').html(result);
		
		setTimeout(function(){ historyBoxArt(); }, 2000);
		
    }
});

}


function historyBoxArt()
{
	
	jQuery("div#playlist ul li").each(function( index ) {
     //console.log( index + ": " + $( this ).text() );
	 
	 searchAlbums(this, $( this ).text(), 30);
	 
	 
	 
    });
	
}



function searchAlbumsTop(query) {
//alert(query);
    var iiart = query.split('-');
     
    jQuery.ajax({
        url: 'https://api.spotify.com/v1/search',
        data: {
            q: iiart[0],
			limit: 1,
            type: 'artist'
        },
        success: function (response) {
		    //console.log(response.artists.items[0].images[0].url);
			
			//console.log( response.artists.items );
			
			if(response.artists.items!="" && response.artists.items!=null)
			 var iistr = response.artists.items[0].images[0].url;
			else
			 var iistr = 'metadata/default.jpg';
			
            //jQuery("#current-img").html( iistr );
			
			$( ".jp-artwork" ).html( '<img id="jp-img" src="' + iistr + '"  border="0" /> ' );
			
			//return iistr;
			
        }
    });
	
}




function searchAlbums(obj, query, width) {
//alert(query);
    var iiart = query.split('-');
     
    jQuery.ajax({
        url: 'https://api.spotify.com/v1/search',
        data: {
            q: iiart[0],
			limit: 1,
            type: 'artist'
        },
        success: function (response) {
		    //console.log(response.artists.items[0].images[0].url);
			
			//console.log( response.artists.items );
			
			if(response.artists.items!="" && response.artists.items!=null)
			 var iistr = response.artists.items[0].images[0].url;
			else
			 var iistr = 'metadata/default.png';
			
            //jQuery("#current-img").html( iistr );
			
			$( obj ).html( '<img style="border-radius: 50%; height:'+ width +'px; width:'+ width +'px;" src="' + iistr + '" /> ' + iiart );
			
			//return iistr;
			
        }
    });
	
}



function processLastNew(){
	

	//alert("here");
	
    var MP3Url = radiolink+"?hash="+currentTime
	
	if(isSafari())
    	var solutionz="flash,html";
    else
    	var solutionz="html,flash";
		
	var stream = {
		title: title,
		mp3: MP3Url
	},
	ready = false;
	
	var idd = "#jquery_jplayer_1";
	
		var options = {
		swfPath: "js",
		preload: "auto",
		supplied: "mp3",
		wmode: "window",
		volume: volumez/100,
		smoothPlayBar: true,
		keyEnabled: true
	};
	
	
	jQuery('.jp-play').click(function(){
    //Some code
	
	if(jQuery('#jquery_jplayer_1').data().jPlayer.status.paused)  // if player paused
	{
	}
	else
	{
	console.log("Pause");
	
	jQuery("#jquery_jplayer_1").jPlayer("clearMedia");
	
	//jQuery('#jquery_jplayer_1').jPlayer('pause'); jQuery('#jquery_jplayer_1').jPlayer('stop'); 
	//return false;
	}
	
    });
	
	
	jQuery("#jquery_jplayer_1").jPlayer({
		ready: function (event) {
			ready = true;
			
			//$(".jp-title").html(title);
			
			streamani("Ready: Connecting to stream server...");
			
			if($.jPlayer.platform.android) {
			
			var myAndroidFix = new jPlayerAndroidFix(idd, stream, options);
			
			myAndroidFix.setMedia(stream).play();
			
			}
			else
			{
			
			if(autoplayz==false)
			 jQuery(this).jPlayer("setMedia", stream);
			else
			 jQuery(this).jPlayer("setMedia", stream).jPlayer("play");		
			
			}
			
			
		},
		pause: function() {
			jQuery(this).jPlayer("clearMedia");
			
			//jQuery('#jquery_jplayer_1').jPlayer('pause'); jQuery('#jquery_jplayer_1').jPlayer('stop'); 
			
			streamani("Pasued: Click on Play button to listen...");
		},
		
		error: function(event) {
			
			console.log(event.jPlayer.error.type);
			
			
			if(ready && event.jPlayer.error.type === jQuery.jPlayer.error.URL_NOT_SET) {
				// Setup the media stream again and play it.
				streamani("Connecting to stream server...");
				
				
			    if(autoplayz==false)
			       jQuery(this).jPlayer("setMedia", stream);
			    else
			       jQuery(this).jPlayer("setMedia", stream).jPlayer("play");		
				
				//jQuery(this).jPlayer("setMedia", stream).jPlayer("play");
			}
			
			if(ready && event.jPlayer.error.type === jQuery.jPlayer.error.URL)
            {
              ///$("#on-off-air").html("Off Air");
			  streamani("Error: Connecting to stream server...");			  
			  
            }
			
			//autoReconnect();
			
			
		},
		
		play: function()
		{
		  //$("#on-off-air").html("On Air");
		  streamani("Play: You are listening live stream...");
		  
		/*    if(autoplayz==false)
			 jQuery(this).jPlayer("setMedia", stream);
			else
			 jQuery(this).jPlayer("setMedia", stream).jPlayer("play");	*/	
			
			
			
		  
		},
		
		playing: function(event)
		{
		
		  streamani("Buffering: You are listening live stream...");
		},
		
		timeupdate: function(event)
		{
		    //console.log("wait....");
			//console.log(event.jPlayer.error.type);
			streamani( Date.now() || +new Date() );
		},
		
		canplay: function(event)
		{
		    //console.log("wait....");
			//jQuery("#current-track").html("FM Radio Station operating on 96.1 MHz based in Abrepo - Kumasi, in the Ashanti Region, Ghana - Phone: 00233 32 2038846.");
			//console.log(event.jPlayer.error.type);
		},
		
		swfPath: "jplayer",
		supplied: "mp3",
		preload: "auto",
		wmode: "window",
		/*autoPlay: true,*/
		solution:solutionz,
		volume: 100,
		globalVolume: true,
		useStateClassSkin: true,
		autoBlur: false,
		smoothPlayBar: true,
		keyEnabled: true
	});
	
 
	
	
 	
	//callSlider();
	
}	


function isSafari() {
          return /^((?!chrome).)*safari/i.test(navigator.userAgent);
        }



function streamani(str)
{

 console.log(str);
 //jQuery("#streamani").html( str );
	
}