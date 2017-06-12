<?php

function getContent($url) {
    $curlHandler = curl_init();
    curl_setopt($curlHandler, CURLOPT_URL, $url);
    curl_setopt($curlHandler, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($curlHandler, CURLOPT_USERAGENT, 'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.8.1.13) Gecko/20080311 Firefox/2.0.0.13');
    $content = curl_exec($curlHandler);
    curl_close($curlHandler);
    return $content;
}



function getContents($url) {

$curl = curl_init($url);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
curl_setopt($curl, CURLOPT_FOLLOWLOCATION, true);
curl_setopt($curl, CURLOPT_USERAGENT, userAgent() );
$html = curl_exec($curl);
curl_close($curl);

if (!$html) {
    die("something's wrong!");
}

return $html;
}


function debug_log3($file_path, $text)
{
	$file_dir = dirname($file_path);
	if( !file_exists($file_dir) or !is_dir($file_dir) or !is_writable($file_dir) )
		return false;
	
	$write_mode = 'w';
	if( file_exists($file_path) && is_file($file_path) && is_writable($file_path) )
		$write_mode = 'a';
	
	if( !$handle = fopen($file_path, $write_mode) )
		return false;
	
	if( fwrite($handle, $text. "\n") == FALSE )
		return false;
	
	@fclose($handle);
}



function userAgent()
{


$agents = array('Mozilla/5.0 (Windows; U; Windows NT 5.1; en-GB; rv:1.8.1.6) Gecko/20070725 Firefox/2.0.0.6',
'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.97 Safari/537.11',
'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1)',
'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1; .NET CLR 1.1.4322; .NET CLR 2.0.50727; .NET CLR 3.0.04506.30)',
'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; .NET CLR 1.1.4322)',
'Mozilla/4.0 (compatible; MSIE 5.0; Windows NT 5.1; .NET CLR 1.1.4322)',
'Opera/9.20 (Windows NT 6.0; U; en)',
'Opera/9.00 (Windows NT 5.1; U; en)',
'Avant Browser/1.2.789rel1 (http://www.avantbrowser.com)',
'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10.6; en-US; rv:1.9.2.12) Gecko/20101026 Firefox/3.6.12',
'Mozilla/5.0 (iPad; U; CPU OS 3_2 like Mac OS X; en-us) AppleWebKit/531.21.10 (KHTML, like Gecko) Version/4.0.4 Mobile/7B334b Safari/531.21.10',
'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.8.1.9) Gecko/20071025 Firefox/2.0.0.9',
'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1; .NET CLR 1.1.4322; .NET CLR 2.0.50727; .NET CLR 3.0.04506.30)',
'Mozilla/5.0 (Macintosh; U; Intel Mac OS X; en) AppleWebKit/522.11 (KHTML, like Gecko) Safari/3.0.2',
'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; .NET CLR 1.1.4322)',
'Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US) AppleWebKit/532.5 (KHTML, like Gecko) Chrome/4.0.249.0 Safari/532.5',
'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.8.1.13) Gecko/20080311 Firefox/2.0.0.13',
'Mozilla/5.0 (Windows; U; Windows NT 5.2; en-US) AppleWebKit/532.9 (KHTML, like Gecko) Chrome/5.0.310.0 Safari/532.9',
'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US) AppleWebKit/534.7 (KHTML, like Gecko) Chrome/7.0.514.0 Safari/534.7',
'Mozilla/5.0 (Windows; U; Windows NT 6.0; en-US) AppleWebKit/534.14 (KHTML, like Gecko) Chrome/9.0.601.0 Safari/534.14',
'Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US) AppleWebKit/534.20 (KHTML, like Gecko) Chrome/11.0.672.2 Safari/534.20',
'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/534.27 (KHTML, like Gecko) Chrome/12.0.712.0 Safari/534.27',
'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/535.1 (KHTML, like Gecko) Chrome/13.0.782.24 Safari/535.1',
'Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US) AppleWebKit/534.10 (KHTML, like Gecko) Chrome/8.0.552.224 Safari/534.10',
'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.9.0.10) Gecko/2009042316 Firefox/3.0.10'
);


if (is_array($agents)) {
  $agent = $agents[rand(0,count($agents)-1)];
} else {
  $agent = $agents;
}


//return $agent;

return $_SERVER['HTTP_USER_AGENT'];

}



function getToken()
{


$key_pair_id = 'APKAIOKKXRQ5QBLOKYOQ';
$token = get_secret();
$streamname = time();
$originaltimestamp = time13();

/* secure token code start here */

if($streamname)
{
//$hash = $_GET['h'];
 return md5($token . "/" . $streamname . "/" . $originaltimestamp . "/" . $key_pair_id);

}
else
{
 return 0;
}

}


// Return secret to flowplayer for use
function get_secret() {
    $token = '69964920064c0a7626e6c97997070fcd';
    return $token; 
}


function time13()
{

return time() . '000';  
//list($usec, $sec) = explode(" ", microtime()); 
//return sprintf('%d%03d', $sec, $usec/1000);  

}


function marqueeText($text, $width)
{

$max = (0.60*$width) / 10;

if(strlen($text)>$max)
  return '<marquee scrollamount="2" behavior="alternate" direction="right" width="'.(0.60*$width).'">'.$text.'</marquee>';
else
  return $text;

}


?>