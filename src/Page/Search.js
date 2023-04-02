import React, { useEffect, useState } from "react";
import Rail from "../Component/Rail";
import axios from "axios";
import { Link } from "react-router-dom";

const Search = () => {
  const [listMenu, setlistMenu] = useState([]);
  const [cari, setCari] = useState("");
  const [detailMenu, setDetail] = useState([false]);

  const remove = () => {
    setCari("");
  };

  const getSearchMenu = async (e) => {
    const res = await axios.get(
      `https://low-carb-recipes.p.rapidapi.com/search`,
      {
        params: { name: `${cari}` },
        headers: {
          "X-RapidAPI-Key": process.env.REACT_APP_KEY_RANDOM,
          "X-RapidAPI-Host": process.env.REACT_APP_HOST_SEARCH,
        },
      }
    );
    const getDetail = async (id) => {
      await axios
        .get(
          `low-carb-recipes.p.rapidapi.com/?i=${id}&apiKey=${process.env.REACT_APP_KEY_RANDOM}`
        )
        .then((res) => {
          console.log(res.data);
          setDetail(res.data);
        });
    };
    // const search = res.data.find((e) => {
    //   return (e.title = `${cari}`);
    // });
    console.log(res.data);
    setlistMenu(res.data.slice(0, 4));
  };
  useEffect(() => {
    if (cari.length !== 0) {
      getSearchMenu();
    }
  });
  return (
    <div>
      <div className="flex">
        <Rail />
        <div className="sebelah left-[367px] relative width-content h-screen ">
          {listMenu ? (
            <>
              <h3 className="text-center text-white text-4xl mt-14">
                What are you going to cook today?
              </h3>
              <div className="mt-7 ml-10 flex justify-center">
                <input
                  type="search"
                  className="rounded-md px-3 py-1 ml-6 mr-10 mt-2 opacity-25"
                  value={cari}
                  onChange={(e) => setCari(e.target.value)}
                  onKeyPress={getSearchMenu}
                />
              </div>
            </>
          ) : (
            <></>
          )}

          <div className="flex gap-5 relative px-7 mt-5 rounded-lg flex-wrap">
            {listMenu.map((menu) => (
              <>
                <div class="flex justify-center rounded-lg pb-4" key={menu.id}>
                  <div class="block w-60 h-80 rounded-lg  bg-gray-300 ">
                    <img
                      className="h-48 w-full "
                      src={menu.image}
                      alt="gambar"
                    />
                    <h5 class="  font-medium leading-tight text-center mt-4 text-black truncate px-2">
                      {menu.name}
                    </h5>
                    <button
                      type="button"
                      class="inline-block rounded ml-14 my-8 bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                      data-te-toggle="modal"
                      data-te-target="#exampleModal"
                      data-te-ripple-init
                      data-te-ripple-color="light"
                      onClick={(toggleModal) => {
                        detailMenu(menu.id);
                      }}
                    >
                      Selengkapnya
                    </button>
                  </div>
                </div>
                {/* modal */}
                {/* <div
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
                          {menu.name}
                        </h2>
                        <button
                          type="button"
                          class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div class=" modal-body relative p-4">
                        <img src={menu.image} alt="img" />
                        <p className="font-bold mb-2 text-xl">description</p>
                        <li className="font-body mb-4 text-base">
                          {menu.description}
                        </li>
                        <p className="font-bold mb-2 text-xl">Ingredients</p>
                        <li className="font-body mb-4 text-base">
                          {menu.ingredients}
                        </li>
                        <p className="font-bold mb-2 text-xl">Genre</p>
                        <li className="font-body mb-4 text-base">
                          {menu.steps}
                        </li>
                      </div>
                      <div class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                        <button
                          type="button"
                          class=" m-3 inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <Link to={`/profile`}>
                          <button
                            type="button"
                            class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                          >
                            Tambah favorite
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div> */}
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
