import { Link } from "react-router-dom";
import { getDatetimeDetail } from "../../utils/Common";
import { useEffect, useState } from "react";
import { authApi, endpoints } from "../../apis/API";

const data = {
  code: 1000,
  status: "SUCCESS",
  result: [
    [
      {
        id: 4,
        dateRegister: 1716648529000,
        rollup: false,
        proofJoining: null,
        note: null,
        accept: false,
        file: null,
      },
      {
        id: 3,
        username: "totrongnhan2003",
        password:
          "$2a$10$H90rzJposZji3HH9vVvh/OrhF/2hC0ElvwZV9UpPVvtuqWkLs8aLi",
        avatar:
          "https://res.cloudinary.com/dndakokcz/image/upload/v1716644647/zcicm5gbqbyt6bkts7nv.jpg",
        active: true,
        verificationCode: null,
        file: null,
      },
      {
        id: 5,
        name: "Hội thảo định hướng nghiên cứu khoa học sinh viên khoa KTKT",
        startDate: 1714527000000,
        endDate: 1714615200000,
        description: "Hoạt động được khoa Kinh tế tổ chức",
        active: true,
        image:
          "https://res.cloudinary.com/dndakokcz/image/upload/v1716640861/misps2f1nubwpx7wmwnk.jpg",
        slots: 100,
        close: false,
        file: null,
      },
      {
        id: 3,
        name: "Điều 3",
        description:
          "Đánh giá về ý thức và kết quả tham gia các hoạt động chính trị - xã hội, văn hóa, văn nghệ, thể thao, phòng chống các tệ nạn xã hội.",
      },
    ],
    [
      {
        id: 6,
        dateRegister: 1716648552000,
        rollup: false,
        proofJoining: null,
        note: null,
        accept: false,
        file: null,
      },
      {
        id: 3,
        username: "totrongnhan2003",
        password:
          "$2a$10$H90rzJposZji3HH9vVvh/OrhF/2hC0ElvwZV9UpPVvtuqWkLs8aLi",
        avatar:
          "https://res.cloudinary.com/dndakokcz/image/upload/v1716644647/zcicm5gbqbyt6bkts7nv.jpg",
        active: true,
        verificationCode: null,
        file: null,
      },
      {
        id: 6,
        name: "Cuộc thi Giảng Đường Pháp Luật",
        startDate: 1717034400000,
        endDate: 1717120800000,
        description:
          "Hoạt động được tổ chức cho tất cả sinh viên trường Đại học Mở thành phố Hồ Chí Minh có am hiểu về luật",
        active: true,
        image:
          "https://res.cloudinary.com/dndakokcz/image/upload/v1716640972/otssir8faxwboqrufwft.jpg",
        slots: 150,
        close: false,
        file: null,
      },
      {
        id: 3,
        name: "Điều 3",
        description:
          "Đánh giá về ý thức và kết quả tham gia các hoạt động chính trị - xã hội, văn hóa, văn nghệ, thể thao, phòng chống các tệ nạn xã hội.",
      },
    ],
    [
      {
        id: 9,
        dateRegister: 1716648895000,
        rollup: true,
        proofJoining:
          "https://res.cloudinary.com/dndakokcz/image/upload/v1716640766/lflqzauyyavx8jqoenwl.jpg",
        note: null,
        accept: true,
        file: null,
      },
      {
        id: 3,
        username: "totrongnhan2003",
        password:
          "$2a$10$H90rzJposZji3HH9vVvh/OrhF/2hC0ElvwZV9UpPVvtuqWkLs8aLi",
        avatar:
          "https://res.cloudinary.com/dndakokcz/image/upload/v1716644647/zcicm5gbqbyt6bkts7nv.jpg",
        active: true,
        verificationCode: null,
        file: null,
      },
      {
        id: 8,
        name: "Chuyên đề Tiny Machine Learning",
        startDate: 1717990200000,
        endDate: 1718076600000,
        description:
          "Tiny Machine Learning được tổ chức bởi khoa Công Nghệ Thông Tin",
        active: true,
        image:
          "https://res.cloudinary.com/dndakokcz/image/upload/v1716648812/yhxzwbkqbhilw8uylbov.jpg",
        slots: 60,
        close: false,
        file: null,
      },
      {
        id: 3,
        name: "Điều 3",
        description:
          "Đánh giá về ý thức và kết quả tham gia các hoạt động chính trị - xã hội, văn hóa, văn nghệ, thể thao, phòng chống các tệ nạn xã hội.",
      },
    ],
    [
      {
        id: 26,
        dateRegister: 1718819266000,
        rollup: false,
        proofJoining: null,
        note: null,
        accept: false,
        file: null,
      },
      {
        id: 3,
        username: "totrongnhan2003",
        password:
          "$2a$10$H90rzJposZji3HH9vVvh/OrhF/2hC0ElvwZV9UpPVvtuqWkLs8aLi",
        avatar:
          "https://res.cloudinary.com/dndakokcz/image/upload/v1716644647/zcicm5gbqbyt6bkts7nv.jpg",
        active: true,
        verificationCode: null,
        file: null,
      },
      {
        id: 12,
        name: "Báo cáo chuyên đề kỹ thuật phần mềm",
        startDate: 1716688800000,
        endDate: 1716656400000,
        description:
          "BÁO CÁO CHUYÊN ĐỀ VỀ KỸ THUẬT PHẦN MỀM\r\nBCV: Nguyễn Chí Cường - một Software Architect có uy tín từ Công ty Cadena.",
        active: true,
        image:
          "https://res.cloudinary.com/dndakokcz/image/upload/v1718266872/m5rzfwum0e06hpmoncxc.jpg",
        slots: 60,
        close: false,
        file: null,
      },
      {
        id: 1,
        name: "Điều 1",
        description: "Đánh giá về ý thức học tập",
      },
    ],
  ],
};

const process = data.result;
const RegisterSite = () => {
  const [register, setRegister] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      let res = await authApi().get(endpoints['scoreStudentResult'])
      console.log(res.data)
    }

    fetchData()
  }, [])
  return (
    <>
      <figure class="max-w-screen-md mx-auto text-center py-2">
        <svg
          class="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 18 14"
        >
          <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
        </svg>
        <blockquote>
          <p class="text-2xl italic font-medium text-gray-900">
            "Muốn học tập có kết quả tốt thì phải có thái độ đúng và phương pháp
            đúng"
          </p>
        </blockquote>
        <figcaption class="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
          <img
            class="w-6 h-6 rounded-full"
            src="https://res.cloudinary.com/dndakokcz/image/upload/v1718824455/hbkygm1drmjfojmim4n2.jpg"
            alt="test"
          />
          <div class="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
            <cite class="pe-3 font-medium text-gray-900">
              Chủ tịch Hồ Chí Minh
            </cite>
            <cite class="ps-3 text-sm text-gray-500">Bác kính yêu</cite>
          </div>
        </figcaption>
      </figure>

      <div class="relative overflow-x-auto shadow-md sm:rounded-lg min-h-lvh z-0 mt-2">
        <table class="w-full text-sm text-left rtl:text-right text-gray-700 dark:text-gray-400">
          <thead class="text-xs text-white uppercase bg-stone-700">
            <tr>
              <th scope="col" class="px-6 py-3">
                ID
              </th>
              <th scope="col" class="px-6 py-3">
                Ngày đăng ký
              </th>
              <th scope="col" class="px-6 py-3">
                Tên hoạt động
              </th>
              <th scope="col" class="px-6 py-3">
                Ngày bắt đầu
              </th>
              <th scope="col" class="px-6 py-3">
                Ngày kết thúc
              </th>
              <th scope="col" class="px-6 py-3">
                Số lượng tham gia
              </th>
              <th scope="col" class="px-6 py-3">
                Điều
              </th>
              <th scope="col" class="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {process.map((element) => (
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  {element[0].id}
                </th>
                <td class="px-6 py-4">{getDatetimeDetail(element[0].dateRegister)}</td>
                <td class="px-6 py-4">{element[2].name}</td>
                <td class="px-6 py-4">{getDatetimeDetail(element[2].startDate)}</td>
                <td class="px-6 py-4">
                  {getDatetimeDetail(element[2].endDate)}
                </td>
                <td class="px-6 py-4 text-center">{element[2].slots}</td>
                <td class="px-6 py-4">{element[3].name}</td>
                <td class="px-6 py-4">
                  <Link
                    href="#"
                    class="text-decoration-none font-medium hover:text-rose-600"
                  >
                    Xóa
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default RegisterSite;
