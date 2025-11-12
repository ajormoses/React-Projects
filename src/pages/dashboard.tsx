import { useAuth } from "../contexts/authContext";
import { doSignOut } from "../config/auth";
import toast from "react-hot-toast";

const dashboard = () => {
  const { currentUser } = useAuth() || { currentUser: null };
  const signOutUser = async () => {
    try {
      await doSignOut();
      toast.success("Signed out successfully");
    } catch (error: any) {
      toast.error(error.message || "Error signing out");
    }
  };

  return (
    <>
      <p>Hello {currentUser?.displayName || currentUser?.email}</p>
      <button className="bg-red-200" onClick={signOutUser} type="button">
        Logout
      </button>
    </>
  );
};

export default dashboard;
