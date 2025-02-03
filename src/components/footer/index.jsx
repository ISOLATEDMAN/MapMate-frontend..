import { FaGithub } from 'react-icons/fa';
import { useState } from 'react';

function Footer() {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(true);
        window.open("https://github.com/ISOLATEDMAN", "_blank");
    };

    return (
        <footer className={`py-8 'bg-gray-800' transition duration-500`}>
            <div className="flex flex-col items-center">
                <p className="text-xl font-semibold flex items-center space-x-2">
                    <FaGithub className="text-2xl" />
                    <span>Made by Kartikeya</span>
                </p>
                <p className="mt-2">
                    <button
                        onClick={handleClick}
                        className="text-black font-bold text-lg hover:text-blue-400 transition duration-300"
                    >
                        Check out my GitHub
                    </button>
                </p>
            </div>
        </footer>
    );
}

export default Footer;
