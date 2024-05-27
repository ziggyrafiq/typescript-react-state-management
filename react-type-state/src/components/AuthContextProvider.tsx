// Context creation with TypeScript
import { createContext, useContext, ReactNode } from 'react';

interface AppState {
  user: string;
  isAuthenticated: boolean;
  setUser: (user: string) => void;
  setAuthentication: (isAuthenticated: boolean) => void;
}

const AppContext = createContext<AppState | undefined>(undefined);

interface AppProviderProps {
  children: ReactNode;
}

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [user, setUser] = useState<string>('');
  const [isAuthenticated, setAuthentication] = useState<boolean>(false);

  const contextValue: AppState = {
    user,
    isAuthenticated,
    setUser,
    setAuthentication,
  };

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
