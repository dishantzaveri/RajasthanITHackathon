import React from "react";
import Header from "../Header/Header";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import {
  Routes,
  Route,
  useNavigate,
  useLocation,
  Link,
} from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";

const MatchedMentor = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const navigate = useNavigate();

  const navigateToChat = () => {
    // 👇️ navigate to /contacts
    navigate("/chat");
  };
  return (
    <div>
      <Header />
      <div className="px-32 w-full h-64">
        <h1 className="pt-16 font-semibold text-4xl">Matched Mentors</h1>
        <h1 className="text-gray-600 pt-2 font-medium text-2xl">
          {" "}
          Our AI algorithm finds the best match of mentors for you!
        </h1>
      </div>
      <div className="px-36 flex flex-row">
        <div className="mb-8 shadow-lg mr-8 bg-white max-w-[300px] bg-white mt-[-35px] z-40 items-center shadow-gray-300 p-8 flex flex-col rounded h-fit">
          <img
            className="w-[80px] h-[80px] rounded-full object-cover self-center"
            src="https://imglarger.com/Images/before-after/ai-image-enlarger-1-after-2.jpg"
          />
          <h1 className="font-bold text-lg cursor-pointer mt-4 self-center">
            Santoshi Nakamoto
          </h1>
          <div className="mt-4 flex flex-col items-center">
            <div className="flex items-center mt-2">
              <p className="ml-2">Match : 90%</p>
              <AiFillHeart color="red" size={25} />
            </div>
            <div className="flex items-center mt-2">
              <p className="ml-2">⭐⭐⭐⭐⭐</p>
            </div>
            <div className="flex items-center mt-2">
              <p className="ml-2">Industry Type : Tech</p>
            </div>
            <button className="bg-[#E24748] text-white font-bold text-xl p-2 mt-4 rounded-lg">
              Connect
            </button>
          </div>
        </div>
        <div className="mb-8 shadow-lg mr-8 bg-white max-w-[300px] bg-white mt-[-35px] z-40 items-center shadow-gray-300 p-8 flex flex-col rounded h-fit">
          <img
            className="w-[80px] h-[80px] rounded-full object-cover self-center"
            src="https://imglarger.com/Images/before-after/ai-image-enlarger-1-after-2.jpg"
          />
          <h1 className="font-bold text-lg cursor-pointer mt-4 self-center">
            Santoshi Nakamoto
          </h1>
          <div className="mt-4 flex flex-col items-center">
            <div className="flex items-center mt-2">
              <p className="ml-2">Match : 90%</p>
              <AiFillHeart color="red" size={25} />
            </div>
            <div className="flex items-center mt-2">
              <p className="ml-2">⭐⭐⭐⭐⭐</p>
            </div>
            <div className="flex items-center mt-2">
              <p className="ml-2">Industry Type : Tech</p>
            </div>
            <button className="bg-[#E24748] text-white font-bold text-xl p-2 mt-4 rounded-lg">
              Connect
            </button>
          </div>
        </div>
        <div className="mb-8 shadow-lg mr-8 bg-white max-w-[300px] bg-white mt-[-35px] z-40 items-center shadow-gray-300 p-8 flex flex-col rounded h-fit">
          <img
            className="w-[80px] h-[80px] rounded-full object-cover self-center"
            src="https://imglarger.com/Images/before-after/ai-image-enlarger-1-after-2.jpg"
          />
          <h1 className="font-bold text-lg cursor-pointer mt-4 self-center">
            Santoshi Nakamoto
          </h1>
          <div className="mt-4 flex flex-col items-center">
            <div className="flex items-center mt-2">
              <p className="ml-2">Match : 90%</p>
              <AiFillHeart color="red" size={25} />
            </div>
            <div className="flex items-center mt-2">
              <p className="ml-2">⭐⭐⭐⭐⭐</p>
            </div>
            <div className="flex items-center mt-2">
              <p className="ml-2">Industry Type : Tech</p>
            </div>
            <button
              onClick={handleClickOpen}
              className="bg-[#E24748] text-white font-bold text-xl p-2 mt-4 rounded-lg"
            >
              Connect
            </button>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                {"Connect with the Mentor"}
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  In order to unlock the Chat Feature with this Mentor, 2 coins
                  will be deducted from your existing Account
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Disagree</Button>
                <Button onClick={navigateToChat} autoFocus>
                  Agree
                </Button>
              </DialogActions>
            </Dialog>
          </div>
        </div>
      </div>
      <div className="px-32 w-full">
        <h1 className="pt-16 font-semibold text-4xl">Find a Mentor</h1>
        <h1 className="text-gray-600 pt-2 font-medium text-2xl">
          Search amazing individuals around the globe, find a mentor, expand
          your network, and learn from incredible people!
        </h1>
        <div className="flex items-center border rounded-full w-4/5 bg-white text-gray-700 mx-24 mt-20 mb-20 box-content">
        <BiSearch className="mr-4 ml-6 text-3xl text-greha-1" />
        <input
          className="focus:outline-0 bg-inherit w-full"
          type="text"
          placeholder="Search Mentor"
        />
        <Link to="/login">
          <div className="h-full px-8 py-4 bg-[#E24748] rounded-r-full cursor-pointer">
            <h1 className="text-white text-lg font-bold uppercase">Search</h1>
          </div>
        </Link>
      </div>
      </div>
    </div>
  );
};

export default MatchedMentor;
