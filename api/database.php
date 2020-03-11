<?php

session_start();

$user = $_SESSION['user'];

if($user == 'admin') {
    echo '{
        "message": "You are Logged In as an administrator",
        "success": true   
    }';
} else {
    echo '{
        "message": "Who the f are you",
        "success": false
    }';
}

?>