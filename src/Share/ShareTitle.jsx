const ShareTitle = ({heading, title}) => {
    return (
        <div className="my-10 md:my-14">
            <h1 className="text-center text-xl font-medium text-black">{heading}</h1>
            <div className="hidden md:block w-3/12 mx-auto p-[1px] bg-[#E24094] my-5"></div>
            <h2  className="text-center text-3xl font-bold text-black">{title}</h2>
            <div className="hidden md:block w-5/12 mx-auto p-[1px] bg-[#E24094] my-5"></div>
        </div>
    );
};

export default ShareTitle;