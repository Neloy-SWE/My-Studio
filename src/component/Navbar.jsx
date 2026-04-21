import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    // const [isScrolling, setIsScrolling] = useState(false);

    const navItems = [
        { name: "Home", id: "home" },
        { name: "About", id: "about" },
        { name: "Service", id: "service" },
        { name: "Skill", id: "skill" },
        { name: "Experience", id: "experience" },
        { name: "Project", id: "project" },
        // { name: "Contact", id: "contact" },
    ];

    useEffect(() => {
        const sections = document.querySelectorAll("section");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                threshold: 0.6
            }
        );

        sections.forEach((section) => observer.observe(section));

        // const handleScroll = () => setIsScrolling(true);
        // const handleScrollEnd = () => setIsScrolling(false);

        // window.addEventListener('scroll', handleScroll);
        // window.addEventListener('scrollend', handleScrollEnd);

        return () => {
            // window.removeEventListener('scroll', handleScroll);
            // window.removeEventListener('scrollend', handleScrollEnd);
            observer.disconnect();
        };
    }, []);

    return (
        <>
            <nav className="w-full bg-bg shadow-md fixed top-0 left-0 z-50">
                <div className="max-w-7xl mx-auto px-4 py-3 relative flex items-center">
                    <div className="text-3xl text-white font-bold absolute cursor-pointer"
                        onClick={() => {
                            document.getElementById("home")?.scrollIntoView({
                                behavior: "smooth",
                            });
                        }}
                    ><span className="text-primary">N</span>eloy</div>
                    <ul className="hidden md:flex mx-auto space-x-8 text-gray-700 font-medium">
                        {navItems.map(({ name, id }) => (
                            <li key={id} className={
                                `
                                ${activeSection === id ?
                                    "text-secondary px-4 py-2 border-[0.5px] border-secondary cursor-pointer" :
                                    "text-ts hover:text-white px-4 py-2 border-[0.5px] border-transparent cursor-pointer"}
                                cursor-pointer
                                transition duration-300
                                `
                            }
                                onClick={() => {
                                    document.getElementById(id)?.scrollIntoView({
                                        behavior: "smooth",
                                    });
                                    // setActiveSection(id);
                                }}
                            >
                                {name}
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
                    <div className="md:hidden shadow-md h-screen">
                        <ul className="flex flex-col items-center justify-center space-y-4 py-4">
                            {navItems.map(({ name, id }) => (
                                <li
                                    key={id}
                                    className="text-white hover:text-primary cursor-pointer"
                                    onClick={() => {
                                        document.getElementById(id)?.scrollIntoView({
                                            behavior: "smooth",
                                        });
                                        setIsOpen(false)
                                    }}
                                >
                                    {name}
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