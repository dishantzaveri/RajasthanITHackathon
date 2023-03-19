import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Location from "@material-ui/icons/LocationOnOutlined";
import GrainOutlined from "@material-ui/icons/GrainOutlined";
import { logout } from "../features/auth/authSlice";
import "./Events.css";
import axios from "axios";
import { useGetEventsQuery } from "../features/events/eventsAPISlice";
import { VscLoading } from "react-icons/vsc";
import CreateEvents from "../components/CreateEvents/CreateEvents";
import Header from "../components/Header/Header";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const Event = ({ event }) => {


  return (
    <div>
      <img
        src={
          event.image
            ? event.image
            : "https://image.shutterstock.com/image-vector/ui-image-placeholder-wireframes-apps-260nw-1037719204.jpg"
        }
        className="rounded-t-2xl max-w-[280px] max-h-[150px]"
      />
      <div className="bg-white flex justify-between self-center max-w-[280px] bottom-[-40px] p-2 rounded-b-2xl shadow-lg">
        <div className="">
          <h1
            className="text-lg font-bold mt-2"
            style={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: 1,
              WebkitBoxOrient: "vertical",
            }}
          >
            {event.name}
          </h1>
          <h1 className="mt-[5px]">Price : {event.price}</h1>
          <h1 className="mt-[5px]">Organized By: {event.organiser}</h1>
          <div className="flex mt-[5px]">
            <Location />
            <h1>{event.venue}</h1>
          </div>
        </div>
        <button className="bg-purple-gray-600 text-white self-end p-2 px-4 rounded-2xl">
          Buy
        </button>
      </div>
    </div>
  );
};

const style = {
  position: "absolute",
  top: "80%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  overflow: "scroll",
};

const Events = () => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { data, isLoading, error } = useGetEventsQuery();

  console.log(data)

  return (
    <div>
      <Header />
      <div className="px-32 w-full h-64 relative ">
        <div className="py-[80px] flex">
          <div className="content ">
            <h1 className="text-5xl">Events by Top Mentors</h1>
            <h1 className="text-2xl mt-4 text-slate-700">
              Book Your Seats Now!
            </h1>
          </div>
          <button
            onClick={handleOpen}
            className="create-button bg-[#E24748] text-white self-end p-2 px-4 rounded-2xl ml-[37%] "
          >
            <AddCircleIcon /> Create Event
          </button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            sx={{ overflow: "scroll" }}
          >
            <Box sx={style}>
              <CreateEvents />
            </Box>
          </Modal>
        </div>
        <div>
          <div className="flex justify-between items-center p-2 bg-white rounded-3xl shadow-lg mt-[-25px]">
            <input placeholder="Search Events.." />
            <input type="date" />
            <div>
              <Location />
              <select>
                <option>Location</option>
                <option>Mumbai</option>
                <option>Delhi</option>
                <option>Bangalore</option>
                <option>Assam</option>
                <option>Chennai</option>
              </select>
            </div>
            <div>
              <GrainOutlined />
              <select>
                <option>Industry</option>
                <option>Tech</option>
                <option>Marketing</option>
                <option>Finance</option>
                <option>Sports</option>
                <option>Entertainment</option>
              </select>
            </div>
            <button className="text-white rounded-3xl bg-[#E24748] p-2">
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="mt-8 p-16">
        <h1 className="text-3xl">Major Events</h1>
        <div
          className="ml-8 mt-4"
          style={{
            display: "grid",
            gridTemplateColumns: "auto auto auto auto",
            rowGap: "50px",
          }}
        >
          {data && data.map((event) => <Event event={event} />)}
        </div>
        {isLoading && (
          <div className="w-full flex flex-col justify-center items-center my-8">
            <VscLoading className="w-8 h-8 animate-spin text-center text-gray-600" />
            <h1 className="text-xl mt-2">Loading...</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;
