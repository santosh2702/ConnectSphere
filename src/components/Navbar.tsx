import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, MessageSquare, User, Home, LogOut } from 'lucide-react';
import { useAuthStore } from '../store/authStore';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { user, signOut } = useAuthStore();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/auth');
  };

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Menu className="h-6 w-6 text-primary-600 dark:text-primary-400" />
              <span className="font-bold text-xl text-gray-900 dark:text-white">ConnectSphere</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/"
              className="flex items-center space-x-1 text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400"
            >
              <Home className="h-5 w-5" />
              <span>Home</span>
            </Link>
            {user && (
              <>
                <Link
                  to="/dashboard"
                  className="flex items-center space-x-1 text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400"
                >
                  <MessageSquare className="h-5 w-5" />
                  <span>Dashboard</span>
                </Link>
                <Link
                  to="/profile"
                  className="flex items-center space-x-1 text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400"
                >
                  <User className="h-5 w-5" />
                  <span>Profile</span>
                </Link>
                <button
                  onClick={handleSignOut}
                  className="flex items-center space-x-1 text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400"
                >
                  <LogOut className="h-5 w-5" />
                  <span>Sign Out</span>
                </button>
              </>
            )}
            {!user && (
              <Link
                to="/auth"
                className="btn-primary"
              >
                Sign In
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 dark:text-gray-200"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              <Link
                to="/"
                className="flex items-center space-x-1 text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 p-2"
              >
                <Home className="h-5 w-5" />
                <span>Home</span>
              </Link>
              {user && (
                <>
                  <Link
                    to="/dashboard"
                    className="flex items-center space-x-1 text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 p-2"
                  >
                    <MessageSquare className="h-5 w-5" />
                    <span>Dashboard</span>
                  </Link>
                  <Link
                    to="/profile"
                    className="flex items-center space-x-1 text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 p-2"
                  >
                    <User className="h-5 w-5" />
                    <span>Profile</span>
                  </Link>
                  <button
                    onClick={handleSignOut}
                    className="flex items-center space-x-1 text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 p-2"
                  >
                    <LogOut className="h-5 w-5" />
                    <span>Sign Out</span>
                  </button>
                </>
              )}
              {!user && (
                <Link
                  to="/auth"
                  className="btn-primary mx-2"
                >
                  Sign In
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;