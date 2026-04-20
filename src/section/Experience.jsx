import TitleSection from "../component/Title/TitleSection";
import CardExperience from "../component/Card/CardExperience";

const Experience = () => {

    const experienceDetails = [
        {
            title: "Software Engineer",
            company: "Giga Tech Limited",
            dateRange: "(March, 2023-Present)",
            responsibilities: [
                "Delivered multi-platform apps across Android, iOS, and web",
                "Built secure authentication and certificate-based API systems",
                "Developed complete eKYC workflows for remote account opening",
                "Owned core technical decisions and ensured timely feature delivery"
            ],
            stacks: [
                "dart",
                "java",
                "kotlin",
                "c-sharp",
                "javascript",
                "xml",
                "thymeleaf",
                "flutter",
                "asp.net core",
                "spring boot"
            ],
        },
        {
            title: "Junior Software Engineer",
            company: "Leads Corporation Limited",
            dateRange: "(August, 2022-March, 2023)",
            responsibilities: [
                "Developed enterprise financial and insurance mobile applications",
                "Implemented core features and maintained production-ready systems",
                "Collaborated to resolve issues and improve application stability",
                "Optimized mobile application's performance and improved load time by 30%"
            ],

            stacks: [
                "dart",
                "java",
                "kotlin",
                "xml",
                "flutter",
            ],
        },
        {
            title: "Flutter Developer",
            company: "Antooba Technologies LTD.",
            dateRange: "(September, 2021-May, 2022)",
            responsibilities: [
                "Developed e-commerce and shop management mobile applications",
                "Built reusable UI components for faster development cycles",
                "Implemented features ensuring responsive and smooth user experience",
            ],

            stacks: [
                "dart",
                "flutter",
            ],
        },
    ];

    return (
        <section id="experience" className="min-h-screen flex flex-col justify-center scroll-mt-[100px]">

            <TitleSection
                sectionName={"Experience"}
                description={"Shipping code, building products, delivering value."}
            />

            {experienceDetails.map(
                (
                    {
                        title,
                        company,
                        dateRange,
                        responsibilities,
                        stacks,
                    },
                    index,
                ) => (
                    <CardExperience
                        key={index}
                        title={title}
                        company={company}
                        dateRange={dateRange}
                        responsibilities={responsibilities}
                        stacks={stacks}
                    />
                ))}
        </section>
    );
}

export default Experience;