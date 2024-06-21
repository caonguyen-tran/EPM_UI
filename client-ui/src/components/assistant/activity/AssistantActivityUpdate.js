import React, { useEffect, useRef, useState } from "react";
import Loading from "../../../common/Loading";

const AssistantActivityUpdate = () => {

    const [formData, setFormData] = useState({
        name: '',
        startDate: '',
        endDate: '',
        description: '',
        active: '',
        close: '',
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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const [activity, setActivity] = useState([
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
            file: null
        },
        {
            id: 3,
            name: "Điều 3",
            description: "Đánh giá về ý thức và kết quả tham gia các hoạt động chính trị - xã hội, văn hóa, văn nghệ, thể thao, phòng chống các tệ nạn xã hội."
        },
        {
            id: 5,
            name: "Kì 2",
            description: "Kì 2 năm 2024",
            yearStudy: "2024"
        },
        {
            id: 2,
            name: "Công nghệ sinh học",
            createdDate: 847645200000
        }
    ]);

    const convertTimestampToDatetime = (timestamp) => {
        const date = new Date(timestamp);
        return date.toISOString().slice(0, 16); // Cắt chuỗi để lấy YYYY-MM-DDTHH:mm
    };


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
        setFormData({
            name: activity[0].name,
            startDate: convertTimestampToDatetime(activity[0].startDate),
            endDate: convertTimestampToDatetime(activity[0].endDate),
            description: activity[0].description,
            active: activity[0].active ? "1" : "0",
            close: activity[0].close ? "1" : "0",
            image: activity[0].image,
            faculty: activity[3].id,
            semester: activity[2].id,
            term: activity[1].id
        });
    }, [])

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
                <div className="bg-gray-100 rounded-lg p-4 border border-gray-300">
                    <p className="text-gray-600 text-sm mb-2">Ảnh hiện tại</p>
                    <div className="w-full h-64 overflow-hidden">
                        <img
                            src={formData.image}
                            alt="Current Image"
                            className="w-full h-full object-cover"
                        />
                    </div>
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
                        Update activity
                    </button>
                )}
            </form>
        </div>
    );
}

export default AssistantActivityUpdate;