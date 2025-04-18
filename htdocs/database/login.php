<?php 

// Archive for login

// HANDLER
require_once "../modules/.php";

// IMPORTS
module("functional", "arguments");
module("functional", "environment");
module("functional", "database");
module("functional", "check");

// SIGNAL
signal("functional");

// RESPONSE SET TO JSON FROM ANYONE
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

// CONNECT TO THE DATABASE
$database = database_connect($ENV["DB_HOST"], $ENV["DB_USER"], $ENV["DB_PASSWORD"], $ENV["DB_NAME"]);

// CHECK ARGUMENTS
check('/^[a-z0-9@.]{5,32}$/', $PST["EMAIL"], "EMAIL");
check('/^[A-Z0-9!@#$%^&*()_+\-={};":|,.<>\/?]{5,32}$/', $PST["PASSWORD"], "PASSWORD");
check('/^[A-Z0-9]{1,32}$/', $PST["USERNAME"], "USERNAME");



?>