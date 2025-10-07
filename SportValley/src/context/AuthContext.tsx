import React, { createContext, useState, useEffect, ReactNode, useContext } from 'react';
import { api } from '../api/apiClient'; // Cliente HTTP robusto
import { saveToken, getToken, deleteToken } from '../services/secureStore';
import { Alert } from 'react-native';

/**
 * AuthContext.tsx
 *
 * Proporciona un contexto global de autenticación para toda la app.
 * Funciones principales:
 * - login: autenticar usuario y guardar token
 * - logout: cerrar sesión y borrar token
 * - isAuthenticated: indica si el usuario está logueado
 * - user: datos del usuario actual
 *
 * Permite un flujo de navegación condicional y manejo de sesión.
 */

/** Modelo de usuario */
interface User {
  id: string;
  name: string;
  email: string;
  // Puedes agregar más campos según tu modelo
}

/** Forma del contexto de autenticación */
interface AuthContextData {
  isAuthenticated: boolean;                  // Estado global de login
  user: User | null;                          // Usuario actualmente logueado
  login: (email: string, password: string) => Promise<void>; // Función login
  logout: () => void;                        // Función logout
}

/** Contexto con TypeScript */
export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

/** Hook personalizado para consumir AuthContext fácilmente */
export const useAuth = () => useContext(AuthContext);

/** Props del proveedor */
interface AuthProviderProps {
  children: ReactNode;
}

/**
 * AuthProvider
 * -------------
 * Envuelve la app y proporciona contexto de autenticación
 */
export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Estado login
  const [user, setUser] = useState<User | null>(null);           // Usuario actual

  /**
   * useEffect al iniciar la app
   * - Intenta restaurar sesión desde almacenamiento seguro
   * - Si existe token, considera que el usuario ya está logueado
   */
  useEffect(() => {
    const restoreSession = async () => {
      const token = await getToken('accessToken'); // Recupera token seguro
      if (token) {
        // Para mock: definimos un usuario temporal
        setUser({ id: '1', name: 'Usuario Demo', email: 'demo@sportvalley.com' });
        setIsAuthenticated(true);                  // Actualiza estado global
      }
    };
    restoreSession();
  }, []);

  /**
   * login
   * - Llama a backend mock / real para autenticar
   * - Guarda token seguro en el dispositivo
   * - Actualiza estado global y usuario
   */
  const login = async (email: string, password: string) => {
    try {
      // Mock: aquí puedes reemplazar con llamada real a api.post('/login', ...)
      const response = await api.post('/login', { email, password });

      // Extraemos token
      const token = response.data.accessToken;

      // Guardamos token seguro
      await saveToken('accessToken', token);

      // Mock de usuario
      const loggedUser: User = { id: '1', name: 'Usuario Demo', email };

      setUser(loggedUser);           // Guardamos usuario
      setIsAuthenticated(true);      // Marcamos como logueado
    } catch (error) {
      Alert.alert('Error', 'Credenciales inválidas'); // Mensaje de error
      throw error;
    }
  };

  /**
   * logout
   * - Borra token seguro
   * - Limpia usuario y estado de autenticación
   */
  const logout = async () => {
    await deleteToken('accessToken'); // Borra token del dispositivo
    setUser(null);                     // Limpiar usuario
    setIsAuthenticated(false);         // Marcar como no autenticado
  };

  /** Proporciona contexto a toda la app */
  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
