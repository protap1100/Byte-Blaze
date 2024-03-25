import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <div>
            <div className="-mt-16 hero bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-lg">
                    <h1 className="text-4xl font-bold">Welcome To <span
                        className="text-4xl bg-300% font-bold bg-gradient-to-r from-primary via-secondary to-neutral text-transparent bg-clip-text animate-gradient">
                        ByteBlaze
                    </span></h1>
                    <p className="py-6">ByteBlaze ignites digital innovation, blazing trails in coding excellence, powering tech solutions with unparalleled precision and efficiency</p>
                    <div className="flex gap-4 justify-center items-center">
                        <Link to="/blog" className="relative inline-block text-lg group" >
                            <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-secondary rounded-lg group-hover:text-white">
                            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-secondary group-hover:-rotate-180 ease"></span>
                            <span className="relative">Read Blogs</span>
                            </span>
                            <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-secondary rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                        </Link>
                        <Link to="/bookmarks" className="relative inline-block text-lg group" >
                            <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-secondary transition-colors duration-300 ease-out border-2 border-secondary rounded-lg group-hover:text-white">
                            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-secondary group-hover:-rotate-180 ease"></span>
                            <span className="relative">Bookmarks</span>
                            </span>
                            <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-secondary rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                        </Link>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;