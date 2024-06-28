import { Link } from "react-router-dom";
import Chart from "react-apexcharts";
import { useContext, useEffect, useState } from "react";
import {
  convertTimestampToDatetime,
  getDatetimeDetail,
} from "../../utils/Common";
import { authApi, endpoints } from "../../apis/API";
import { UserContext } from "../../context/Context";
import ChartLoading from "../../common/ChartLoading";
import TableLoading from "./../../common/TableLoading";

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
      categories: [],
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
      categories: [],
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

const Joined = () => {
  const [score, setScore] = useState(0);
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [semester, setSemester] = useState(6);
  const getObject = (scores) => {
    let obj = {};
    let sum = 0;
    scores.forEach((d) => {
      let tmp = convertTimestampToDatetime(d[0].dateConfirm).getMonth() + 1;

      if (obj[tmp]) {
        obj[tmp]["countMonth"]++;
        obj[tmp]["sumScore"] += d[2].scoreValue;
      } else {
        obj[tmp] = { countMonth: 1, sumScore: d[2].scoreValue };
      }

      sum += d[2].scoreValue;
    });
    setScore(sum);
    return obj;
  };

  const fillArray = (obj) => {
    let arr1 = Object.keys(obj).map((key) => key);
    let arr2 = Object.keys(obj).map((key) => obj[key]["countMonth"]);
    let arr3 = Object.keys(obj).map((key) => obj[key]["sumScore"]);
    chartConfig1.series[0].data = arr2;
    chartConfig2.series[0].data = arr3;
    chartConfig1.options.xaxis.categories = arr1;
    chartConfig2.options.xaxis.categories = arr1;
  };
  const fetchData = async () => {
    try {
      setLoading(true);
      let res = await authApi().get(endpoints["scoreStudentResult"](semester));
      setResult(res.data.result);
      fillArray(getObject(res.data.result));
      setLoading(false);
    } catch (ex) {
      console.log(ex);
    }
  };
  useEffect(() => {
    fetchData();
  }, [semester]);

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
                {loading ? "..." : result.length}
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
                {loading ? "..." : score}
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
        {loading ? (
          <ChartLoading />
        ) : (
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
        )}
        {loading ? (
          <ChartLoading />
        ) : (
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
        )}
      </div>

      <div className="mt-5">
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg min-h-96 z-0 mt-2">
          {loading ? (
            <TableLoading />
          ) : (
            <table class="w-full text-sm text-left rtl:text-right text-gray-700 dark:text-gray-400">
              <thead class="text-xs text-white uppercase bg-stone-700">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    ID
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Tên hoạt động
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Ngày xác nhận
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Ngày đăng ký
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Bằng chứng tham gia
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Ghi chú
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Tên điểm
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Điểm
                  </th>
                </tr>
              </thead>
              <tbody>
                {result.map((element) => (
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                    >
                      {element[0].id}
                    </th>
                    <td class="px-6 py-4">{element[3].name}</td>
                    <td class="px-6 py-4">
                      {getDatetimeDetail(element[0].dateConfirm)}
                    </td>
                    <td class="px-6 py-4">
                      {getDatetimeDetail(element[1].dateRegister)}
                    </td>
                    <td class="px-6 py-4">
                      <img
                        alt="proof"
                        src={element[1].proofJoining}
                        className="max-h-40 max-w-56"
                      />
                    </td>
                    <td class="px-6 py-4 text-center">{element[1].note}</td>
                    <td class="px-6 py-4">{element[2].scoreName}</td>
                    <td class="px-6 py-4">{element[2].scoreValue}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default Joined;
