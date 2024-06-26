import React, { useEffect, useState } from "react";
import Loading from "./Loading";

const FilterComponent = ({ onFilter, semesters }) => {
    const [selectedSemester, setSelectedSemester] = useState("");
    const [selectedYear, setSelectedYear] = useState("");
    const [isSemesterDisabled, setIsSemesterDisabled] = useState(false);
    const [isYearDisabled, setIsYearDisabled] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (selectedSemester) {
            setIsYearDisabled(true);
            setError("");
        } else {
            setIsYearDisabled(false);
        }
    }, [selectedSemester]);

    useEffect(() => {
        if (selectedYear) {
            setIsSemesterDisabled(true);
            setError("");
        } else {
            setIsSemesterDisabled(false);
        }
    }, [selectedYear]);

    const handleSemesterChange = (e) => {
        setSelectedSemester(e.target.value);
        if (e.target.value) {
            setSelectedYear("");
        }
    };

    const handleYearChange = (e) => {
        setSelectedYear(e.target.value);
        if (e.target.value) {
            setSelectedSemester("");
        }
    };

    const handleFilter = () => {
        if (!selectedSemester && !selectedYear) {
            setError("Bạn phải chọn ít nhất 1 tùy chọn để lọc");
            return;
        }
        setError("");
        setLoading(true);
        onFilter(selectedSemester, selectedYear).finally(() => {
            setLoading(false);
        });
    };

    const uniqueYears = Array.from(new Set(semesters.map((semester) => semester.yearStudy)));

    return (
        <div className="p-2 bg-gray-100 rounded shadow-md mb-4">
            <div className="mb-2">
                <label className="block text-gray-700">Năm học</label>
                <select
                    name="yearStudy"
                    value={selectedYear}
                    onChange={handleYearChange}
                    className="w-full px-2 py-1 border rounded"
                    disabled={isYearDisabled}
                >
                    <option value="">Chọn năm học</option>
                    {uniqueYears.map((year) => (
                        <option key={year} value={year}>
                            {year}
                        </option>
                    ))}
                </select>
            </div>
            <div className="mb-2">
                <label className="block text-gray-700">Học kỳ</label>
                <select
                    name="semester"
                    value={selectedSemester}
                    onChange={handleSemesterChange}
                    className="w-full px-2 py-1 border rounded"
                    disabled={isSemesterDisabled}
                >
                    <option value="">Chọn học kỳ</option>
                    {semesters.map((semester) => (
                        <option key={semester.id} value={semester.id}>
                            {semester.description}
                        </option>
                    ))}
                </select>
            </div>
            {error && <p className="text-red-500">{error}</p>}


            {loading ? (
                <div className="flex w-full justify-center rounded-md  px-3 py-1.5 text-sm font-semibold leading-6 text-white">
                    <Loading size={30} />
                </div>
            ) : (
                <button
                    onClick={handleFilter}
                    className="bg-blue-500 text-white px-4 py-1 rounded"
                > Lọc
                </button>
            )}

        </div>
    );
};

export default FilterComponent;
