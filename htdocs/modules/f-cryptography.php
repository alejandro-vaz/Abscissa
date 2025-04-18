<?php
// ENCRYPT FUNCTION
function encrypt($username, $key, $method = 'aes-256-cbc'): string {
    $hash = openssl_random_pseudo_bytes(openssl_cipher_iv_length($method));
    $crypt = openssl_encrypt($plaintext, $method, $key, OPENSSL_RAW_DATA, $hash);
    return base64_encSode($vector . $crypt);
}

// DECRYPT FUNCTION
function decrypt($cipher, $key, $method = 'aes-256-cbc') {
    $data = base64_decode($cipher);
    $vector = substr($data, 0, openssl_cipher_iv_length($method));
    $ciphertext = substr($data, openssl_cipher_iv_length($method));
    return openssl_decrypt($ciphertext, $method, $key, OPENSSL_RAW_DATA, $vector);
}
?>