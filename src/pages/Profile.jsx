
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import PageHeader from '../components/PageHeader';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/sonner';
import { User, Mail, Calendar, LogOut } from 'lucide-react';

const Profile = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    username: user?.username || '',
    email: user?.email || '',
  });
  
  // Redirect if not logged in
  if (!user) {
    navigate('/login');
    return null;
  }

  const handleLogout = () => {
    logout();
    toast.info('You have been successfully logged out');
    navigate('/');
  };

  const toggleEdit = () => {
    if (isEditing) {
      // Save changes
      toast.success('Profile updated successfully');
      // In a real app, this would update the user in the backend
    }
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Format the date for display
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(date);
  };

  return (
    <>
      <PageHeader title="My Profile" />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-book-primary/40 rounded-lg shadow-lg overflow-hidden">
            {/* Profile Header */}
            <div className="bg-book-accent text-white p-6 flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center mb-4 md:mb-0">
                <div className="bg-white/20 p-4 rounded-full mr-4">
                  <User size={32} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">{user.username}</h2>
                  <p className="opacity-80">Member since {formatDate(user.createdAt)}</p>
                </div>
              </div>
              <Button 
                variant="outline"
                className="border-white text-white hover:bg-white/20"
                onClick={handleLogout}
              >
                <LogOut size={18} className="mr-2" />
                Sign Out
              </Button>
            </div>
            
            {/* Profile Content */}
            <div className="p-6">
              <h3 className="font-playfair text-2xl font-bold mb-6">Account Information</h3>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">
                      Username
                    </label>
                    {isEditing ? (
                      <Input
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                      />
                    ) : (
                      <div className="flex items-center bg-gray-50 dark:bg-gray-800 px-4 py-3 rounded-md">
                        <User size={18} className="text-book-accent mr-3" />
                        <span>{user.username}</span>
                      </div>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">
                      Email Address
                    </label>
                    {isEditing ? (
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    ) : (
                      <div className="flex items-center bg-gray-50 dark:bg-gray-800 px-4 py-3 rounded-md">
                        <Mail size={18} className="text-book-accent mr-3" />
                        <span>{user.email}</span>
                      </div>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">
                      Member Since
                    </label>
                    <div className="flex items-center bg-gray-50 dark:bg-gray-800 px-4 py-3 rounded-md">
                      <Calendar size={18} className="text-book-accent mr-3" />
                      <span>{formatDate(user.createdAt)}</span>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <Button 
                    onClick={toggleEdit}
                    className={isEditing ? "bg-green-600 hover:bg-green-700" : ""}
                  >
                    {isEditing ? 'Save Changes' : 'Edit Profile'}
                  </Button>
                </div>
              </div>
              
              {/* Order History Section (Placeholder) */}
              <div className="mt-12">
                <h3 className="font-playfair text-2xl font-bold mb-6">Order History</h3>
                
                <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg text-center">
                  <p className="text-gray-600 dark:text-gray-300 mb-4">You haven't placed any orders yet.</p>
                  <Button 
                    variant="outline" 
                    onClick={() => navigate('/books')}
                    className="mt-2"
                  >
                    Browse Books
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
