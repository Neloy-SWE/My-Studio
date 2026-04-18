import { Smartphone, Laptop, Database} from "lucide-react";
import ServiceCard from "../component/ServiceCard";

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
            body: "High-performance cross-platform applications built with Flutter for iOS and Android.",
            child: <Database className="text-secondary" />,
            stackList: ["Node.js", "Spring Boot", "ASP.NET Core", "Oracle", "PostgreSQL", "MySQL", "MongoDB"],
        },
    ];

    return (
        <>
            <section id="service" className="min-h-screen flex flex-col justify-center">
                <div className="flex justify-between mb-[50px] px-[100px]">
                    <h1 className="text-white font-bold text-6xl">Core Services</h1>
                    <p className="text-secondary w-1/4">Crafting end-to-end digital experiences useing industry-leading technologies.</p>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-3 justify-between">{
                    ServiceCardObjectList.map(({
                        title,
                        body,
                        child,
                        stackList,
                        index,
                    }) => (
                        <ServiceCard
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