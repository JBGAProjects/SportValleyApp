import axios, { AxiosRequestHeaders, InternalAxiosRequestConfig } from "axios";
import { Alert } from "react-native";
import Constants from "expo-constants";
import { getToken, deleteToken } from "../services/secureStore";

/**
 * apiClient.ts
 *
 * Cliente HTTP centralizado para toda la app.
 * Usa Axios para:
 * - Manejar baseURL dinámica según entorno
 * - Inyectar automáticamente tokens en los headers
 * - Gestionar errores globales de manera consistente
 *
 * Ventajas:
 * - Reutilización total
 * - Preparado para backend real con JWT/OAuth
 * - Fácil integración con AuthContext
 */

/**
 * Base URL de la API
 * - Se obtiene de app.config.js (extra.apiBase)
 * - Permite cambiar entre desarrollo y producción sin modificar el código
 */
const apiBase = Constants.manifest?.extra?.apiBase;

/**
 * Cliente Axios principal
 * - baseURL: url de backend
 * - headers: por defecto JSON
 */
export const api = axios.create({
  baseURL: apiBase,
  headers: {
    "Content-Type": "application/json",
  },
});

/**
 * Interceptor de request
 * - Se ejecuta antes de cada request
 * - Recupera el token seguro de SecureStore
 * - Si existe, agrega header Authorization
 */
api.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    const token = await getToken("accessToken");

    // Asegúrate de que headers siempre sea un objeto
    if (!config.headers) {
      config.headers = {} as AxiosRequestHeaders;
    }

    // Agrega Authorization si existe token
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

/**
 * Interceptor de response
 * - Se ejecuta después de cada respuesta
 * - Permite manejar errores globalmente (ej. 401 -> logout)
 */
api.interceptors.response.use(
  (response) => {
    // Respuesta exitosa, devuelve los datos tal cual
    return response;
  },
  async (error) => {
    // Si el error es 401 (no autorizado)
    if (error.response?.status === 401) {
      // Opcional: limpiar token seguro
      await deleteToken("accessToken");

      // Notificar al usuario (solo ejemplo)
      Alert.alert("Sesión expirada", "Por favor, inicia sesión nuevamente.");

      // Aquí se puede disparar un logout global usando AuthContext
      // Ejemplo: authContext.logout();
    }

    // Rechaza la promesa con el error para manejarlo en la pantalla
    return Promise.reject(error);
  }
);
