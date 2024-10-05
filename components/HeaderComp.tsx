import Image from "next/image";
import { userDummyData } from "@/data/userDummyData";

interface HeaderProps {
  userName: string;
  sectionInfo: {
    section: number;
    unit: number;
    name: string;
  };
  exoBucks: number;
  userImage: string;
}

const Header: React.FC<HeaderProps> = ({ userName, sectionInfo, exoBucks, userImage }) => {
  return (
    <header className="absolute top-5 left-0 right-0 flex justify-between items-center p-4 text-white z-50">
      <div className="text-xl font-bold">{userName}</div>
      <div className="flex items-center space-x-4">
        <div className="flex items-center">
          <Image src="/images/exobucks_img.png" alt="ExoBucks" width={48} height={48} />
          <span className="ml-2 text-2xl font-bold">{exoBucks}</span>
        </div>
        <Image src={userImage} alt="User profile" width={40} height={40} className="rounded-full" />
      </div>
    </header>
  );
};

export default Header;
