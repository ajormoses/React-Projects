import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const ProfileDetails: React.FC<Props> = ({ children }) => {
  return (
    <>
      <div className="rounded-xl bg-white">{children}</div>
    </>
  );
};

export default ProfileDetails;
