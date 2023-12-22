import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="text-right">
      <h1 className="text-4xl font-bold">Profile</h1>
      <div className="mt-4">
        
        <div className="avatar">
          <div className="w-24 rounded-xl">
            <img src={user?.photoURL} />
           
          </div>
          
        </div>
         <h1 className="text-2xl font-semibold">{user?.displayName}</h1>
      </div>
    </div>
  );
};

export default Profile;
