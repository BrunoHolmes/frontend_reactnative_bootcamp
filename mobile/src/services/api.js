import axios from 'axios'

const api = axios.create({
    baseURL: 'http://192.168.0.8:3333'
});

export default api;

/**
 * iOS com emulador: localhost
 * iOS com dispositivo físico: IP da máquina ao invés do localhost
 * Android com Emulador: localhost(através do adb reverse)
 * Android com Emulador: 10.0.2.2 (Android Studio)
 * Android com Emulador: 10.0.3.2 (Genymotion)
 * Android com dispositivo físico: IP da máquina
 */