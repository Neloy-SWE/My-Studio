import { useState } from "react";
import TitleSection from "../component/TitleSection";

const Skills = () => {
    const [activeTab, setActiveTab] = useState("programming");

    const skillData = {
        programming: [
            { name: "JavaScript", level: 70 },
            { name: "Dart", level: 65 },
            { name: "Java", level: 50 },
            { name: "C-Sharp", level: 45 },
        ],
        frontend: [
            { name: "React", level: 30 },
            { name: "Flutter", level: 70 },
        ],
        backend: [
            { name: "Node.js-express.js", level: 60 },
            { name: "Spring Boot", level: 45 },
            { name: "ASP.NET Core", level: 40 },
        ],
        database: [
            { name: "Oracle", level: 70 },
            { name: "MySQL", level: 70 },
            { name: "MongoDB", level: 65 },
            { name: "SQLite", level: 65 },
        ],
        tool: [
            { name: "Git", level: 50 },
            { name: "Android Studio", level: 70 },
            { name: "Visual Studio", level: 70 },
            { name: "Visual Studio Code", level: 50 },
            { name: "IntelliJ IDEA", level: 60 },
            { name: "Dbeaver", level: 50 },
            { name: "Xcode", level: 50 },
            { name: "Postman", level: 50 },
        ],
        ai: [
            { name: "Prompt Engineering", level: 70 },
            { name: "ChatGPT", level: 75 },
            { name: "Gemini", level: 75 },
            { name: "OpenClaw", level: 50 },
            { name: "Claude", level: 50 },
            { name: "Grok", level: 65 },
        ],
        communication: [
            { name: "Discord", level: 75 },
            { name: "Slack", level: 65 },
            { name: "Teams", level: 70 },
            { name: "Google Chat", level: 75 },
        ],
    };

    const tabs = [
        { label: "Programming", key: "programming" },
        { label: "Frontend", key: "frontend" },
        { label: "Backend", key: "backend" },
        { label: "Database", key: "database" },
        { label: "Tool", key: "tool" },
        { label: "Communication", key: "communication" },
        { label: "AI", key: "ai" },
    ];

    return (
        <section id="skill" className="min-h-screen pt-16 px-4 scroll-mt-[60px]">
            <div>
                <TitleSection
                    sectionName={"My Skills"}
                    description={"Tools, technologies, and methodologies I use to bring ideas to life."}
                />

                <div className="flex flex-wrap justify-center gap-3 mb-8">
                    {tabs.map((tab) => (
                        <button
                            key={tab.key}
                            onClick={() => setActiveTab(tab.key)}
                            className={`px-4 py-2 border transition duration-300
                                ${activeTab === tab.key
                                    ? "bg-secondary text-white border-secondary"
                                    : "bg-bg text-white hover:border-secondary hover:text-secondary"
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {skillData[activeTab].map((skill, index) => (
                        <div key={index}>
                            <div className="px-[30px] py-[20px] bg-abg">
                                <div className="flex justify-between mb-[5px]">
                                    <span className="text-white text-[20px]">{skill.name}</span>
                                    <span className="font-bold text-white text-[15px] bg-secondary px-[15px] py-[10px] rounded-[10px]">{skill.level}%</span>
                                </div>
                            </div>
                            <div className="w-full bg-white overflow-hidden">
                                <div
                                    className="h-3 bg-secondary transition-all duration-500"
                                    style={{ width: `${skill.level}%` }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;