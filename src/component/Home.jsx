const Home = () => {
    return (
        <>
            <section className="min-h-screen pt-16 w-full flex items-center justify-between">
                <div className="pl-40">
                    <p className="text-secondary text-sm pb-2">Hi. Welcome to my studio. I'm</p>
                    <h1 className="font-bold text-white  text-6xl pb-8">NELOY</h1>
                    <p className="font-bold text-secondary text-2xl">Your software solution provider</p>
                    <p className="text-white text-xl pb-10">Mobile | Web | Backend</p>
                    <button className="border border-secondary hover:bg-secondary text-lg font-bold text-secondary hover:text-white px-4 py-2">Want to talk ?</button>
                </div>

                <div className="group w-[350px] h-[400px] overflow-hidden bg-gray-200 animate-blob mr-[150px]">
                    <img src="../assets/profile.jpg"
                        className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105 transition duration-500 ease-in-out"
                    />
                </div>

            </section>
        </>
    );
}

export default Home;