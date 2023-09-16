const navigation = [
  {
    section: "Our Information",
    supports: [
      { name: "About us", href: "#" },
      { name: "Analytics", href: "#" },
      { name: "How Our Business Work", href: "#" },
    ],
  },
  {
    section: "Our poliecies",
    supports: [
      { name: "Privacy Policy", href: "#" },
      { name: "TERMS AND CONDITIONS", href: "#" },
      { name: "Refund and Returns Policy", href: "#" },
    ],
  },
  {
    section: "Contact us",
    supports: [
      { name: "Contact Us", href: "#" },
      { name: "FAQs", href: "#" },
      { name: "Holisticly administrate parallel core", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer
      className="hidden md:block bg-white pb-16  lg:pb-0"
      aria-labelledby="footer-heading"
    >
      <div className="px-6 lg:px-8 pt-5 bg-white lg:pt-10">
        <div className="hidden md:block  border-t border-b border-gray-300"></div>
        <div className="w-full">
          <div className="lg:px-6 md:grid md:grid-cols-3 lg:grid-cols-4 space-y-10 md:space-y-0 md:gap-8 mt-10">
            <div className="space-y-3">
              <p className="text-sm lg:text-base leading-6 text-gray-800">
                United States
              </p>
              <p className="text-sm lg:text-base leading-6 text-gray-800">
                Phone: +8801-xxx xxx xxx{" "}
              </p>
              <p className="text-sm lg:text-base leading-6 text-gray-800">
                E-mail: salontrainingcourses@gmail.com
              </p>
              <div className="flex  pt-2">
                <div className="flex justify-start gap-2">
                  <a
                    href=""
                    className="p-2 rounded-full bg-pink-600 hover:bg-pink-700"
                    target="_blank"
                  >
                    <svg
                      className="text-white h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      enableBackground="new 0 0 24 24"
                      viewBox="0 0 24 24"
                      id="facebook"
                    >
                      <path d="M17.9902344,1.5957031c-1.0087891-0.1067505-2.0227051-0.1586304-3.0371094-0.1552734C11.5898438,1.4404297,9.5,3.5819702,9.5,7.0302734v2.3408203H6.6748047c-0.276001-0.0001831-0.4998779,0.2234497-0.5,0.4994507v3.8511353c-0.0001831,0.276001,0.2234497,0.4998169,0.4994507,0.5H9.5v7.71875c-0.0001831,0.276001,0.2234497,0.4998169,0.4994507,0.5h3.9780884c0.276001,0.0001831,0.4998169-0.2234497,0.5-0.4994507v-7.7192993h2.8164673c0.2512207-0.000061,0.463501-0.1864014,0.4960938-0.4355469l0.4970703-3.8505859c0.0357056-0.2736816-0.1572266-0.5245361-0.4309692-0.5602417c-0.0216064-0.0028076-0.043335-0.0042114-0.0651245-0.0042114h-3.3135376V7.4121094c0-0.9697266,0.1953125-1.375,1.4082031-1.375l2.0390625-0.0009766c0.276001,0.0001221,0.4998169-0.2234497,0.5-0.4994507V2.0917969C18.4248657,1.8408203,18.2390137,1.6286621,17.9902344,1.5957031z M17.4248047,5.0361328l-1.5390625,0.0009766c-2.1582031,0-2.4082031,1.3554688-2.4082031,2.375v2.4590454c-0.0001221,0.2759399,0.2234497,0.4998169,0.4994507,0.499939h3.2456665l-0.3681641,2.8505859h-2.8769531c-0.276001-0.0001221-0.4998169,0.2234497-0.5,0.4994507v7.7192993H10.5v-7.71875c0.0001831-0.276001-0.2234497-0.4998169-0.4993896-0.5H7.1748047v-2.8505859H10c0.276001,0.0001831,0.4998169-0.2234497,0.5-0.4994507V7.0302734c0-2.8740234,1.664978-4.5898438,4.453125-4.5898438c1.0087891,0,1.9199219,0.0546875,2.4716797,0.1025391V5.0361328z"></path>
                    </svg>
                  </a>

                  <a
                    href=""
                    className="p-2 rounded-full bg-rose-500 hover:bg-rose-600"
                    target="_blank"
                  >
                    <svg
                      className="text-white h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      id="instagram"
                    >
                      <g
                        fill="none"
                        stroke="#303c42"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        data-name="<Group>"
                      >
                        <rect
                          width="21"
                          height="21"
                          x="1.5"
                          y="1.5"
                          data-name="<Path>"
                          rx="5.48"
                          ry="5.48"
                        ></rect>
                        <circle
                          cx="12"
                          cy="12"
                          r="5.5"
                          data-name="<Path>"
                        ></circle>
                        <circle
                          cx="18"
                          cy="5"
                          r=".5"
                          data-name="<Path>"
                        ></circle>
                      </g>
                    </svg>
                  </a>
                  <a
                    href=""
                    className="p-2 rounded-full bg-sky-500 hover:bg-sky-600"
                    target="_blank"
                  >
                    <svg
                      className="text-white h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      id="youtube"
                    >
                      <g data-name="Youtube 1">
                        <g data-name="<Group>">
                          <g data-name="<Group>">
                            <path
                              fill="none"
                              stroke="#303c42"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9.5 7.5v9l7-4.5-7-4.5z"
                              data-name="<Path>"
                            ></path>
                          </g>
                          <path
                            fill="none"
                            stroke="#303c42"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.13 4.17 5 3.93a56.22 56.22 0 0 1 7-.43h0a56.22 56.22 0 0 1 7 .43l1.9.24a3 3 0 0 1 2.63 3v9.7a3 3 0 0 1-2.63 3l-1.9.24a56.22 56.22 0 0 1-7 .43h0a56.22 56.22 0 0 1-7-.43l-1.9-.24a3 3 0 0 1-2.63-3V7.15a3 3 0 0 1 2.66-2.98Z"
                            data-name="<Path>"
                          ></path>
                        </g>
                      </g>
                    </svg>
                  </a>
                  <a
                    href=""
                    className="p-2 rounded-full bg-cyan-500 hover:bg-cyan-600"
                    target="_blank"
                  >
                    <svg
                      className="h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="2500"
                      height="2500"
                      viewBox="0 0 999.9 999.9"
                      id="pinterest"
                    >
                      <path d="M0 500c2.6-141.9 52.7-260.4 150.4-355.4S364.6 1.3 500 0c145.8 2.6 265.3 52.4 358.4 149.4 93.1 97 140.3 213.9 141.6 350.6-2.6 140.6-52.7 258.8-150.4 354.5-97.7 95.6-214.2 144.1-349.6 145.4-46.9 0-93.7-7.2-140.6-21.5 9.1-14.3 18.2-30.6 27.3-48.8 10.4-22.1 23.4-63.8 39.1-125 3.9-16.9 9.8-39.7 17.6-68.4 9.1 15.6 24.7 29.9 46.9 43 58.6 27.3 120.4 24.7 185.5-7.8 67.7-39.1 114.6-99.6 140.6-181.6 23.4-85.9 20.5-165.7-8.8-239.2C778.3 277 725.9 224 650.4 191.4c-95-27.3-187.5-24.4-277.3 8.8s-152.3 90.2-187.5 170.9C176.5 401 171 430.7 169 460c-2 29.3-1 57.9 2.9 85.9s13.7 53.1 29.3 75.2 36.5 39.1 62.5 50.8c6.5 2.6 11.7 2.6 15.6 0 5.2-2.6 10.4-13 15.6-31.2 5.2-18.2 7.2-30.6 5.9-37.1-1.3-2.6-3.9-7.2-7.8-13.7-27.3-44.3-36.5-90.8-27.3-139.6 9.1-48.8 29.3-90.2 60.5-124 48.2-43 104.5-66.4 168.9-70.3 64.4-3.9 119.5 13.7 165 52.7 24.7 28.6 40.7 63.1 47.8 103.5s7.2 79.1 0 116.2c-7.2 37.1-19.9 71.9-38.1 104.5-32.6 50.8-71 76.8-115.2 78.1-26-1.3-47.2-11.4-63.5-30.3s-21.2-40.7-14.6-65.4c2.6-14.3 10.4-42.3 23.4-84 13-41.7 20.2-72.9 21.5-93.7-3.9-49.5-26.7-74.9-68.4-76.2-32.6 3.9-56.6 18.6-72.3 43.9s-24.1 54.4-25.4 86.9c3.9 37.8 9.8 63.8 17.6 78.1-14.3 58.6-25.4 105.5-33.2 140.6-2.6 9.1-9.8 37.1-21.5 84s-18.2 82.7-19.5 107.4V957C206.3 914 133.3 851.9 80 770.5 26.7 689.1 0 598.9 0 500z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            {navigation.map((data, i) => (
              <div key={i} className="space-y-4">
                <h3 className="text-base lg:text-lg uppercase font-semibold text-gray-900">
                  {data?.section}
                </h3>
                <ul role="list" className="space-y-3">
                  {data.supports?.map((item,i) => (
                    <li key={i}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 capitalize text-gray-600 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="border-t border-gray-900/10 py-6 sm:mt-10 mt-6 lg:mt-10 lg:px-6">
          <p className="text-base leading-5 text-gray-500">
            © 2023 <span className="text-gray-800">OZ BABY MIlk</span>. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
