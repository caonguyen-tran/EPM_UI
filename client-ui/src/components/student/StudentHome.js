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

function StudentHome() {
  return (
    <div className="w-11/12 min-h-lvh bg-gray-200 m-auto flex flex-col justify-start items-center py-5 rounded-sm">
      <div class="px-5 py-4 bg-white shadow rounded-lg w-5/6">
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
        <p class="text-gray-800 leading-snug md:leading-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className="w-4/5 h-16 flex justify-start items-center bg-red-200 mb-2 px-2">
          
        </div>
        <img src={data.image} alt="source_image" className="w-full" />
        <div className="w-10/11 h-0.5 bg-gray-300 mt-5"></div>
        <div class="flex justify-between items-center mt-4">
          <div class="flex ">
            <span class="ml-1 text-gray-500 dark:text-gray-400  font-light">
              8
            </span>
          </div>
          <div class="ml-1 text-gray-500 dark:text-gray-400 font-light">
            33 comments
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentHome;
