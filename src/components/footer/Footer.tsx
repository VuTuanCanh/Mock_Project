import * as React from "react";
import payment from "../../assets/payment-image.png";
import logo from "../../assets/junno-logo.jpg";
import appStore from "../../assets/app_store.png";
import googlePlay from "../../assets/google_play.png";

export interface IFooterProps {}

export default function Footer(props: IFooterProps) {
  return (
    <footer className="px-5 bg-gray-200">
      <div className="footer-top pt-14 pb-14">
        <div className="container mx-auto grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <div>
              <div className="mb-9 flex justify-center md:justify-normal">
                <img src={logo} alt="logo" />
              </div>
              <div className="text-center md:text-start">
                <p className="text-gray-500 text-sm">
                  We are a team of designers and developers that create high quality Magento,
                  Prestashop, Opencart.
                </p>
              </div>
              <div className="flex items-center my-7 justify-center md:justify-normal">
                <div>
                  <i className="fas fa-phone-alt text-3xl mr-4 text-red-500"></i>
                </div>
                <div>
                  <p className="text-sm text-gray-500">NEED HELP?</p>
                  <a href="tel:(+123)456789" className="hover:text-red-500">
                    (+123)456789
                  </a>
                </div>
              </div>
              <div className="social flex justify-center md:justify-normal">
                <div className="w-9 h-9 rounded-full bg-white flex justify-center items-center mx-2 group cursor-pointer">
                  <i className="fab fa-facebook-f text-lg group-hover:text-red-500"></i>
                </div>
                <div className="w-9 h-9 rounded-full bg-white flex justify-center items-center mx-2 group cursor-pointer">
                  <i className="fab fa-twitter text-lg group-hover:text-red-500"></i>
                </div>
                <div className="w-9 h-9 rounded-full bg-white flex justify-center items-center mx-2 group cursor-pointer">
                  <i className="fab fa-youtube text-lg group-hover:text-red-500"></i>
                </div>
                <div className="w-9 h-9 rounded-full bg-white flex justify-center items-center mx-2 group cursor-pointer">
                  <i className="fab fa-instagram-square text-lg group-hover:text-red-500"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-2">
            <ul className="text-center md:text-start">
              <p className="font-bold relative pb-3 mb-5 border border-b-gray-300 after:absolute after:left-2/4 after:-translate-x-2/4 after:w-16 after:h-1 after:bg-red-500 after:bottom-0 md:after:left-0 md:after:translate-x-0">
                INFORMATION
              </p>
              <li className="cursor-pointer mb-2 text-sm text-gray-500">
                <span className="hover:text-red-500">Delivery</span>
              </li>
              <li className="cursor-pointer mb-2 text-sm text-gray-500">
                <span className="hover:text-red-500">About Us</span>
              </li>
              <li className="cursor-pointer mb-2 text-sm text-gray-500">
                <span className="hover:text-red-500">Secure Payment</span>
              </li>
              <li className="cursor-pointer mb-2 text-sm text-gray-500">
                <span className="hover:text-red-500">Contact Us</span>
              </li>
              <li className="cursor-pointer mb-2 text-sm text-gray-500">
                <span className="hover:text-red-500">Sitemap</span>
              </li>
              <li className="cursor-pointer mb-2 text-sm text-gray-500">
                <span className="hover:text-red-500">Stores</span>
              </li>
            </ul>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-2">
            <ul className="text-center md:text-start">
              <p className="font-bold relative pb-3 mb-5 border border-b-gray-300 after:absolute after:left-2/4 after:-translate-x-2/4 after:w-16 after:h-1 after:bg-red-500 after:bottom-0 md:after:left-0 md:after:translate-x-0">
                CUSTOM LINKS
              </p>
              <li className="cursor-pointer mb-2 text-sm text-gray-500">
                <span className="hover:text-red-500">Legal Notice</span>
              </li>
              <li className="cursor-pointer mb-2 text-sm text-gray-500">
                <span className="hover:text-red-500">Price Drop</span>
              </li>
              <li className="cursor-pointer mb-2 text-sm text-gray-500">
                <span className="hover:text-red-500">New Products</span>
              </li>
              <li className="cursor-pointer mb-2 text-sm text-gray-500">
                <span className="hover:text-red-500">Best Sales</span>
              </li>
              <li className="cursor-pointer mb-2 text-sm text-gray-500">
                <span className="hover:text-red-500">Login</span>
              </li>
              <li className="cursor-pointer mb-2 text-sm text-gray-500">
                <span className="hover:text-red-500">My Account</span>
              </li>
            </ul>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <ul className="text-center md:text-start">
              <p className="font-bold relative pb-3 mb-5 border border-b-gray-300 after:absolute after:left-2/4 after:-translate-x-2/4 after:w-16 after:h-1 after:bg-red-500 after:bottom-0 md:after:left-0 md:after:translate-x-0">
                NEWSLETTER
              </p>
              <p className="text-sm text-gray-500">
                You may unsubscribe at any moment. For that purpose, please find our contact info in
                the legal notice.
              </p>
              <div className="my-6 flex">
                <input
                  type="text"
                  className="border border-gray-300 text-gray-900 text-sm rounded-l-full block w-full p-2.5 outline-none"
                  placeholder="Your email address"
                />
                <button className="bg-red-500 rounded-r-full w-24 text-white text-sm hover:bg-gray-500">
                  Sign Up
                </button>
              </div>
              <div className="flex justify-center md:justify-normal">
                <div className="mr-4">
                  <img src={appStore} alt="App Store" className="cursor-pointer" />
                </div>
                <div>
                  <img src={googlePlay} alt="Google Play" className="cursor-pointer" />
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom pb-10">
        <div className="container mx-auto grid grid-cols-12 grid-">
          <div className="col-span-12 mb-5 md:col-span-4 text-center">
            <p>Copyright &copy; Rau Câu Team 💪😎🤳. All Rights Reserved</p>
          </div>
          <div className="col-span-12 mb-5 md:col-span-8">
            <img src={payment} alt="payments" className="cursor-pointer mx-auto" />
          </div>
        </div>
      </div>
    </footer>
  );
}
