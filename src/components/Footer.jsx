import { quickLinks, settingMenu } from "../utils/Constants";

const Footer = () => {
    return <div className="bg-[#f2f2f2] pl-6 ">
        <div className="flex  py-[15px] px[15px] md:px-[30px] border-b border-[#dadce0]">
            <span className="text-[#70767a] cursor-pointer ">
                India
            </span>
        </div>

        <div className="flex justify-between py-3 md:py-0 md:px-[15px]">
            <div className="flex flex-wrap justify-center b cursor-pointer">
                {quickLinks.map((menu, index) => (
                    <span className="text-[#70757a] text-[12px] md:text-[14px] leading-none p-[10px]" key={index}>{menu}</span>
                ))}
            </div>

            <div className="flex flex-wrap  justify-center cursor-pointer">
                {settingMenu.map((menu, index) => (
                    <span className="text-[#70757a] text-[12px] md:text-[14px] leading-none md:p-[10px]" key={index}>{menu}</span>
                ))}
            </div>
        </div>
    </div>;
};

export default Footer;
