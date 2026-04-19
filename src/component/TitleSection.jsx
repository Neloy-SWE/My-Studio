const TitleSection = ({ sectionName, description, color = "white" }) => {
    return (
        <>
            <div className="flex flex-col justify-center items-center mb-[50px]">
                <h1 className={`text-${color} font-bold text-6xl mb-[20px]`}>{sectionName}</h1>
                <p className="text-secondary text-center">{description}</p>
            </div>
        </>
    );
}

export default TitleSection;