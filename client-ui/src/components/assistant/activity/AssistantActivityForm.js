import { useEffect, useRef, useState } from "react";
import Loading from "../../../common/Loading";


const AssistanActivityForm = () => {

    const [formData, setFormData] = useState({
        name: '',
        startDate: '',
        endDate: '',
        description: '',
        active: 'ongoing',
        close: 'open',
        faculty: '',
        semester: '',
        term: ''
    });

    const image = useRef();
    const [faculties, setFaculties] = useState([]);
    const [semesters, setSemesters] = useState([]);
    const [terms, setTerms] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        setSemesters([
            {
                "id": 1,
                "name": "Kì 1",
                "description": "Kì 1 năm 2023",
                "yearStudy": "2023"
            },
            {
                "id": 2,
                "name": "Kì 2",
                "description": "Kì 2 năm 2023",
                "yearStudy": "2023"
            },
            {
                "id": 3,
                "name": "Kì 3",
                "description": "Kì 3 năm 2023",
                "yearStudy": "2023"
            },
            {
                "id": 4,
                "name": "Kì 1 ",
                "description": "Kì 1 năm 2024",
                "yearStudy": "2024"
            },
            {
                "id": 5,
                "name": "Kì 2",
                "description": "Kì 2 năm 2024",
                "yearStudy": "2024"
            },
            {
                "id": 6,
                "name": "Kì 3",
                "description": "Kì 3 năm 2024",
                "yearStudy": "2024"
            },
            {
                "id": 7,
                "name": "Kì 1",
                "description": "Kì 1 năm 2025",
                "yearStudy": "2025"
            },
            {
                "id": 8,
                "name": "Kì 2",
                "description": "Kì 2 năm 2025",
                "yearStudy": "2025"
            },
            {
                "id": 9,
                "name": "Kì 3",
                "description": "Kì 3 năm 2025",
                "yearStudy": "2025"
            }
        ]);
        setTerms([
            {
                "id": 1,
                "name": "Điều 1",
                "description": "Đánh giá về ý thức học tập"
            },
            {
                "id": 2,
                "name": "Điều 2",
                "description": "Đánh giá về ý thức, kết quả chấp hành nội quy, quy định của nhà trường"
            },
            {
                "id": 3,
                "name": "Điều 3",
                "description": "Đánh giá về ý thức và kết quả tham gia các hoạt động chính trị - xã hội, văn hóa, văn nghệ, thể thao, phòng chống các tệ nạn xã hội."
            },
            {
                "id": 4,
                "name": "Điều 4",
                "description": "Đánh giá về phẩm chất công dân và quan hệ với cộng đồng"
            },
            {
                "id": 5,
                "name": "Điều 5",
                "description": "Đánh giá về ý thức và kết quả tham gia phụ trách lớp học, các đoàn thể, tổ chức khác trong nhà trường"
            },
            {
                "id": 6,
                "name": "Điều 6",
                "description": "Các trường hợp đặc biệt"
            }
        ]);
        setFaculties([
            {
                "id": 1,
                "name": "Công nghệ thông tin",
                "createdDate": 844189200000
            },
            {
                "id": 2,
                "name": "Công nghệ sinh học",
                "createdDate": 847645200000
            },
            {
                "id": 3,
                "name": "Đông Nam Á học",
                "createdDate": 659984400000
            },
            {
                "id": 4,
                "name": "Logistic - Quản lý chuỗi cung ứng",
                "createdDate": 652813200000
            },
            {
                "id": 5,
                "name": "Marketing",
                "createdDate": 614710800000
            },
            {
                "id": 6,
                "name": "Kinh tế học",
                "createdDate": 559414800000
            }
        ]);
    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     setLoading(true);
    //     const data = new FormData();

    //     for (const key in formData) {
    //         data.append(key, formData[key]);
    //     }

    //     if (image.current && image.current.files[0])
    //         data.append('file', image.current.files[0]);

    //     try {
    //         const response = await axios.post('/api/createActivity', data, {
    //             headers: {
    //                 'Content-Type': 'multipart/form-data'
    //             }
    //         });
    //         console.log('Activity created successfully:', response.data);
    //     } catch (error) {
    //         console.error('Error creating activity:', error);
    //     } finally {
    //         setLoading(false);
    //     }
    // };

    return (
        <div className="container mx-auto mt-4 p-4 bg-white shadow-md rounded-lg">
            <h1 className="text-2xl font-bold mb-4">Create New Activity</h1>
            <form>
                <div className="mb-4">
                    <label className="block text-gray-700">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Start Date and Time</label>
                    <input
                        type="datetime-local"
                        name="startDate"
                        value={formData.startDate}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">End Date and Time</label>
                    <input
                        type="datetime-local"
                        name="endDate"
                        value={formData.endDate}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Description</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                    ></textarea>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Active</label>
                    <select
                        name="active"
                        value={formData.active}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                    >
                        <option value="1">Đang diễn ra</option>
                        <option value="0">Đã kết thúc</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Close</label>
                    <select
                        name="close"
                        value={formData.close}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                    >
                        <option value="1">Đang mở đăng ký</option>
                        <option value="0">Đã đóng đăng ký</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Image</label>
                    <input
                        type="file"
                        name="image"
                        ref={image}
                        accept=".png, .jpg"
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Faculty</label>
                    <select
                        name="faculty"
                        value={formData.faculty}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                    >
                        <option value="">Select Faculty</option>
                        {faculties.map((faculty) => (
                            <option key={faculty.id} value={faculty.id}>
                                {faculty.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Semester</label>
                    <select
                        name="semester"
                        value={formData.semester}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                    >
                        <option value="">Select Semester</option>
                        {semesters.map((semester) => (
                            <option key={semester.id} value={semester.id}>
                                {semester.name} - {semester.yearStudy}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Term</label>
                    <select
                        name="term"
                        value={formData.term}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                    >
                        <option value="">Select Term</option>
                        {terms.map((term) => (
                            <option key={term.id} value={term.id}>
                                {term.name}
                            </option>
                        ))}
                    </select>
                </div>
                {loading ? (
                    <div className="flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white">
                        <Loading size={30} />
                    </div>
                ) : (
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Create Activity
                </button>
                )}
            </form>
        </div>
    );
}


export default AssistanActivityForm;