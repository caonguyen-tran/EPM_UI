const SubComment = () => {
  return (
    <>
      <hr class="my-2 ml-16 border-gray-200" />
      <div class="flex flex-row pt-1 md-10 md:ml-16">
        <img
          class="w-12 h-12 border-2 border-gray-300 rounded-full"
          alt="Emily's avatar"
          src="https://images.unsplash.com/photo-1581624657276-5807462d0a3a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&fit=facearea&faces=1&faceindex=1&facepad=2.5&w=500&h=500&q=80"
        />
        <div class="flex-col mt-1">
          <div class="flex items-center flex-1 px-4 font-bold leading-tight">
            Emily
            <span class="ml-2 text-xs font-normal text-gray-500">
              5 days ago
            </span>
          </div>
          <div class="flex-1 px-2 ml-2 text-sm font-medium leading-loose text-gray-600">
            I created it using TailwindCSS
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
