import { Smartphone, Laptop, Database } from "lucide-react";
import CardService from "../component/Card/CardService";
import TitleSection from "../component/Title/TitleSection";

const Service = () => {

    const ServiceCardObjectList = [
        {
            title: "Mobile App",
            body: "High-performance cross-platform applications built with Flutter for iOS and Android.",
            child: <Smartphone className="text-secondary" />,
            stackList: ["Flutter", "Android", "iOS"],
        },
        {
            title: "Web App",
            body: "Responsive, state-of-the-art web interfaces using React and the modern JS ecosystem.",
            child: <Laptop className="text-secondary" />,
            stackList: ["React", "Tailwind"],
        },
        {
            title: "Backend",
            body: "Robust server-side logic and API development with Node.js, Spring boot, and ASP.NET Core.",
            child: <Database className="text-secondary" />,
            stackList: ["Node.js", "MySQL","Oracle", "ASP.NET Core", "PostgreSQL", "Spring Boot", "MongoDB"],
        },
    ];

    return (
        <>
            <section id="service" className="min-h-screen flex flex-col justify-center bg-white">
                <TitleSection
                    sectionName={"Core Services"}
                    color="black"
                    description={"Crafting end-to-end digital experiences using industry-leading technologies."}
                />

                <div className="grid grid-cols-1 xl:grid-cols-3 justify-between">{
                    ServiceCardObjectList.map(({
                        title,
                        body,
                        child,
                        stackList,
                    }, index,) => (
                        <CardService
                            key={index}
                            title={title}
                            body={body}
                            child={child}
                            stackList={stackList}
                        />
                    ))
                }</div>

            </section>
        </>
    );
}

export default Service;