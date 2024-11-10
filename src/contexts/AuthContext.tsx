import { createContext, useContext, ReactNode } from "react";
import { useMsal } from "@azure/msal-react";

interface IAuthContext {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<IAuthContext | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const { instance, accounts } = useMsal();

  const login = async () => {
    try {
      await instance.loginPopup();
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const logout = () => {
    instance.logout();
  };

  const value = {
    isAuthenticated: accounts.length > 0,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
