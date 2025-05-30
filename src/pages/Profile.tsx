import React from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Edit2, MapPin, Award, Save } from 'lucide-react';
import { useAuthStore } from '../store/authStore';

function Profile() {
  const { user } = useAuthStore();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = React.useState(false);
  const [formData, setFormData] = React.useState({
    full_name: user?.full_name || '',
    location: user?.location || '',
    skills_offered: user?.skills_offered || [],
    skills_wanted: user?.skills_wanted || [],
  });

  if (!user) {
    navigate('/auth');
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement profile update logic
    setIsEditing(false);
  };

  const handleSkillChange = (
    type: 'skills_offered' | 'skills_wanted',
    value: string
  ) => {
    const skills = value.split(',').map((skill) => skill.trim());
    setFormData((prev) => ({
      ...prev,
      [type]: skills,
    }));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="card">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center">
              <User className="w-8 h-8 text-primary-600 dark:text-primary-400" />
            </div>
            <h1 className="text-2xl font-bold">Profile Settings</h1>
          </div>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="btn-secondary flex items-center space-x-2"
          >
            {isEditing ? (
              <>
                <Save className="w-4 h-4" />
                <span>Save</span>
              </>
            ) : (
              <>
                <Edit2 className="w-4 h-4" />
                <span>Edit</span>
              </>
            )}
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="full_name" className="block text-sm font-medium mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="full_name"
              value={formData.full_name}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, full_name: e.target.value }))
              }
              disabled={!isEditing}
              className="input-field"
            />
          </div>

          <div>
            <label htmlFor="location" className="block text-sm font-medium mb-2">
              <MapPin className="w-4 h-4 inline-block mr-1" />
              Location
            </label>
            <input
              type="text"
              id="location"
              value={formData.location}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, location: e.target.value }))
              }
              disabled={!isEditing}
              className="input-field"
            />
          </div>

          <div>
            <label
              htmlFor="skills_offered"
              className="block text-sm font-medium mb-2"
            >
              Skills You Can Teach (comma-separated)
            </label>
            <textarea
              id="skills_offered"
              value={formData.skills_offered.join(', ')}
              onChange={(e) => handleSkillChange('skills_offered', e.target.value)}
              disabled={!isEditing}
              className="input-field h-24"
            />
          </div>

          <div>
            <label
              htmlFor="skills_wanted"
              className="block text-sm font-medium mb-2"
            >
              Skills You Want to Learn (comma-separated)
            </label>
            <textarea
              id="skills_wanted"
              value={formData.skills_wanted.join(', ')}
              onChange={(e) => handleSkillChange('skills_wanted', e.target.value)}
              disabled={!isEditing}
              className="input-field h-24"
            />
          </div>
        </form>

        {/* Badges Section */}
        <div className="mt-8">
          <div className="flex items-center space-x-2 mb-4">
            <Award className="w-5 h-5 text-primary-600 dark:text-primary-400" />
            <h2 className="text-xl font-semibold">Your Badges</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
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
                <h3 className="font-semibold text-center text-sm">{badge.name}</h3>
                <p className="text-xs text-gray-600 dark:text-gray-400 text-center mt-1">
                  {badge.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;