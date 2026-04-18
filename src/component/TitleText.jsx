const TitleText = ({title, text}) => {
    return(
        <>
        <div className="flex flex-col items-center justify-center titleText">
            <p>{title}</p>
            <p>{text}</p>
        </div>
        </>
    );
}

export default TitleText;