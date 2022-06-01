export const CheckInDate = () => {
  return (
    <div>
      <div inline-datepicker="">
        <div className="datepicker datepicker-inline active block">
          <div className="datepicker-picker inline-block rounded-lg bg-white dark:bg-gray-700 shadow-lg p-4">
            <div className="datepicker-header">
              <div
                className="datepicker-title bg-white dark:bg-gray-700 dark:text-white px-2 py-3 text-center font-semibold"
                style="display: none;"
              ></div>
              <div className="datepicker-controls flex justify-between mb-2">
                <button
                  type="button"
                  className="bg-white dark:bg-gray-700 rounded-lg text-gray-500 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white text-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-gray-200 prev-btn"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
                <button
                  type="button"
                  className="text-sm rounded-lg text-gray-900 dark:text-white bg-white dark:bg-gray-700 font-semibold py-2.5 px-5 hover:bg-gray-100 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-200 view-switch"
                >
                  February 2022
                </button>
                <button
                  type="button"
                  className="bg-white dark:bg-gray-700 rounded-lg text-gray-500 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white text-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-gray-200 next-btn"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="datepicker-main p-1">
              <div className="datepicker-view flex">
                <div className="days">
                  <div className="days-of-week grid grid-cols-7 mb-1">
                    <span className="dow text-center h-6 leading-6 text-sm font-medium text-gray-500 dark:text-gray-400">
                      Su
                    </span>
                    <span className="dow text-center h-6 leading-6 text-sm font-medium text-gray-500 dark:text-gray-400">
                      Mo
                    </span>
                    <span className="dow text-center h-6 leading-6 text-sm font-medium text-gray-500 dark:text-gray-400">
                      Tu
                    </span>
                    <span className="dow text-center h-6 leading-6 text-sm font-medium text-gray-500 dark:text-gray-400">
                      We
                    </span>
                    <span className="dow text-center h-6 leading-6 text-sm font-medium text-gray-500 dark:text-gray-400">
                      Th
                    </span>
                    <span className="dow text-center h-6 leading-6 text-sm font-medium text-gray-500 dark:text-gray-400">
                      Fr
                    </span>
                    <span className="dow text-center h-6 leading-6 text-sm font-medium text-gray-500 dark:text-gray-400">
                      Sa
                    </span>
                  </div>
                  <div className="datepicker-grid w-64 grid grid-cols-7">
                    <span
                      className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day prev text-gray-500"
                      data-date="1643497200000"
                    >
                      30
                    </span>
                    <span
                      className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day prev text-gray-500"
                      data-date="1643583600000"
                    >
                      31
                    </span>
                    <span
                      className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day"
                      data-date="1643670000000"
                    >
                      1
                    </span>
                    <span
                      className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day"
                      data-date="1643756400000"
                    >
                      2
                    </span>
                    <span
                      className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day"
                      data-date="1643842800000"
                    >
                      3
                    </span>
                    <span
                      className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day"
                      data-date="1643929200000"
                    >
                      4
                    </span>
                    <span
                      className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day"
                      data-date="1644015600000"
                    >
                      5
                    </span>
                    <span
                      className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day"
                      data-date="1644102000000"
                    >
                      6
                    </span>
                    <span
                      className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day"
                      data-date="1644188400000"
                    >
                      7
                    </span>
                    <span
                      className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day"
                      data-date="1644274800000"
                    >
                      8
                    </span>
                    <span
                      className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day"
                      data-date="1644361200000"
                    >
                      9
                    </span>
                    <span
                      className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day"
                      data-date="1644447600000"
                    >
                      10
                    </span>
                    <span
                      className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day"
                      data-date="1644534000000"
                    >
                      11
                    </span>
                    <span
                      className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day"
                      data-date="1644620400000"
                    >
                      12
                    </span>
                    <span
                      className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day"
                      data-date="1644706800000"
                    >
                      13
                    </span>
                    <span
                      className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day"
                      data-date="1644793200000"
                    >
                      14
                    </span>
                    <span
                      className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day"
                      data-date="1644879600000"
                    >
                      15
                    </span>
                    <span
                      className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day"
                      data-date="1644966000000"
                    >
                      16
                    </span>
                    <span
                      className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day"
                      data-date="1645052400000"
                    >
                      17
                    </span>
                    <span
                      className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day"
                      data-date="1645138800000"
                    >
                      18
                    </span>
                    <span
                      className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day"
                      data-date="1645225200000"
                    >
                      19
                    </span>
                    <span
                      className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day"
                      data-date="1645311600000"
                    >
                      20
                    </span>
                    <span
                      className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day"
                      data-date="1645398000000"
                    >
                      21
                    </span>
                    <span
                      className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day"
                      data-date="1645484400000"
                    >
                      22
                    </span>
                    <span
                      className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day"
                      data-date="1645570800000"
                    >
                      23
                    </span>
                    <span
                      className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day"
                      data-date="1645657200000"
                    >
                      24
                    </span>
                    <span
                      className="datepicker-cell block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center font-semibold text-sm day selected bg-blue-700 text-white dark:bg-blue-600 focused"
                      data-date="1645743600000"
                    >
                      25
                    </span>
                    <span
                      className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day"
                      data-date="1645830000000"
                    >
                      26
                    </span>
                    <span
                      className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day"
                      data-date="1645916400000"
                    >
                      27
                    </span>
                    <span
                      className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day"
                      data-date="1646002800000"
                    >
                      28
                    </span>
                    <span
                      className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day next text-gray-500"
                      data-date="1646089200000"
                    >
                      1
                    </span>
                    <span
                      className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day next text-gray-500"
                      data-date="1646175600000"
                    >
                      2
                    </span>
                    <span
                      className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day next text-gray-500"
                      data-date="1646262000000"
                    >
                      3
                    </span>
                    <span
                      className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day next text-gray-500"
                      data-date="1646348400000"
                    >
                      4
                    </span>
                    <span
                      className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day next text-gray-500"
                      data-date="1646434800000"
                    >
                      5
                    </span>
                    <span
                      className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day next text-gray-500"
                      data-date="1646521200000"
                    >
                      6
                    </span>
                    <span
                      className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day next text-gray-500"
                      data-date="1646607600000"
                    >
                      7
                    </span>
                    <span
                      className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day next text-gray-500"
                      data-date="1646694000000"
                    >
                      8
                    </span>
                    <span
                      className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day next text-gray-500"
                      data-date="1646780400000"
                    >
                      9
                    </span>
                    <span
                      className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day next text-gray-500"
                      data-date="1646866800000"
                    >
                      10
                    </span>
                    <span
                      className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day next text-gray-500"
                      data-date="1646953200000"
                    >
                      11
                    </span>
                    <span
                      className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day next text-gray-500"
                      data-date="1647039600000"
                    >
                      12
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="datepicker-footer">
              <div className="datepicker-controls flex space-x-2 mt-2">
                <button
                  type="button"
                  className="button today-btn text-white bg-blue-700 dark:bg-blue-600 hover:bg-blue-800 dark:hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center w-1/2"
                  style="display: none;"
                >
                  Today
                </button>
                <button
                  type="button"
                  className="button clear-btn text-gray-900 dark:text-white bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center w-1/2"
                  style="display: none;"
                >
                  Clear
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
