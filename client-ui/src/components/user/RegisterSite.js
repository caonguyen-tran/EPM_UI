import { Link } from "react-router-dom";
import { getDatetimeDetail } from "../../utils/Common";
import { useEffect, useState } from "react";
import { authApi, endpoints } from "../../apis/API";
import TableLoading from "../../common/TableLoading";


const RegisterSite = () => {
  const [register, setRegister] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      let res = await authApi().get(endpoints["personalRegister"]);
      setRegister(res.data.result);
      setLoading(false);
    };

    fetchData();
  }, []);
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
        {loading ? (
          <TableLoading />
        ) : register.length === 0 ? (
          <div className="w-full h-4/5 flex text-center">Ban chua co dang ky hoat dong nao ?</div>
        ) : (
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
              {register.map((element) => (
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    {element[0].id}
                  </th>
                  <td class="px-6 py-4">
                    {getDatetimeDetail(element[0].dateRegister)}
                  </td>
                  <td class="px-6 py-4">{element[1].name}</td>
                  <td class="px-6 py-4">
                    {getDatetimeDetail(element[1].startDate)}
                  </td>
                  <td class="px-6 py-4">
                    {getDatetimeDetail(element[1].endDate)}
                  </td>
                  <td class="px-6 py-4 text-center">{element[2].slots}</td>
                  <td class="px-6 py-4">{element[2].name}</td>
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
        )}
      </div>
    </>
  );
};

export default RegisterSite;
