import { useRef, useState } from "react";
import { Alert, Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import API, { endpoints } from "../../apis/API";
import Loading from "../../common/Loading";

const Register = () => {
    const fields = [{
        label: "Email",
        type: "text",
        field: "email"
    }, {
        label: "Username",
        type: "text",
        field: "username"
    }, {
        label: "Mật khẩu",
        type: "password",
        field: "password"
    }, {
        label: "Xác nhận mật khẩu",
        type: "password",
        field: "confirm"
    }]

    const [user, setUser] = useState({});
    const avatar = useRef();
    const nav = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const change = (e, field) => {
        setUser(current => {
            return { ...current, [field]: e.target.value }
        })
    }

    const register = async (e) => {
        e.preventDefault();
        setLoading(true);

        if (user.password !== user.confirm) {
            setError("Mật khẩu không khớp");
            setLoading(false);
            return;
        }

        let form = new FormData();

        for (let key in user)
            if (key !== 'confirm')
                form.append(key, user[key]);

        if (avatar.current && avatar.current.files[0])
            form.append('file', avatar.current.files[0]);

        try {
            let res = await API.post(endpoints['register'], form, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            if (res.status === 201)
                nav('/verify');
        } catch (ex) {
            console.error(ex);
        } finally {
            setLoading(false);
        }
    }

    return (
        <Container>
            <h1 className="text-center text-info mt-1">ĐĂNG KÝ NGƯỜI DÙNG</h1>
            <Form onSubmit={register}>
                {fields.map(f => <Form.Group className="mb-3" controlId={f.field} key={f.field}>
                    <Form.Label>{f.label}</Form.Label>
                    <Form.Control onChange={e => change(e, f.field)} type={f.type} placeholder={f.label}></Form.Control>
                </Form.Group>)}

                <Form.Group className="mb-3" controlId="avatar">
                    <Form.Label>Ảnh đại diện</Form.Label>
                    <Form.Control type="file" accept=".png,.jpg" ref={avatar} />
                </Form.Group>

                {error && <Alert variant="danger">{error}</Alert>}

                {loading ? (
                    <div className="flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white">
                        <Loading size={30} />
                    </div>
                ) : (
                    <Form.Group className="mb-3">
                        <Button type="submit" value="primary">Đăng ký</Button>
                    </Form.Group>
                )}
            </Form>
        </Container>
    )
}

export default Register;