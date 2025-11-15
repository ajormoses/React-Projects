import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const ProfileDetails: React.FC<Props> = ({ children }) => {
  return (
    <>
      <div className="rounded-xl bg-white p-10 relative">{children}</div>
    </>
  );
};

export default ProfileDetails;
