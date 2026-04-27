// Validación de contraseña usando SHA-256 (frontend)
async function checkPassword() {
    const password = document.getElementById('password').value;
    const errorMsg = document.getElementById('error-msg');
    const privateContent = document.getElementById('private-content');
    // Hash SHA-256 de la contraseña pedida (en hexadecimal)
    const validHash = '5fd285175487c10e21560d4aed2aab09e48a57ca141e9e9c250175c76d98ad3f';
    // Función para obtener el hash SHA-256 de la contraseña
    async function sha256(str) {
        const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(str));
        return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('');
    }
    const hash = await sha256(password);
    if (hash === validHash) {
        document.getElementById('login-area').style.display = 'none';
        privateContent.style.display = 'block';
    } else {
        errorMsg.textContent = 'Paraula de pas incorrecta.';
    }
}
