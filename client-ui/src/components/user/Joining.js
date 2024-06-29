import { Link } from "react-router-dom";
import { getDatetimeDetail } from "../../utils/Common";
import TableLoading from "../../common/TableLoading";
import { useEffect, useState } from "react";
import { authApi, endpoints } from "../../apis/API";

const Joining = () => {
  const [loading, setLoading] = useState(false);
  const [joining, setJoining] = useState([]);

  const loadJoining = async () => {
    try {
      setLoading(true);
      let res = await authApi().get(endpoints["getJoiningActivity"](6));
      setJoining(res.data.result);
      setLoading(false);
    } catch (ex) {
      console.log(ex);
    }
  };

  useEffect(() => {
    loadJoining();
  }, []);

  return (
    <>
      <figure class="w-full mx-auto text-center py-2 mt-2">
        <div className="w-full mb-5">
          <h1 class="w-full text-left mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-5xl dark:text-white">
            Danh sách các{" "}
            <Link to="/" class="text-blue-600 dark:text-blue-500">
              hoạt động
            </Link>{" "}
            đang tham gia.
          </h1>
        </div>
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
            "If you can't make it good, at least make it look good"
          </p>
        </blockquote>
        <figcaption class="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
          <img
            class="w-6 h-6 rounded-full"
            src="https://res.cloudinary.com/dndakokcz/image/upload/v1719600815/lea3co0j6np0bzs7mdpf.webp"
            alt="test"
          />
          <div class="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
            <cite class="pe-3 font-medium text-gray-900">
              Bill Gates
            </cite>
            <cite class="ps-3 text-sm text-gray-500">CEO Microsoft 2014</cite>
          </div>
        </figcaption>
      </figure>

      <div class="relative overflow-x-auto shadow-md sm:rounded-lg min-h-96 z-0 mt-2">
        {loading ? (
          <TableLoading />
        ) : joining.length === 0 ? (
          <div className="w-full h-4/5 flex text-center justify-center mt-10">
            <h3>Bạn chưa tham gia hoạt động nào!</h3>
          </div>
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
                  Bằng chứng
                </th>
                <th scope="col" class="px-6 py-3">
                  Ghi chú
                </th>
                <th scope="col" class="px-6 py-3">
                  Trạng thái
                </th>
              </tr>
            </thead>
            <tbody>
              {joining.map((element) => (
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    {element.id}
                  </th>
                  <td class="px-6 py-4">
                    {getDatetimeDetail(element.dateRegister)}
                  </td>
                  <td class="px-6 py-4">{element.activityResponse.name}</td>
                  <td class="px-6 py-4">
                    {getDatetimeDetail(element.activityResponse.startDate)}
                  </td>
                  <td class="px-6 py-4">
                    {getDatetimeDetail(element.activityResponse.endDate)}
                  </td>
                  <td class="px-6 py-4">
                    <img
                      alt="proofjoining"
                      src={element.proofJoining}
                      className="h-20 w-11"
                    />
                  </td>
                  <td class="px-6 py-4">{element.note}</td>
                  <td class="px-6 py-4">
                  <span class="bg-green-500 text-white font-bold text-xs me-2 px-2.5 py-0.5 rounded-full shadow-lg border border-black">Pending</span>
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

export default Joining;
