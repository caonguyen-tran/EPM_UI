import { useNavigate } from "react-router-dom";


const MissingReportDetail = () => {

    const nav = useNavigate();


    const data = [
        {
            "id": 4,
            "proofJoining": "https://res.cloudinary.com/dndakokcz/image/upload/v1718266010/akc0kjkphseqp1jxyedd.png",
            "status": "Pending",
            "createdDate": 1718266008000,
            "note": "test create missing report",
            "file": null
        },
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
        }
    ];

    const convertTimestampToDatetime = (timestamp) => {
        let datetime = new Date(timestamp)
        return `${datetime.getDate()}/${datetime.getMonth()}/${datetime.getFullYear()} - ${datetime.getHours()}:${datetime.getMinutes()}`
    };

    const accept = () => {
        nav('/assistant/missing-report/list')
    }

    const reject = () => {
        nav('/assistant/missing-report/list')
    }


    return (<div className="container mx-auto mt-4 p-4">
        <div className="bg-white shadow-md rounded-lg p-6">
            <h1 className="text-3xl font-bold text-gray-800">{data[1].name}</h1>
            <p className="text-lg font-semibold text-gray-600">Proof Joining: <span className="font-normal"></span></p>
            <img
                src={data[0].proofJoining}
                className="w-full h-64 object-cover mt-4 rounded-md shadow-sm"
            />
            <div className="mt-4">
                <p className="text-lg font-semibold text-gray-600">Status: <span className="font-normal">{data[0].status}</span></p>
                <p className="text-lg font-semibold text-gray-600">
                    Created Date:{" "}
                    <span className="font-normal">
                        {convertTimestampToDatetime(data[0].createdDate)}
                    </span>
                </p>
                <p className="text-lg font-semibold text-gray-600">Note: <span className="font-normal">{data[0].note}</span></p>
                <p className="text-lg font-semibold text-gray-600">Mô tả hoạt động: <span className="font-normal">{data[1].description}</span></p>
                <p className="text-lg font-semibold text-gray-600">
                    Hoạt động bắt đầu từ:{" "}
                    <span className="font-normal">
                        {convertTimestampToDatetime(data[1].startDate)}
                    </span>
                </p>
                <p className="text-lg font-semibold text-gray-600">
                    Hoạt động kết thúc lúc:{" "}
                    <span className="font-normal">
                        {convertTimestampToDatetime(data[1].endDate)}
                    </span>
                </p>
                <p className="text-lg font-semibold text-gray-600">Hình ảnh hoạt động: <span className="font-normal"></span></p>
                <img
                    src={data[1].image}
                    className="w-full h-64 object-cover mt-4 rounded-md shadow-sm"
                />
            </div>
        </div>
        <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center" onClick={accept}>Chấp nhận báo thiếu</button>
        <button className="bg-white border border-gray-300 hover:border-gray-400 text-red-800 font-bold py-2 px-4 rounded inline-flex items-center" onClick={reject}>Từ chối báo thiếu</button>

    </div>
    );
}

export default MissingReportDetail;