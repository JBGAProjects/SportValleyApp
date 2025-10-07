import * as SecureStore from "expo-secure-store";
import { Platform } from "react-native";

/**
 * secureStore.ts
 *
 * Centraliza el almacenamiento seguro de datos sensibles (tokens, credenciales, etc.)
 * Expo SecureStore usa:
 *  - iOS: Keychain
 *  - Android: Keystore
 *  - Web (solo desarrollo): localStorage temporal (NO seguro para producción)
 */

/**
 * saveToken
 * Guarda un valor de forma segura en el dispositivo.
 * @param key - identificador del valor (ej: 'accessToken')
 * @param value - valor a guardar
 *
 * Ejemplo:
 * await saveToken('accessToken', 'mock-token-123');
 *
 * await asegura que el dato se guarde antes de continuar.
 */
export async function saveToken(key: string, value: string) {
  try {
    if (Platform.OS === "web") {
      // Web no tiene SecureStore, se usa localStorage solo para desarrollo
      localStorage.setItem(key, value);
    } else {
      // iOS y Android usan SecureStore
      await SecureStore.setItemAsync(key, value);
    }
  } catch (error) {
    console.error("Error guardando token seguro:", error);
  }
}

/**
 * getToken
 * Recupera un valor guardado de forma segura.
 * @param key - identificador del valor
 * @returns Promise<string | null> - valor guardado o null si no existe
 *
 * Ejemplo:
 * const token = await getToken('accessToken');
 * if(token) { usuario logueado }
 *
 * await asegura que la promesa se resuelva antes de usar el valor.
 */
export async function getToken(key: string): Promise<string | null> {
  try {
    if (Platform.OS === "web") {
      return localStorage.getItem(key);
    } else {
      return await SecureStore.getItemAsync(key);
    }
  } catch (error) {
    console.error("Error obteniendo token seguro:", error);
    return null;
  }
}

/**
 * deleteToken
 * Borra un valor del almacenamiento seguro.
 * @param key - identificador del valor
 *
 * Ejemplo:
 * await deleteToken('accessToken'); // al hacer logout
 *
 * Previene accesos no autorizados eliminando datos sensibles del dispositivo.
 */
export async function deleteToken(key: string) {
  try {
    if (Platform.OS === "web") {
      localStorage.removeItem(key);
    } else {
      await SecureStore.deleteItemAsync(key);
    }
  } catch (error) {
    console.error("Error borrando token seguro:", error);
  }
}
