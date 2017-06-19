<?php
error_reporting(0);
header("Content-Type: text/html;charset=ISO-8859-1");

include_once("function.php");
/*include_once("Curl.php");

function fileGetContents($url)
{

$c = new Net_Curl();

$c->Net_Curl($url, $_SERVER['HTTP_USER_AGENT']);

$result = $c->execute();

if (!PEAR::isError($result)) {
            echo $result;
        }

//echo "sdfsdf";

return $result;

}
*/

$url = isset($_REQUEST['url'])?$_REQUEST['url']:"";



$id = isset($_REQUEST['id'])?$_REQUEST['id']:1;
$_callback = isset($_REQUEST['_callback'])?$_REQUEST['_callback']:'';  


$url = str_replace(";", "", $url);
$url = str_replace("audio.mp3", "", $url);

$url = $url."played.html";

$pp = parse_url($url);

/// //font[@class="default"]//table[2]//tr[2]


//$html = getContent($url);

$html = getContent($url);

//$html = new DOMDocument();
//$html->loadHtmlFile( $url );

//var_dump(strlen($data));

//echo $html;

$dom = new DOMDocument();
@$dom->loadHTML($html);

$xpath = new DOMXPath($dom);

$tRows = $xpath->query('//font[@class="default"]//table[2]//tr//td[2]');


//print_r($tRows->nodeValue);

$io=0;

$echo = "<ul style='color: #000;'>";

foreach ($tRows as $row) {
    // fetch all 'tds' inside this 'tr'
    //$td = $xpath->query('td', $row);
	
	//echo $row->textContent."<br>";
	if($io==0 || $io==1)
	{
	 //$echo .= "<b> ".$row->textContent."</b>";
	}
	else
	{
	
	
/*	 if($io==2) $echo .= "<br>";
	 if($io%2!=0 && $io!=3) 
	  $echo .= "<br>";
	 else if($io==2)
	  $echo .= "";
	 else
	  $echo .= "&nbsp;";*/
	 
	 $echo .= "<li>";
	 $echo .= str_replace("Current Song","",$row->textContent);
	 $echo .= "</li>";
	 //echo $row->textContent;
	 	 
	
	}
	
	$io++;
	
	if($io>8) break;
}	

$echo .= "</ul>";

echo $echo;


?>