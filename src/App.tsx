import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Moon, Sun } from 'lucide-react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Chat from './pages/Chat';
import Auth from './pages/Auth';
import { useAuthStore } from './store/authStore';

function App() {
  const [darkMode, setDarkMode] = React.useState(false);
  const { user } = useAuthStore();

  React.useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
        <Navbar />
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="fixed bottom-4 right-4 p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg"
          aria-label="Toggle dark mode"
        >
          {darkMode ? (
            <Sun className="w-6 h-6 text-yellow-500" />
          ) : (
            <Moon className="w-6 h-6 text-gray-700" />
          )}
        </button>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          {user && (
            <>
              <Route path="/dashboard\" element={<Dashboard />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/chat/:userId" element={<Chat />} />
            </>
          )}
        </Routes>
        <footer className="py-4 text-center">
          <a
            href="https://bolt.new"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <div className="bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-shadow">
              <span className="text-sm font-medium text-gray-700">Built with Bolt.new</span>
            </div>
          </a>
        </footer>
      </div>
    </Router>
  );
}

export default App;