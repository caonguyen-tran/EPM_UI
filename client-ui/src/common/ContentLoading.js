const ContentLoading = () => {
  return (
    <div
      role="status"
      class="space-y-8 animate-pulse rtl:space-x-reverse md:flex md:items-center px-4 w-4/5 min-h-svh flex-col mt-10"
    >
      <div class="w-full mb-10">
        <div class="h-2.5 bg-gray-700 rounded-full w-48 mb-4"></div>
        <div class="h-2 bg-gray-700 rounded-full max-w-[480px] mb-2.5"></div>
        <div class="h-2 bg-gray-700 rounded-full mb-2.5"></div>
        <div class="h-2 bg-gray-700 rounded-full max-w-[440px] mb-2.5"></div>
        <div class="h-2 bg-gray-700 rounded-full max-w-[460px] mb-2.5"></div>
        <div class="h-2 bg-gray-700 rounded-full max-w-[360px] mb-2.5"></div>
        <div class="h-2 bg-gray-700 rounded-full max-w-[360px]"></div>
      </div>
      <div class="flex items-center justify-center w-full h-96 bg-gray-700 rounded sm:w-96">
        <svg
          class="w-10 h-10 text-gray-200 dark:text-gray-600"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 18"
        >
          <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
        </svg>
      </div>
      <span class="sr-only">Loading...</span>
    </div>
  );
};

export default ContentLoading;
