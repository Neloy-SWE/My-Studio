const About = () => {
    return (
        <>
            <section id="about" className="w-full flex items-center justify-start mb-[100px] scroll-mt-16">
                <div className="w-1/2 pr-[100px]">
                    <img src="../assets/work.jpg" alt="work" className="h-full w-full object-cover" />
                </div>

                <div className="w-1/2">
                    <p className="text-secondary">
                        ABOUT ME
                        </p>
                    <p className="text-white text-6xl font-bold pb-[50px]">
                        I Develop System that Works
                        </p>
                    <p className="text-ts pb-[20px]">
                        I'm a full-stack software engineer specializing in cross-platform mobile and web development. With expertise in Flutter, React, Node.js, Spring boot, ASP.NET Core, I help businesses and startups turn ideas into polished, production-ready digital products. I care deeply about clean code, great UX, and delivering real value
                        </p>

                    <p className="text-ts">
                        Whether you need a mobile app from scratch, a scalable backend, or a stunning web interface — I bring the technical skills and product thinking to make it happen.
                    </p>
                </div>

            </section>
        </>
    );
}

export default About;