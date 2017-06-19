$(document).ready(function(){

var playlist1 = new jPlayerPlaylist({
		jPlayer: "#jp_tab_1",
		cssSelectorAncestor: "#jp_container_tab_1"
	}, [
		   {
				number: '00:00',
				artist: "Partem Nostrum",
				cover: "images/covers/cover-big-1.jpg",
				title: "Donec eu tincidunt ligula",
				text: "Anjunadeep is an independent record label based in London. Founded by Above & Beyond and James Grant.",
				infolink: "#",
				m4a: "http://www.jplayer.org/audio/m4a/Miaow-02-Hidden.m4a",
				oga: "http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg"
		},
		{
				number: '02:00',
				artist: " Ut Viderer",
				cover: "images/covers/cover-big-2.jpg",
				title: "Vestibulum ante ipsum primis",
				text: "Zoe Hardman mixes up the sexiest house sounds Live on Hed Kandi Radio",
				infolink: "#",
				m4a: "http://www.jplayer.org/audio/m4a/Miaow-07-Bubble.m4a",
				oga: "http://www.jplayer.org/audio/ogg/Miaow-07-Bubble.ogg"
		},
		{
				number: '03:00',
				artist: "Tempor Erat",
				cover: "images/covers/cover-big-3.jpg",
				title:"Etiam tempor erat ut",
				text: "Non-stop music from the radio tower of dance music's most iconic club We bring you the biggest, freshest tracks on the Ministry of Sound playlist with some of the most seminal tracks from two decades of dance. ",
				infolink: "#",
				m4a:"http://www.jplayer.org/audio/m4a/TSP-07-Cybersonnet.m4a",
				oga:"http://www.jplayer.org/audio/ogg/TSP-07-Cybersonnet.ogg",
		},
		{
				number: '04:00',
				artist: "Partiendo",
				cover: "images/covers/cover-big-4.jpg",
				title:"Proin sit amet volutpat dui",
				text: "Jez Welham is waking you up with the best new urban dance music, plus an hour of old school in Reloaded from 9am.",
				infolink: "#",
				m4a:"http://www.jplayer.org/audio/m4a/Miaow-03-Lentement.m4a",
				oga:"http://www.jplayer.org/audio/ogg/Miaow-03-Lentement.ogg",
		},
		{
				number: '05:00',
				artist: "Altera Iriure",
				cover: "images/covers/cover-big-5.jpg",
				title:"Tation partiendo mel eu",
				text: "Chill out with the best laid-back beats",
				infolink: "#",
				m4a:"http://www.jplayer.org/audio/m4a/Miaow-03-Lentement.m4a",
				oga:"http://www.jplayer.org/audio/ogg/Miaow-03-Lentement.ogg",
		},
		{
				number: '06:00',
				artist: "Partem Nostrum",
				cover: "images/covers/cover-big-7.jpg",
				title: "Donec eu tincidunt ligula",
				text: "Everyday morning live radio show",
				infolink: "#",
				m4a: "http://www.jplayer.org/audio/m4a/Miaow-02-Hidden.m4a",
				oga: "http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg"
		},
		{
				number: '07:00',
				artist: " Ut Viderer",
				cover: "images/covers/cover-big-6.jpg",
				text: "Since 2002, Markus Schulz has delivered a slice of his trademark sound through his weekly radio show, Global DJ Broadcast. Today, it remains one of the most respected and critically acclaimed radio shows across all of dance music, accumulating over 20 FM and online syndication partners in the process.",
				infolink: "#",
				title: "Vestibulum ante ipsum primis",
				m4a: "http://www.jplayer.org/audio/m4a/Miaow-07-Bubble.m4a",
				oga: "http://www.jplayer.org/audio/ogg/Miaow-07-Bubble.ogg"
		}
], {
		swfPath: "jplayer",
		supplied: "m4a, oga",
		wmode: "window",
		globalVolume: true,
		useStateClassSkin: true,
		autoBlur: false,
		smoothPlayBar: true,
		keyEnabled: true
	});

	var playlist2 = new jPlayerPlaylist({
		jPlayer: "#jp_tab_2",
		cssSelectorAncestor: "#jp_container_tab_2"
	}, [	], {
		swfPath: "jplayer",
		supplied: "m4a, oga",
		wmode: "window",
		globalVolume: true,
		useStateClassSkin: true,
		autoBlur: false,
		smoothPlayBar: true,
		keyEnabled: true
	});
	
	var playlist3 = new jPlayerPlaylist({
		jPlayer: "#jp_tab_3",
		cssSelectorAncestor: "#jp_container_tab_3"
	}, [	], {
		swfPath: "jplayer",
		supplied: "m4a, oga",
		wmode: "window",
		globalVolume: true,
		useStateClassSkin: true,
		autoBlur: false,
		smoothPlayBar: true,
		keyEnabled: true
	});
	
	var playlist4 = new jPlayerPlaylist({
		jPlayer: "#jp_tab_4",
		cssSelectorAncestor: "#jp_container_tab_4"
	}, [	], {
		swfPath: "jplayer",
		supplied: "m4a, oga",
		wmode: "window",
		globalVolume: true,
		useStateClassSkin: true,
		autoBlur: false,
		smoothPlayBar: true,
		keyEnabled: true
	});
	
	var playlist5 = new jPlayerPlaylist({
		jPlayer: "#jp_tab_5",
		cssSelectorAncestor: "#jp_container_tab_5"
	}, [	], {
		swfPath: "jplayer",
		supplied: "m4a, oga",
		wmode: "window",
		globalVolume: true,
		useStateClassSkin: true,
		autoBlur: false,
		smoothPlayBar: true,
		keyEnabled: true
	});

	var playlist6 = new jPlayerPlaylist({
		jPlayer: "#jp_tab_6",
		cssSelectorAncestor: "#jp_container_tab_6"
	}, [	], {
		swfPath: "jplayer",
		supplied: "m4a, oga",
		wmode: "window",
		globalVolume: true,
		useStateClassSkin: true,
		autoBlur: false,
		smoothPlayBar: true,
		keyEnabled: true
	});
	
	var playlist7 = new jPlayerPlaylist({
		jPlayer: "#jp_tab_7",
		cssSelectorAncestor: "#jp_container_tab_7"
	}, [	], {
		swfPath: "jplayer",
		supplied: "m4a, oga",
		wmode: "window",
		globalVolume: true,
		useStateClassSkin: true,
		autoBlur: false,
		smoothPlayBar: true,
		keyEnabled: true
	});
	
$(document.body).on('click', '#tabLink-2:not(".loaded")' ,function(){
		playlist2.setPlaylist([	
	   {
				number: '01:00',
				artist: "Altera Iriure",
				cover: "images/covers/cover-big-5.jpg",
				title:"Tation partiendo mel eu",
				text: "Chill out with the best laid-back beats",
				infolink: "#",
				m4a:"http://www.jplayer.org/audio/m4a/Miaow-03-Lentement.m4a",
				oga:"http://www.jplayer.org/audio/ogg/Miaow-03-Lentement.ogg",
		},
		{
				number: '02:00',
				artist: "Tempor Erat",
				cover: "images/covers/cover-big-3.jpg",
				title:"Etiam tempor erat ut",
				text: "Non-stop music from the radio tower of dance music's most iconic club We bring you the biggest, freshest tracks on the Ministry of Sound playlist with some of the most seminal tracks from two decades of dance. ",
				infolink: "#",
				m4a:"http://www.jplayer.org/audio/m4a/TSP-07-Cybersonnet.m4a",
				oga:"http://www.jplayer.org/audio/ogg/TSP-07-Cybersonnet.ogg",
		},

		{
				number: '03:00',
				artist: " Ut Viderer",
				cover: "images/covers/cover-big-6.jpg",
				title: "Vestibulum ante ipsum primis",
				text: "Zoe Hardman mixes up the sexiest house sounds Live on Hed Kandi Radio",
				infolink: "#",
				m4a: "http://www.jplayer.org/audio/m4a/Miaow-07-Bubble.m4a",
				oga: "http://www.jplayer.org/audio/ogg/Miaow-07-Bubble.ogg"
		},
		{
				number: '04:00',
				artist: " Ut Viderer",
				cover: "images/covers/cover-big-2.jpg",
				text: "Since 2002, Markus Schulz has delivered a slice of his trademark sound through his weekly radio show, Global DJ Broadcast. Today, it remains one of the most respected and critically acclaimed radio shows across all of dance music, accumulating over 20 FM and online syndication partners in the process.",
				infolink: "#",
				title: "Vestibulum ante ipsum primis",
				m4a: "http://www.jplayer.org/audio/m4a/Miaow-07-Bubble.m4a",
				oga: "http://www.jplayer.org/audio/ogg/Miaow-07-Bubble.ogg"
		},
		{
				number: '05:00',
				artist: "Partem Nostrum",
				cover: "images/covers/cover-big-7.jpg",
				title: "Donec eu tincidunt ligula",
				text: "Anjunadeep is an independent record label based in London. Founded by Above & Beyond and James Grant.",
				infolink: "#",
				m4a: "http://www.jplayer.org/audio/m4a/Miaow-02-Hidden.m4a",
				oga: "http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg"
		},

		{
				number: '06:00',
				artist: "Partiendo",
				cover: "images/covers/cover-big-4.jpg",
				title:"Proin sit amet volutpat dui",
				text: "Jez Welham is waking you up with the best new urban dance music, plus an hour of old school in Reloaded from 9am.",
				infolink: "#",
				m4a:"http://www.jplayer.org/audio/m4a/Miaow-03-Lentement.m4a",
				oga:"http://www.jplayer.org/audio/ogg/Miaow-03-Lentement.ogg",
		},		
		{
				number: '07:00',
				artist: "Partem Nostrum",
				cover: "images/covers/cover-big-1.jpg",
				title: "Donec eu tincidunt ligula",
				text: "Everyday morning live radio show",
				infolink: "#",
				m4a: "http://www.jplayer.org/audio/m4a/Miaow-02-Hidden.m4a",
				oga: "http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg"		
		}
	]);
	$(this).addClass('loaded'); 
})

$(document.body).on('click', '#tabLink-3:not(".loaded")' ,function(){
		playlist3.setPlaylist([	
		{
				number: '06:00',
				artist: "Partiendo",
				cover: "images/covers/cover-big-4.jpg",
				title:"Proin sit amet volutpat dui",
				text: "Jez Welham is waking you up with the best new urban dance music, plus an hour of old school in Reloaded from 9am.",
				infolink: "#",
				m4a:"http://www.jplayer.org/audio/m4a/Miaow-03-Lentement.m4a",
				oga:"http://www.jplayer.org/audio/ogg/Miaow-03-Lentement.ogg",
		},		
		{
				number: '07:00',
				artist: " Ut Viderer",
				cover: "images/covers/cover-big-7.jpg",
				title: "Vestibulum ante ipsum primis",
				text: "Zoe Hardman mixes up the sexiest house sounds Live on Hed Kandi Radio",
				infolink: "#",
				m4a: "http://www.jplayer.org/audio/m4a/Miaow-07-Bubble.m4a",
				oga: "http://www.jplayer.org/audio/ogg/Miaow-07-Bubble.ogg"
		},
		{
				number: '08:00',
				artist: " Ut Viderer",
				cover: "images/covers/cover-big-2.jpg",
				text: "Since 2002, Markus Schulz has delivered a slice of his trademark sound through his weekly radio show, Global DJ Broadcast. Today, it remains one of the most respected and critically acclaimed radio shows across all of dance music, accumulating over 20 FM and online syndication partners in the process.",
				infolink: "#",
				title: "Vestibulum ante ipsum primis",
				m4a: "http://www.jplayer.org/audio/m4a/Miaow-07-Bubble.m4a",
				oga: "http://www.jplayer.org/audio/ogg/Miaow-07-Bubble.ogg"
		},
		{
				number: '09:00',
				artist: "Partem Nostrum",
				cover: "images/covers/cover-big-1.jpg",
				title: "Donec eu tincidunt ligula",
				text: "Anjunadeep is an independent record label based in London. Founded by Above & Beyond and James Grant.",
				infolink: "#",
				m4a: "http://www.jplayer.org/audio/m4a/Miaow-02-Hidden.m4a",
				oga: "http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg"
		},

		{
				number: '10:00',
				artist: "Altera Iriure",
				cover: "images/covers/cover-big-5.jpg",
				title:"Tation partiendo mel eu",
				text: "Chill out with the best laid-back beats",
				infolink: "#",
				m4a:"http://www.jplayer.org/audio/m4a/Miaow-03-Lentement.m4a",
				oga:"http://www.jplayer.org/audio/ogg/Miaow-03-Lentement.ogg",
		},
		{
				number: '12:00',
				artist: "Tempor Erat",
				cover: "images/covers/cover-big-3.jpg",
				title:"Etiam tempor erat ut",
				text: "Non-stop music from the radio tower of dance music's most iconic club We bring you the biggest, freshest tracks on the Ministry of Sound playlist with some of the most seminal tracks from two decades of dance. ",
				infolink: "#",
				m4a:"http://www.jplayer.org/audio/m4a/TSP-07-Cybersonnet.m4a",
				oga:"http://www.jplayer.org/audio/ogg/TSP-07-Cybersonnet.ogg",
		},

		{
				number: '14:00',
				artist: "Partem Nostrum",
				cover: "images/covers/cover-big-6.jpg",
				title: "Donec eu tincidunt ligula",
				text: "Everyday morning live radio show",
				infolink: "#",
				m4a: "http://www.jplayer.org/audio/m4a/Miaow-02-Hidden.m4a",
				oga: "http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg"	
		}
	]);
	$(this).addClass('loaded'); 
})
	
	
$(document.body).on('click', '#tabLink-4:not(".loaded")' ,function(){
		playlist4.setPlaylist([	
		{
				number: '14:00',
				artist: "Partem Nostrum",
				cover: "images/covers/cover-big-6.jpg",
				title: "Donec eu tincidunt ligula",
				text: "Everyday morning live radio show",
				infolink: "#",
				m4a: "http://www.jplayer.org/audio/m4a/Miaow-02-Hidden.m4a",
				oga: "http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg"		},
		{
				number: '15:00',
				artist: "Tempor Erat",
				cover: "images/covers/cover-big-3.jpg",
				title:"Etiam tempor erat ut",
				text: "Non-stop music from the radio tower of dance music's most iconic club We bring you the biggest, freshest tracks on the Ministry of Sound playlist with some of the most seminal tracks from two decades of dance. ",
				infolink: "#",
				m4a:"http://www.jplayer.org/audio/m4a/TSP-07-Cybersonnet.m4a",
				oga:"http://www.jplayer.org/audio/ogg/TSP-07-Cybersonnet.ogg",
		},

		{
				number: '16:00',
				artist: "Partiendo",
				cover: "images/covers/cover-big-4.jpg",
				title:"Proin sit amet volutpat dui",
				text: "Jez Welham is waking you up with the best new urban dance music, plus an hour of old school in Reloaded from 9am.",
				infolink: "#",
				m4a:"http://www.jplayer.org/audio/m4a/Miaow-03-Lentement.m4a",
				oga:"http://www.jplayer.org/audio/ogg/Miaow-03-Lentement.ogg",
		},		
		{
				number: '17:00',
				artist: " Ut Viderer",
				cover: "images/covers/cover-big-7.jpg",
				text: "Since 2002, Markus Schulz has delivered a slice of his trademark sound through his weekly radio show, Global DJ Broadcast. Today, it remains one of the most respected and critically acclaimed radio shows across all of dance music, accumulating over 20 FM and online syndication partners in the process.",
				infolink: "#",
				title: "Vestibulum ante ipsum primis",
				m4a: "http://www.jplayer.org/audio/m4a/Miaow-07-Bubble.m4a",
				oga: "http://www.jplayer.org/audio/ogg/Miaow-07-Bubble.ogg"
		},

		{
				number: '18:00',
				artist: " Ut Viderer",
				cover: "images/covers/cover-big-2.jpg",
				title: "Vestibulum ante ipsum primis",
				text: "Zoe Hardman mixes up the sexiest house sounds Live on Hed Kandi Radio",
				infolink: "#",
				m4a: "http://www.jplayer.org/audio/m4a/Miaow-07-Bubble.m4a",
				oga: "http://www.jplayer.org/audio/ogg/Miaow-07-Bubble.ogg"
		},
		{
				number: '19:00',
				artist: "Altera Iriure",
				cover: "images/covers/cover-big-5.jpg",
				title:"Tation partiendo mel eu",
				text: "Chill out with the best laid-back beats",
				infolink: "#",
				m4a:"http://www.jplayer.org/audio/m4a/Miaow-03-Lentement.m4a",
				oga:"http://www.jplayer.org/audio/ogg/Miaow-03-Lentement.ogg",
		},
		{
				number: '20:00',
				artist: "Partem Nostrum",
				cover: "images/covers/cover-big-1.jpg",
				title: "Donec eu tincidunt ligula",
				text: "Anjunadeep is an independent record label based in London. Founded by Above & Beyond and James Grant.",
				infolink: "#",
				m4a: "http://www.jplayer.org/audio/m4a/Miaow-02-Hidden.m4a",
				oga: "http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg"
		}
	]);
	$(this).addClass('loaded'); 
})
	
$(document.body).on('click', '#tabLink-5:not(".loaded")' ,function(){
		playlist5.setPlaylist([	
		{
				number: '01:00',
				artist: " Ut Viderer",
				cover: "images/covers/cover-big-7.jpg",
				text: "Since 2002, Markus Schulz has delivered a slice of his trademark sound through his weekly radio show, Global DJ Broadcast. Today, it remains one of the most respected and critically acclaimed radio shows across all of dance music, accumulating over 20 FM and online syndication partners in the process.",
				infolink: "#",
				title: "Vestibulum ante ipsum primis",
				m4a: "http://www.jplayer.org/audio/m4a/Miaow-07-Bubble.m4a",
				oga: "http://www.jplayer.org/audio/ogg/Miaow-07-Bubble.ogg"
		},

		{
				number: '02:00',
				artist: " Ut Viderer",
				cover: "images/covers/cover-big-2.jpg",
				title: "Vestibulum ante ipsum primis",
				text: "Zoe Hardman mixes up the sexiest house sounds Live on Hed Kandi Radio",
				infolink: "#",
				m4a: "http://www.jplayer.org/audio/m4a/Miaow-07-Bubble.m4a",
				oga: "http://www.jplayer.org/audio/ogg/Miaow-07-Bubble.ogg"
		},
		{
				number: '03:00',
				artist: "Tempor Erat",
				cover: "images/covers/cover-big-3.jpg",
				title:"Etiam tempor erat ut",
				text: "Non-stop music from the radio tower of dance music's most iconic club We bring you the biggest, freshest tracks on the Ministry of Sound playlist with some of the most seminal tracks from two decades of dance. ",
				infolink: "#",
				m4a:"http://www.jplayer.org/audio/m4a/TSP-07-Cybersonnet.m4a",
				oga:"http://www.jplayer.org/audio/ogg/TSP-07-Cybersonnet.ogg",
		},

		{
				number: '04:00',
				artist: "Partiendo",
				cover: "images/covers/cover-big-4.jpg",
				title:"Proin sit amet volutpat dui",
				text: "Jez Welham is waking you up with the best new urban dance music, plus an hour of old school in Reloaded from 9am.",
				infolink: "#",
				m4a:"http://www.jplayer.org/audio/m4a/Miaow-03-Lentement.m4a",
				oga:"http://www.jplayer.org/audio/ogg/Miaow-03-Lentement.ogg",
		},		
		{
				number: '05:00',
				artist: "Partem Nostrum",
				cover: "images/covers/cover-big-6.jpg",
				title: "Donec eu tincidunt ligula",
				text: "Everyday morning live radio show",
				infolink: "#",
				m4a: "http://www.jplayer.org/audio/m4a/Miaow-02-Hidden.m4a",
				oga: "http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg"		
		},
		{
				number: '06:00',
				artist: "Altera Iriure",
				cover: "images/covers/cover-big-5.jpg",
				title:"Tation partiendo mel eu",
				text: "Chill out with the best laid-back beats",
				infolink: "#",
				m4a:"http://www.jplayer.org/audio/m4a/Miaow-03-Lentement.m4a",
				oga:"http://www.jplayer.org/audio/ogg/Miaow-03-Lentement.ogg",
		},
		{
				number: '07:00',
				artist: "Partem Nostrum",
				cover: "images/covers/cover-big-1.jpg",
				title: "Donec eu tincidunt ligula",
				text: "Anjunadeep is an independent record label based in London. Founded by Above & Beyond and James Grant.",
				infolink: "#",
				m4a: "http://www.jplayer.org/audio/m4a/Miaow-02-Hidden.m4a",
				oga: "http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg"
		}
	]);
	$(this).addClass('loaded'); 
})
	
$(document.body).on('click', '#tabLink-6:not(".loaded")' ,function(){
		playlist6.setPlaylist([	
		{
				number: '12:00',
				artist: "Tempor Erat",
				cover: "images/covers/cover-big-3.jpg",
				title:"Etiam tempor erat ut",
				text: "Non-stop music from the radio tower of dance music's most iconic club We bring you the biggest, freshest tracks on the Ministry of Sound playlist with some of the most seminal tracks from two decades of dance. ",
				infolink: "#",
				m4a:"http://www.jplayer.org/audio/m4a/TSP-07-Cybersonnet.m4a",
				oga:"http://www.jplayer.org/audio/ogg/TSP-07-Cybersonnet.ogg",
		},
		{
				number: '14:00',
				artist: " Ut Viderer",
				cover: "images/covers/cover-big-2.jpg",
				title: "Vestibulum ante ipsum primis",
				text: "Zoe Hardman mixes up the sexiest house sounds Live on Hed Kandi Radio",
				infolink: "#",
				m4a: "http://www.jplayer.org/audio/m4a/Miaow-07-Bubble.m4a",
				oga: "http://www.jplayer.org/audio/ogg/Miaow-07-Bubble.ogg"
		},
		{
				number: '16:00',
				artist: "Partem Nostrum",
				cover: "images/covers/cover-big-6.jpg",
				title: "Donec eu tincidunt ligula",
				text: "Everyday morning live radio show",
				infolink: "#",
				m4a: "http://www.jplayer.org/audio/m4a/Miaow-02-Hidden.m4a",
				oga: "http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg"		
		},
		{
				number: '18:00',
				artist: " Ut Viderer",
				cover: "images/covers/cover-big-7.jpg",
				text: "Since 2002, Markus Schulz has delivered a slice of his trademark sound through his weekly radio show, Global DJ Broadcast. Today, it remains one of the most respected and critically acclaimed radio shows across all of dance music, accumulating over 20 FM and online syndication partners in the process.",
				infolink: "#",
				title: "Vestibulum ante ipsum primis",
				m4a: "http://www.jplayer.org/audio/m4a/Miaow-07-Bubble.m4a",
				oga: "http://www.jplayer.org/audio/ogg/Miaow-07-Bubble.ogg"
		},


		{
				number: '19:00',
				artist: "Altera Iriure",
				cover: "images/covers/cover-big-5.jpg",
				title:"Tation partiendo mel eu",
				text: "Chill out with the best laid-back beats",
				infolink: "#",
				m4a:"http://www.jplayer.org/audio/m4a/Miaow-03-Lentement.m4a",
				oga:"http://www.jplayer.org/audio/ogg/Miaow-03-Lentement.ogg",
		},
		{
				number: '20:00',
				artist: "Partiendo",
				cover: "images/covers/cover-big-4.jpg",
				title:"Proin sit amet volutpat dui",
				text: "Jez Welham is waking you up with the best new urban dance music, plus an hour of old school in Reloaded from 9am.",
				infolink: "#",
				m4a:"http://www.jplayer.org/audio/m4a/Miaow-03-Lentement.m4a",
				oga:"http://www.jplayer.org/audio/ogg/Miaow-03-Lentement.ogg",
		},		
		{
				number: '22:00',
				artist: "Partem Nostrum",
				cover: "images/covers/cover-big-1.jpg",
				title: "Donec eu tincidunt ligula",
				text: "Anjunadeep is an independent record label based in London. Founded by Above & Beyond and James Grant.",
				infolink: "#",
				m4a: "http://www.jplayer.org/audio/m4a/Miaow-02-Hidden.m4a",
		}
	]);
	$(this).addClass('loaded'); 
})
	
$(document.body).on('click', '#tabLink-7:not(".loaded")' ,function(){
		playlist7.setPlaylist([	
		{
				number: '10:00',
				artist: "Partiendo",
				cover: "images/covers/cover-big-4.jpg",
				title:"Proin sit amet volutpat dui",
				text: "Jez Welham is waking you up with the best new urban dance music, plus an hour of old school in Reloaded from 9am.",
				infolink: "#",
				m4a:"http://www.jplayer.org/audio/m4a/Miaow-03-Lentement.m4a",
				oga:"http://www.jplayer.org/audio/ogg/Miaow-03-Lentement.ogg",
		},		
		{
				number: '12:00',
				artist: "Partem Nostrum",
				cover: "images/covers/cover-big-1.jpg",
				title: "Donec eu tincidunt ligula",
				text: "Anjunadeep is an independent record label based in London. Founded by Above & Beyond and James Grant.",
				infolink: "#",
				m4a: "http://www.jplayer.org/audio/m4a/Miaow-02-Hidden.m4a",
				oga: "http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg"
		},
		{
				number: '14:00',
				artist: " Ut Viderer",
				cover: "images/covers/cover-big-2.jpg",
				title: "Vestibulum ante ipsum primis",
				text: "Zoe Hardman mixes up the sexiest house sounds Live on Hed Kandi Radio",
				infolink: "#",
				m4a: "http://www.jplayer.org/audio/m4a/Miaow-07-Bubble.m4a",
				oga: "http://www.jplayer.org/audio/ogg/Miaow-07-Bubble.ogg"
		},
		{
				number: '16:00',
				artist: "Partem Nostrum",
				cover: "images/covers/cover-big-6.jpg",
				title: "Donec eu tincidunt ligula",
				text: "Everyday morning live radio show",
				infolink: "#",
				m4a: "http://www.jplayer.org/audio/m4a/Miaow-02-Hidden.m4a",
				oga: "http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg"		
		},
		{
				number: '18:00',
				artist: "Tempor Erat",
				cover: "images/covers/cover-big-3.jpg",
				title:"Etiam tempor erat ut",
				text: "Non-stop music from the radio tower of dance music's most iconic club We bring you the biggest, freshest tracks on the Ministry of Sound playlist with some of the most seminal tracks from two decades of dance. ",
				infolink: "#",
				m4a:"http://www.jplayer.org/audio/m4a/TSP-07-Cybersonnet.m4a",
				oga:"http://www.jplayer.org/audio/ogg/TSP-07-Cybersonnet.ogg",
		},
		{
				number: '20:00',
				artist: " Ut Viderer",
				cover: "images/covers/cover-big-7.jpg",
				text: "Since 2002, Markus Schulz has delivered a slice of his trademark sound through his weekly radio show, Global DJ Broadcast. Today, it remains one of the most respected and critically acclaimed radio shows across all of dance music, accumulating over 20 FM and online syndication partners in the process.",
				infolink: "#",
				title: "Vestibulum ante ipsum primis",
				m4a: "http://www.jplayer.org/audio/m4a/Miaow-07-Bubble.m4a",
				oga: "http://www.jplayer.org/audio/ogg/Miaow-07-Bubble.ogg"
		},


		{
				number: '22:00',
				artist: "Altera Iriure",
				cover: "images/covers/cover-big-5.jpg",
				title:"Tation partiendo mel eu",
				text: "Chill out with the best laid-back beats",
				infolink: "#",
				m4a:"http://www.jplayer.org/audio/m4a/Miaow-03-Lentement.m4a",
				oga:"http://www.jplayer.org/audio/ogg/Miaow-03-Lentement.ogg",
		}
	]);
	$(this).addClass('loaded'); 
})

})