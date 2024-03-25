import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home";
import Blog from "../Pages/Blog";
import BlogDetails from "../Pages/BlogDetails";
import Bookmarks from "../Pages/Bookmarks";
import Content from "../Components/Content";
import Author from "../Components/Author";

export const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayouts></MainLayouts>,
      children: [
        {
         index: true, // path : '/' Both Are Same Thing
         element : <Home></Home> 
        },
        {
          path:'/blog',
          element: <Blog></Blog>,
          loader: () =>  fetch('https://dev.to/api/articles?per_page=20&top=7'),
        },
        {
          path:'/blog/:id',
          element : <BlogDetails></BlogDetails>,
          loader: ({params}) => fetch(`https://dev.to/api/articles/${params.id}`),
          children : [
            {
                index : true,
                element : <Content></Content>,
                loader: ({params}) => fetch(`https://dev.to/api/articles/${params.id}`),
            },{
                path : 'author',
                element : <Author></Author>,
                loader: ({params}) => fetch(`https://dev.to/api/articles/${params.id}`)
            }
          ]
        },
        {
          path:'/bookmarks',
          element:<Bookmarks></Bookmarks>
        }
      ],
    },
   
  ]);