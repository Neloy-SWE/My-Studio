import { Laptop } from "lucide-react";
import TitleSection from "../component/TitleSection";
import CardExperience from "../component/Card/CardExperience";

// const Experience = () => {

//     const experienceDetails = [
//         {
//             title: "Software Engineer",
//             company: "Gigatech Ltd.",
//             dateRange: "(March, 2023 - Present)",
//             responsibility: "Develop multiple production grade software",
//         },
//         {
//             title: "Software Engineer",
//             company: "Gigatech Ltd.",
//             dateRange: "(March, 2023 - Present)",
//             responsibility: "Develop multiple production grade software",
//         },
//         {
//             title: "Software Engineer",
//             company: "Gigatech Ltd.",
//             dateRange: "(March, 2023 - Present)",
//             responsibility: "Develop multiple production grade software",
//         },
//                 {
//             title: "Software Engineer",
//             company: "Gigatech Ltd.",
//             dateRange: "(March, 2023 - Present)",
//             responsibility: "Develop multiple production grade software",
//         }
//     ];

//     return (
//         <>
//             <section id="experience" className="min-h-screen bg-abg flex justify-center scroll-mt-16">
//             <div className="flex items-center">
//                 <div className="grid grid-cols-2 gap-[20px]">
//                     {
//                         experienceDetails.map(
//                             (
//                                 {
//                                     title,
//                                     company,
//                                     dateRange,
//                                     responsibility,
//                                 },
//                                 index,) => (
//                                     <CardExperience 
//                                     key={index}
//                                     title={title}
//                                     company={company}
//                                     dateRange={dateRange}
//                                     responsibility={responsibility}
//                                     />
//                                 ))
//                     }
//                 </div>
//             </div>

//             </section>
//         </>
//     );
// }

// export default Experience;


export default function Experience() {
    const experienceDetails = [
        {
            title: "Software Engineer",
            company: "Gigatech Ltd.",
            dateRange: "(March, 2023 - Present)",
            responsibility: "Develop multiple production grade software",
        },
        {
            title: "Software Engineer",
            company: "Gigatech Ltd.",
            dateRange: "(March, 2023 - Present)",
            responsibility: "Develop multiple production grade software",
        },
        {
            title: "Software Engineer",
            company: "Gigatech Ltd.",
            dateRange: "(March, 2023 - Present)",
            responsibility: "Develop multiple production grade software",
        },
        {
            title: "Software Engineer",
            company: "Gigatech Ltd.",
            dateRange: "(March, 2023 - Present)",
            responsibility: "Develop multiple production grade software",
        },
    ];

    return (
        <section id="experience" className="min-h-screen  flex flex-col justify-center scroll-mt-16">

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
                        responsibility,
                    },
                    index,
                ) => (
                    <CardExperience
                        key={index}
                        title={title}
                        company={company}
                        dateRange={dateRange}
                        responsibility={responsibility}
                    />
                ))}
        </section>
    );
}