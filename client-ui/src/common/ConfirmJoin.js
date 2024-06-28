import { useState } from "react";
import { FaX } from "react-icons/fa6";
import Loading from "./Loading";
import { authApi, endpoints } from "../apis/API";
import { useNavigate } from "react-router-dom";

const ConfirmJoin = ({ registerId, setShow }) => {
  const [file, setFile] = useState(null);
  const [note, setNote] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleDataChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      console.log(event.target.files[0]);
      setFile(event.target.files[0]);
    }
  };

  const submitConfirmJoin = async (e) => {
    e.preventDefault();

    if (!file) {
      alert("Vui long upload bang chung tham gia");
      return;
    }
    let formData = new FormData();
    formData.append("note", note);
    formData.append("joinActivityId", registerId);
    formData.append("file", file);
    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }
    try {
      setLoading(true);
      let res = await authApi().post(endpoints["submitRegister"], formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setLoading(false);
      console.log(res.data);
      navigate("/joining");
    } catch (ex) {
      console.log(ex);
    }
  };

  return (
    <div className="w-full h-full fixed z-50 flex justify-center left-0 top-14 mt-10">
      <div className="w-4/5 h-4/5 flex-col shadow-md rounded-lg bg-black bg-opacity-50 backdrop-blur-md">
        <div className="w-full h-14 flex justify-end px-2 items-center">
          <button
            className="bg-red-500 py-2 px-3 rounded-md"
            onClick={() => {
              setShow(false);
            }}
          >
            <FaX />
          </button>
        </div>
        <form onSubmit={submitConfirmJoin}>
          <div className="w-full h-4/5 flex-col flex px-10">
            <label for="comment" className="text-left text-white">
              Ghi chú *
            </label>
            <textarea
              id="comment"
              rows="6"
              class="w-full text-sm border-0 focus:ring-0 focus:outline-none text-black dark:placeholder-gray-400 bg-gray-300 rounded-sm px-2"
              placeholder="Viết bình luận..."
              required
              onChange={(e) => {
                setNote(e.target.value);
              }}
            ></textarea>

            <div class="flex items-center justify-between w-full mt-2 h-4/5">
              <label
                for="dropzone-file"
                class="flex flex-col items-center justify-center w-1/2 h-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500"
              >
                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span class="font-semibold">Click to upload</span> or drag
                    and drop
                  </p>
                  <p class="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                  {!file ? (
                    <></>
                  ) : (
                    <img
                      alt="Imageproof"
                      className="w-2/5 h-4/5 ml-5"
                      src={file}
                    />
                  )}
                </div>
                <input
                  id="dropzone-file"
                  type="file"
                  class="hidden"
                  onChange={handleDataChange}
                />
              </label>
            </div>
          </div>

          <div className="flex justify-end items-center px-6 py-4">
            <button
              className="bg-blue-700 hover:bg-blue-800 w-24 h-12 rounded-md shadow-lg text-white font-semibold flex justify-center items-center"
              type="submit"
            >
              {loading ? <Loading size={28} /> : "Xác nhận"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ConfirmJoin;
