import Blogsample from "./blogsample";
import PropTypes from "prop-types";
import mist from "../../../public/assets/Spin@1x-1.0s-200px-200px.svg"

const Displayblog = ({blog}) => {
    if (!blog) {
    return <div><img src={mist} className="sm:mx-auto sm:my-60 sm:h-48 h-[50px] " /></div>; // Render a loading indicator or any appropriate message while waiting for data
  }

  return (
    <div>
      <div className="flex flex-row justify-between mt-[100px] w-full mb-[200px]">
        <div className="grid grid-cols-2 gap-y-2 w-fit mx-auto gap-x-3">
          {blog.map((item) => {
            return (
              <div key={item.num}>
              <Blogsample
                cla={"bg-[#EEF8D3] w-[600px] h-[532px] pl-[40px] rounded-[10px] border-[#828d65] border-[0.1px]"}
                key={item.body}
                blogh={item.id}
                desch={item.title}
                ph={item.introp}
                pic={item.image}
                db= {item.num}
              />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
Displayblog.propTypes = {
  blog: PropTypes.string.isRequired,
};
export default Displayblog;
