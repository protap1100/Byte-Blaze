import { useLoaderData } from "react-router-dom";
import Markdown from 'react-markdown';
import rehypeRaw from 'rehype-raw'

const Content = () => {

    const bloggg = useLoaderData();

    const {title,cover_image,tags,body_html} = bloggg;

    return (
        <div  className="group P-2 transition border-2 rounded-xl   border-opacity-30 mx-auto group hover:no-underline focus:no-underline ">
        <img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500" src={cover_image} />
        <div className="flex flex-wrap py-6 gap-2 border-t border-dashed border-gray-400">
                {
                    tags.map((tag) => 
                        <a key={tag} rel="noopener noreferrer" href="#" className="px-3 py-1 rounded-sm hover:bg-gray-200 hover:rounded-xl  text-gray-900">#{tag}</a>
                    )
                }
            </div>
        <div className="p-6 space-y-2">
            <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
            <Markdown rehypePlugins={[rehypeRaw]}>{body_html}</Markdown>
        </div>
    </div>
    );
};

export default Content;