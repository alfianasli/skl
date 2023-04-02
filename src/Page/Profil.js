import React, { useEffect, useState } from "react";
import axios from "axios";
import Rail from "../Component/Rail";
import AvatarMaker from "../Aset/AvatarMaker.png";
import "../App.css";

const Profil = () => {
  const [listMenu] = useState([]);
  const [setDetail] = useState([]);

  const getDetail = async (id) => {
    await axios
      .get(
        `https://random-recipes.p.rapidapi.com/ai-quotes/8/?i=${id}&apiKey=${process.env.REACT_APP_API_KEY_RANDOM}`
      )
      .then((res) => {
        console.log(res.data);
        setDetail(res.data);
      });
  };
  useEffect(() => {
    getDetail();
  }, []);

  return (
    <div className="flex ">
      <Rail />
      <div className=" sebelah left-[367px] relative width-content  h-screen">
        <div className=" flex mt-20 ml-32">
          <img className="profil h-48 w-48 " src={AvatarMaker} alt="gambar" />
          <div className="flex-col ml-24">
            <h2 className="text-2xl ">eezzyy_zz</h2>
            <h2>Bio</h2>
            <h5>
              <i class="fa-solid fa-location-crosshairs pt-28 mr-4"></i>
              live in planet mars
            </h5>
          </div>
        </div>
        <div className=" ml-8  flex mt-20">
          <h3>Your Favorite</h3>
          {listMenu.map((menu) => (
            <div class="flex justify-center rounded-lg pb-4" key={menu.id}>
              <div class="block w-60 h-72 rounded-lg  bg-gray-300 ">
                <img className="h-48 w-full " src={menu.image} alt="gambar" />
                <h5 class="  font-medium leading-tight text-center mt-4 text-black truncate px-2">
                  {menu.title}
                </h5>
                <button
                  type="button"
                  class="inline-block rounded ml-14 mt-4 bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                  data-te-toggle="modal"
                  data-te-target="#exampleModal"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  Selengkapnya
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profil;
