import { useState } from "react";
import { getDatetimeDetail } from "../../utils/Common";
import API, { endpoints } from "../../apis/API";
import Loading from "../../common/Loading";
import SubComment from "./SubComment";

const Comment = ({ ...props }) => {
  const [show, setShow] = useState(false);
  const [subComments, setSubComment] = useState([]);
  const [loading, setLoading] = useState(false);

  const showSubComment = async (parentId) => {
    try {
      setShow(true);
      setLoading(true);
      let res = await API.get(endpoints["getSubComments"](parentId));
      setSubComment(res.data.result);
      setLoading(false);
    } catch (ex) {
      console.log(ex);
    }
  };

  return (
    <div class="flex-col w-full py-4 mx-auto bg-white border-b-2 border-r-2 border-gray-200 shadow-md px-3 mb-5">
      <div class="flex flex-row relative">
        <img
          class="object-cover w-12 h-12 border-2 border-gray-300 rounded-full"
          alt="Noob master's avatar"
          src={props.item.userResponse.avatar}
        />
        <div class="flex-col mt-1">
          <div class="flex items-center flex-1 px-4 font-bold leading-tight">
            {props.item.userResponse.username}
            <span class="ml-2 text-xs font-normal text-gray-500">
              {getDatetimeDetail(props.item.createdDate)}
            </span>
          </div>
          <div class="flex-1 px-2 ml-2 text-sm font-medium leading-loose text-gray-600">
            {props.item.content}
          </div>
          <button class="inline-flex items-center px-1 pt-2 ml-1 flex-column">
            <svg
              class="w-5 h-5 ml-2 text-gray-600 cursor-pointer fill-current hover:text-gray-900"
              viewBox="0 0 95 78"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M29.58 0c1.53.064 2.88 1.47 2.879 3v11.31c19.841.769 34.384 8.902 41.247 20.464 7.212 12.15 5.505 27.83-6.384 40.273-.987 1.088-2.82 1.274-4.005.405-1.186-.868-1.559-2.67-.814-3.936 4.986-9.075 2.985-18.092-3.13-24.214-5.775-5.78-15.377-8.782-26.914-5.53V53.99c-.01 1.167-.769 2.294-1.848 2.744-1.08.45-2.416.195-3.253-.62L.85 30.119c-1.146-1.124-1.131-3.205.032-4.312L27.389.812c.703-.579 1.49-.703 2.19-.812zm-3.13 9.935L7.297 27.994l19.153 18.84v-7.342c-.002-1.244.856-2.442 2.034-2.844 14.307-4.882 27.323-1.394 35.145 6.437 3.985 3.989 6.581 9.143 7.355 14.715 2.14-6.959 1.157-13.902-2.441-19.964-5.89-9.92-19.251-17.684-39.089-17.684-1.573 0-3.004-1.429-3.004-3V9.936z"
                fill-rule="nonzero"
              />
            </svg>
          </button>
          <button class="inline-flex items-center px-1 -ml-1 flex-column">
            <svg
              class="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
              ></path>
            </svg>
          </button>
          {props.item.isParent ? (
          !show ? (
            <button
              onClick={() => showSubComment(props.item.id)}
              className="font-medium text-center min-h-10 min-w-36 absolute text-white bg-blue-700 hover:bg-blue-800 top-full left-3/4 rounded shadow-md"
            >
              Xem thêm...
            </button>
          ) : loading ? (
            <div className="font-medium text-center min-h-10 min-w-36 absolute text-white bg-blue-700 hover:bg-blue-800 top-full left-3/4 rounded shadow-md flex justify-center items-center">
              <Loading size={30} />
            </div>
          ) : (
            subComments.map((item) => <SubComment item={item} />)
          )
        ) : (
          <></>
        )}
        </div>
      </div>
    </div>
  );
};

export default Comment;
