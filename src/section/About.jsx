import { Images } from "../utils/images";

const About = () => {
    return (
        <>
            <section id="about" className="min-h-screen w-full flex flex-col lg:flex-row items-center justify-start mb-[100px] scroll-mt-[0px]">
                <div className="lg:w-1/2 lg:pr-[100px] mb-[50px] lg:mb-0">
                    <img src={Images.Work} alt="work" className="h-full w-full object-cover" />
                </div>

                <div className="lg:w-1/2">
                    <p className="text-secondary text-[14px] lg:text-[16px]">
                        ABOUT ME
                    </p>
                    <p className="text-white text-[25px] lg:text-6xl font-bold pb-[50px]">
                        I Develop System that Works
                    </p>
                    <p className="text-ts text-[14px] lg:text-[16px] pb-[20px]">
                        I'm a full-stack software engineer specializing in cross-platform mobile and web development. With expertise in Flutter, React, Node.js, Spring boot, ASP.NET Core, I help businesses and startups turn ideas into polished, production-ready digital products. I care deeply about clean code, great UX, and delivering real value
                    </p>

                    <p className="text-ts text-[14px] lg:text-[16px] pb-[50px]">
                        Whether you need a mobile app from scratch, a scalable backend, or a stunning web interface — I bring the technical skills and product thinking to make it happen.
                    </p>

                    <p className="text-secondary text-[14px] lg:text-[16px]">
                        EDUCATION
                    </p>
                    <p className="text-white text-[20px] lg:text-2xl font-bold pb-[15px]">
                        Daffodil International University
                    </p>
                    <p className="text-ts text-[14px] lg:text-[16px] mb-[5px]">
                        BSc from the Department of Software Engineering
                    </p>
                    <p className="text-white text-sm font-bold">With CPGA 3.92</p>
                </div>

            </section>
        </>
    );
}

export default About;