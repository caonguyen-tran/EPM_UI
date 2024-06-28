import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { Link } from "react-router-dom";
import { authApi, endpoints } from '../../apis/API';
import FilterComponent from '../../common/FilterComponent';

const Class = () => {

    const [semesters, setSemesters] = useState([]);
    const [id, setId] = useState(null);
    const [year, setYear] = useState(null);
    const [averageScoreByClass, setAverageScoreByClass] = useState([]);

    
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

    const loadAverageScoreByClass = async (semesterId, yearStudy) => {
        const params = {};

        if (yearStudy) {
            params.yearStudy = yearStudy;
        } else if (semesterId) {
            params.semesterId = semesterId;
        }

        console.log("Request params:", params);

        try {
            const res = await authApi().get(endpoints['averageScoreByClass'], { params });

            if (Array.isArray(res.data)) {
                setAverageScoreByClass(res.data);
            } else {
                setAverageScoreByClass([]);
            }
            console.log(res.data)
        } catch (ex) {
            console.error(ex);
            setAverageScoreByClass([]);
        }
    };

    useEffect(() => {
        if (id || year) {
            loadAverageScoreByClass(id, year);
        }
    }, [id, year]);

    const handleFilter = (semesterId, yearStudy) => {
        console.log("Selected Semester ID:", semesterId);
        console.log("Selected Year:", yearStudy);
        setId(semesterId);
        setYear(yearStudy);

        return new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, 1000);
        });
    };

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

    const [classes, setClasses] = useState([]);

    useEffect(() => {
        loadClasses();
    }, [])

    const loadClasses = async () => {
        try {
            let res = await authApi().get(endpoints['classes']);
            setClasses(res.data);
        } catch (ex) {
            console.error(ex)
        }
    }

    const labels = averageScoreByClass.map(cls => cls.className);
    const scores = averageScoreByClass.map(cls => cls.averageScore);
    const achievements = averageScoreByClass.map(cls => determineAchievement(cls.averageScore));

    const chartOptions = {
        chart: {
            type: 'bar',
        },
        title: {
            text: 'Điểm Trung Bình Theo Lớp',
            align: 'center'
        },
        xaxis: {
            categories: labels
        },
        series: [{
            name: 'Average Score',
            data: scores
        }],
        tooltip: {
            custom: ({ series, seriesIndex, dataPointIndex, w }) => {
                return `<div class="arrow_box">
                    <span>${w.globals.labels[dataPointIndex]}: ${series[seriesIndex][dataPointIndex]} (${achievements[dataPointIndex]})</span>
                </div>`
            }
        }
    };

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
                                        to={`/assistant/class/${element[0].id}`}
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

            <div className="container mx-auto mt-4 p-4">
                <h1 className="text-2xl font-bold mb-4 text-center">Chọn học kỳ hoặc năm học</h1>
                <FilterComponent onFilter={handleFilter} semesters={semesters} />
            </div>

            <div className="container mx-auto px-4">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800">Điểm Trung Bình Theo Lớp</h2>
                    <Chart
                        options={chartOptions}
                        series={chartOptions.series}
                        type="bar"
                        width="100%"
                        height="400"
                    />
                </div>
            </div>
        </>
    );
}
export default Class;