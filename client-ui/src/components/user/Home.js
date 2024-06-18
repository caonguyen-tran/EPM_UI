import { Link } from "react-router-dom";
import { FaCommentDots } from "react-icons/fa6";
import { FaThumbsUp } from "react-icons/fa6";
import { MdOutlineThumbUpOffAlt } from "react-icons/md";
import { useContext, useEffect } from "react";
import { UserContext } from "../../context/Context";

const data = {
  id: 4,
  name: 'TẬP HUẤN NCKH CHỦ ĐỀ "PHƯƠNG PHÁP NGHIÊN CỨU KHOA HỌC"',
  startDate: 1715824800000,
  endDate: 1715911200000,
  description:
    "Hoạt động được tổ chức cho tất cả sinh viên trường Đại Học Mở thành phố Hồ Chí Minh",
  active: null,
  image:
    "https://res.cloudinary.com/dndakokcz/image/upload/v1716640766/lflqzauyyavx8jqoenwl.jpg",
  slots: 500,
  faculty: {
    id: 2,
    name: "Công nghệ sinh học",
    createdDate: 847645200000,
  },
  semester: {
    id: 5,
    name: "Kì 2",
    description: "Kì 2 năm 2024",
    yearStudy: "2024",
  },
  term: {
    id: 3,
    name: "Điều 3",
    description:
      "Đánh giá về ý thức và kết quả tham gia các hoạt động chính trị - xã hội, văn hóa, văn nghệ, thể thao, phòng chống các tệ nạn xã hội.",
  },
};

function Home() {
  return (
    <div className="w-11/12 min-h-lvh bg-gray-200 m-auto flex flex-col justify-start items-center py-5 rounded-sm">
      <div class="px-5 py-4 bg-white shadow rounded-lg w-5/6">
        <div class="flex justify-between items-center">
          <div class="flex mb-4">
            <img
              class="w-12 h-12 rounded-full"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="posts"
            />
            <div class="ml-2 mt-0.5">
              <span class="block font-medium text-base leading-snug text-black dark:text-gray-100">
                Loyce Kuvalis
              </span>
              <span class="block text-sm text-gray-500 dark:text-gray-400 font-light leading-snug">
                16 December at 08:25
              </span>
            </div>
          </div>
          <div>
            <Link to="/activity-detail" className="text-decoration-none bg-rose-300 p-1 rounded-sm shadow font-semibold hover:bg-red-400 text-gray-800 transition ease-in-out duration-150 px-2">
              Xem chi tiết
            </Link>
          </div>
        </div>
        <p class="size-12 w-auto h-auto font-semibold">{data.name}</p>
        <p class="text-gray-800 leading-snug md:leading-normal">
          {data.description}
        </p>
        <div className="w-4/5 h-20 grid grid-cols-3 auto-cols-min gap-2 mb-2 px-2">
          <div className="bg-white h-8 w-auto border-2 border-gray-400 rounded-md text-center cursor-pointer">
            <p className="font-light">{data.term.name}</p>
          </div>
          <div className="bg-white h-8 w-auto border-2 border-gray-400 rounded-md text-center cursor-pointer">
            <p className="font-light">{data.faculty.name}</p>
          </div>
          <div className="bg-white h-8 w-auto border-2 border-gray-400 rounded-md text-center cursor-pointer">
            <p className="font-light">{data.semester.name}</p>
          </div>
          <div className="bg-white h-8 w-auto border-2 border-gray-400 rounded-md text-center cursor-pointer">
            <p className="font-light">{data.semester.yearStudy}</p>
          </div>
        </div>
        <img src={data.image} alt="source_image" className="w-full" />
        <div className="w-10/11 h-0.5 bg-gray-300 mt-5"></div>
        <div class="flex justify-between items-center mt-4 mx-2">
          <div class="flex justify-between items-center">
            <MdOutlineThumbUpOffAlt />
            <span class="ml-1 text-gray-500  font-light">
              8
            </span>
          </div>
          <div class="ml-1 text-gray-500 font-light">
            33 comments
          </div>
        </div>
        <div className="h-12 max-w-full mt-2 mx-1 flex justify-start items-center">
          <button className="bg-gray-300 w-9 h-9 mr-4 rounded-full flex justify-center items-center"><FaThumbsUp /></button>
          <Link className="bg-gray-300 px-2 h-8 rounded-md text-decoration-none flex justify-center items-center"><FaCommentDots className="mr-1" />Xem bình luận</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
