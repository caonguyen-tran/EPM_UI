import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import React, { useState } from 'react';
import Chart from 'react-apexcharts';
import { CSVLink } from 'react-csv';
import { Link } from "react-router-dom";
import { getDatetimeDetail } from '../../../utils/Common';

const activityJoin = [
    [
        {
            "id": 4,
            "name": "TẬP HUẤN NCKH CHỦ ĐỀ \"PHƯƠNG PHÁP NGHIÊN CỨU KHOA HỌC\"",
            "startDate": 1715824800000,
            "endDate": 1715911200000,
            "description": "Hoạt động được tổ chức cho tất cả sinh viên trường Đại Học Mở thành phố Hồ Chí Minh",
            "active": true,
            "image": "https://res.cloudinary.com/dndakokcz/image/upload/v1716640766/lflqzauyyavx8jqoenwl.jpg",
            "slots": 500,
            "close": null,
            "file": null
        },
        {
            "id": 5,
            "name": "Kì 2",
            "description": "Kì 2 năm 2024",
            "yearStudy": "2024"
        },
        {
            "id": 3,
            "name": "Điều 3",
            "description": "Đánh giá về ý thức và kết quả tham gia các hoạt động chính trị - xã hội, văn hóa, văn nghệ, thể thao, phòng chống các tệ nạn xã hội."
        },
        {
            "id": 3,
            "dateRegister": 1718942379000,
            "rollup": true,
            "proofJoining": "proof1",
            "note": "note1",
            "accept": false,
            "file": null
        }
    ],
    [
        {
            "id": 7,
            "name": "Chuyên đề DevOps và MLOps",
            "startDate": 1717646400000,
            "endDate": 1717732800000,
            "description": "Chuyên đề DevOps và MLOps dành cho sinh viên Khoa Công Nghệ Thông Tin trường Đại học Mở thành phố Hồ Chí Minh",
            "active": null,
            "image": "https://res.cloudinary.com/dndakokcz/image/upload/v1716648743/nrk46d6vwzsflvtd0iih.jpg",
            "slots": 60,
            "close": null,
            "file": null
        },
        {
            "id": 6,
            "name": "Kì 3",
            "description": "Kì 3 năm 2024",
            "yearStudy": "2024"
        },
        {
            "id": 3,
            "name": "Điều 3",
            "description": "Đánh giá về ý thức và kết quả tham gia các hoạt động chính trị - xã hội, văn hóa, văn nghệ, thể thao, phòng chống các tệ nạn xã hội."
        },
        {
            "id": 12,
            "dateRegister": 1718308618000,
            "rollup": true,
            "proofJoining": "proof1",
            "note": "note1",
            "accept": false,
            "file": null
        }
    ],
    [
        {
            "id": 8,
            "name": "Chuyên đề Tiny Machine Learning",
            "startDate": 1717990200000,
            "endDate": 1718076600000,
            "description": "Tiny Machine Learning được tổ chức bởi khoa Công Nghệ Thông Tin",
            "active": null,
            "image": "https://res.cloudinary.com/dndakokcz/image/upload/v1716648812/yhxzwbkqbhilw8uylbov.jpg",
            "slots": 60,
            "close": null,
            "file": null
        },
        {
            "id": 6,
            "name": "Kì 3",
            "description": "Kì 3 năm 2024",
            "yearStudy": "2024"
        },
        {
            "id": 3,
            "name": "Điều 3",
            "description": "Đánh giá về ý thức và kết quả tham gia các hoạt động chính trị - xã hội, văn hóa, văn nghệ, thể thao, phòng chống các tệ nạn xã hội."
        },
        {
            "id": 10,
            "dateRegister": 1718280541000,
            "rollup": true,
            "proofJoining": "proof1",
            "note": "note1",
            "accept": false,
            "file": null
        }
    ]
]

const totalScore = {
    "termScores": [
        {
            "termId": {
                "id": 3,
                "name": "Điều 3",
                "description": "Đánh giá về ý thức và kết quả tham gia các hoạt động chính trị - xã hội, văn hóa, văn nghệ, thể thao, phòng chống các tệ nạn xã hội."
            },
            "totalScore": 20
        },
        {
            "termId": {
                "id": 1,
                "name": "Điều 1",
                "description": "Đánh giá về ý thức và kết quả tham gia các hoạt động chính trị - xã hội, văn hóa, văn nghệ, thể thao, phòng chống các tệ nạn xã hội."
            },
            "totalScore": 15
        }
    ],
    "overallTotalScore": 35.0
};

const ScoreChart = () => {
    const termScores = totalScore.termScores;
    const labels = termScores.map(termScore => termScore.termId.name);
    const dataValues = termScores.map(termScore => termScore.totalScore);

    const barChartOptions = {
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
    };

    const doughnutChartOptions = {
        chart: {
            type: 'donut'
        },
        title: {
            text: 'Total Score per Term',
            align: 'center'
        },
        labels: labels,
        series: dataValues
    };

    return { barChartOptions, doughnutChartOptions };
}

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

const exportPDF = () => {
    const input = document.getElementById('chart-container');
    html2canvas(input).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'PNG', 0, 0);
        pdf.save("average_scores.pdf");
    });
};

const achievement = determineAchievement(totalScore.overallTotalScore);

const StudentAchievement = () => {
    const { barChartOptions, doughnutChartOptions } = ScoreChart();
    const [showStatistics, setShowStatistics] = useState(false);

    return (
        <>
            <div className="bg-blue-100 text-gray-700 text-center py-4 rounded-lg shadow mb-6">
                <h1 className="text-3xl font-bold">Danh sách các hoạt động của sinh viên gì đó</h1>
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
                        {activityJoin.map((element) => (
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
                                        to="/assistant/class/1/student/1/join-activity/1/scores"
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
                                <div className="mb-8">
                                    <Chart
                                        options={barChartOptions}
                                        series={barChartOptions.series}
                                        type="bar"
                                        width="100%"
                                        height="300"
                                    />
                                </div>
                                <div className="mb-8">
                                    <Chart
                                        options={doughnutChartOptions}
                                        series={doughnutChartOptions.series}
                                        type="donut"
                                        width="100%"
                                        height="300"
                                    />
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
                    <CSVLink data={csvData} filename={"average_scores.csv"}>
                        <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700 transition duration-300">
                            Xuất điểm bằng file CSV
                        </button>
                    </CSVLink>
                    <button
                        onClick={exportPDF}
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