import { useState } from "react";
import { FaX } from "react-icons/fa6";
import Loading from "./Loading";
import { authApi, endpoints } from "../apis/API";
import { useNavigate } from "react-router-dom";

const JoinSubmit = ({ registerId, setShow }) => {
  const [file, setFile] = useState(null);
  const [note, setNote] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleDataChange = (event) => {
    if (event.target.files && event.target.files[0]) {
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
    <div className="w-full h-full fixed z-50 flex justify-center left-0 top-14">
      <form onSubmit={submitConfirmJoin} className="w-1/2 max-h-xl">
        <div class="items-start p-12">
          <div class="mx-auto w-full bg-white shadow-2xl rounded-md">
            <div className="h-10 w-full px-2 flex justify-end items-center">
              <button className="bg-red-500" onClick={() => setShow(false)}>
                <FaX />
              </button>
            </div>
            <div
              class="py-6 px-9"
            >
              <div class="mb-5">
                <label
                  for="email"
                  class="mb-3 block text-base font-medium text-[#07074D] text-left"
                >
                  Ghi chú <span className="text-red-600">*</span>
                </label>
                <textarea
                  type="text"
                  placeholder="Ghi chú"
                  class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md resize-none h-36"
                  onChange={(e) => {
                    setNote(e.target.value);
                  }}
                />
              </div>

              <div class="mb-6 pt-4">
                <label class="mb-5 block text-xl font-semibold text-[#07074D]">
                  Upload hình ảnh
                </label>

                <div class="flex items-center space-x-6">
                  <label class="block">
                    <span class="sr-only">Choose profile photo</span>
                    <input
                      type="file"
                      onChange={handleDataChange}
                      class="block w-full text-sm text-slate-500
                                file:mr-4 file:py-2 file:px-4
                                file:rounded-full file:border-0
                                file:text-sm file:font-semibold
                                file:bg-violet-50 file:text-violet-700
                                hover:file:bg-violet-100
                              "
                    />
                  </label>
                </div>
              </div>

              <div>
                <button
                  class="hover:shadow-form w-full rounded-md bg-blue-700 hover:bg-blue-800 py-3 px-8 text-center text-base font-semibold text-white outline-none flex justify-center items-center"
                  type="submit"
                >
                  {loading ? <Loading size={28} /> : "Xác nhận"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default JoinSubmit
