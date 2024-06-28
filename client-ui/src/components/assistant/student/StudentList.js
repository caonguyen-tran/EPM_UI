import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { authApi, endpoints } from "../../../apis/API";
import { getDatetimeDetail } from "../../../utils/Common";

const StudentList = () => {
    const { id } = useParams();

    const [classes, setClasses] = useState([]);

    const loadClass = async () => {
        try {
            let res = await authApi().get(endpoints['getClassById'](id));
            setClasses(res.data);
        } catch (ex){
            console.error(ex)
        }
    }

    useEffect(()=>{
        loadClass();
        loadStudents();
    }, [id])

    const [students, setStudents] = useState([]);

    const loadStudents = async () => {
        try {
            let res = await authApi().get(endpoints['getStudentsByClass'](id));
            setStudents(res.data);
        } catch (ex){
            console.error(ex)
        }
    }

    return (
        <>
            <div className="bg-blue-100 text-gray-700 text-center py-4 rounded-lg shadow mb-6">
                <h1 className="text-3xl font-bold">Danh sách sinh viên lớp {classes.name}</h1>
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
                                <td class="px-6 py-4">{getDatetimeDetail(element[0].dayOfBirth)}</td>
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