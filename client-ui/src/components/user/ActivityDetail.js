import { FaHeart } from "react-icons/fa6";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FaEllipsisH, FaShare } from "react-icons/fa";
import {
  convertTimestampToDatetime
} from "../../utils/Common";
import { useContext, useEffect, useState } from "react";
import API, { authApi, endpoints } from "../../apis/API";
import ContentLoading from "../../common/ContentLoading";
import Loading from "../../common/Loading";
import { UserContext } from "../../context/Context";
import Comment from "./Comment";

const ActivityDetail = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState(null);
  const [isRegister, setIsRegister] = useState(null);
  const [loading1, setLoading1] = useState(false)
  const currentUser = useContext(UserContext);
  const navigator = useNavigate();

  const registerSubmit = async () => {
    if (currentUser === null) {
      navigator("/login");
    } else {
      try {
        let res = await authApi().post(endpoints["registerSubmit"], {
          activityId: id,
        });
        console.log(res.data);
        navigator("/register");
      } catch (ex) {
        console.log(ex);
      }
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        let res = await API.get(endpoints["activityDetail"](id));
        setDetail(res.data.result);
        if (currentUser !== null) {
          try {
            setLoading1(true);
            let register = await authApi().get(
              endpoints["registerByUserAndActivity"](id)
            );
            setIsRegister(register.data.result);
            setLoading1(false);
          } catch (ex) {
            console.log(ex);
          }
        }
      } catch (ex) {
        console.log(ex);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="w-11/12 min-h-lvh bg-gray-200 m-auto flex flex-col justify-start items-center py-5 rounded-sm">
      {detail !== null ? (
        <div class="px-5 py-4 bg-gray-50 shadow rounded-lg w-5/6">
          <div className="flex justify-end items-center w-full mb-4">
            <button>
              <FaShare size={20} />
            </button>
            <button className="ml-3">
              <FaEllipsisH size={20} />
            </button>
          </div>
          <img
            src={detail.image}
            alt="source_image"
            className="w-4/5 max-h-[600px] mb-4 m-auto"
          />
          <p class="size-12 w-auto h-auto font-bold text-xl">{detail.name}</p>
          <p class="text-gray-800 leading-snug md:leading-normal">
            {detail.description}
          </p>
          <div className="w-3/4 flex flex-col justify-start items-start px-2">
            <div className="flex justify-center items-center mb-2">
              <div className="font-semibold mr-1.5 min-w-32">Số lượng: </div>
              <div className="flex justify-center items-center bg-gray-400 p-1 rounded-sm shadow-md">
                {detail.slots}
              </div>
            </div>
            <div className="flex justify-start items-center mb-2">
              <div className="font-semibold mr-1.5 min-w-32">Khoa: </div>
              <div className="flex justify-center items-center bg-gray-400 p-1 rounded-sm shadow-md">
                {detail.faculty.name}
              </div>
            </div>
            <div className="flex justify-start items-center mb-2">
              <div className="font-semibold mr-1.5 min-w-32">Học kì: </div>
              <div className="flex justify-center items-center bg-gray-400 p-1 rounded-sm shadow-md">
                {detail.semester.name}
              </div>
            </div>
            <div className="flex justify-start items-center mb-2">
              <div className="font-semibold mr-1.5 min-w-32">Năm học: </div>
              <div className="flex justify-center items-center bg-gray-400 p-1 rounded-sm shadow-md">
                {detail.semester.yearStudy}
              </div>
            </div>
            <div className="flex justify-start items-center mb-2">
              <div className="font-semibold mr-1.5 min-w-32">Điều: </div>
              <div className="flex justify-center items-center bg-gray-400 p-1 rounded-sm shadow-md">
                {detail.term.name}
              </div>
            </div>
            <div className="flex justify-start items-center my-2 w-full">
              <div className="font-semibold mr-1.5 min-w-32">
                Ngày bắt đầu:{" "}
              </div>
              <div className="flex justify-center items-center p-1">
                <div class="relative max-w-sm">
                  <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <svg
                      class="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 min-w-96"
                    placeholder="Select date"
                    value={convertTimestampToDatetime(detail.startDate)}
                    disabled
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-start items-center mb-2 w-full">
              <div className="font-semibold mr-1.5 min-w-32">
                Ngày kết thúc:{" "}
              </div>
              <div className="flex justify-center items-center p-1">
                <div class="relative max-w-sm">
                  <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <svg
                      class="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 min-w-96"
                    placeholder="Select date"
                    value={convertTimestampToDatetime(detail.endDate)}
                    disabled
                  />
                </div>
              </div>
            </div>
            {loading1 ? (
              <div className="min-w-12 min-h-9 flex justify-center items-center">
                <Loading size={30} />
              </div>
            ) : (
              <button
                onClick={registerSubmit}
                type="button"
                class={
                  isRegister === null
                    ? "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mt-4 "
                    : "text-white bg-gray-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mt-4 "
                }
                disabled={isRegister === null ? false : true}
              >
                Xác nhận đăng ký
                <svg
                  class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </button>
            )}
          </div>

          <div className="w-10/11 h-0.5 bg-gray-300 mt-5"></div>
          <div class="flex justify-between items-center mt-4 mx-2">
            <div class="flex justify-between items-center">
              <FaHeart color="#FF1A86" />
              <span class="ml-1 text-gray-500  font-light">8</span>
            </div>
            <div class="ml-1 text-gray-500 font-light">33 comments</div>
          </div>
          <div className="w-full">
            <section class="bg-gray-50 dark:bg-gray-900 py-8 lg:py-16 antialiased">
              <div class="w-full mx-auto px-4">
                <div class="flex justify-between items-center mb-6">
                  <h2 class="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
                    Có (20) bình luận
                  </h2>
                </div>
                <form class="mb-6">
                  <div class="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                    <label for="comment" class="sr-only">
                      Your comment
                    </label>
                    <textarea
                      id="comment"
                      rows="6"
                      class="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                      placeholder="Viết bình luận..."
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 hover:bg-blue-800 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
                  >
                    Gửi
                  </button>
                </form>
                <Comment id={id} />
              </div>
            </section>
          </div>
        </div>
      ) : (
        <ContentLoading />
      )}
    </div>
  );
};

export default ActivityDetail;
