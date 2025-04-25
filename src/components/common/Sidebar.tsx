import React, { useContext } from 'react';
import { Home, BarChart2, Gamepad2, Users, User, Calendar, LifeBuoy, LogOut } from 'lucide-react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../App';
// Adjust path if needed

const Sidebar: React.FC = () => {
  const { setIsAuthenticated } = useContext(AuthContext);

  const handleLogout = async () => {
    const confirmed = window.confirm('Are you sure you want to logout?');
    if (!confirmed) return;
  
    try {
      console.log('Sending logout request...'); // Add this log for debugging
  
      const response = await fetch('http://localhost:8080/api/auth/logout', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('jwtToken')}`,
        },
      });
  
      if (response.ok) {
        console.log('Logout successful');
        localStorage.removeItem('jwtToken');
        toast.success('Successfully logged out!');
        setIsAuthenticated(false); // Trigger state update for the app
      } else {
        console.error('Logout failed:', response.status, await response.text());
        toast.error('Failed to logout. Please try again.');
      }
    } catch (err) {
      console.error('Error during logout:', err);
      toast.error('Failed to logout. Please try again.');
    }
  };
  

  return (
    <aside className="hidden md:block w-64 bg-white shadow-sm">
      <div className="h-full px-3 py-4 flex flex-col">
        <div className="space-y-1">
          <NavItem icon={<Home />} text="Dashboard" isActive={true} />
          <NavItem icon={<BarChart2 />} text="Mood Tracker" />
          <NavItem icon={<Gamepad2 />} text="Games" />
          <NavItem icon={<Users />} text="Connect" />
          <NavItem icon={<Calendar />} text="Sessions" />
          <NavItem icon={<User />} text="Profile" />
        </div>
        <div className="mt-auto space-y-2">
          <button className="flex items-center justify-center w-full p-4 text-white bg-red-500 rounded-lg hover:bg-red-600 transition-colors">
            <LifeBuoy className="h-5 w-5 mr-2" />
            <span>Emergency Support</span>
          </button>

          <button 
            onClick={handleLogout}
            className="flex items-center justify-center w-full p-4 text-white bg-gray-800 rounded-lg hover:bg-gray-900 transition-colors"
          >
            <LogOut className="h-5 w-5 mr-2" />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </aside>
  );
};

interface NavItemProps {
  icon: React.ReactNode;
  text: string;
  isActive?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ icon, text, isActive = false }) => {
  return (
    <a 
      href="#" 
      className={`flex items-center px-4 py-3 rounded-lg text-sm font-medium ${
        isActive 
          ? 'bg-purple-100 text-purple-700' 
          : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
      }`}
    >
      <span className={`mr-3 ${isActive ? 'text-purple-600' : 'text-gray-500'}`}>
        {icon}
      </span>
      {text}
    </a>
  );
};

export default Sidebar;
