import { Link } from "react-router-dom";

const StudentList = () => {
    const classes = "DH21CS01";
    const students = [
        [
            {
                "id": 1,
                "firstname": "Nhân",
                "lastname": "Tô Trọng",
                "gender": "Nam",
                "dayOfBirth": 1063731600000,
                "phoneNumber": "0378461282",
                "address": "992 Phạm Văn Đồng, phường 8, quận Gò Vấp",
                "email": "nguyenvana@example.com"
            },
            1
        ],
        [
            {
                "id": 2,
                "firstname": "Nguyên",
                "lastname": "Trần Cao",
                "gender": "Nam",
                "dayOfBirth": 1068397200000,
                "phoneNumber": "0374812888",
                "address": "153/35 Lê Văn Thọ, phường 8, quận Gò Vấp",
                "email": "tranthib@example.com"
            },
            4
        ],
        [
            {
                "id": 3,
                "firstname": "Linh",
                "lastname": "Phạm Thanh",
                "gender": "Nữ",
                "dayOfBirth": 1015866000000,
                "phoneNumber": "0379847287",
                "address": "89/2 Hoàng Minh Giám, phường 6, quận Bình Thạnh",
                "email": ""
            },
            5
        ],
        [
            {
                "id": 4,
                "firstname": "Lâm",
                "lastname": "Hoàng Anh",
                "gender": "Nam",
                "dayOfBirth": 1020531600000,
                "phoneNumber": "0374827238",
                "address": "324 Lê Đức Thọ, phường 11, quận Gò Vấp",
                "email": ""
            },
            6
        ],
        [
            {
                "id": 6,
                "firstname": "Nguyên",
                "lastname": "Nguyễn Cao",
                "gender": "Nam",
                "dayOfBirth": 1068310800000,
                "phoneNumber": "0836824662",
                "address": "21 Phan Văn Trị, phường 1, quận Bình Thạnh",
                "email": "2151013063nhan@ou.edu.vn"
            },
            20
        ]
    ]

    const convertTimestampToDatetime = (timestamp) => {
        let datetime = new Date(timestamp)
        return `${datetime.getDate()}/${datetime.getMonth()}/${datetime.getFullYear()}`
    };

    return (
        <>
            <div className="bg-blue-100 text-gray-700 text-center py-4 rounded-lg shadow mb-6">
                <h1 className="text-3xl font-bold">Danh sách sinh viên lớp {classes}</h1>
            </div>
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg min-h-lvh z-0 mt-2">
                <table class="w-full text-sm text-left rtl:text-right text-gray-700 dark:text-gray-400">
                    <thead class="text-xs text-white uppercase bg-stone-700">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                ID
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Fullname
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Gender
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Day of Birth
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Phone number
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Address
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Email
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Thành tích ngoại khóa
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((element) => (
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th
                                    scope="row"
                                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                                >
                                    {element[0].id}
                                </th>
                                <td class="px-6 py-4">{element[0].lastname} {element[0].firstname}</td>
                                <td class="px-6 py-4">{element[0].gender}</td>
                                <td class="px-6 py-4">{convertTimestampToDatetime(element[0].dayOfBirth)}</td>
                                <td className="px-6 py-4">{element[0].phoneNumber}</td>
                                <td className="px-6 py-4">{element[0].address}</td>
                                <td className="px-6 py-4">{element[0].email}</td>
                                <td class="px-6 py-4">
                                    <Link
                                        to="/assistant/class/1/student/1"
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

export default StudentList;