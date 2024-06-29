import RelativeTime from "../../utils/Relative";

const SubComment = ({ item }) => {
  return (
    <>
      <hr class="my-2 ml-16 border-gray-200" />
      <div class="flex flex-row pt-1 md-10 md:ml-16">
        <img
          class="w-12 h-12 border-2 border-gray-300 rounded-full"
          alt="Emily's avatar"
          src={item.userResponse.avatar}
        />
        <div class="flex-col mt-1">
          <div class="flex items-center flex-1 px-4 font-bold leading-tight">
            {item.userResponse.username}
            <RelativeTime date={item.createdDate} classNameProps='ml-2 text-xs font-normal text-gray-500'/>
          </div>
          <div class="flex-1 px-2 ml-2 text-sm font-medium leading-loose text-gray-600">
            {item.content}
          </div>
          <button class="inline-flex items-center px-1 -ml-1 flex-column">
            <svg
              class="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-700"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default SubComment;
