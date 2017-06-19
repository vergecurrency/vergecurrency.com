<?php
error_reporting(0);
header("Content-Type: text/html;charset=ISO-8859-1");



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
$url = isset($_REQUEST['url'])?$_REQUEST['url']:"http://65.18.172.173:14000/played.html?sid=1";

$pp = parse_url($url);

//print_r($pp); 

$sid = preg_replace('/\D/', '', $pp['path']);

if($sid=="") $sid = 1; 

//echo $pp['host'].$pp['port'].intval($pp['path']); die;

$url = 'http://'.$pp['host'].':'.$pp['port'].'/played.html?sid='.$sid;

/// //font[@class="default"]//table[2]//tr[2]

$id = isset($_REQUEST['id'])?$_REQUEST['id']:1;
$_callback = isset($_REQUEST['_callback'])?$_REQUEST['_callback']:'';  



//$html = getContent($url);

$html = getContents($url);

//$html = new DOMDocument();
//$html->loadHtmlFile( $url );

//var_dump(strlen($data));

//echo $html;

$dom = new DOMDocument();
@$dom->loadHTML($html);

$xpath = new DOMXPath($dom);

//$tRows = $xpath->query('//font[@class="default"]//table[2]//tr[2]//td[2]');

$tRows = $xpath->query('//table[2]//tr[2]//td[2]');


//print_r($tRows->nodeValue);

foreach ($tRows as $row) {
    // fetch all 'tds' inside this 'tr'
    //$td = $xpath->query('td', $row);
	
	//echo $row->textContent."<br>";
	echo $row->nodeValue;
	
   	
}	


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
curl_setopt($curl, CURLOPT_USERAGENT, 'Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US) AppleWebKit/534.10 (KHTML, like Gecko) Chrome/8.0.552.224 Safari/534.10');
$html = curl_exec($curl);
curl_close($curl);

if (!$html) {
    die("something's wrong!");
}

return $html;
}


?>