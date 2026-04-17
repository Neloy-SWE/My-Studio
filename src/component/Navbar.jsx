import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        "Home",
        "About",
        "Service",
        "Skill",
        "Experience",
        "Project",
    ];

    return (
        <>
            <nav className="w-full bg-bg shadow-md fixed top-0 left-0 z-50">
                <div className="max-w-7xl mx-auto px-4 py-3 relative flex items-center">
                    <div className="text-3xl text-primary font-bold absolute">Neloy</div>
                    <ul className="hidden md:flex mx-auto space-x-8 text-gray-700 font-medium">
                        {navItems.map((item) => (
                            <li key={item} className="text-white hover:text-secondary px-4 py-2 border border-transparent hover:border-secondary cursor-pointer">
                                {item}
                            </li>
                        ))}
                    </ul>

                    <div className="ml-auto md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? <X size={28} className="text-primary" /> : <Menu size={28} className="text-primary" />}
                        </button>
                    </div>
                </div>

                {isOpen && (
                    <div className="md:hidden shadow-md">
                        <ul className="flex flex-col items-center space-y-4 py-4">
                            {navItems.map((item) => (
                                <li
                                    key={item}
                                    className="text-white hover:text-primary cursor-pointer"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </nav>
        </>
    );
}

export default Navbar;