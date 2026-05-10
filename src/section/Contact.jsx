import { Mail } from "lucide-react";
import { SocialIcon } from "react-social-icons";

const Contact = () => {
    return (
        <>
            <section id="contact" className="w-full mb-[10px] scroll-mt-[0px]">

                <div className="px-[100px] flex items-center justify-between">
                    <div className="flex flex-col items-center">

                        <div className=" mt-12 mb-[20px] text-center">
                            <p className="text-secondary font-bold mb-[5px]">HAVE A PROJECT IN MIND?</p>
                            <h1 className="text-white text-2xl ">CONTACT WITH ME</h1>
                        </div>

                        <div className="flex gap-6 mb-[20px]">
                            <SocialIcon
                                url="https://www.linkedin.com/in/taufiq-ahommed-neloy/"
                                target="_blank"
                                fgColor="currentColor"
                                bgColor="none"
                                className="text-white hover:text-primary transition-colors"
                            />
                            <SocialIcon
                                url="https://wa.me/01634392437"
                                target="_blank"
                                fgColor="currentColor"
                                bgColor="none"
                                className="text-white hover:text-green-500 transition-colors"
                            />
                            <SocialIcon
                                url="https://github.com/Neloy-SWE"
                                target="_blank"
                                fgColor="currentColor"
                                bgColor="none"
                                className="text-white hover:text-secondary transition-colors"
                            />
                        </div>

                    </div>

                    <div className="flex items-center gap-6 bg-abg px-[30px] py-[15px] rounded-[10px] border border-white">
                        <Mail className="text-ts h-[20px]" />
                        <div>
                            <p className="text-secondary font-bold text-xl">EMAIL</p>
                            <p className="text-white">taufiqneloy.swe@gmail.com</p>
                        </div>

                    </div>
                </div>



            </section>
            <div className="w-full mb-[20px] text-center">

                <p className="text-white text-[12px]">© 2026 Taufiq Ahommed Neloy. All rights reserved -- <span className="font-bold text-secondary">Built with React.js | Tailwind CSS</span></p>
            </div>
        </>
    );
}

export default Contact;