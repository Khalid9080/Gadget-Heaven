// import All_Products from "../Components/All_Products";
import Banner from "../Components/Banner";
import Categories from "../Components/Categories";
import Heading from "../Components/Heading";
import { Outlet, useLoaderData } from "@remix-run/react";


const Home = () => {
    const categories = useLoaderData();
    console.log(categories);
    return (
        <div>

            {/* Banner */}
            <Banner></Banner>

            {/* Heading */}
            <Heading title="Explore Cutting-Edge Gadgets"></Heading>


            <div className="flex flex-row space-x-9 my-16 justify-center  ">
                <div className="rounded-3xl">
                    {/* Categories */}
                    <Categories categories={categories}></Categories>
                </div>
                <div>
                    <Outlet></Outlet>
                </div>

            </div>








            {/* All Products */}
            {/* <All_Products></All_Products> */}


        </div>
    );
};

export default Home;