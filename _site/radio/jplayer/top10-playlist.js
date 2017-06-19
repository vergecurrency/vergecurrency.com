$(document).ready(function(){

		new jPlayerPlaylist({
		jPlayer: "#jquery_jplayer_2",
		cssSelectorAncestor: "#jp_container_2"
	}, [
		{
				number: '1',
				artist: "Partem Nostrum",
				cover: "images/covers/cover-1.jpg",
				title: "Donec eu tincidunt ligula",
				m4a: "http://www.jplayer.org/audio/m4a/Miaow-02-Hidden.m4a",
				oga: "http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg"
		},
		{
				number: '2',
				artist: " Ut Viderer",
				cover: "images/covers/cover-2.jpg",
				title: "Vestibulum ante ipsum primis",
				m4a: "http://www.jplayer.org/audio/m4a/Miaow-07-Bubble.m4a",
				oga: "http://www.jplayer.org/audio/ogg/Miaow-07-Bubble.ogg"
		},
		{
				number: '3',
				artist: "Tempor Erat",
				cover: "images/covers/cover-3.jpg",
				title:"Etiam tempor erat ut",
				m4a:"http://www.jplayer.org/audio/m4a/TSP-07-Cybersonnet.m4a",
				oga:"http://www.jplayer.org/audio/ogg/TSP-07-Cybersonnet.ogg",
		},
		{
				number: '4',
				artist: "Partiendo",
				cover: "images/covers/cover-4.jpg",
				title:"Proin sit amet volutpat dui",
				m4a:"http://www.jplayer.org/audio/m4a/Miaow-03-Lentement.m4a",
				oga:"http://www.jplayer.org/audio/ogg/Miaow-03-Lentement.ogg",
		},
		{
				number: '5',
				artist: "Altera Iriure",
				cover: "images/covers/cover-5.jpg",
				title:"Tation partiendo mel eu",
				m4a:"http://www.jplayer.org/audio/m4a/Miaow-03-Lentement.m4a",
				oga:"http://www.jplayer.org/audio/ogg/Miaow-03-Lentement.ogg",
		},
		{
				number: '6',
				artist: "Partem Nostrum",
				cover: "images/covers/cover-1.jpg",
				title: "Donec eu tincidunt ligula",
				m4a: "http://www.jplayer.org/audio/m4a/Miaow-02-Hidden.m4a",
				oga: "http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg"
		},
		{
				number: '7',
				artist: " Ut Viderer",
				cover: "images/covers/cover-2.jpg",
				title: "Vestibulum ante ipsum primis",
				m4a: "http://www.jplayer.org/audio/m4a/Miaow-07-Bubble.m4a",
				oga: "http://www.jplayer.org/audio/ogg/Miaow-07-Bubble.ogg"
		},
		{
				number: '8',
				artist: "Tempor Erat",
				cover: "images/covers/cover-3.jpg",
				title:"Etiam tempor erat ut",
				m4a:"http://www.jplayer.org/audio/m4a/TSP-07-Cybersonnet.m4a",
				oga:"http://www.jplayer.org/audio/ogg/TSP-07-Cybersonnet.ogg",
		},
		{
				number: '9',
				artist: "Partiendo",
				cover: "images/covers/cover-4.jpg",
				title:"Proin sit amet volutpat dui",
				m4a:"http://www.jplayer.org/audio/m4a/Miaow-03-Lentement.m4a",
				oga:"http://www.jplayer.org/audio/ogg/Miaow-03-Lentement.ogg",
		},
		{
				number: '10',
				artist: "Altera Iriure",
				cover: "images/covers/cover-5.jpg",
				title:"Tation partiendo mel eu",
				m4a:"http://www.jplayer.org/audio/m4a/Miaow-03-Lentement.m4a",
				oga:"http://www.jplayer.org/audio/ogg/Miaow-03-Lentement.ogg",
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


})