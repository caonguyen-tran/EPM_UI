import React from "react";
import { Link } from "react-router-dom";

const MissingReportList = () => {
    const data = [
        [
            {
                "id": 4,
                "proofJoining": "https://res.cloudinary.com/dndakokcz/image/upload/v1718266010/akc0kjkphseqp1jxyedd.png",
                "status": "Pending",
                "createdDate": 1718266008000,
                "note": "test create missing report",
                "file": null
            },
            {
                "id": 4,
                "name": "TẬP HUẤN NCKH CHỦ ĐỀ \"PHƯƠNG PHÁP NGHIÊN CỨU KHOA HỌC\"",
                "startDate": 1715824800000,
                "endDate": 1715911200000,
                "description": "Hoạt động được tổ chức cho tất cả sinh viên trường Đại Học Mở thành phố Hồ Chí Minh",
                "active": true,
                "image": "https://res.cloudinary.com/dndakokcz/image/upload/v1716640766/lflqzauyyavx8jqoenwl.jpg",
                "slots": 500,
                "close": null,
                "file": null
            }
        ],
        [
            {
                "id": 5,
                "proofJoining": "https://res.cloudinary.com/dndakokcz/image/upload/v1718266010/akc0kjkphseqp1jxyedd.png",
                "status": null,
                "createdDate": 1718445237000,
                "note": null,
                "file": null
            },
            {
                "id": 7,
                "name": "Chuyên đề DevOps và MLOps",
                "startDate": 1717646400000,
                "endDate": 1717732800000,
                "description": "Chuyên đề DevOps và MLOps dành cho sinh viên Khoa Công Nghệ Thông Tin trường Đại học Mở thành phố Hồ Chí Minh",
                "active": null,
                "image": "https://res.cloudinary.com/dndakokcz/image/upload/v1716648743/nrk46d6vwzsflvtd0iih.jpg",
                "slots": 60,
                "close": null,
                "file": null
            }
        ]
    ];

    // const handleFilter = (semesterId, yearId) => {
    //     let filtered = data;

    //     if (semesterId) {
    //         filtered = filtered.filter(report => report[1].id === parseInt(semesterId));
    //     }

    //     if (yearId) {
    //         filtered = filtered.filter(report => report[1].description.includes(yearId));
    //     }

    // };


    const convertTimestampToDatetime = (timestamp) => {
        let datetime = new Date(timestamp)
        return `${datetime.getDate()}/${datetime.getMonth()}/${datetime.getFullYear()} - ${datetime.getHours()}:${datetime.getMinutes()}`
    };

    return (
        <>
            <div className="bg-blue-100 text-gray-700 text-center py-4 rounded-lg shadow mb-6">
                <h1 className="text-3xl font-bold">Danh sách báo thiếu</h1>
            </div>
            {/* <FilterComponent semesters={semesters} /> */}
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg min-h-lvh z-0 mt-2">
                <table class="w-full text-sm text-left rtl:text-right text-gray-700 dark:text-gray-400">
                    <thead class="text-xs text-white uppercase bg-stone-700">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                ID
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
                        {data.map((element) => (
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th
                                    scope="row"
                                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                                >
                                    {element[0].id}
                                </th>
                                <td class="px-6 py-4">{element[0].status}</td>
                                <td class="px-6 py-4">{convertTimestampToDatetime(element[0].createdDate)}</td>
                                <td className="px-6 py-4">{element[0].note}</td>
                                <td className="px-6 py-4">{element[1].name}</td>
                                <td class="px-6 py-4">
                                    <Link
                                        to="/assistant/missing-report/detail/1"
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