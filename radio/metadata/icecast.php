<?php
error_reporting(0);

header("Content-Type: text/html;charset=ISO-8859-1");

$url = isset($_REQUEST['url'])?$_REQUEST['url']:"http://str30.creacast.com/radio_star";

$pp = parse_url($url);

$host = isset($pp['host'])?$pp['host']:"str30.creacast.com";
$path = isset($pp['path'])?$pp['path']:"/radio_star";
$port = isset($pp['port'])?$pp['port']:80;

// connect to server
$fp = fsockopen($host, $port, $errno, $errstr, 90);
if (!$fp) {
    echo "$errstr ($errno)<br />\n";
} else {
    $out = "GET $path HTTP/1.0\r\n";
    $out .= "Icy-MetaData:1\r\n";
    $out .= "\r\n";
    fwrite($fp, $out);
}

// parse meta info
$headers = array();
while(!feof($fp)) { // this while condition should never be false
    $line = fgets($fp);
    if($line == "\r\n") break;
    
    $line = str_replace("\r\n", "", $line);
    $header = explode(":", $line, 2);
    if(!isset($header[1])) $header[1] = NULL;
    $headers[$header[0]] = $header[1];
}

// check whether icy-metaint is present
if(!isset($headers["icy-metaint"])) {
    die("icy-metaint not set");
}


// endless loop through all metadata
while(!feof($fp)) {
    fseek($fp, $headers["icy-metaint"], SEEK_CUR);
    
    $length = ord(fread($fp, 1))*16;
    
    if($length == 0) {
        continue;
    } else {
        $data = fread($fp, $length);
        $meta_info = parse_ini_string(str_replace(";", "\n", $data));
        if(is_array($meta_info)) handle_metainfo($meta_info);
    }
}


// function called each time new metadata arrives
function handle_metainfo(array $info) {
    //echo "===========SONG-INFO===========\n";
    
    /*foreach($info AS $key => $value ) {
        echo "$key: $value\n";
		
		//if($key=="StreamTitle") echo $value
		
    }*/
	
	//if(isset($info['StreamTitle']) && $info['StreamTitle']!="")
	 die($info['StreamTitle']);
}


if( !function_exists('parse_ini_string') ){
    
    function parse_ini_string( $string ) {
        $array = Array();

        $lines = explode("\n", $string );
        
        foreach( $lines as $line ) {
            $statement = preg_match("/^(?!;)(?P<key>[\w+\.\-]+?)\s*=\s*(?P<value>.+?)\s*$/", $line, $match );

            if( $statement ) {
                $key    = $match[ 'key' ];
                $value    = $match[ 'value' ];
                
                # Remove quote
                if( preg_match( "/^\".*\"$/", $value ) || preg_match( "/^'.*'$/", $value ) ) {
                    $value = mb_substr( $value, 1, mb_strlen( $value ) - 2 );
                }
                
                $array[ $key ] = $value;
            }
        }
        return $array;
    }
}


 function parse_ini_string1($str, $ProcessSections=false){
        $lines  = explode("\n", $str);
        $return = Array();
        $inSect = false;
        foreach($lines as $line){
            $line = trim($line);
            if(!$line || $line[0] == "#" || $line[0] == ";")
                continue;
            if($line[0] == "[" && $endIdx = strpos($line, "]")){
                $inSect = substr($line, 1, $endIdx-1);
                continue;
            }
            if(!strpos($line, '=')) // (We don't use "=== false" because value 0 is not valid as well)
                continue;
            
            $tmp = explode("=", $line, 2);
            if($ProcessSections && $inSect)
                $return[$inSect][trim($tmp[0])] = ltrim($tmp[1]);
            else
                $return[trim($tmp[0])] = ltrim($tmp[1]);
        }
        return $return;
    }