import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { authApi, endpoints } from "../../../apis/API";
import { getDatetimeDetail } from "../../../utils/Common";


const ScoreDetail = () => {
    const { joinActivityId } = useParams();
    const [joinActivity, setJoinActivity] = useState([]);

    const loadJoinActivity = async () => {
        try {
            let res = await authApi().get(endpoints['getJoinActivityById'](joinActivityId));
            if (Array.isArray(res.data)) {
                setJoinActivity(res.data);
            } else {
                setJoinActivity([]);
            }
        } catch (ex) {
            console.error(ex)
        }
    }


    const [joinActivityScore, setJoinActivityScore] = useState([]);

    useEffect(() => {
        loadJoinActivity();
        loadScore();
    }, [joinActivityId])

    const loadScore = async () => {
        try {
            let res = await authApi().get(endpoints['getScoreByJA'](joinActivityId));

            if (Array.isArray(res.data)) {
                setJoinActivityScore(res.data);
            } else {
                setJoinActivityScore([]);
            }
        } catch (ex) {
            console.error(ex)
        }
    }


    const totalScore = joinActivityScore.reduce((total, score) => total + score[0].scoreValue, 0);

    return (
        <div className="container mx-auto p-4">
            <div className="bg-white shadow rounded-lg p-6 mb-4">
                <h2 className="text-2xl font-bold mb-2">Hoạt động: {joinActivity[1]?.name}</h2>
                <p className="mb-2">{joinActivity.description}</p>
                <p className="mb-2"><strong>Ngày bắt đầu:</strong> {getDatetimeDetail(joinActivity[1]?.startDate)}</p>
                <p className="mb-2"><strong>Ngày kết thúc:</strong> {getDatetimeDetail(joinActivity[1]?.endDate)}</p>
                <p className="mb-2"><strong>Ngày đăng ký:</strong> {getDatetimeDetail(joinActivity[0]?.dateRegister)}</p>
                <p className="mb-2"><strong>Hình ảnh hoạt động:</strong></p>
                <img className="w-full h-64 object-cover rounded-lg mb-4" src={joinActivity[1]?.image} alt={joinActivity[1]?.name} />
                <p className="mb-2"><strong>Hình ảnh chứng minh:</strong></p>
                <img className="w-full h-64 object-cover rounded-lg" src={joinActivity[0]?.proofJoining} />
            </div>

            <div className="bg-white shadow rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Điểm được ghi nhận</h3>
                <table className="min-w-full bg-white">
                    <thead className="bg-gray-800 text-white">
                        <tr>
                            <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Tên điểm</th>
                            <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Mô tả</th>
                            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Giá trị</th>
                            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Ngày ghi nhận</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-700">
                        {joinActivityScore.map((score) => (
                            <tr key={score.id}>
                                <td className="w-1/3 text-left py-3 px-4">{score[0].scoreName}</td>
                                <td className="w-1/3 text-left py-3 px-4">{score[0].description}</td>
                                <td className="text-left py-3 px-4">{score[0].scoreValue}</td>
                                <td className="text-left py-3 px-4">{getDatetimeDetail(score[1])}</td>
                            </tr>
                        ))}
                        <p className="mb-2"><strong>Tổng điểm nhận được: {totalScore}</strong></p>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ScoreDetail;