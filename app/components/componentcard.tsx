import React from "react";

interface ComponentcardProps {
    image: string; 
    name: string;  
    link: string; 
}

const Componentcard: React.FC<ComponentcardProps> = ({ image, name, link }) => {
    return (
        <a
            href={link}
            className="relative flex-shrink-0 max-h-screen w-1/4 flex-col justify-center overflow-hidden bg-gray-50 z-10 mx-1 my-1 no-underline"
        >
            <div className="relative m-0 h-screen group">
                {/* Shine effect container */}
                <div className="h-full overflow-hidden relative shadow-2xl bg-black">
                    {/* Image */}
                    <img
                        src={image}
                        className="block h-full w-full object-cover grayscale transition-transform duration-500 group-hover:translate-y-[-4rem] group-hover:grayscale-0"
                        alt={name}
                    />
                    {/* Shine effect */}
                    <div
                        className="absolute inset-0 blur-xl bg-[length:300%_300%] bg-[linear-gradient(-45deg,transparent_50%,rgba(255,255,255,0.2)_80%,transparent_75%)] 
                         bg-[position:-150%_-150%] bg-no-repeat 
                          group-hover:bg-[position:150%_150%] pointer-events-none group-hover:duration-[4000ms]"></div>
                </div>
                {/* Bottom Text (with hover effect) */}
                <div
                    className="absolute bottom-0 z-20 pb-1 bg-black w-full h-0 group-hover:h-16 transition-all duration-500 overflow-hidden flex items-center pl-2"
                >
                    <h1 className="font-serif text-4xl font-bold text-white shadow-xl text-center">{name}</h1>
                </div>
            </div>
        </a>
    );
};

export default Componentcard;
