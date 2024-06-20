import { Link } from "react-router-dom";
import ContentLoading from "../../common/ContentLoading";
import Chart from "react-apexcharts";
import { useEffect, useState } from "react";

const chartConfig1 = {
  type: "line",
  height: 240,
  series: [
    {
      name: "Sales",
      data: [],
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

const chartConfig2 = {
  type: "bar",
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
    plotOptions: {
      bar: {
        columnWidth: "40%",
        borderRadius: 2,
      },
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
let data = [
  [
    {
      id: 2,
      dateConfirm: 1717990200000,
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
const Joined = () => {
  const [score, setScore] = useState(0);

  const convertToDateTime = (timestamp) => {
    return new Date(timestamp);
  };

  const getObject = () => {
    let obj = {};
    data.forEach((d) => {
      let tmp = convertToDateTime(d[0].dateConfirm).getMonth() + 1;

      if (obj[tmp]) {
        obj[tmp]++;
      } else {
        obj[tmp] = 1;
      }
    });
    return obj;
  };

  const fillArray = (obj) => {
    let arr1 = Object.keys(obj).map((key) => key);
    let arr2 = Object.keys(obj).map((key) => obj[key]);
    chartConfig1.series[0].data = arr2;
    chartConfig1.options.xaxis.categories = arr1;
  };

  const sumScore = () => {
    let sum = 0;
    data.forEach((d) => {
      sum += d[2].scoreValue;
    });
    setScore(sum);
  };

  useEffect(() => {
    fillArray(getObject());
    sumScore();
  }, []);
  return (
    <div className="min-h-lvh">
      <div class="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4 mt-6">
        <div class="min-w-0 rounded-lg shadow-xs overflow-hidden bg-gray-50 dark:bg-gray-800 shadow-md">
          <div class="p-4 flex items-center">
            <div class="p-3 rounded-full text-orange-500 dark:text-orange-100 bg-orange-100 dark:bg-orange-500 mr-4">
              <svg fill="currentColor" viewBox="0 0 20 20" class="w-5 h-5">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
              </svg>
            </div>
            <div>
              <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                Hoạt động đã tham gia
              </p>
              <p class="text-lg font-semibold text-gray-700 dark:text-gray-200">
                {data.length}
              </p>
            </div>
          </div>
        </div>
        <div class="min-w-0 rounded-lg shadow-xs overflow-hidden bg-gray-50 dark:bg-gray-800 shadow-md">
          <div class="p-4 flex items-center">
            <div class="p-3 rounded-full text-green-500 dark:text-green-100 bg-green-100 dark:bg-green-500 mr-4">
              <svg fill="currentColor" viewBox="0 0 20 20" class="w-5 h-5">
                <path
                  fill-rule="evenodd"
                  d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <div>
              <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                Điểm
              </p>
              <p class="text-lg font-semibold text-gray-700 dark:text-gray-200">
                {score}
              </p>
            </div>
          </div>
        </div>
        <div class="min-w-0 rounded-lg shadow-xs overflow-hidden bg-gray-50 dark:bg-gray-800 shadow-md">
          <div class="p-4 flex items-center">
            <div class="p-3 rounded-full text-blue-500 dark:text-blue-100 bg-blue-100 dark:bg-blue-500 mr-4">
              <svg fill="currentColor" viewBox="0 0 20 20" class="w-5 h-5">
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
              </svg>
            </div>
            <div>
              <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                Xếp hạng
              </p>
              <p class="text-lg font-semibold text-gray-700 dark:text-gray-200">
                376
              </p>
            </div>
          </div>
        </div>
        <div class="min-w-0 rounded-lg shadow-xs overflow-hidden bg-gray-50 dark:bg-gray-800 shadow-md">
          <div class="p-4 flex items-center">
            <div class="p-3 rounded-full text-teal-500 dark:text-teal-100 bg-teal-100 dark:bg-teal-500 mr-4">
              <svg fill="currentColor" viewBox="0 0 20 20" class="w-5 h-5">
                <path
                  fill-rule="evenodd"
                  d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <div>
              <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                Đang đăng ký
              </p>
              <p class="text-lg font-semibold text-gray-700 dark:text-gray-200">
                35
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-around">
        <div class="w-5/12 min-h-80 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <Link href="#" className="no-underline">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Hoạt động đã tham gia theo tháng
            </h5>
          </Link>
          <div className="h-full w-full">
            <Chart {...chartConfig1} />
          </div>
        </div>
        <div class="w-5/12 min-h-80 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <Link href="#" className="no-underline">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Điểm rèn luyện theo tháng
            </h5>
          </Link>
          <div className="h-full w-full">
            <Chart {...chartConfig2} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Joined;
