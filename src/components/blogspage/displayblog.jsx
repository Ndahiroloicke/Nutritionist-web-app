import Blogsample from "./blogsample";
import PropTypes from "prop-types";

const Displayblog = ({blog}) => {

  if (!blog) {
    return <div>Loading...</div>; // Render a loading indicator or any appropriate message while waiting for data
  }

  return (
    <div>
      <div className="flex flex-row justify-between mt-[100px] mb-[200px] mx-[102px]">
        <div className="grid grid-cols-2 gap-y-2 gap-x-3">
          {blog.map((item) => {
            return (
              <Blogsample
                cla={"bg-[#EEF8D3] w-[600px] h-[532px] pl-[40px] rounded-[10px] border-[#828d65] border-[0.1px]"}
                key={item.body}
                blogh={item.id}
                desch={item.title}
                ph={item.introp}
                pic={item.image}
              />
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
