import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext({});

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in from localStorage
    const storedUser = localStorage.getItem('o2hexagon_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    // Simulate API call
    // In production, this would call your backend API
    const users = JSON.parse(localStorage.getItem('o2hexagon_users') || '[]');
    const foundUser = users.find(u => u.email === email && u.password === password);

    if (foundUser) {
      const userWithoutPassword = { ...foundUser, password: undefined };
      setUser(userWithoutPassword);
      localStorage.setItem('o2hexagon_user', JSON.stringify(userWithoutPassword));
      return { success: true };
    }

    return { success: false, error: 'Invalid credentials' };
  };

  const register = async (email, password, name, phone) => {
    // Simulate API call
    const users = JSON.parse(localStorage.getItem('o2hexagon_users') || '[]');

    if (users.find(u => u.email === email)) {
      return { success: false, error: 'Email already exists' };
    }

    const newUser = {
      id: Date.now().toString(),
      email,
      password,
      name,
      phone,
      createdAt: new Date().toISOString()
    };

    users.push(newUser);
    localStorage.setItem('o2hexagon_users', JSON.stringify(users));

    const userWithoutPassword = { ...newUser, password: undefined };
    setUser(userWithoutPassword);
    localStorage.setItem('o2hexagon_user', JSON.stringify(userWithoutPassword));

    return { success: true };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('o2hexagon_user');
  };

  const value = {
    user,
    login,
    register,
    logout,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
