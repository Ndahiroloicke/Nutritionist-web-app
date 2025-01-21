import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import usefetch from "./usefetch";

const Blogdetails = () => {
  const { num } = useParams();
  const { data } = usefetch(`https://nutritionist-jase.onrender.com/blogs`);

  if (!data) {
    return <div>Loading...</div>;
  }
  const blog = data.find((blog) => blog.num == num);
  return (
    <div className="bg-[#F6FBE9] w-auto h-fit mx-[100px] my-[30px] px-[35px] rounded-2xl py-[20px]">
      <div className=" pb-[20px]">
        <h1 className="font-bold text-2xl">{blog.id}</h1>
        <div className="bg-[#CBEA7B] w-[150px] rounded-md h-[4px]"></div>
      </div>
      <img src={blog.image} alt="" className="w-[600px] ml-[510px]" />
      <div className="bg-[#CBEA7B] ml-[10px] w-[1100px] rounded-3xl h-[2px]"></div>
      <div>
        <h2 className="font-semibold text-2xl my-[40px]">{blog.title}</h2>
        <p className="w-auto">{blog.body}</p>    
      </div>
      <div>
       <Link to = "/blog"> <button className=" ml-[525px] font-bold mt-[20px] px-[24px] py-[8px] rounded-lg bg-[#CBEA7B]">close</button></Link>
      </div>
    </div>
  );
};

export default Blogdetails;
