const TitleCount = ({count, title}) => {
    return(
        <>
        <div className="flex flex-col items-center justify-center titleText">
            <p>{count}</p>
            <p>{title}</p>
        </div>
        </>
    );
}

export default TitleCount;