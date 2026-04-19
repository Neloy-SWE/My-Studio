const TitleSection = ({ sectionName, description }) => {
    return (
        <>
            <div className="flex flex-col justify-center items-center mb-[50px]">
                <h1 className="text-white font-bold text-6xl mb-[20px]">{sectionName}</h1>
                <p className="text-secondary text-center">{description}</p>
            </div>
        </>
    );
}

export default TitleSection;