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