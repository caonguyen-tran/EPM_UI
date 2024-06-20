import { Link } from "react-router-dom";
import { useEffect } from "react";
import Chart from "react-apexcharts";
import { Card, CardBody, CardHeader } from "react-bootstrap";
const chartConfig = {
  type: "line",
  height: 240,
  series: [
    {
      name: "Sales",
      data: [50, 40, 300, 320, 500, 350, 200, 230, 500],
    },
  ],
  options: {
    chart: {
      toolbar: {
        show: false,
      },
    },
    title: {
      show: "",
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#020617"],
    stroke: {
      lineCap: "round",
      curve: "smooth",
    },
    markers: {
      size: 0,
    },
    xaxis: {
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      labels: {
        style: {
          colors: "#616161",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 400,
        },
      },
      categories: [
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    yaxis: {
      labels: {
        style: {
          colors: "#616161",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 400,
        },
      },
    },
    grid: {
      show: true,
      borderColor: "#dddddd",
      strokeDashArray: 5,
      xaxis: {
        lines: {
          show: true,
        },
      },
      padding: {
        top: 5,
        right: 20,
      },
    },
    fill: {
      opacity: 0.8,
    },
    tooltip: {
      theme: "dark",
    },
  },
};

const data = [
  [
    {
      id: 2,
      dateConfirm: 1716648895000,
    },
    {
      id: 9,
      dateRegister: 1716648895000,
      rollup: true,
      proofJoining:
        "https://res.cloudinary.com/dndakokcz/image/upload/v1716640766/lflqzauyyavx8jqoenwl.jpg",
      note: null,
      accept: true,
      file: null,
    },
    {
      id: 9,
      scoreName: "Tham gia",
      description: "Điểm tham gia",
      scoreValue: 5,
      numberOfScore: 60,
    },
    {
      id: 8,
      name: "Chuyên đề Tiny Machine Learning",
      startDate: 1717990200000,
      endDate: 1718076600000,
      description:
        "Tiny Machine Learning được tổ chức bởi khoa Công Nghệ Thông Tin",
      active: true,
      image:
        "https://res.cloudinary.com/dndakokcz/image/upload/v1716648812/yhxzwbkqbhilw8uylbov.jpg",
      slots: 60,
      close: false,
      file: null,
    },
  ],
  [
    {
      id: 2,
      dateConfirm: 1716648895000,
    },
    {
      id: 26,
      dateRegister: 1718819266000,
      rollup: true,
      proofJoining:
        "https://res.cloudinary.com/dndakokcz/image/upload/v1718913910/wevsawa9eiy69ooy8vbi.jpg",
      note: "user 3 send proof",
      accept: true,
      file: null,
    },
    {
      id: 11,
      scoreName: "Tham gia",
      description: "Diem tham gia",
      scoreValue: 5,
      numberOfScore: 60,
    },
    {
      id: 12,
      name: "Báo cáo chuyên đề kỹ thuật phần mềm",
      startDate: 1716688800000,
      endDate: 1716656400000,
      description:
        "BÁO CÁO CHUYÊN ĐỀ VỀ KỸ THUẬT PHẦN MỀM\r\nBCV: Nguyễn Chí Cường - một Software Architect có uy tín từ Công ty Cadena.",
      active: true,
      image:
        "https://res.cloudinary.com/dndakokcz/image/upload/v1718266872/m5rzfwum0e06hpmoncxc.jpg",
      slots: 60,
      close: false,
      file: null,
    },
  ],
];
const Test = () => {
  return (
    <div class="max-w-xl min-h-80 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Link href="#">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Noteworthy technology acquisitions 2021
        </h5>
      </Link>
      <div className="w-full h-full">
        <Chart {...chartConfig} />
      </div>
    </div>
  );
};

export default Test;
