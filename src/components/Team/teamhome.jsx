import Navbar from "../Home/Navbar";
import Uppertab from "../Home/Uppertab";
import Foot from "../Home/footer";
import Proud from "../services/proud";
import Teamexp from "./teamexpert";
import usefetch from "../blogspage/usefetch";

const Teamhome = () => {
  const { data, loading } = usefetch("http://localhost:7000/Employees");

  if (loading || !data) {
    return <div>loading....</div>;
  }

  return (
    <div>
      <Uppertab />
      <Navbar />
      <Teamexp employee={data} />
      <Proud />
      <Foot />
    </div>
  );
};

export default Teamhome;
