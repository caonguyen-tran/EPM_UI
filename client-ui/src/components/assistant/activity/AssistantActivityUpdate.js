import React, { useEffect, useRef, useState } from "react";
import { Button, Form, FormControl, FormGroup, FormLabel } from "react-bootstrap";
import { useParams } from "react-router-dom";
import API, { authApi, endpoints } from "../../../apis/API";
import Loading from "../../../common/Loading";

const AssistantActivityUpdate = () => {

    const [activity, setActivity] = useState([]);
    const { id } = useParams();


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

    const [formData, setFormData] = useState({
        name: '',
        startDate: '',
        endDate: '',
        description: '',
        active: '',
        close: '',
        image: '',
        faculty: '',
        semester: '',
        term: ''
    });

    const image = useRef();
    const [faculties, setFaculties] = useState([]);
    const [semesters, setSemesters] = useState([]);
    const [terms, setTerms] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    };


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
    }

    const loadFaculties = async () => {
        try {
            const auth = await authApi();
            const res = await auth.get(endpoints['faculties']);
            setFaculties(res.data);
        } catch (ex) {
            console.error(ex);
        }
    }

    useEffect(() => {
        loadSemesters();
        loadFaculties();
        loadTerms();
    }, []);

    useEffect(() => {
        if (activity) {
            setFormData({
                name: activity.name || '',
                startDate: activity.startDate ? new Date(activity.startDate).toISOString().slice(0, 16) : '',
                endDate: activity.endDate ? new Date(activity.endDate).toISOString().slice(0, 16) : '',
                description: activity.description || '',
                active: activity.active ? '1' : '0',
                close: activity.close ? '1' : '0',
                image: activity.image || '',
                faculty: activity.faculty ? activity.faculty.id : '',
                semester: activity.semester ? activity.semester.id : '',
                term: activity.term ? activity.term.id : ''
            });

            console.log('FormData before submit:', formData);
        }
    }, [activity]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);

        const formDataWithImage = new FormData();
        for (const key in formData) {
            if (key !== 'close' && key !== 'active')
                formDataWithImage.append(key, formData[key]);
        }
        if (image.current.files[0]) {
            formDataWithImage.append('file', image.current.files[0]);
        }

        console.log('FormData after submit:', formData);

        let id1 = parseInt(id, 10);

        try {
            let res = await authApi().post(endpoints["updateActivity"](id1), formDataWithImage, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            if (res.status === 200) {
                alert('Activity updated successfully');
            } else {
                alert('Failed to update activity');
            }
        } catch (error) {
            console.error('Error updating activity:', error);
            alert('Error updating activity');
        } finally {
            setLoading(false);
        }
    };

    if (!activity) {
        return <Loading />;
    }

    return (
        <div className="container mx-auto mt-4 p-4 bg-white shadow-md rounded-lg">
            <h1 className="text-2xl font-bold mb-4">Update Activity</h1>
            <Form onSubmit={handleSubmit}>
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
                    <FormLabel>Active</FormLabel>
                    <FormControl
                        as="select"
                        name="active"
                        value={formData.active}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                    >
                        <option value='1'>Đang diễn ra</option>
                        <option value='0'>Đã kết thúc</option>
                    </FormControl>
                </FormGroup>
                <FormGroup className="mb-4">
                    <FormLabel>Close</FormLabel>
                    <FormControl
                        as="select"
                        name="close"
                        value={formData.close}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                    >
                        <option value='1'>Đang mở đăng ký</option>
                        <option value='0'>Đã đóng đăng ký</option>
                    </FormControl>
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
                <div className="bg-gray-100 rounded-lg p-4 border border-gray-300 mb-4">
                    <p className="text-gray-600 text-sm mb-2">Ảnh hiện tại</p>
                    <div className="w-full h-64 overflow-hidden">
                        <img
                            src={formData.image}
                            alt="Current Image"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
                <FormGroup className="mb-4">
                    <FormLabel>Faculty</FormLabel>
                    <FormControl
                        as="select"
                        name="facultyId"
                        value={formData.faculty}
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
                        value={formData.semester}
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
                        value={formData.term}
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
                    <Button type="submit" variant="primary" className="rounded">
                        Update activity
                    </Button>
                )}
            </Form>
        </div>
    );
}

export default AssistantActivityUpdate;