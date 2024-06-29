import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { authApi, endpoints } from "../../../apis/API";
import Loading from "../../../common/Loading";

const MissingReportDetail = () => {
    const nav = useNavigate();
    const { id } = useParams();
    const [missingReport, setMissingReport] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        loadMissingReport();
    }, [id]);

    const loadMissingReport = async () => {
        try {
            let res = await authApi().get(endpoints['missingReportDetail'](id));
            setMissingReport(res.data);
            console.log(res.data);
        } catch (ex) {
            console.error(ex);
        }
    };

    const convertTimestampToDatetime = (timestamp) => {
        let datetime = new Date(timestamp);
        return `${datetime.getDate()}/${datetime.getMonth() + 1}/${datetime.getFullYear()} - ${datetime.getHours()}:${datetime.getMinutes()}`;
    };

    const [joinId, setJoinId] = useState();

    useEffect(() => {
        if (missingReport?.length > 1) {
            const getJoinId = async () => {
                try {
                    const res = await authApi().get(endpoints['getJAId'](missingReport[5]?.id, missingReport[1]?.id));
                    console.log(res.data.id)
                    setJoinId(res.data.id);
                } catch (ex) {
                    console.error(ex);
                }
            };

            getJoinId();
        }
    }, [missingReport]);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);


    const accept = async () => {
        setLoading(true);
        setError(null);
        setSuccess(false);

        try {
            const payload = {
                joinId: joinId,
                activityId: missingReport[1]?.id
            };

            const response = await authApi().post(endpoints['acceptScoreStudent'], payload);

            if (response.status === 201) {
                setSuccess(true);
                alert("Accepted successfully!")
            }
        } catch (error) {
            setError('Có lỗi xảy ra khi gửi yêu cầu.');
            console.error('Error:', error);
        } finally {
            setLoading(false);
        }
    };

    const reject = async () => {
        setLoading(true);
        setError(null);
        setSuccess(false);

        try {
            const response = await authApi().post(endpoints['rejectMr'](id));

            if (response.status === 200) {
                setSuccess(true);
                alert("Rejected successfully!");
            }
        } catch (error) {
            setError('Có lỗi xảy ra khi gửi yêu cầu.');
            console.error('Error:', error);
        } finally {
            setLoading(false);
        }
    };

    if (!Array.isArray(missingReport) || missingReport.length === 0) {
        return <div className="flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white">
            <Loading size={30} />
        </div>;
    }

    return (
        <div className="container mx-auto mt-4 p-4">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Chi tiết báo thiếu</h1>
            <div className="bg-white shadow-md rounded-lg p-6">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">{missingReport[1]?.name}</h1>
                <p className="text-lg font-semibold text-gray-600">
                    Fullname: <span className="font-normal">{missingReport[2]?.lastname} {missingReport[2]?.firstname}</span>
                </p>
                <p className="text-lg font-semibold text-gray-600">
                    Class: <span className="font-normal">{missingReport[3]?.name}</span>
                </p>
                <p className="text-lg font-semibold text-gray-600">
                    Faculty: <span className="font-normal">{missingReport[4]?.name}</span>
                </p>
                <p className="text-lg font-semibold text-gray-600">
                    Proof Joining: <span className="font-normal"></span>
                </p>
                <img
                    src={missingReport[0]?.proofJoining}
                    className="w-full h-64 object-cover mt-4 rounded-md shadow-sm"
                    alt="Proof Joining"
                />
                <div className="mt-4">
                    <p className="text-lg font-semibold text-gray-600">
                        Status: <span className="font-normal">{missingReport[0]?.status}</span>
                    </p>
                    <p className="text-lg font-semibold text-gray-600">
                        Created Date:{" "}
                        <span className="font-normal">
                            {convertTimestampToDatetime(missingReport[0]?.createdDate)}
                        </span>
                    </p>
                    <p className="text-lg font-semibold text-gray-600">
                        Note: <span className="font-normal">{missingReport[0]?.note}</span>
                    </p>
                    <p className="text-lg font-semibold text-gray-600">
                        Mô tả hoạt động: <span className="font-normal">{missingReport[1]?.description}</span>
                    </p>
                    <p className="text-lg font-semibold text-gray-600">
                        Hoạt động bắt đầu từ:{" "}
                        <span className="font-normal">
                            {convertTimestampToDatetime(missingReport[1]?.startDate)}
                        </span>
                    </p>
                    <p className="text-lg font-semibold text-gray-600">
                        Hoạt động kết thúc lúc:{" "}
                        <span className="font-normal">
                            {convertTimestampToDatetime(missingReport[1]?.endDate)}
                        </span>
                    </p>
                    <p className="text-lg font-semibold text-gray-600">
                        Hình ảnh hoạt động: <span className="font-normal"></span>
                    </p>
                    <img
                        src={missingReport[1]?.image}
                        className="w-full h-64 object-cover mt-4 rounded-md shadow-sm"
                        alt="Activity"
                    />
                </div>
            </div>
            <div className="mb-4">
                {error && <p>{error}</p>}
                {success && <p>Accepted successfully!</p>}
                <button onClick={accept} disabled={loading || !joinId}
                    className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                    {loading ? 'Đang xử lý...' : 'Chấp nhận báo thiếu'}
                </button>
            </div>
            <div>
                {error && <p>{error}</p>}
                {success && <p>Rejected successfully!</p>}
                <button onClick={reject} disabled={loading || !id}
                    className="bg-white border border-gray-300 hover:border-gray-400 text-red-800 font-bold py-2 px-4 rounded inline-flex items-center">
                    {loading ? 'Đang xử lý...' : 'Từ chối báo thiếu'}
                </button>
            </div>
        </div>
    );
};

export default MissingReportDetail;
