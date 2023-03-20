import Header from "../components/Header/Header";
import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";
import BasicTable from "../components/Table";

export default function Funding() {
  return (
    <>
      <Header />
      <div className="px-32 w-full h-64">
        <h1 className="pt-16 font-semibold text-4xl">
          Post Proposals for Funding
        </h1>
        <h1 className="text-gray-600 pt-2 font-medium text-2xl">
          Submit a proposal that investors might be interested in!
        </h1>
        <button className="bg-[#E24748] text-white font-bold text-xl px-12 py-5 mt-4 rounded-full">
          <a href="/pitchdeck-form"> Post proposal </a>
        </button>
      </div>
      <div className="px-32 w-full">
        <h1 className="pt-16 font-semibold text-4xl">View Competitors</h1>
        <h1 className="text-gray-600 pt-2 font-medium text-2xl">
          Check out other competitors in the startup market
        </h1>
        <div className="flex items-center border rounded-full w-4/5 bg-white text-gray-700 mx-24 mt-20 mb-20 box-content">
          <BiSearch className="mr-4 ml-6 text-3xl text-greha-1" />
          <input
            className="focus:outline-0 bg-inherit w-full"
            type="text"
            placeholder="Filter by Industry"
          />
          <Link to="/login">
            <div className="h-full px-8 py-4 bg-[#E24748] rounded-r-full cursor-pointer">
              <h1 className="text-white text-lg font-bold uppercase">Search</h1>
            </div>
          </Link>
        </div>
      </div>
      <BasicTable />
    </>
  );
}
