const Chip = ({ value }) => {
    return (
        <>
            <div className="w-fit bg-secondary shadow-xl/20 text-white text-sm font-bold px-4 py-2 rounded-[10px] m-2">{value}</div>
        </>
    );
}

export default Chip;