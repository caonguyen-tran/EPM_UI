import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import API, { authApi, endpoints } from "../../../apis/API";
import Loading from "../../../common/Loading";
import { getDatetimeDetail } from "../../../utils/Common";
import UploadCSV from "../scorestudent/UploadCSV";


const AssistantActivityDetail = () => {
    const nav = useNavigate();
    const [activity, setActivity] = useState([]);
    const { id } = useParams();
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        let id1 = parseInt(id, 10)
        const loadActivity = async () => {
            try {
                let res = await API.get(endpoints["activityDetail"](id1));
                setActivity(res.data.result);
            } catch (error) {
                console.error(error);
            }
        };

        loadActivity();
    }, [id]);

    if (!activity) {
        return <p>Activity not found</p>;
    }


    const update = () => {
        nav(`/assistant/activity/detail/${activity.id}/update`)
    }

    const deleteActivity = async () => {
        setLoading(true);
        let id1 = parseInt(id, 10);
        try{
            let res = await authApi().delete(endpoints['deleteActivity'](id1));
            if (res.status === 204) {
                alert('Activity deleted successfully');
            } else {
                alert('Failed to delete activity');
            }
        } catch (error) {
            console.error('Failed to delete activity:', error);
            alert('Failed to delete activity');
        } finally {
            setLoading(false);
            nav('/assistant/activity/list')
        }
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
                            {getDatetimeDetail(activity.startDate)}
                        </span>
                    </p>
                    <p className="text-lg font-semibold text-gray-600">
                        End Date:{" "}
                        <span className="font-normal">
                            {getDatetimeDetail(activity.endDate)}
                        </span>
                    </p>
                    <p className="text-lg font-semibold text-gray-600">
                        Description:{" "}
                        <span className="font-normal">{activity.description}</span>
                    </p>
                    <p className="text-lg font-semibold text-gray-600">
                        Slots:{" "}
                        <span className="font-normal">{activity.slots}</span>
                    </p>
                    {activity.term && (
                        <p className="text-lg font-semibold text-gray-600">
                            Term:{" "}
                            <span className="font-normal">{activity.term.name}</span>
                        </p>
                    )}
                    {activity.semester && (
                        <p className="text-lg font-semibold text-gray-600">
                            Semester:{" "}
                            <span className="font-normal">{activity.semester.description}</span>
                        </p>
                    )}
                    {activity.faculty && (
                        <p className="text-lg font-semibold text-gray-600">
                            Faculty:{" "}
                            <span className="font-normal">{activity.faculty.name}</span>
                        </p>
                    )}
                </div>
            </div>
            <button
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
                onClick={update}
            >
                Chỉnh sửa hoạt động
            </button>
            {loading ? (
                    <div className="flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white">
                        <Loading size={30} />
                    </div>
                ) : (
            <button
                className="bg-white border border-gray-300 hover:border-gray-400 text-red-800 font-bold py-2 px-4 rounded inline-flex items-center"
                onClick={deleteActivity}
            >
                Xóa hoạt động
            </button>
                )}
            <div className="mt-6 bg-gray-100 border border-gray-300 rounded-md p-4">
                <h3 className="text-lg font-semibold mb-2">Nạp tệp tin CSV để điểm danh:</h3>
                <UploadCSV activityId = {id}/>
            </div>
        </div>
    );
};

export default AssistantActivityDetail;
