import { Briefcase, Calendar } from "lucide-react";
import Chip from "../Chip";

const CardExperience = ({
    title,
    company,
    dateRange,
    responsibilities,
    stacks,
}) => {
    return (
        <>
            <div className="flex items-center justify-center gap-5 mb-10">
                <span className="hidden lg:flex w-[40px] h-[40px] bg-secondary rounded-full">
                    <Briefcase className="text-white m-auto" />
                </span>
                <div className="bg-abg p-5 lg:w-3/5 rounded-[10px] border border-white/60 hover:border-primary transition duration-300">

                    <div className="flex flex-col lg:flex-row justify-between items-start">
                        <div className="lg:w-2/3">
                            <h1 className="text-[16px] lg:text-lg font-bold text-white">
                                {title}
                            </h1>
                            <p className="text-sm text-secondary">
                                {company}
                            </p>

                            <div className="my-4">
                                {
                                    responsibilities.map((res, index) => (
                                        <div key={index} className="flex justify-start gap-5">
                                            <span className=" w-[5px] h-[5px] bg-secondary rounded-full mt-2"></span>
                                            <p className="text-white text-[12px] lg:text-sm">
                                                {res}
                                            </p>
                                        </div>
                                    ))
                                }
                            </div>

                        </div>

                        <div className="flex lg:w-1/3 pb-[30px] lg:pb-0 text-ts lg:justify-end">
                            <Calendar className="h-[15px] mr-[10px]" />
                            <p className="text-xs">
                                {dateRange}
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-4">{
                        stacks.map((value, index) => (
                            // <Chip key={index} value={value} colorText="secondary" colorBG="white" />
                            <h3 key={index} className="text-lime-500 text-[10px] lg:text-[12px] font-bold">{value}</h3>
                        ))
                    }</div>


                </div>

            </div>
        </>
    );
}

export default CardExperience;