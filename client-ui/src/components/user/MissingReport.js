import { Link } from "react-router-dom";
import { getDatetimeDetail } from "../../utils/Common";
import TableLoading from "../../common/TableLoading";
import { useEffect, useState } from "react";
import { authApi, endpoints } from "../../apis/API";

const MissingReport = () => {
  const [loading, setLoading] = useState(false);
  const [missingReport, setMissingReport] = useState([]);

  const loadMissingReport = async () => {
    try {
      setLoading(true);
      let res = await authApi().get(endpoints["getListMissingReportByUser"](6));
      console.log(res.data.result);
      setMissingReport(res.data.result);
      setLoading(false);
    } catch (ex) {
      console.log(ex);
    }
  };
  useEffect(() => {
    loadMissingReport();
  }, []);

  return (
    <>
      <figure class="w-full mx-auto text-center py-2 mt-2">
        <div className="w-full mb-5">
          <h3 class="w-full text-left mb-4 text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-5xl dark:text-white">
            Danh sách báo thiếu{" "}
            <Link to="/" class="text-blue-600 dark:text-blue-500">
              hoạt động.
            </Link>
          </h3>
        </div>
        <div></div>
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
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg min-h-96 z-0 mt-2">
        {loading ? (
          <TableLoading />
        ) : missingReport.length === 0 ? (
          <div className="w-full h-4/5 flex text-center justify-center mt-10">
            <h3>Bạn chưa báo thiếu hoạt động nào!</h3>
          </div>
        ) : (
          <table class="w-full text-sm text-left rtl:text-right text-gray-700 dark:text-gray-400">
            <thead class="text-xs text-white uppercase bg-stone-700">
              <tr>
                <th scope="col" class="px-6 py-3">
                  ID
                </th>
                <th scope="col" class="px-6 py-3">
                  Ngày tạo báo thiếu
                </th>
                <th scope="col" class="px-6 py-3">
                  Tên hoạt động
                </th>
                <th scope="col" class="px-6 py-3">
                  Bằng chứng tham gia
                </th>
                <th scope="col" class="px-6 py-3">
                  Trạng thái
                </th>
                <th scope="col" class="px-6 py-3">
                  Ghi chú
                </th>
                <th scope="col" class="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {missingReport.map((element) => (
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    {element.id}
                  </th>
                  <td class="px-6 py-4">
                    {getDatetimeDetail(element.createdDate)}
                  </td>
                  <td class="px-6 py-4">{element.activity.name}</td>
                  <td class="px-6 py-4">
                    <img
                      alt="proofjoining"
                      src={element.proofJoining}
                      className="h-20 w-11"
                    />
                  </td>
                  <td class="px-6 py-4">
                    <span class="bg-green-500 text-white font-bold text-xs me-2 px-2.5 py-0.5 rounded-full shadow-lg border border-black">
                      Pending
                    </span>
                  </td>
                  <td class="px-6 py-4">{element.note}</td>
                  <td className="flex justify-center items-center h-full mt-10">
                    <button
                      href="#"
                      class="text-decoration-none font-medium text-white bg-rose-700 rounded-sm p-1"
                    >
                      Hủy
                    </button>
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

export default MissingReport;
