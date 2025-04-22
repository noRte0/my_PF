import React, { useState } from "react";
import { Kanit } from "next/font/google";

const kanit = Kanit({
    variable: "--font-Kanit",
    subsets: ["thai"],
    weight: "500",
});

const kanitlocale = Kanit({
    variable: "--font-Kanit",
    subsets: ["thai"],
    weight: "400",
});

const PPSNavbar = () => {
    const [language, setLanguage] = useState<"TH" | "EN">("TH");

    const toggleLanguage = () => {
        setLanguage((prev) => (prev === "TH" ? "EN" : "TH"));
    };

    // Menu text for both languages
    const menuLabels = {
        TH: ["หน้าหลัก", "ร้านอาหาร", "แลกรางวัล", "กิจกรรมและโปรโมชั่น", "สำหรับร้านค้า"],
        EN: ["Home", "Restaurants", "Rewards", "Promotions", "For Vendors"],
    };

    return (
        <nav className="bg-white w-full h-16 shadow-md">
            <div className="flex justify-between items-center h-full px-6">
                {/* Left Menu */}
                <div className="flex items-center space-x-6 pl-20">
                    <div className={`${kanit.className} text-blue-800 hover:text-blue-500 hover:border-b-2 hover:border-blue-500 transition duration-200 cursor-pointer font-bold`}>
                        Logo
                    </div>
                    {menuLabels[language].map((label, index) => (
                        <div
                            key={index}
                            className={`${kanit.className} text-blue-800 hover:text-blue-500 hover:border-b-2 hover:border-blue-500 transition duration-200 cursor-pointer font-bold`}>
                            {label}
                        </div>
                    ))}
                </div>

                {/* Right Language Toggle */}
                <div className="pr-10 h-2/4">
                    <button
                        onClick={toggleLanguage}
                        className={`${kanitlocale.className} text-blue-600 transition duration-200 cursor-pointer bg-stone-100 hover:bg-stone-200 h-full w-20 rounded-md`}
                    >
                        <span className={language === "TH" ? "font-bold" : "font-normal"}>
                            ไทย
                        </span>{" "}
                        |{" "}
                        <span className={language === "EN" ? "font-bold" : "font-normal"}>
                            EN
                        </span>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default PPSNavbar;
