$(document).ready(function(){
	
	new jPlayerPlaylist({
		jPlayer: "#jquery_jplayer_1",
		cssSelectorAncestor: "#jp_container_1"
	}, [
		{
			artist:"Artist Name 1",
			title:"Cro Magnon Man 1",
			m4a:"http://www.jplayer.org/audio/m4a/TSP-01-Cro_magnon_man.m4a",
			oga:"http://www.jplayer.org/audio/ogg/TSP-01-Cro_magnon_man.ogg"
		},
		{
			artist:"Artist Name",
			title:"Your Face",
			m4a:"http://www.jplayer.org/audio/m4a/TSP-05-Your_face.m4a",
			oga:"http://www.jplayer.org/audio/ogg/TSP-05-Your_face.ogg"
		},
		{
			artist:"Artist Name",
			title:"Cyber Sonnet",
			m4a:"http://www.jplayer.org/audio/m4a/TSP-07-Cybersonnet.m4a",
			oga:"http://www.jplayer.org/audio/ogg/TSP-07-Cybersonnet.ogg"
		},
		{
			artist:"Artist Name",
			title:"Tempered Song",
			m4a:"http://www.jplayer.org/audio/m4a/Miaow-01-Tempered-song.m4a",
			oga:"http://www.jplayer.org/audio/ogg/Miaow-01-Tempered-song.ogg"
		},
		{
			artist:"Artist Name",
			title:"Hidden",
			m4a:"http://www.jplayer.org/audio/m4a/Miaow-02-Hidden.m4a",
			oga:"http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg"
		},
		{
			artist:"Artist Name",
			title:"Lentement",
			m4a:"http://www.jplayer.org/audio/m4a/Miaow-03-Lentement.m4a",
			oga:"http://www.jplayer.org/audio/ogg/Miaow-03-Lentement.ogg"
		},
		{
			artist:"Artist Name",
			title:"Lismore",
			m4a:"http://www.jplayer.org/audio/m4a/Miaow-04-Lismore.m4a",
			oga:"http://www.jplayer.org/audio/ogg/Miaow-04-Lismore.ogg"
		},

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