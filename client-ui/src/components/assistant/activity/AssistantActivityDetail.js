import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useParams } from "react-router-dom";
// import API, { endpoints } from "../../apis/API";

const AssistantActivityDetail = () => {
    // const { id } = useParams();
    // const [activity, setActivity] = useState(null);
    // const [loading, setLoading] = useState(true);
    const nav = useNavigate();
    const [data, setData] = useState([
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

    const convertTimestampToDateTime = (timestamp) => {
        const date = new Date(timestamp);
        return date.toLocaleDateString();
    };
    // useEffect(() => {
    //     const fetchActivity = async () => {
    //         try {
    //             let res = await API.get(endpoints['activityDetail'](id));
    //             setData(res.data);
    //             setLoading(false);
    //         } catch (error){
    //             console.error(error);
    //             setLoading(false);
    //         }
    //     };
    //     fetchActivity();
    // }, [id]);

    // if(loading){
    //     return <Loading />;
    // }

    const activity = data[0];
    const term = data[1];
    const semester = data[2];
    const faculty = data[3];

    if (!activity) {
        return <p>Activity not found</p>;
    }

    const update = () => {
        nav('/assistant/activity/detail/1/update')
    }

    const deleteActivity = () => {

    }

    return (
        <div className="container mx-auto mt-4 p-4">
            <div className="bg-white shadow-md rounded-lg p-6">
                <h1 className="text-3xl font-bold text-gray-800">{activity.name}</h1>
                <img
                    src={activity.image}
                    alt={activity.name}
                    className="w-full h-64 object-cover mt-4 rounded-md shadow-sm"
                />
                <div className="mt-4">
                    <p className="text-lg font-semibold text-gray-600">
                        Start Date:{" "}
                        <span className="font-normal">
                            {convertTimestampToDateTime(activity.startDate)}
                        </span>
                    </p>
                    <p className="text-lg font-semibold text-gray-600">
                        End Date:{" "}
                        <span className="font-normal">
                            {convertTimestampToDateTime(activity.endDate)}
                        </span>
                    </p>
                    <p className="text-lg font-semibold text-gray-600">Description: <span className="font-normal">{activity.description}</span></p>
                    <p className="text-lg font-semibold text-gray-600">Slots: <span className="font-normal">{activity.slots}</span></p>
                    {term && <p className="text-lg font-semibold text-gray-600">Term: <span className="font-normal">{term.name}</span></p>}
                    {semester && <p className="text-lg font-semibold text-gray-600">Semester: <span className="font-normal">{semester.name + " năm học " + semester.yearStudy}</span></p>}
                    {faculty && <p className="text-lg font-semibold text-gray-600">Faculty: <span className="font-normal">{faculty.name}</span></p>}
                </div>
            </div>
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center" onClick={update}>Chỉnh sửa hoạt động</button>
            <button className="bg-white border border-gray-300 hover:border-gray-400 text-red-800 font-bold py-2 px-4 rounded inline-flex items-center" onClick={deleteActivity}>Xóa hoạt động</button>

        </div>
    );
};

export default AssistantActivityDetail;
