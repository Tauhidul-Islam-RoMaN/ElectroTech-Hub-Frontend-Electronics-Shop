
const Banner = () => {
    return (

        <>
            <div className="mx-10 rounded-2xl my-10">
                <div className="lg:h-[750px] text-white text-center md:h-[460px]  grid h-[230px] bg-contain lg:bg-cover bg-no-repeat bg-[url('https://i.ibb.co/zG6BC5y/banner-1.jpg')] mb-8">
                    <div className="col-start-1 row-start-1 bg-black bg-opacity-60 w-full h-full"></div>
                    <div className="col-start-1 row-start-1 mx-auto my-auto">
                        <div>
                            <h2 className="lg:text-5xl text-accent font-bold text-center lg:pt-10">Elevate Your Tech Game <br /> Everything You Need Under One Roof!</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;