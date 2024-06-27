import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { authApi, endpoints } from "../../../apis/API";
import Loading from "../../../common/Loading";

const UploadCSV = ({activityId}) => {
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);

        const formData = new FormData();
        formData.append('file', event.target.file.files[0]);

        let id = Number(activityId);

        try {
            let res = await authApi().post(endpoints['uploadCsvRollup'](id), formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            if (res.status === 200) {
                alert('File uploaded successfully');
            } else {
                alert('Failed to upload file');
            }
        } catch (error) {
            console.error('Error uploading file:', error);
            alert('Error uploading file');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="file">
                    <Form.Label>File csv to upload</Form.Label>
                    <Form.Control type="file" accept=".csv" name="file" />
                </Form.Group>
                {loading ? (
                    <div className="flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white">
                        <Loading size={30} />
                    </div>
                ) : (
                    <Form.Group className="mb-3">
                        <Button type="submit" value="primary">Upload</Button>
                    </Form.Group>
                )}
            </Form>
        </Container>
    );
};

export default UploadCSV;
