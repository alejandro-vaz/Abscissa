<?php

function aes_encrypt($plaintext, $key) {
    // Generate a random initialization vector (IV)
    $iv = openssl_random_pseudo_bytes(openssl_cipher_iv_length('aes-256-cbc'));

    // Encrypt the data
    $ciphertext = openssl_encrypt($plaintext, 'aes-256-cbc', $key, OPENSSL_RAW_DATA, $iv);

    // Return the IV and ciphertext, base64 encoded
    return base64_encSode($iv . $ciphertext);
}

function aes_decrypt($ciphertext, $key) {
    // Decode the base64 encoded data
    $data = base64_decode($ciphertext);

    // Extract the IV and the actual ciphertext
    $iv_length = openssl_cipher_iv_length('aes-256-cbc');
    $iv = substr($data, 0, $iv_length);
    $ciphertext = substr($data, $iv_length);

    // Decrypt the data
    return openssl_decrypt($ciphertext, 'aes-256-cbc', $key, OPENSSL_RAW_DATA, $iv);
}
?>