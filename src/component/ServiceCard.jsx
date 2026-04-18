import Chip from "./Chip";

const ServiceCard = ({ title, body, stackList, child }) => {
    return (
        <>
            <div className="bg-abg xl:mx-4 mx-[0px] my-4 xl:my-[0px] px-6 py-8">
                <div className="h-[40px] w-[40px] border border-secondary flex items-center justify-center mb-[15px] rounded-full">{child}</div>
                <h1 className="text-white font-bold text-2xl mb-[20px]">{title}</h1>
                <p className="text-ts pb-[20px]">
                    {body}
                </p>

                <div className="flex flex-wrap gap-2">{
                    stackList.map((value, index) => (
                        <Chip key={index} value={value} />
                    ))
                }</div>
            </div>
        </>
    );
}

export default ServiceCard;