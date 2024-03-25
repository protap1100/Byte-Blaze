// import { useEffect, useState } from "react";

import { Link, useLoaderData } from "react-router-dom";
import BlogCard from "../Components/BlogCard";
import { useState } from "react";

const Blog = () => {

    // const [blogs, setBlogs]= useState([]);
    // useEffect(()=>{
    //     fetch('https://dev.to/api/articles?per_page=20&top=7')
    //     .then(res => res.json())
    //     .then(data=>setBlogs(data))
    // },[]) Old Way 

    const blogs = useLoaderData();

// console.log(blogs)

    const [showBlog, setShowBlog] = useState(6);


    return (
            <section className=" py-6 ">
                <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                    <Link rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 bg-gray-900">
                        <img src={blogs[0].cover_image} alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 bg-gray-500" />
                        <div className="p-6 space-y-2 lg:col-span-5">
                            <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">{blogs[0].title}</h3>
                            <span className="text-xs text-gray-400">{new Date(blogs[0].published_at).toLocaleDateString()}</span>
                            <p>{blogs[0].description}</p>
                        </div>
                    </Link>
                    <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {
                            blogs.slice(0,showBlog).map(blog => <BlogCard key={blog.id} singleBlog={blog}> </BlogCard>)
                        }
                    </div>
                    <div className="flex justify-center">
                        <button onClick={() =>setShowBlog(blogs.length)} className="px-6 py-3 btn btn-primary ">Load more posts...</button>
                    </div>
                </div>
            </section>
    );
};

export default Blog;