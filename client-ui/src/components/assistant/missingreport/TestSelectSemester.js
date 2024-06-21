import FilterComponent from "../common/FilterComponent";

const TestSelectSemester = () => {
    const handleFilter = (semesterId, yearId) => {
        console.log("Selected Semester ID:", semesterId);
        console.log("Selected Year:", yearId);
    };

    return (
        <div className="container mx-auto mt-4 p-4">
            <h1 className="text-2xl font-bold mb-4 text-center">Filter Component Test</h1>
            <FilterComponent onFilter={handleFilter} />
        </div>
    );
};

export default TestSelectSemester;