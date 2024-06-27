import React, { useEffect, useRef, useState } from "react";
import { FormControl, FormGroup, FormLabel } from "react-bootstrap";
import { authApi, endpoints } from "../../../apis/API";
import Loading from "../../../common/Loading";


const AssistanActivityForm = () => {

    const [formData, setFormData] = useState({
        name: '',
        startDate: '',
        endDate: '',
        description: '',
        slots: '',
        facultyId: '',
        semesterId: '',
        termId: ''
    });

    const image = useRef();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [faculties, setFaculties] = useState([]);
    const [semesters, setSemesters] = useState([]);
    const [terms, setTerms] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    };

    useEffect(()=> {
        loadFaculties();
        loadSemesters();
        loadTerms();
    }, [])

    const loadSemesters = async () => {
        try {
            const auth = await authApi();
            const res = await auth.get(endpoints['semesters']);
            setSemesters(res.data);
        } catch (ex) {
            console.error(ex);
        }
    };

    const loadTerms = async () => {
        try {
            const auth = await authApi();
            const res = await auth.get(endpoints['terms']);
            setTerms(res.data);
        } catch (ex) {
            console.error(ex);
        }
    };

    const loadFaculties = async () => {
        try {
            const auth = await authApi();
            const res = await auth.get(endpoints['faculties']);
            setFaculties(res.data);
        } catch (ex) {
            console.error(ex);
        }
    };

    const convertToValidDateString = (datetime) => {
        if (!datetime) return '';
        const date = new Date(datetime);
        return isNaN(date.getTime()) ? '' : date.toISOString().substring(0, 16);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formattedData = {
            ...formData,
            startDate: convertToValidDateString(formData.startDate),
            endDate: convertToValidDateString(formData.endDate)
        };

        console.log("Form Data Before Submit:", formattedData);

        try {
            const form = new FormData();

            Object.keys(formattedData).forEach(key => {
                    form.append(key, formattedData[key]);
            });

            if (image.current && image.current.files[0]) 
                form.append('file', image.current.files[0]);

            const res = await authApi().post(endpoints["createActivity"], form, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            if (res.status === 201) {
                alert('Activity created successfully');
            } else {
                alert('Failed to create activity');
            }
        } catch (error) {
            console.error('Failed to create activity:', error);
            alert('Failed to create activity');
        } finally {
            setLoading(false);
        }

        console.log("Form Data After Submit:", formData);
    };


    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     setLoading(true);
    //     const data = new FormData();

    //     for (const key in formData) {
    //         data.append(key, formData[key]);
    //     }

    //     if (image.current && image.current.files[0])
    //         data.append('file', image.current.files[0]);

    //     try {
    //         const response = await axios.post('/api/createActivity', data, {
    //             headers: {
    //                 'Content-Type': 'multipart/form-data'
    //             }
    //         });
    //         console.log('Activity created successfully:', response.data);
    //     } catch (error) {
    //         console.error('Error creating activity:', error);
    //     } finally {
    //         setLoading(false);
    //     }
    // };

    return (
        <div className="container mx-auto mt-4 p-4 bg-white shadow-md rounded-lg">
            <h1 className="text-2xl font-bold mb-4">Create New Activity</h1>

            <form onSubmit={handleSubmit}>
                <FormGroup className="mb-4">
                    <FormLabel>Name</FormLabel>
                    <FormControl
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                    />
                </FormGroup>
                <FormGroup className="mb-4">
                    <FormLabel>Start Date and Time</FormLabel>
                    <FormControl
                        type="datetime-local"
                        name="startDate"
                        value={formData.startDate}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                    />
                </FormGroup>
                <FormGroup className="mb-4">
                    <FormLabel>End Date and Time</FormLabel>
                    <FormControl
                        type="datetime-local"
                        name="endDate"
                        value={formData.endDate}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                    />
                </FormGroup>
                <FormGroup className="mb-4">
                    <FormLabel>Description</FormLabel>
                    <FormControl
                        as="textarea"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                    />
                </FormGroup>
                <FormGroup className="mb-4">
                    <FormLabel>Slots</FormLabel>
                    <FormControl
                        type="number"
                        name="slots"
                        value={formData.slots}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                    />
                </FormGroup>
                <FormGroup className="mb-4">
                    <FormLabel>Image</FormLabel>
                    <FormControl
                        type="file"
                        name="image"
                        ref={image}
                        accept=".png, .jpg"
                        className="w-full px-3 py-2 border rounded"
                    />
                </FormGroup>
                <FormGroup className="mb-4">
                    <FormLabel>Faculty</FormLabel>
                    <FormControl
                        as="select"
                        name="facultyId"
                        value={formData.facultyId}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                    >
                        <option value="">Select Faculty</option>
                        {faculties.map((faculty) => (
                            <option key={faculty.id} value={faculty.id}>
                                {faculty.name}
                            </option>
                        ))}
                    </FormControl>
                </FormGroup>
                <FormGroup className="mb-4">
                    <FormLabel>Semester</FormLabel>
                    <FormControl
                        as="select"
                        name="semesterId"
                        value={formData.semesterId}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                    >
                        <option value="">Select Semester</option>
                        {semesters.map((semester) => (
                            <option key={semester.id} value={semester.id}>
                                {semester.description}
                            </option>
                        ))}
                    </FormControl>
                </FormGroup>
                <FormGroup className="mb-4">
                    <FormLabel>Term</FormLabel>
                    <FormControl
                        as="select"
                        name="termId"
                        value={formData.termId}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                    >
                        <option value="">Select Term</option>
                        {terms.map((term) => (
                            <option key={term.id} value={term.id}>
                                {term.name}
                            </option>
                        ))}
                    </FormControl>
                </FormGroup>
                {loading ? (
                    <div className="flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white">
                        <Loading size={30} />
                    </div>
                ) : (
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Update Activity
                    </button>
                )}
            </form>
        </div>
    );
}


export default AssistanActivityForm;