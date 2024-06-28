import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { Link, useParams } from "react-router-dom";
import { authApi, endpoints } from "../../../apis/API";
import FilterComponent from '../../../common/FilterComponent';
import { getDatetimeDetail } from '../../../utils/Common';

const StudentAchievement = () => {
    const [showStatistics, setShowStatistics] = useState(false);
    const [activityJoin, setActivityJoin] = useState([]);
    const [semesters, setSemesters] = useState([]);
    const [idS, setIdS] = useState(null);
    const [year, setYear] = useState(null);
    const [student, setStudent] = useState([]);
    const { studentId } = useParams();
    const { id } = useParams();



    const averageScoreByClass = [
        {
            "studentCount": 1,
            "classId": 1,
            "className": "DH20CS01",
            "averageScore": 0.0
        },
        {
            "studentCount": 1,
            "classId": 2,
            "className": "DH20CS02",
            "averageScore": 0.0
        },
        {
            "studentCount": 1,
            "classId": 3,
            "className": "DH21CS01",
            "averageScore": 20.0
        },
        {
            "studentCount": 2,
            "classId": 4,
            "className": "DH21CS02",
            "averageScore": 7.5
        }
    ];

    const csvData = averageScoreByClass.map(cls => ({
        "Class Name": cls.className,
        "Average Score": cls.averageScore
    }));



    useEffect(() => {
        loadSemesters();
    }, []);

    const loadSemesters = async () => {
        try {
            const auth = await authApi();
            const res = await auth.get(endpoints['semesters']);
            setSemesters(res.data);
        } catch (ex) {
            console.error(ex);
        }
    };

    const loadStudent = async () => {
        try {
            const auth = await authApi();
            const res = await auth.get(endpoints['getStudentById'](studentId));
            setStudent(res.data);
        } catch (ex) {
            console.error(ex);
        }
    };

    useEffect(() => {
        loadStudent();
    }, [studentId]);

    const loadStudentActivityJoined = async (semesterId, yearStudy) => {
        const params = {};

        if (yearStudy) {
            params.yearStudy = yearStudy;
            params.studentId = studentId;
        } else if (semesterId) {
            params.semesterId = semesterId;
            params.studentId = studentId;
        }

        console.log("Request params:", params);

        try {
            const auth = await authApi();
            const res = await auth.get(endpoints['joinedActivities'], { params });

            if (Array.isArray(res.data)) {
                setActivityJoin(res.data);
            } else {
                setActivityJoin([]);
            }
        } catch (ex) {
            console.error(ex);
            setActivityJoin([]);
        }
    };

    useEffect(() => {
        if (idS || year) {
            loadStudentActivityJoined(idS, year);
        }
    }, [idS, year]);

    const handleFilter = (semesterId, yearStudy) => {
        console.log("Selected Semester ID:", semesterId);
        console.log("Selected Year:", yearStudy);
        setIdS(semesterId);
        setYear(yearStudy);

        return new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, 1000);
        });
    };

    const [totalScore, setTotalScore] = useState([]);
    const [termScores, setTermScores] = useState([]);
    const [barChartOptions, setBarChartOptions] = useState({});
    const [doughnutChartOptions, setDoughnutChartOptions] = useState({});

    const loadTotalScore = async (semesterId, yearStudy) => {
        const params = {
            studentId: studentId
        };

        if (yearStudy) {
            params.yearStudy = yearStudy;
        } else if (semesterId) {
            params.semesterId = semesterId;
        }

        console.log("Request params:", params);

        try {
            const response = await authApi().get(endpoints['totalScoreByTerm'], { params });
            console.log(response.data)
            setTotalScore(response.data);
        } catch (ex) {
            console.error(ex);
        }
    };


    useEffect(() => {
        if (idS || year) {
            loadTotalScore(idS, year);
        }
    }, [idS, year]);

    const determineAchievement = (totalScore) => {
        if (totalScore >= 90) {
            return "Xuất sắc";
        } else if (totalScore >= 80) {
            return "Giỏi";
        } else if (totalScore >= 70) {
            return "Khá";
        } else if (totalScore >= 60) {
            return "Trung bình";
        } else if (totalScore >= 50) {
            return "Yếu";
        } else {
            return "Kém";
        }
    };

    useEffect(() => {
        if (totalScore && totalScore.termScores) {
            const labels = totalScore.termScores.map(termScore => termScore.termId.name);
            const dataValues = totalScore.termScores.map(termScore => termScore.totalScore);

            setBarChartOptions({
                chart: {
                    type: 'bar'
                },
                title: {
                    text: 'Total Score per Term',
                    align: 'center'
                },
                xaxis: {
                    categories: labels
                },
                series: [{
                    name: 'Total Score',
                    data: dataValues
                }]
            });

            setDoughnutChartOptions({
                chart: {
                    type: 'donut'
                },
                title: {
                    text: 'Total Score per Term',
                    align: 'center'
                },
                labels: labels,
                series: dataValues
            });
        }
    }, [totalScore]);

    const achievement = determineAchievement(totalScore.overallTotalScore);

    const exportCSV = async (semesterId, yearStudy) => {
        const params = {};
        if (yearStudy) {
            params.yearStudy = yearStudy;
        } else if (semesterId) {
            params.semesterId = semesterId;
        }

        try {
            const response = await authApi().get(endpoints['csvReport'](studentId), { params });
            if (response.data) {
                const csvData = response.data;
                const csvBlob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
                const csvUrl = URL.createObjectURL(csvBlob);
                const link = document.createElement('a');
                link.href = csvUrl;
                link.setAttribute('download', 'report.csv');
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }
        } catch (ex) {
            console.error(ex);
        }
    }

    const exportPDF = async (semesterId, yearStudy) => {
        const params = {};
        if (yearStudy) {
            params.yearStudy = yearStudy;
        } else if (semesterId) {
            params.semesterId = semesterId;
        }

        try {
            const response = await authApi().get(endpoints['pdfReport'](studentId), { params, responseType: 'blob' });
            if (response.data) {
                const pdfBlob = new Blob([response.data], { type: 'application/pdf' });
                const pdfUrl = URL.createObjectURL(pdfBlob);
                const link = document.createElement('a');
                link.href = pdfUrl;
                link.setAttribute('download', 'report.pdf');
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }
        } catch (ex) {
            console.error(ex);
        }
    }



    return (
        <>
            <div className="bg-blue-100 text-gray-700 text-center py-4 rounded-lg shadow mb-6">
                <h1 className="text-3xl font-bold">Danh sách các hoạt động của {student.lastname} {student.firstname}</h1>
            </div>
            <div className="container mx-auto mt-4 p-4">
                <h1 className="text-2xl font-bold mb-4 text-center">Chọn học kỳ hoặc năm học</h1>
                <FilterComponent onFilter={handleFilter} semesters={semesters} />
            </div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg min-h-lvh z-0 mt-2">
                <table className="w-full text-sm text-left rtl:text-right text-gray-700 dark:text-gray-400">
                    <thead className="text-xs text-white uppercase bg-stone-700">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Tên hoạt động
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Học kỳ
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Điều
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Thời gian đăng ký
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Điểm nhận được
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {activityJoin && activityJoin.length > 0 && activityJoin.map((element) => (
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={element[0].id}>
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                                >
                                    {element[0].name}
                                </th>
                                <td className="px-6 py-4">{element[1].description}</td>
                                <td className="px-6 py-4">{element[2].name}</td>
                                <td className="px-6 py-4">{getDatetimeDetail(element[3].dateRegister)}</td>
                                <td className="px-6 py-4">
                                    <Link
                                        to={`/assistant/class/${id}/student/${student.id}/join-activity/${element[3].id}/scores`}
                                        className="text-decoration-none font-medium hover:text-rose-600"
                                    >
                                        Chi tiết điểm
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="px-6 py-4">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                    Thành tích ngoại khóa: {achievement}
                </span>
            </div>
            <div>
                <div className="container mx-auto px-4">
                    <div className="mt-6 space-y-4">
                        <button
                            onClick={() => setShowStatistics(!showStatistics)}
                            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                        >
                            {showStatistics ? 'Ẩn thống kê' : 'Hiện thống kê'}
                        </button>
                    </div>
                    {showStatistics && (
                        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg mt-20 relative">
                                <button
                                    onClick={() => setShowStatistics(false)}
                                    className="absolute top-4 right-4 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center"
                                >
                                    &times;
                                </button>
                                <h2 className="text-2xl font-bold mb-4">Biểu đồ thống kê điểm theo từng điều</h2>
                                <div id="chart-container">
                                    <div className="mb-8">
                                        {barChartOptions && barChartOptions.series && (
                                            <Chart
                                                options={barChartOptions}
                                                series={barChartOptions.series}
                                                type="bar"
                                                width="100%"
                                                height="300"
                                            />
                                        )}
                                    </div>
                                    <div className="mb-8">
                                        {doughnutChartOptions && doughnutChartOptions.series && (
                                            <Chart
                                                options={doughnutChartOptions}
                                                series={doughnutChartOptions.series}
                                                type="donut"
                                                width="100%"
                                                height="300"
                                            />
                                        )}
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold">Tổng điểm: {totalScore.overallTotalScore}</h3>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className="container mx-auto px-4">
                <div className="bg-white p-6 rounded-lg shadow-lg mt-6 space-y-4">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800">Xuất Danh Sách Điểm</h2>
                    <div className="flex space-x-4">
                        <button
                            onClick={() => exportCSV(idS, year)}
                            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700 transition duration-300"
                        >
                            Xuất điểm bằng file CSV
                        </button>
                        <button
                            onClick={() => exportPDF(idS, year)}
                            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700 transition duration-300"
                        >
                            Xuất điểm bằng file PDF
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default StudentAchievement;
