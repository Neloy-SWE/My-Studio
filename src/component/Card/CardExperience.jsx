import { Calendar, Laptop2 } from "lucide-react";

const CardExperience = ({
    title,
    company,
    dateRange,
    responsibility,
}) => {
    return (
        <>
            <div className="flex items-center justify-center gap-5 pl-8 mb-10">
                <span className=" w-6 h-6 bg-secondary rounded-full"></span>
                <div className="bg-abg p-5 w-3/5 rounded-[10px] border border-white/60 hover:border-primary transition duration-300">
                    <h3 className="text-lg font-semibold">
                        {title}
                    </h3>
                    <p className="text-sm text-gray-400">
                        {company}
                    </p>
                    <p className="text-xs text-gray-500 mb-3">
                        {dateRange}
                    </p>
                    <p className="text-gray-300 text-sm">
                        {responsibility}
                    </p>
                </div>

            </div>
        </>
    );
}

export default CardExperience;