import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authApi, endpoints } from "../../../apis/API";
import FilterComponent from "../../../common/FilterComponent";
import { getDatetimeDetail } from "../../../utils/Common";

const AssistantActivityList = () => {

    const [activities, setActivities] = useState([]);
    const [semesters, setSemesters] = useState([]);
    const [id, setId] = useState(null);
    const [year, setYear] = useState(null);
    const nav = useNavigate();

    useEffect(() => {
        loadSemesters();
    }, []);

    const loadSemesters = async () => {
        try {
            const auth = await authApi();
            const res = await auth.get(endpoints['semesters']);
            setSemesters(res.data);
        } catch (ex) {
            console.error(ex);
        }
    };

    const loadActivities = async (semesterId, yearStudy) => {
        const params = {};

        if (yearStudy) {
            params.yearStudy = yearStudy;
        } else if (semesterId) {
            params.semesterId = semesterId;
        }

        console.log("Request params:", params);

        try {
            const auth = await authApi();
            const res = await auth.get(endpoints['allActivitiesBySemester'], { params });

            if (Array.isArray(res.data)) {
                setActivities(res.data);
            } else {
                setActivities([]);
            }
        } catch (ex) {
            console.error(ex);
            setActivities([]);
        }
    };

    useEffect(() => {
        if (id || year) {
            loadActivities(id, year);
        }
    }, [id, year]);

    const handleFilter = (semesterId, yearStudy) => {
        console.log("Selected Semester ID:", semesterId);
        console.log("Selected Year:", yearStudy);
        setId(semesterId);
        setYear(yearStudy);

        return new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, 1000);
        });
    };

    const create = () => {
        nav('/assistant/activity/create');
    }

    return (
        <>
            <div className="bg-blue-100 text-gray-700 text-center py-4 rounded-lg shadow mb-6">
                <h1 className="text-3xl font-bold">Danh sách các hoạt động</h1>
                <p className="mt-2 text-lg">Các hoạt động mới nhất được tổ chức bởi trường Đại Học Mở thành phố Hồ Chí Minh</p>
            </div>
            <button
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
                onClick={create}
            >
                Tạo hoạt động mới
            </button>
            <div className="container mx-auto mt-4 p-4">
                <h1 className="text-2xl font-bold mb-4 text-center">Chọn học kỳ hoặc năm học</h1>
                <FilterComponent onFilter={handleFilter} semesters={semesters} />
            </div>
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg min-h-lvh z-0 mt-2">
                <table class="w-full text-sm text-left rtl:text-right text-gray-700 dark:text-gray-400">
                    <thead class="text-xs text-white uppercase bg-stone-700">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                ID
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
                                Active
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Close
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Điều
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Học kỳ
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Khoa
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Chi tiết
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {activities.map((element) => (
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th
                                    scope="row"
                                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                                >
                                    {element[0].id}
                                </th>
                                <td class="px-6 py-4">{element[0].name}</td>
                                <td class="px-6 py-4">{getDatetimeDetail(element[0].startDate)}</td>
                                <td class="px-6 py-4">{getDatetimeDetail(element[0].endDate)}</td>
                                <td className="px-6 py-4">
                                    {element[0].active === 1
                                        ? "Đang diễn ra"
                                        : element[0].active === 0
                                            ? "Đã kết thúc"
                                            : "Chưa xác định"}
                                </td>
                                <td className="px-6 py-4">
                                    {element[0].close === 1
                                        ? "Đang mở đăng ký"
                                        : element[0].close === 0
                                            ? "Đã đóng đăng ký"
                                            : "Chưa xác định"}
                                </td>

                                <td class="px-6 py-4">{element[1].name}</td>
                                <td class="px-6 py-4">{element[2].name}</td>
                                <td class="px-6 py-4">{element[3].name}</td>
                                <td class="px-6 py-4">
                                    <Link
                                        to={`/assistant/activity/detail/${element[0].id}`}
                                        href="#"
                                        class="text-decoration-none font-medium hover:text-rose-600"
                                    >
                                        Chi tiết
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

export default AssistantActivityList;