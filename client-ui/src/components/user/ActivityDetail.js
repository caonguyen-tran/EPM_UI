import { FaCommentDots, FaThumbsUp } from "react-icons/fa6";
import { MdOutlineThumbUpOffAlt } from "react-icons/md";
import { Link } from "react-router-dom";

const ActivityDetail = () => {
  const data = {
    id: 4,
    name: 'TẬP HUẤN NCKH CHỦ ĐỀ "PHƯƠNG PHÁP NGHIÊN CỨU KHOA HỌC"',
    startDate: 1715824800000,
    endDate: 1715911200000,
    description:
      "Hoạt động được tổ chức cho tất cả sinh viên trường Đại Học Mở thành phố Hồ Chí Minh",
    active: true,
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
    useResponse: {
      id: 1,
      username: "admin1",
      avatar:
        "https://res.cloudinary.com/dndakokcz/image/upload/v1716640220/pdigqnwgkka5tawqblh1.jpg",
      active: true,
      userRole: {
        id: 1,
        userRole: "ROLE_ADMIN",
      },
    },
  };
  const convertTimestampToDateTime = (timestamp) => {
    let datetime = new Date(timestamp);
    return datetime;
  };
  return (
    <div className="w-11/12 min-h-lvh bg-gray-200 m-auto flex flex-col justify-start items-center py-5 rounded-sm">
      <div class="px-5 py-4 bg-white shadow rounded-lg w-5/6">
        <img src={data.image} alt="source_image" className="w-full mb-4" />
        <p class="size-12 w-auto h-auto font-bold text-xl">{data.name}</p>
        <p class="text-gray-800 leading-snug md:leading-normal">
          {data.description}
        </p>
        <div className="w-3/4 flex flex-col justify-start items-start px-2">
          <div className="flex justify-center items-center mb-2">
            <div className="font-semibold mr-1.5 min-w-32">Số lượng: </div>
            <div className="flex justify-center items-center bg-gray-400 p-1 rounded-sm shadow-md">
              {data.slots}
            </div>
          </div>
          <div className="flex justify-start items-center mb-2">
            <div className="font-semibold mr-1.5 min-w-32">Khoa: </div>
            <div className="flex justify-center items-center bg-gray-400 p-1 rounded-sm shadow-md">
              {data.faculty.name}
            </div>
          </div>
          <div className="flex justify-start items-center mb-2">
            <div className="font-semibold mr-1.5 min-w-32">Học kì: </div>
            <div className="flex justify-center items-center bg-gray-400 p-1 rounded-sm shadow-md">
              {data.semester.name}
            </div>
          </div>
          <div className="flex justify-start items-center mb-2">
            <div className="font-semibold mr-1.5 min-w-32">Năm học: </div>
            <div className="flex justify-center items-center bg-gray-400 p-1 rounded-sm shadow-md">
              {data.semester.yearStudy}
            </div>
          </div>
          <div className="flex justify-start items-center mb-2">
            <div className="font-semibold mr-1.5 min-w-32">Điều: </div>
            <div className="flex justify-center items-center bg-gray-400 p-1 rounded-sm shadow-md">
              {data.term.name}
            </div>
          </div>
          <div className="flex justify-start items-center mb-2 w-full">
            <div className="font-semibold mr-1.5 min-w-32">Ngày bắt đầu: </div>
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
                  value={convertTimestampToDateTime(data.startDate)}
                  disabled
                />
              </div>
            </div>
          </div>
          <div className="flex justify-start items-center mb-2 w-full">
            <div className="font-semibold mr-1.5 min-w-32">Ngày kết thúc: </div>
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
                  value={convertTimestampToDateTime(data.endDate)}
                  disabled
                />
              </div>
            </div>
          </div>
        </div>

        <div className="w-10/11 h-0.5 bg-gray-300 mt-5"></div>
        <div class="flex justify-between items-center mt-4 mx-2">
          <div class="flex justify-between items-center">
            <MdOutlineThumbUpOffAlt />
            <span class="ml-1 text-gray-500  font-light">8</span>
          </div>
          <div class="ml-1 text-gray-500 font-light">33 comments</div>
        </div>
        <div className="h-12 max-w-full mt-2 mx-1 flex justify-start items-center">
          <button className="bg-gray-300 w-9 h-9 mr-4 rounded-full flex justify-center items-center">
            <FaThumbsUp />
          </button>
          <Link className="bg-gray-300 w-28 h-8 rounded-md text-decoration-none flex justify-center items-center">
            <FaCommentDots className="mr-1" />
            Bình luận
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ActivityDetail;
