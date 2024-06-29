import { FaHeart } from "react-icons/fa6";
import { useContext, useEffect, useState } from "react";
import { FaCommentDots } from "react-icons/fa6";
import { Link } from "react-router-dom";
import API, { endpoints } from "../../apis/API";
import ContentLoading from "./../../common/ContentLoading";
import { UserContext } from "../../context/Context";
import RelativeTime from "../../utils/Relative";
import MissingReportForm from "../../common/MissingReportForm";

function Home() {
  const [activity, setActivity] = useState([]);
  const [loading, setLoading] = useState(false);
  const currentUser = useContext(UserContext);
  const [show, setShow] = useState(false);
  const [activityId, setActivityId] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        let res = await API.get(endpoints["activities"]);
        setActivity(res.data);
      } catch (ex) {
        console.log(ex);
      }
      setLoading(false);
    };

    fetchData();
  }, [currentUser]);

  return (
    <>
      <div className="w-11/12 min-h-lvh bg-gray-200 m-auto flex flex-col justify-start items-center py-5 rounded-sm">
        {loading ? (
          <ContentLoading />
        ) : (
          activity.map((item) => (
            <div
              key={item.id}
              class="px-5 py-4 bg-gray-50 shadow rounded-lg w-5/6 mb-4"
            >
              <div class="flex justify-between items-center">
                <div class="flex mb-4">
                  <img
                    class="w-12 h-12 rounded-full"
                    src={item.useResponse.avatar}
                    alt="posts"
                  />
                  <div class="ml-2 mt-0.5">
                    <span class="block font-medium text-base leading-snug text-black dark:text-gray-100">
                      {item.useResponse.username}
                    </span>
                    <RelativeTime
                      date={item.startDate}
                      classNameProps="block text-sm text-gray-500 dark:text-gray-400 font-light leading-snug"
                    />
                  </div>
                </div>
                <div>
                  <button
                    className="bg-red-600 font-medium rounded-lg text-sm px-4 py-2.5 text-white mr-1 hover:bg-red-700"
                    onClick={() => {
                      setShow(true)
                      setActivityId(item.id)
                      }}
                  >
                    Báo thiếu
                  </button>
                  <Link
                    to={`/activity-detail/${item.id}`}
                    className="text-decoration-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
                  >
                    Xem chi tiết
                  </Link>
                </div>
              </div>
              <p class="size-12 w-auto h-auto font-semibold">{item.name}</p>
              <p class="text-gray-800 leading-snug md:leading-normal">
                {item.description}
              </p>
              <div className="w-4/5 h-20 grid grid-cols-3 auto-cols-min gap-2 mb-2 px-2">
                <div className="bg-white h-8 w-auto border-2 border-gray-400 rounded-md text-center cursor-pointer">
                  <p className="font-light">{item.term.name}</p>
                </div>
                <div className="bg-white h-8 w-auto border-2 border-gray-400 rounded-md text-center cursor-pointer">
                  <p className="font-light">{item.faculty.name}</p>
                </div>
                <div className="bg-white h-8 w-auto border-2 border-gray-400 rounded-md text-center cursor-pointer">
                  <p className="font-light">{item.semester.name}</p>
                </div>
                <div className="bg-white h-8 w-auto border-2 border-gray-400 rounded-md text-center cursor-pointer">
                  <p className="font-light">{item.semester.yearStudy}</p>
                </div>
              </div>
              <img
                src={item.image}
                alt="source_image"
                className="w-3/4 max-h-[600px] m-auto"
              />
              <div className="w-10/11 h-0.5 bg-gray-300 mt-5"></div>
              <div class="flex justify-between items-center mt-4 mx-2">
                <div class="flex justify-between items-center">
                  <FaHeart color="#FF1A86" />
                  <span class="ml-1 text-gray-500  font-light">8</span>
                </div>
                <div class="ml-1 text-gray-500 font-light">33 comments</div>
              </div>
              <div className="h-12 max-w-full mt-2 mx-1 flex justify-start items-center">
                <button className="bg-gray-300 w-9 h-9 mr-4 rounded-full flex justify-center items-center">
                  <FaHeart color="white" />
                </button>
                <Link
                  to={`/activity-detail/${item.id}`}
                  className="bg-gray-300 px-2 h-8 rounded-md text-decoration-none flex justify-center items-center"
                >
                  <FaCommentDots className="mr-1" />
                  Xem bình luận
                </Link>
              </div>
            </div>
          ))
        )}
        <div>
          {show ? (
            <MissingReportForm activityId={activityId} setShow={setShow} />
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
}

export default Home;
