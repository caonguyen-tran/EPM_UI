import { Link } from "react-router-dom";

const Class = () => {
    const classes = [
        [
            {
                "id": 1,
                "name": "DH20CS01"
            },
            {
                "id": 1,
                "name": "Công nghệ thông tin",
                "createdDate": 844189200000
            }
        ],
        [
            {
                "id": 2,
                "name": "DH20CS02"
            },
            {
                "id": 1,
                "name": "Công nghệ thông tin",
                "createdDate": 844189200000
            }
        ],
        [
            {
                "id": 3,
                "name": "DH21CS01"
            },
            {
                "id": 1,
                "name": "Công nghệ thông tin",
                "createdDate": 844189200000
            }
        ],
        [
            {
                "id": 4,
                "name": "DH21CS02"
            },
            {
                "id": 1,
                "name": "Công nghệ thông tin",
                "createdDate": 844189200000
            }
        ],
        [
            {
                "id": 5,
                "name": "DH21IT01"
            },
            {
                "id": 1,
                "name": "Công nghệ thông tin",
                "createdDate": 844189200000
            }
        ],
        [
            {
                "id": 6,
                "name": "DH21IT02"
            },
            {
                "id": 1,
                "name": "Công nghệ thông tin",
                "createdDate": 844189200000
            }
        ],
        [
            {
                "id": 7,
                "name": "DH22CS01"
            },
            {
                "id": 1,
                "name": "Công nghệ thông tin",
                "createdDate": 844189200000
            }
        ],
        [
            {
                "id": 8,
                "name": "DH22CS02"
            },
            {
                "id": 1,
                "name": "Công nghệ thông tin",
                "createdDate": 844189200000
            }
        ],
        [
            {
                "id": 9,
                "name": "DH22IT01"
            },
            {
                "id": 1,
                "name": "Công nghệ thông tin",
                "createdDate": 844189200000
            }
        ],
        [
            {
                "id": 10,
                "name": "DH22IT02"
            },
            {
                "id": 1,
                "name": "Công nghệ thông tin",
                "createdDate": 844189200000
            }
        ]
    ]

    return (
        <>
            <div className="bg-blue-100 text-gray-700 text-center py-4 rounded-lg shadow mb-6">
            <h1 className="text-3xl font-bold">Danh sách các lớp học</h1>
            </div>
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg min-h-lvh z-0 mt-2">
                <table class="w-full text-sm text-left rtl:text-right text-gray-700 dark:text-gray-400">
                    <thead class="text-xs text-white uppercase bg-stone-700">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                ID
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Tên lớp
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Khoa
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Xem danh sách
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {classes.map((element) => (
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th
                                    scope="row"
                                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                                >
                                    {element[0].id}
                                </th>
                                <td class="px-6 py-4">{element[0].name}</td>
                                <td className="px-6 py-4">
                                    {element[1].name}
                                </td>
                                <td class="px-6 py-4">
                                    <Link
                                        to="/assistant/class/1"
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
export default Class;