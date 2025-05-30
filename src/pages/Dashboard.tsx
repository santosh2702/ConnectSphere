import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Users, Trophy } from 'lucide-react';
import { useAuthStore } from '../store/authStore';
import type { Match } from '../types';

function Dashboard() {
  const { user } = useAuthStore();
  const [matches, setMatches] = React.useState<Match[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    // Simulated API call to fetch matches
    const fetchMatches = async () => {
      try {
        // TODO: Replace with actual API call
        const response = await fetch('/api/matches');
        const data = await response.json();
        setMatches(data);
      } catch (error) {
        console.error('Error fetching matches:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMatches();
  }, []);

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Please sign in to view your dashboard</h2>
          <Link to="/auth" className="btn-primary">
            Sign In
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Profile Summary */}
        <div className="card">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center">
              <Users className="w-8 h-8 text-primary-600 dark:text-primary-400" />
            </div>
            <div>
              <h2 className="text-xl font-bold">{user.full_name}</h2>
              <p className="text-gray-600 dark:text-gray-400">{user.location}</p>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Skills Offered</h3>
              <div className="flex flex-wrap gap-2">
                {user.skills_offered.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Skills Wanted</h3>
              <div className="flex flex-wrap gap-2">
                {user.skills_wanted.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-secondary-100 dark:bg-secondary-900 text-secondary-700 dark:text-secondary-300 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Matches */}
        <div className="lg:col-span-2">
          <div className="card">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">Suggested Matches</h2>
              <MessageSquare className="w-6 h-6 text-primary-600 dark:text-primary-400" />
            </div>
            {loading ? (
              <div className="text-center py-8">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
                <p className="mt-4 text-gray-600 dark:text-gray-400">Loading matches...</p>
              </div>
            ) : matches.length > 0 ? (
              <div className="space-y-4">
                {matches.map((match) => (
                  <div
                    key={match.id}
                    className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
                  >
                    <div>
                      <h3 className="font-semibold">{match.user2_id}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Match Score: {match.match_score}%
                      </p>
                    </div>
                    <Link
                      to={`/chat/${match.user2_id}`}
                      className="btn-primary"
                    >
                      Connect
                    </Link>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center py-8 text-gray-600 dark:text-gray-400">
                No matches found. Try updating your skills to find more matches!
              </p>
            )}
          </div>

          {/* Badges Section */}
          <div className="card mt-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">Your Badges</h2>
              <Trophy className="w-6 h-6 text-primary-600 dark:text-primary-400" />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {user.badges.map((badge) => (
                <div
                  key={badge.id}
                  className="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
                >
                  <img
                    src={badge.image_url}
                    alt={badge.name}
                    className="w-12 h-12 mb-2"
                  />
                  <h3 className="font-semibold text-center">{badge.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                    {badge.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;