<?php

$radiotype = isset($_REQUEST['radiotype'])?$_REQUEST['radiotype']:"";
$url = isset($_REQUEST['radiolink'])?$_REQUEST['radiolink']:"";


switch ($radiotype) {
    case "shoutcast1":
        include("shoutcast-list.php");
        break;
    case "shoutcast2":
        include("shoutcast-list-v2.php");
        break;
    default:
        include("shoutcast-list-v2.php");
}



?>