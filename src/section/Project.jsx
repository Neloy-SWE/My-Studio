import CardProject from "../component/Card/CardProject";
import TitleSection from "../component/Title/TitleSection";
import { Images } from "../utils/images";
import openURL from "../utils/open_url";

const Project = () => {

    const projectList = [
        {
            title: "Chemical Lab",
            description: "Ditch the paper binders. This app puts critical Safety Data Sheets (SDS) and GHS labels right on your phone. Instantly search and access hazard info 24/7—even offline. Keep your team safe and your workplace compliant with one simple tool.",
            bannerPath: Images.ChemicalLab,
            stackList: [
                "flutter",
                "dart",
                "bloc",
            ],
        },

        {
            title: "DevHub",
            description: "Connect, chat, and hang out with your favorite developers anytime, anywhere. With 24/7 availability and live chat, you can dive into technical discussions, collaborate on projects, or just talk shop with a global community of experts in real-time.",
            bannerPath: Images.DevHub,
            stackList: [
                "Node.js",
                "Express.js",
                "React.js",
                "Tailwind CSS",
                "JavaScript",
                "MongoDB"
            ],
        },

        {
            title: "Car Route App",
            description: "Navigate with confidence using the app, the ultimate tool for finding the safest and shortest paths from point A to point B. Designed for drivers who value both efficiency and peace of mind, our app combines advanced routing algorithms with a user-friendly interface to make every journey effortless.",
            bannerPath: Images.CarRouteApp,
            stackList: [
                "flutter",
                "dart",
                "bloc",
            ],
        },
    ];

    return (
        <>
            <section id="project" className="min-h-screen bg-abg flex flex-col justify-center pt-16">

                <TitleSection
                    sectionName={"My Projects"}
                    description={"Thoughts into Reality"}
                />
                <div className="grid grid-cols-1 xl:grid-cols-3 justify-between px-[80px] mb-[30px]">{
                    projectList.map(
                        (
                            {
                                title,
                                bannerPath,
                                description,
                                stackList,
                            },
                            index) => (
                            <CardProject
                                key={index}
                                title={title}
                                bannerPath={bannerPath}
                                description={description}
                                stackList={stackList}
                            />
                        ))
                }</div>

                <div className="text-center">
                    <button
                        onClick={() => openURL("https://github.com/Neloy-SWE")}
                        className="border border-secondary hover:bg-secondary text-lg font-bold text-secondary hover:text-white px-4 py-2 transition duration-300">
                        Explore More
                    </button>
                </div>

            </section>
        </>
    );
}

export default Project;