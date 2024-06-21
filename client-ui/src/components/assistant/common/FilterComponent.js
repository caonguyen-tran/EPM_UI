import React, { useEffect, useState } from "react";

const FilterComponent = ({ onFilter }) => {
    const [selectedSemester, setSelectedSemester] = useState("");
    const [selectedYear, setSelectedYear] = useState("");
    const [isSemesterDisabled, setIsSemesterDisabled] = useState(false);
    const [isYearDisabled, setIsYearDisabled] = useState(false);
    const [error, setError] = useState("");

    const semesters = [
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
    ];

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
        if (selectedYear) {
            setError("Chỉ được chọn 1 trong 2 option");
            return;
        }
        setSelectedSemester(e.target.value);
    };

    const handleYearChange = (e) => {
        if (selectedSemester) {
            setError("Chỉ được chọn 1 trong 2 option");
            return;
        }
        setSelectedYear(e.target.value);
    };

    const handleFilter = () => {
        if (!selectedSemester && !selectedYear) {
            setError("Bạn phải chọn ít nhất 1 tùy chọn để lọc");
            return;
        }
        onFilter(selectedSemester, selectedYear);
    };

    const uniqueYears = Array.from(
        new Set(semesters.map((semester) => semester.yearStudy))
    );

    return (
        <div className="p-4 bg-gray-100 rounded shadow-md mb-4">
            <div className="mb-4">
                <label className="block text-gray-700">Year Study</label>
                <select
                    name="yearStudy"
                    value={selectedYear}
                    onChange={handleYearChange}
                    className="w-full px-3 py-2 border rounded"
                >
                    <option value="">Select Year</option>
                    {uniqueYears.map((year) => (
                        <option key={year} value={year}>
                            {year}
                        </option>
                    ))}
                </select>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Semester</label>
                <select
                    name="semester"
                    value={selectedSemester}
                    onChange={handleSemesterChange}
                    className="w-full px-3 py-2 border rounded"
                >
                    <option value="">Select Semester</option>
                    {semesters.map((semester) => (
                        <option key={semester.id} value={semester.id}>
                            {semester.description}
                        </option>
                    ))}
                </select>
            </div>
            {error && <p className="text-red-500">{error}</p>}
            <button
                onClick={handleFilter}
                className="bg-blue-500 text-white px-4 py-2 rounded"
            >
                Filter
            </button>
        </div>
    );
}


export default FilterComponent;
