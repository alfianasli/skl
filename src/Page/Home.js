import axios from "axios";
import React, { useEffect, useState } from "react";
import Rail from "../Component/Rail";
import "../App.css";
import { Link } from "react-router-dom";

const Home = () => {
  const [listMenu, setlistMenu] = useState([]);
  const [detailRecipe, setDetail] = useState([]);

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

  // ini untuk nampilin rekomendasi
  const getCategoryMenu = async () => {
    const res = await axios.get(
      `https://random-recipes.p.rapidapi.com/ai-quotes/8`,
      {
        headers: {
          "X-RapidAPI-Key": process.env.REACT_APP_KEY_RANDOM,
          "X-RapidAPI-Host": process.env.REACT_APP_HOST_RANDOM,
        },
      }
    );

    const tes = res.data.find((e) => {
      return (e.title = "Blueberry-Nectarine Lattice Pie");
    });

    console.log(tes);
    setlistMenu(res.data);
  };
  useEffect(() => {
    getCategoryMenu();
  }, []);

  return (
    <div className="flex">
      <Rail />
      <div className="sebelah left-[367px] relative width-content h-screen ">
        <div className="mt-7 ml-10 flex justify-between ">
          <h2 className=" text-white text-2xl">Recomendation Menu</h2>
          <div className=" ml-10 flex "></div>
        </div>
        <div className="flex gap-5 relative px-7 mt-5 rounded-lg flex-wrap">
          {listMenu.map((menu) => (
            <>
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
              {/* modal */}
              <div
                class="container-modal modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-fullscreen relative w-auto pointer-events-none">
                  <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                    <div class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                      <h2
                        class="text-xl font-medium leading-normal text-gray-800"
                        id="exampleModalFullscreenLabel"
                      >
                        {detailRecipe.title}
                      </h2>
                      <button
                        type="button"
                        class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class=" modal-body relative p-4">
                      <img src={detailRecipe.image} alt="img" />
                      <p className="font-bold mb-2 text-xl">ingredients</p>
                      <li className="font-body mb-4 text-base">
                        {detailRecipe.ingredients}
                      </li>
                      <p className="font-bold mb-2 text-xl">Instructions</p>
                      <li className="font-body mb-4 text-base">
                        {detailRecipe.instructions}
                      </li>
                    </div>
                    <div class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                      <button
                        type="button"
                        class=" m-3 inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
                        data-bs-dismiss="modal"
                      >
                        Batal
                      </button>
                      <Link to={`/profile`}>
                        <button
                          type="button"
                          class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                        >
                          tambah Favorit
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
