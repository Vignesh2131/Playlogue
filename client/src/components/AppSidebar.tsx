import { Link } from "react-router-dom";
const AppSidebar = () => {
  return (
    <div className="flex flex-col border-r border-teal-300 h-full gap-y-10">
      <div className="mt-4 px-6">
        <Link to="/">
          <h2 className="text-2xl font-bold text-teal-500">Playvogue</h2>
        </Link>

        <p className="text-xl font-semibold text-teal-300">XP : 200</p>
      </div>
      <div className="flex flex-col gap-y-10 text-[#fffafb] font-mono text-lg">
        <div className="flex flex-col p-2 border gap-y-2 border-l-0 border-teal-300">
          <p>Home</p>
          <p>Reviews</p>
          <p>Critics</p>
          <p>Lists</p>
        </div>
        <div className="flex flex-col p-2 border border-l-0 gap-y-2 border-teal-300">
          <p>Top rated</p>
          <p>Popular</p>
          <p>Most rated</p>
          <p>Popular in year</p>
        </div>
        <div className="flex flex-col p-2 border gap-y-2 border-l-0 border-teal-300">
          <p>Play Station</p>
          <p>PC</p>
          <p>Mobile</p>
        </div>
      </div>
    </div>
  );
}

export default AppSidebar