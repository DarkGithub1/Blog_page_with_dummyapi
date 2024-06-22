import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "./../assets/1.png";
import { Link } from "react-router-dom";

function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://dummyapi.online/api/blogposts")
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }, []);

  console.log(posts);
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
    mt-10 px-10 md:px-15 lg:px-32"
    >
      {posts.map((item) => (
        <div key={item.id} className="m-4 cursor-pointer">
          <Link to={`/blog/${item.id}`}>
            <div className="border-4 border-slate-800 h-44 flex items-center justify-center bg-slate-950 text-white">
              {item.title}
            </div>
          </Link>

          <h3 className="text-red-500 mt-3">{item.tag}</h3>
          <h3 className="font-bold mt-3">{item.title}</h3>
          <h3 className="line-clamp-3 text-gray-400 mt-3">{item.desc}</h3>
          <div className="flex items-center mt-5">
            <img src={logo} className="w-[35px] rounded-full" />
            <div className="ml-2">
              <h3 className="font-bold text-[12px]">Coaching Details</h3>
              <h3 className="text-gray-500 text-[10px]">24 Sept 2024</h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Blog;
