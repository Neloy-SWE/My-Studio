const CardProject = (
    {
        title,
        bannerPath,
        description,
        stackList,
    }
) => {
    const assetsRoute = "../assets/project";

    return (
        <>
            <div className="group bg-bg xl:mx-4 mx-[0px] my-4 xl:my-[0px]  border-[0.5px] border-transparent hover:border-white rounded-[10px] transition duration-300">
                <img src={assetsRoute+bannerPath} alt={bannerPath} className="w-full rounded-t-[10px] object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition duration-500 ease-in-out"/>
                <div className="px-6 py-8">
                    <h1 className="text-white text-bold text-[25px] mb-[25px]">{title}</h1>
                    <p className="text-ts text-[15px] mb-[35px]">{description}</p>

                    <div className="flex flex-wrap gap-4">{
                        stackList.map((value, index) => (
                            <h3 key={index} className="text-primary text-[12px]">{value}</h3>
                        ))
                    }</div>
                </div>
            </div>


        </>
    );
}

export default CardProject;