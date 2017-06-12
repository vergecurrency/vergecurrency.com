<?php

//error_reporting(E_ALL);
error_reporting(0);
include_once('ShoutcastInfo.class.php');

header('Content-Type: text/plain');
header("Content-Type: text/html;charset=ISO-8859-1");

$url = isset($_REQUEST['url'])?$_REQUEST['url']:"";

$url = str_replace(";", "", $url);
$url = str_replace("audio.mp3", "", $url);

//$url = $url."played.html";


$pp = parse_url($url);


$__channel = $pp['host']; //$_REQUEST["channel"]; //85.17.136.7
$__port = $pp['port']; //$_REQUEST["port"]; //8012
$__timeout=2;
$scs = new ShoutcastInfo($__channel,$__port,$__timeout);

if( !$scs->connect() ){
	die($scs->error(TRUE));
	//die();
}
$scs->send();
$data = $scs->parse();
$scs->close();

//print_r($data);

if($data["track"] == ""){
	echo "On Air";
}else{
	echo $data["track"];;
}

?>