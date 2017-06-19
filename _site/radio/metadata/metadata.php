<?php

$radiotype = isset($_REQUEST['radiotype'])?$_REQUEST['radiotype']:"";
$url = isset($_REQUEST['radiolink'])?$_REQUEST['radiolink']:"";


switch ($radiotype) {
    case "icecast":
        include("icecast.php");
        break;
    case "shoutcast1":
        include("shoutcast.php");
        break;
    case "shoutcast2":
        include("shoutcast-v2.php");
        break;
    default:
        include("shoutcast-v2.php");
}


?>