import React from 'react'

export const AppFooter: React.FC = () => {
  return (
    <>
      <footer className="relative flex flex-wrap px-2 py-3 bg-transparent mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <span className="text-lg sm:text-center text-white">
            <a
              href="https://www.notion.so/Datenschutzerkl-rung-PretzelDAO-9a24d1a52198483e8c9cc728c554cb61"
              className=""
            >
              Privacy Policy
            </a>
          </span>
          <div className="flex mt-4 space-x-12 sm:justify-center sm:mt-0">
            <a
              href="https://www.notion.so/pretzeldao/PretzelDAO-b965318493954321ba7bf94b890f00c3"
              className=""
            >
              <svg
                className="w-6 h-6"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="12 0.19 487.619 510.941"
              >
                <path
                  d="M96.085 91.118c15.81 12.845 21.741 11.865 51.43 9.884l279.888-16.806c5.936 0 1-5.922-.98-6.906L379.94 43.686c-8.907-6.915-20.773-14.834-43.516-12.853L65.408 50.6c-9.884.98-11.858 5.922-7.922 9.883zm16.804 65.228v294.491c0 15.827 7.909 21.748 25.71 20.769l307.597-17.799c17.81-.979 19.794-11.865 19.794-24.722V136.57c0-12.836-4.938-19.758-15.84-18.77l-321.442 18.77c-11.863.997-15.82 6.931-15.82 19.776zm303.659 15.797c1.972 8.903 0 17.798-8.92 18.799l-14.82 2.953v217.412c-12.868 6.916-24.734 10.87-34.622 10.87-15.831 0-19.796-4.945-31.654-19.76l-96.944-152.19v147.248l30.677 6.922s0 17.78-24.75 17.78l-68.23 3.958c-1.982-3.958 0-13.832 6.921-15.81l17.805-4.935V210.7l-24.721-1.981c-1.983-8.903 2.955-21.74 16.812-22.736l73.195-4.934L358.186 335.22V198.836l-25.723-2.952c-1.974-10.884 5.927-18.787 15.819-19.767zM42.653 23.919l281.9-20.76c34.618-2.969 43.525-.98 65.283 14.825l89.986 63.247c14.848 10.876 19.797 13.837 19.797 25.693v346.883c0 21.74-7.92 34.597-35.608 36.564L136.64 510.14c-20.785.991-30.677-1.971-41.562-15.815l-66.267-85.978C16.938 392.52 12 380.68 12 366.828V58.495c0-17.778 7.922-32.608 30.653-34.576z"
                  fillRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="https://www.notion.so/Datenschutzerkl-rung-PretzelDAO-9a24d1a52198483e8c9cc728c554cb61"
              className=""
            >
              <svg
                className="w-6 h-6"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 40 40"
              >
                <path d="M34.083 34.083h-5.927V24.8c0-2.213-.04-5.063-3.083-5.063-3.087 0-3.56 2.412-3.56 4.902v9.442h-5.926V14.995h5.69v2.608h.08a6.243 6.243 0 0 1 5.613-3.083c6.007 0 7.115 3.951 7.115 9.092l-.002 10.47ZM8.9 12.386a3.456 3.456 0 0 1-3.44-3.44 3.456 3.456 0 0 1 3.439-3.44 3.456 3.456 0 0 1 3.44 3.44 3.456 3.456 0 0 1-3.44 3.44Zm2.963 21.697H5.93V14.995h5.933v19.088ZM37.037.003H2.952A2.933 2.933 0 0 0 0 2.886v34.228A2.935 2.935 0 0 0 2.952 40h34.085A2.94 2.94 0 0 0 40 37.114V2.884A2.938 2.938 0 0 0 37.037 0v.003Z" />
              </svg>
            </a>
            <a href="https://twitter.com/PretzelDAO" className="">
              <svg
                className="w-6 h-6"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512.002 512.002"
              >
                <path d="M500.398 94.784a194.219 194.219 0 0 1-24.763 9.023 109.468 109.468 0 0 0 22.287-39.193 8.258 8.258 0 0 0-12.078-9.619c-17.945 10.643-37.305 18.292-57.605 22.764-20.449-19.981-48.222-31.353-76.934-31.353-60.606 0-109.913 49.306-109.913 109.91 0 4.773.302 9.52.9 14.201-75.206-6.603-145.124-43.568-193.136-102.463a8.259 8.259 0 0 0-13.537 1.061c-9.738 16.709-14.886 35.82-14.886 55.265 0 26.484 9.455 51.611 26.158 71.246a93.118 93.118 0 0 1-14.711-6.568 8.26 8.26 0 0 0-12.267 7.03c-.012.487-.012.974-.012 1.468 0 39.531 21.276 75.122 53.805 94.52a94.762 94.762 0 0 1-8.362-1.214 8.254 8.254 0 0 0-7.731 2.638 8.25 8.25 0 0 0-1.681 7.994c12.04 37.591 43.039 65.24 80.514 73.67-31.082 19.468-66.626 29.665-103.939 29.665-7.786 0-15.616-.457-23.279-1.364A8.258 8.258 0 0 0 3.8 418.617c47.935 30.735 103.361 46.98 160.284 46.98 111.903 0 181.907-52.769 220.926-97.037 48.657-55.199 76.562-128.261 76.562-200.451 0-3.016-.046-6.061-.139-9.097 19.197-14.463 35.724-31.967 49.173-52.085a8.256 8.256 0 0 0-.545-9.906 8.245 8.245 0 0 0-9.663-2.237z" />
              </svg>
            </a>
            <a href="https://PretzelDAO.com" className="">
              <svg
                className="w-6 h-6"
                fill="white"
                viewBox="0 100 1000 800"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                strokeMiterlimit="2"
                strokeLinejoin="round"
                clipRule="evenodd"
              >
                <path
                  d="M816.869 510.903c5.666-24.134 8.662-49.284 8.662-75.128v-65.592c0-73.911-60.006-133.917-133.917-133.917-28.293 0-54.549 8.793-76.174 23.789-18.667-52.874-50.399-99.581-91.329-136.251 47.721-32.509 105.392-51.518 167.503-51.518 164.523 0 297.896 133.373 297.896 297.897v65.592c0 50.632-7.649 99.477-21.857 145.448l-27.799-12.971-122.985-57.349Z"
                  transform="matrix(.95202 0 0 .95202 25.86 25.7)"
                />
                <path
                  d="M272.855 674.56c58.731 55.288 137.797 89.174 224.716 89.174 94.134 0 179.058-39.746 238.897-103.36l131.775 61.447a100.864 100.864 0 0 0 23.97 7.708c-89.694 120.294-233.072 198.185-394.642 198.185-153.939 0-291.365-70.708-381.547-181.39a100.66 100.66 0 0 0 14.796-5.532l142.035-66.232Zm-239.41-75.316C15.429 548.086 5.632 493.074 5.632 435.775v-65.592c0-164.524 133.373-297.897 297.897-297.897 164.523 0 297.896 133.373 297.896 297.897v40.257l-169.723-79.143c-16.672-54.968-67.781-95.031-128.173-95.031-73.911 0-133.917 60.006-133.917 133.917v65.592c0 32.526 4.746 63.954 13.583 93.632L59.209 587.222l-25.764 12.022Z"
                  transform="matrix(.95202 0 0 .95202 25.86 25.7)"
                />
                <path
                  d="m358.202 483.985 122.87 57.295L116.96 711.069c-33.549 15.644-74.524 2.14-102.043-30.322a26.222 26.222 0 0 1 8.855-40.8c21.926-10.239 49.297-23.002 49.297-23.002l285.133-132.96Z"
                  transform="matrix(.95202 0 0 .95202 25.86 25.7)"
                />
                <path
                  d="M212.855 527.5H822c41.83 0 77.346-27.036 90.027-64.586 2.476-7.223.639-14.966-4.965-20.932-5.604-5.967-14.33-9.47-23.589-9.47C856.127 432.5 822 432.5 822 432.5H212.855v95Z"
                  transform="matrix(.76355 .35605 -.43984 .94324 470.026 -105.635)"
                />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}
