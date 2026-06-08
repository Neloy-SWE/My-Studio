const Chip = ({ value, colorText = "white", colorBG = "secondary" }) => {
    return (
        <>
            <div className={`w-fit bg-${colorBG} shadow-xl/20 text-${colorText} text-[10px] lg:text-sm font-bold px-4 py-2 rounded-[10px] m-2`}>{value}</div>
        </>
    );
}

export default Chip;