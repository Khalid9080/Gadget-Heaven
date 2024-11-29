

const All_Products = () => {
    return (
        <div className="mb-24">
        <div className="flex flex-col space-y-10 items-center">
            <div className="font-bold text-5xl"><h1>Explore Cutting-Edge Gadgets</h1></div>

            <div className="flex flex-row gap-5">
                <div className="flex flex-col  w-2/5 space-y-3 bg-white">
                    <button to='' className="btn btn-lg px-20">All product</button>
                    <button to='' className="btn btn-lg px-20">Laptops</button>
                    <button to='' className="btn btn-lg px-20">Smart Watches</button>
                    <button to='' className="btn btn-lg px-20">MacBooks</button>
                    <button to='' className="btn btn-lg px-20">Iphone</button>
                    <button to='' className="btn btn-lg px-20">Phones</button>
                </div>
                <div className="w-5/6 border-2">

                    <h1>Card Section</h1>
                </div>
            </div>

        </div>
        </div>
    );
};

export default All_Products;