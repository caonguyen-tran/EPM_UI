import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { authApi, endpoints } from "../../../apis/API";
import FilterComponent from "../../../common/FilterComponent";

const MissingReportList = () => {

    const [missingReport, setMissingReport] = useState([]);
    const [semesters, setSemesters] = useState([]);
    const [id, setId] = useState(null);
    const [year, setYear] = useState(null);

    const loadMissingReports = async (semesterId, yearStudy) => {
        const params = {};

        if (yearStudy) {
            params.yearStudy = yearStudy;
        } else if (semesterId) {
            params.semesterId = semesterId;
        }

        console.log("Request params:", params);

        try {
            const auth = await authApi();
            const res = await auth.get(endpoints['getMissingReport'], { params });

            if (Array.isArray(res.data)) {
                setMissingReport(res.data);
            } else {
                setMissingReport([]);
            }
        } catch (ex) {
            console.error(ex);
            setMissingReport([]);
        }
    };

    useEffect(() => {
        loadSemesters();
    }, []);

    useEffect(() => {
        if (id || year) {
            loadMissingReports(id, year);
        }
    }, [id, year]);

    const loadSemesters = async () => {
        try {
            const auth = await authApi();
            const res = await auth.get(endpoints['semesters']);
            setSemesters(res.data);
        } catch (ex) {
            console.error(ex);
        }
    };

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



    const convertTimestampToDatetime = (timestamp) => {
        let datetime = new Date(timestamp)
        return `${datetime.getDate()}/${datetime.getMonth()}/${datetime.getFullYear()} - ${datetime.getHours()}:${datetime.getMinutes()}`
    };

    return (
        <>
            <div className="bg-blue-100 text-gray-700 text-center py-4 rounded-lg shadow mb-6">
                <h1 className="text-3xl font-bold">Danh sách báo thiếu</h1>
            </div>
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
                                Họ tên người tạo
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Lớp
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Khoa
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Trạng thái
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Ngày tạo
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Note
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Tên hoạt động
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Chi tiết
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
                                    {element[0].id}
                                </th>
                                <td class="px-6 py-4">{element[2].lastname} {element[2].firstname}</td>
                                <td class="px-6 py-4">{element[3].name}</td>
                                <td class="px-6 py-4">{element[4].name}</td>
                                <td class="px-6 py-4">{element[0].status}</td>
                                <td class="px-6 py-4">{convertTimestampToDatetime(element[0].createdDate)}</td>
                                <td className="px-6 py-4">{element[0].note}</td>
                                <td className="px-6 py-4">{element[1].name}</td>
                                <td class="px-6 py-4">
                                    <Link
                                        to={`/assistant/missing-report/detail/${element[0].id}`}
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
}

export default MissingReportList;