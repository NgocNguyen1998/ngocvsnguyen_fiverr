import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Footer = () => {
  return (
    <div>
      <Foot className=" bg-white-800 text-gray-100 ">
        <div className=" container grid grid-cols-2 mx-auto gap-x-3 gap-y-8 sm:grid-cols-3 md:grid-cols-5 pt-16 pb-4">
          <div className="flex flex-col space-y-5">
            <h2 className="font-bold" style={{ fontSize: "20px" }}>
              Category
            </h2>
            <div
              className="flex flex-col space-y-2 text-gray-400"
              style={{ fontSize: "17px" }}
            >
              <Link
                className=" text-gray-500 pb-2 hover:text-pink-400 "
                rel="noopener noreferrer"
                to="#"
              >
                Graphics & Design
              </Link>
              <Link
                className=" text-gray-500 pb-2 hover:text-pink-400"
                rel="noopener noreferrer"
                to="#"
              >
                Digital Marketing
              </Link>
              <Link
                className=" text-gray-500 pb-2 hover:text-pink-400 "
                rel="noopener noreferrer"
                to="#"
              >
                Writing & Translation
              </Link>
              <Link
                className=" text-gray-500 pb-2 hover:text-pink-400"
                rel="noopener noreferrer"
                to="#"
              >
                Video & Animation
              </Link>
              <Link
                className=" text-gray-500 pb-2 hover:text-pink-400"
                rel="noopener noreferrer"
                to="#"
              >
                Music & Audio
              </Link>
              <Link
                className=" text-gray-500 pb-2 hover:text-pink-400"
                rel="noopener noreferrer"
                to="#"
              >
                Programming & Tech
              </Link>
              <Link
                className=" text-gray-500 pb-2 hover:text-pink-400"
                rel="noopener noreferrer"
                to="#"
              >
                Data
              </Link>
              <Link
                className=" text-gray-500 pb-2 hover:text-pink-400"
                rel="noopener noreferrer"
                to="#"
              >
                Business
              </Link>
              <Link
                className=" text-gray-500 pb-2 hover:text-pink-400"
                rel="noopener noreferrer"
                to="#"
              >
                Lifestyle
              </Link>
              <Link
                className=" text-gray-500 pb-2 hover:text-pink-400"
                rel="noopener noreferrer"
                to="#"
              >
                Sitemap
              </Link>
            </div>
          </div>
          <div className="flex flex-col space-y-5">
            <h2 className="font-bold" style={{ fontSize: "20px" }}>
              About
            </h2>
            <div
              className="flex flex-col space-y-2  text-gray-400"
              style={{ fontSize: "17px" }}
            >
              <Link
                className=" text-gray-500 pb-2 hover:text-pink-400"
                rel="noopener noreferrer"
                to="#"
              >
                Careers
              </Link>
              <Link
                className=" text-gray-500 pb-2 hover:text-pink-400"
                rel="noopener noreferrer"
                to="#"
              >
                Press & News
              </Link>
              <Link
                className=" text-gray-500 pb-2 hover:text-pink-400"
                rel="noopener noreferrer"
                to="#"
              >
                Partnerships
              </Link>
              <Link
                className=" text-gray-500 pb-2 hover:text-pink-400"
                rel="noopener noreferrer"
                to="#"
              >
                Privacy Policy
              </Link>
              <Link
                className=" text-gray-500 pb-2 hover:text-pink-400"
                rel="noopener noreferrer"
                to="#"
              >
                Terms of Service
              </Link>
              <Link
                className=" text-gray-500 pb-2 hover:text-pink-400"
                rel="noopener noreferrer"
                to="#"
              >
                Intellectual Property Claims
              </Link>
              <Link
                className=" text-gray-500 pb-2 hover:text-pink-400"
                rel="noopener noreferrer"
                to="#"
              >
                Investor Relations
              </Link>
            </div>
          </div>
          <div className="flex flex-col space-y-5">
            <h2 className="font-bold" style={{ fontSize: "20px" }}>
              Support
            </h2>
            <div
              className="flex flex-col space-y-2 text-gray-400"
              style={{ fontSize: "17px" }}
            >
              <Link
                className="text-gray-500 pb-2 hover:text-pink-400"
                rel="noopener noreferrer"
                to="#"
              >
                Help & Support
              </Link>
              <Link
                className="text-gray-500 pb-2 hover:text-pink-400"
                rel="noopener noreferrer"
                to="#"
              >
                Trust & Safety
              </Link>
              <Link
                className="text-gray-500 pb-2 hover:text-pink-400"
                rel="noopener noreferrer"
                to="#"
              >
                Selling on Fiverr
              </Link>
              <Link
                className="text-gray-500 pb-2 hover:text-pink-400"
                rel="noopener noreferrer"
                to="#"
              >
                Buying on Fiverr
              </Link>
            </div>
          </div>
          <div className="flex flex-col space-y-5">
            <h2 className="font-bold" style={{ fontSize: "20px" }}>
              Community
            </h2>
            <div
              className="flex flex-col space-y-2 text-gray-400"
              style={{ fontSize: "17px" }}
            >
              <Link
                className="text-gray-500 pb-2 hover:text-pink-400"
                rel="noopener noreferrer"
                to="#"
              >
                Events
              </Link>
              <Link
                className="text-gray-500 pb-2 hover:text-pink-400"
                rel="noopener noreferrer"
                to="#"
              >
                Blog
              </Link>
              <Link
                className="text-gray-500 pb-2 hover:text-pink-400"
                rel="noopener noreferrer"
                to="#"
              >
                Forum
              </Link>
              <Link
                className="text-gray-500 pb-2 hover:text-pink-400"
                rel="noopener noreferrer"
                to="#"
              >
                Community Standards
              </Link>
              <Link
                className="text-gray-500 pb-2 hover:text-pink-400"
                rel="noopener noreferrer"
                to="#"
              >
                Podcast
              </Link>

              <Link
                className="text-gray-500 pb-2 hover:text-pink-400"
                rel="noopener noreferrer"
                to="#"
              >
                Influencers
              </Link>
              <Link
                className="text-gray-500 pb-2 hover:text-pink-400"
                rel="noopener noreferrer"
                to="#"
              >
                Affiliates
              </Link>

              <Link
                className="text-gray-500 pb-2 hover:text-pink-400"
                rel="noopener noreferrer"
                to="#"
              >
                Become a Seller
              </Link>
            </div>
          </div>
          <div className="flex flex-col space-y-5">
            <h2 className="font-bold" style={{ fontSize: "20px" }}>
              More From Fiverr
            </h2>
            <div
              className="flex flex-col space-y-2 text-gray-400"
              style={{ fontSize: "17px" }}
            >
              <Link
                className="text-gray-500 pb-2 hover:text-pink-400"
                rel="noopener noreferrer"
                to="#"
              >
                Fiverr Business
              </Link>
              <Link
                className="text-gray-500 pb-2 hover:text-pink-400"
                rel="noopener noreferrer"
                to="#"
              >
                Fiverr Pro
              </Link>
              <Link
                className="text-gray-500 pb-2 hover:text-pink-400"
                rel="noopener noreferrer"
                to="#"
              >
                Fiverr Studios
              </Link>
              <Link
                className="text-gray-500 pb-2 hover:text-pink-400"
                rel="noopener noreferrer"
                to="#"
              >
                Fiverr Logo Maker
              </Link>
              <Link
                className="text-gray-500 pb-2 hover:text-pink-400"
                rel="noopener noreferrer"
                to="#"
              >
                Fiverr Guides
              </Link>
              <Link
                className="text-gray-500 pb-2 hover:text-pink-400"
                rel="noopener noreferrer"
                to="#"
              >
                Get Inspired
              </Link>
              <Link
                className="text-gray-500 pb-2 hover:text-pink-400"
                rel="noopener noreferrer"
                to="#"
              >
                Fiverr Select
              </Link>
              <Link
                className="text-gray-500 pb-2 hover:text-pink-400"
                rel="noopener noreferrer"
                to="#"
              >
                ClearVoice
                <br />
                <span className="text-gray-300">Content Marketing</span>
              </Link>
              <Link
                className="text-gray-500 pb-2 hover:text-pink-400"
                rel="noopener noreferrer"
                to="#"
              >
                Fiverr Workspace
                <br />
                <span className="text-gray-300"> Invoice Software</span>
              </Link>
              <Link
                className="text-gray-500 pb-2 hover:text-pink-400"
                rel="noopener noreferrer"
                to="#"
              >
                Learn
                <br />
                <span className="text-gray-300"> Online Courses</span>
              </Link>
              <Link
                className="text-gray-500 pb-2 hover:text-pink-400"
                rel="noopener noreferrer"
                to="#"
              >
                Working Not Working
              </Link>
            </div>
          </div>
        </div>
        <div
          style={{ borderTop: "1px solid #9ca3af" }}
          className=" py-5  px-6 mt-12 text-base text-black"
        >
          <div className="flex items-center justify-between container">
            <div className="left items-center flex text-gray-400">
              <p className="text-gray-500 font-bold text-3xl pb-2 mb-0">
                fiverr{" "}
              </p>
              <div className="text-gray-400 ml-8">
                © Fiverr International Ltd. 2022
              </div>
            </div>
            <div className="right flex gap-5">
              <div className="flex items-center gap-7 text-2xl mr-7 text-gray-500 ">
                <i className="fa-brands fa-twitter hover:text-pink-400 transition-all"></i>
                <i className="fa-brands fa-facebook hover:text-pink-400 transition-all"></i>
                <i className="fa-brands fa-linkedin hover:text-pink-400 transition-all"></i>
                <i className="fa-brands fa-pinterest hover:text-pink-400 transition-all"></i>
                <i className="fa-brands fa-instagram hover:text-pink-400 transition-all"></i>
              </div>
              <div className="flex gap-8">
                <button className="text-gray-400 flex gap-3 items-center">
                  <svg
                    width="18"
                    fill="#7A7D85"
                    height="18"
                    viewBox="0 0 18 18"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 1C4.58875 1 1 4.58875 1 9C1 13.4113 4.58875 17 9 17C13.4113 17 17 13.4113 17 9C17 4.58875 13.4113 1 9 1ZM8.53125 4.92676C7.81812 4.89612 7.11218 4.7959 6.43811 4.63293C6.54578 4.37781 6.6626 4.13281 6.78857 3.90063C7.30542 2.94824 7.93994 2.27991 8.53125 2.03784V4.92676ZM8.53125 5.86499V8.53125H5.60339C5.64465 7.4906 5.82202 6.45752 6.11536 5.51782C6.8927 5.71362 7.70874 5.83215 8.53125 5.86499ZM8.53125 9.46875V12.135C7.70874 12.1678 6.8927 12.2864 6.11536 12.4822C5.82202 11.5425 5.64465 10.5094 5.60339 9.46875H8.53125ZM8.53125 13.0732V15.9622C7.93994 15.7201 7.30542 15.0518 6.78857 14.0994C6.6626 13.8672 6.54578 13.6222 6.43811 13.3671C7.11218 13.2041 7.81799 13.1039 8.53125 13.0732ZM9.46875 13.0732C10.1819 13.1039 10.8878 13.2041 11.5619 13.3671C11.4542 13.6222 11.3374 13.8672 11.2114 14.0994C10.6946 15.0518 10.0601 15.7201 9.46875 15.9622V13.0732ZM9.46875 12.135V9.46875H12.3966C12.3553 10.5094 12.178 11.5425 11.8846 12.4822C11.1073 12.2864 10.2913 12.1678 9.46875 12.135ZM9.46875 8.53125V5.86499C10.2913 5.83215 11.1073 5.71362 11.8846 5.51782C12.178 6.45752 12.3553 7.4906 12.3966 8.53125H9.46875ZM9.46875 4.92676V2.03784C10.0601 2.27991 10.6946 2.94824 11.2114 3.90063C11.3374 4.13281 11.4542 4.37781 11.5619 4.63293C10.8878 4.7959 10.1819 4.89612 9.46875 4.92676ZM12.0354 3.45349C11.8007 3.02087 11.5457 2.63953 11.2769 2.31421C12.2141 2.63428 13.0631 3.14636 13.7771 3.8031C13.3699 4.02124 12.931 4.21069 12.4694 4.36902C12.3384 4.0509 12.1936 3.74487 12.0354 3.45349ZM5.9646 3.45349C5.8064 3.74487 5.66162 4.0509 5.53064 4.36902C5.06897 4.21069 4.63013 4.02112 4.2229 3.8031C4.93689 3.14636 5.78589 2.63428 6.72314 2.31421C6.45435 2.63953 6.19946 3.02075 5.9646 3.45349ZM5.2135 5.25012C4.89355 6.27368 4.70544 7.38953 4.66492 8.53125H1.95349C2.05383 7.00769 2.63892 5.61438 3.5564 4.50525C4.06555 4.79724 4.62317 5.047 5.2135 5.25012ZM4.66492 9.46875C4.70544 10.6106 4.89355 11.7263 5.2135 12.7499C4.62317 12.953 4.06555 13.2028 3.5564 13.4948C2.63892 12.3856 2.05383 10.9923 1.95349 9.46875H4.66492ZM5.53064 13.631C5.66162 13.9491 5.8064 14.2551 5.9646 14.5465C6.19946 14.9791 6.45435 15.3605 6.72314 15.6858C5.78589 15.3657 4.93689 14.8536 4.22302 14.1969C4.63 13.9789 5.06897 13.7893 5.53064 13.631ZM12.0354 14.5465C12.1936 14.2551 12.3384 13.9491 12.4694 13.631C12.931 13.7893 13.3699 13.9789 13.7771 14.1969C13.0631 14.8536 12.2141 15.3657 11.2769 15.6858C11.5457 15.3605 11.8005 14.9792 12.0354 14.5465ZM12.7865 12.7499C13.1064 11.7263 13.2946 10.6105 13.3351 9.46875H16.0465C15.9462 10.9923 15.3611 12.3856 14.4436 13.4948C13.9344 13.2028 13.3768 12.953 12.7865 12.7499ZM13.3351 8.53125C13.2946 7.3894 13.1064 6.27368 12.7865 5.25012C13.3768 5.047 13.9344 4.79724 14.4436 4.50525C15.3611 5.61438 15.9462 7.00769 16.0465 8.53125H13.3351Z"
                      stroke-width="0.2"
                    ></path>
                  </svg>
                  <span className="label font-semibold hover:text-pink-400">
                    English
                  </span>
                </button>
                <button className="text-gray-400 font-semibold hover:text-pink-400">
                  $ USD
                </button>
                <span className="text-gray-400 text-xl hover:text-pink-400">
                  <svg
                    width="32"
                    height="32"
                    fill="#7A7D85"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="16"
                      cy="16"
                      r="15.5"
                      fill="white"
                      stroke="currentColor"
                      className="circle-wrapper"
                    ></circle>
                    <path d="M16 11.5833C17.1506 11.5833 18.0834 10.6506 18.0834 9.49999C18.0834 8.3494 17.1506 7.41666 16 7.41666C14.8494 7.41666 13.9167 8.3494 13.9167 9.49999C13.9167 10.6506 14.8494 11.5833 16 11.5833Z"></path>
                    <path d="M23.9167 12.4167H8.08333C7.86232 12.4167 7.65036 12.5045 7.49408 12.6607C7.3378 12.817 7.25 13.029 7.25 13.25C7.25 13.471 7.3378 13.683 7.49408 13.8392C7.65036 13.9955 7.86232 14.0833 8.08333 14.0833H13.5V25.5417C13.5 25.8179 13.6097 26.0829 13.8051 26.2782C14.0004 26.4736 14.2654 26.5833 14.5417 26.5833C14.8179 26.5833 15.0829 26.4736 15.2782 26.2782C15.4736 26.0829 15.5833 25.8179 15.5833 25.5417V19.5H16.4167V25.5417C16.4167 25.8179 16.5264 26.0829 16.7218 26.2782C16.9171 26.4736 17.1821 26.5833 17.4583 26.5833C17.7346 26.5833 17.9996 26.4736 18.1949 26.2782C18.3903 26.0829 18.5 25.8179 18.5 25.5417V14.0833H23.9167C24.1377 14.0833 24.3496 13.9955 24.5059 13.8392C24.6622 13.683 24.75 13.471 24.75 13.25C24.75 13.029 24.6622 12.817 24.5059 12.6607C24.3496 12.5045 24.1377 12.4167 23.9167 12.4167Z"></path>
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </Foot>
    </div>
  );
};

export const Foot = styled.footer`
  font-size: 16px;
  Link {
    color: gray;
  }
`;
