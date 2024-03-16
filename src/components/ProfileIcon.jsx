import { TbGridDots } from "react-icons/tb";

import Profile from "../assets/profile-200x200.jpg";
import ProfileRing from "../assets/profile-ring.svg";

const ProfileIcon = () => {
    return <div className="flex gap-2">
        <span className="h-10 w-10 flex items-center justify-center rounded-full cursor-pointer  hover:bg-black/[0.05]">
            <TbGridDots size={20} color="#5f6368" />
        </span>

        <span className="h-10 w-10 relative flex justify-center items-center">
            <img className="absolute" src={ProfileRing} alt="" />
            <span className="h-8 w-8 rounded-full overflow-hidden">
                <img className="h-full w-full object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtjpVJM-3ja2UhZCeK3xEzz6u2oKun2P5DPw&s" alt="" />
            </span>
        </span>
    </div>;
};

export default ProfileIcon;
