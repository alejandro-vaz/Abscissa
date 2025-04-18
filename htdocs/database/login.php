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


function aes_encrypt_ecb($plaintext, $key) {
    // Ensure the key is 32 bytes for AES-256
    $key = substr(hash('sha256', $key, true), 0, 32);
    
    // Encrypt the data
    $ciphertext = openssl_encrypt($plaintext, 'aes-256-ecb', $key, OPENSSL_RAW_DATA);
    
    // Return the base64 encoded ciphertext
    return base64_encode($ciphertext);
}

function aes_decrypt_ecb($ciphertext, $key) {
    // Ensure the key is 32 bytes for AES-256
    $key = substr(hash('sha256', $key, true), 0, 32);
    
    // Decode the base64 encoded data
    $data = base64_decode($ciphertext);
    
    // Decrypt the data
    return openssl_decrypt($data, 'aes-256-ecb', $key, OPENSSL_RAW_DATA);
}


?>