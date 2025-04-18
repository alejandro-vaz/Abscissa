<?php
// HANDLER
require_once "../modules/.php";

// IMPORTS
module("functional", "environment");
module("functional", "database");
module("functional", "check");
module("functional", "post");

// SIGNAL
signal("functional");

// RESPONSE SET TO JSON FROM ANYONE
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

// CONNECT TO THE DATABASE
$database = database_connect($ENV["DB_HOST"], $ENV["DB_USER"], $ENV["DB_PASSWORD"], $ENV["DB_NAME"]);

// INSERT ERROR INTO DATABASE
$result = database_request("INSERT INTO logs (error, file, line, message, time) VALUES ('" . $PST["ERROR"] . "', '" . $PST["FILE"] . "', '" . intval($PST["LINE"]) . "', '" . $PST["MESSAGE"] . "', '" . date('Y-m-d H:i:s') . "')", $database);
?>