import { Link } from "react-router-dom";

const BlogCard = ({singleBlog}) => {

    const {title,description,cover_image,published_at,id} = singleBlog;

    return (
            <Link to={`/blog/${id}`} className="max-w-sm group  transition border-2 rounded-xl hover:scale-105 hover:border-secondary border-opacity-30 mx-auto group hover:no-underline focus:no-underline ">
                <img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500" src={cover_image} />
                <div className="p-6 space-y-2">
                    <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
                    <span className="text-xs text-gray-400"> {new Date(published_at).toLocaleDateString()} </span>
                    <p>{description}</p>
                </div>
            </Link>
    );
};

export default BlogCard;