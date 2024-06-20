import { Link } from "react-router-dom";

const AssistantActivityList = () => {

    const data = [
        [
            {
                id: 4,
                name: "TẬP HUẤN NCKH CHỦ ĐỀ PHƯƠNG PHÁP NGHIÊN CỨU KHOA HỌC",
                startDate: 1715824800000,
                endDate: 1715911200000,
                description: "Hoạt động được tổ chức cho tất cả sinh viên trường Đại Học Mở thành phố Hồ Chí Minh",
                active: true,
                image: "https://res.cloudinary.com/dndakokcz/image/upload/v1716640766/lflqzauyyavx8jqoenwl.jpg",
                slots: 500,
                close: null,
                file: null,
            },
            {
                id: 3,
                name: "Điều 3",
                description:
                    "Đánh giá về ý thức và kết quả tham gia các hoạt động chính trị - xã hội, văn hóa, văn nghệ, thể thao, phòng chống các tệ nạn xã hội.",
            },
            {
                id: 5,
                name: "Kì 2",
                description: "Kì 2 năm 2024",
                yearStudy: "2024",
            },
            {
                id: 2,
                name: "Công nghệ sinh học",
                createdDate: 847645200000,
            },
        ],
        [
            {
                id: 7,
                name: "Chuyên đề DevOps và MLOps",
                startDate: 1717646400000,
                endDate: 1717732800000,
                description:
                    "Chuyên đề DevOps và MLOps dành cho sinh viên Khoa Công Nghệ Thông Tin trường Đại học Mở thành phố Hồ Chí Minh",
                active: 1,
                image: "https://res.cloudinary.com/dndakokcz/image/upload/v1716648743/nrk46d6vwzsflvtd0iih.jpg",
                slots: 60,
                close: 1,
                file: null,
            },
            {
                id: 3,
                name: "Điều 3",
                description:
                    "Đánh giá về ý thức và kết quả tham gia các hoạt động chính trị - xã hội, văn hóa, văn nghệ, thể thao, phòng chống các tệ nạn xã hội.",
            },
            {
                id: 6,
                name: "Kì 3",
                description: "Kì 3 năm 2024",
                yearStudy: "2024",
            },
            {
                id: 1,
                name: "Công nghệ thông tin",
                createdDate: 844189200000,
            },
        ],
        [
            {
                id: 8,
                name: "Chuyên đề Tiny Machine Learning",
                startDate: 1717990200000,
                endDate: 1718076600000,
                description: "Tiny Machine Learning được tổ chức bởi khoa Công Nghệ Thông Tin",
                active: null,
                image: "https://res.cloudinary.com/dndakokcz/image/upload/v1716648812/yhxzwbkqbhilw8uylbov.jpg",
                slots: 60,
                close: null,
                file: null,
            },
            {
                id: 3,
                name: "Điều 3",
                description:
                    "Đánh giá về ý thức và kết quả tham gia các hoạt động chính trị - xã hội, văn hóa, văn nghệ, thể thao, phòng chống các tệ nạn xã hội.",
            },
            {
                id: 6,
                name: "Kì 3",
                description: "Kì 3 năm 2024",
                yearStudy: "2024",
            },
            {
                id: 1,
                name: "Công nghệ thông tin",
                createdDate: 844189200000,
            },
        ],
        [
            {
                id: 9,
                name:
                    "Buổi Internship Orientation dành cho sinh viên năm 3, năm 4 chuyên ngành Tiếng Anh Thương Mại chuẩn bị đi thực tập",
                startDate: 1718163000000,
                endDate: 1718249400000,
                description: "Hoạt động tổ chức cho sinh viên chuẩn bị thực tập",
                active: true,
                image: "https://res.cloudinary.com/dndakokcz/image/upload/v1716648812/yhxzwbkqbhilw8uylbov.jpg",
                slots: 60,
                close: false,
                file: null,
            },
            {
                id: 3,
                name: "Điều 3",
                description: "Đánh giá về ý thức và kết quả tham gia các hoạt động chính trị - xã hội, văn hóa, văn nghệ, thể thao, phòng chống các tệ nạn xã hội.",
            },
            {
                id: 9,
                name: "Kì 3",
                description: "Kì 3 năm 2025",
                yearStudy: "2025",
            },
            {
                id: 1,
                name: "Công nghệ thông tin",
                createdDate: 844189200000,
            },
        ],
    ];

    const convertTimestampToDatetime = (timestamp) => {
        let datetime = new Date(timestamp)
        return `${datetime.getDate()}/${datetime.getMonth()}/${datetime.getFullYear()} - ${datetime.getHours()}:${datetime.getMinutes()}`
    };
    return (
        <>
            <div className="bg-blue-100 text-gray-700 text-center py-4 rounded-lg shadow mb-6">
                <h1 className="text-3xl font-bold">Danh sách các hoạt động</h1>
                <p className="mt-2 text-lg">Các hoạt động mới nhất được tổ chức bởi trường Đại Học Mở thành phố Hồ Chí Minh</p>
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
                        {data.map((element) => (
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th
                                    scope="row"
                                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                                >
                                    {element[0].id}
                                </th>
                                <td class="px-6 py-4">{element[0].name}</td>
                                <td class="px-6 py-4">{convertTimestampToDatetime(element[0].startDate)}</td>
                                <td class="px-6 py-4">{convertTimestampToDatetime(element[0].endDate)}</td>
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
                                        to="/assistant/activity/detail/1"
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