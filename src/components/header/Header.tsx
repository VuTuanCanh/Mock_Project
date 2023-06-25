import React, { useState } from "react";
import junnoLogo from "../../assets/junno-logo.jpg";
import { NavLink, useLocation, useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import bannerSubmenu from "../../assets/custom_banner_submenu.jpg";
import NestedList from "./MenuNav";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Cookies from "js-cookie";
import { IUserProfile } from "../../types/userProfile";

export interface IHeaderProps {
  refresh: boolean;
  setRefresh: React.Dispatch<React.SetStateAction<boolean>>;
}

// const getDataLocalStorage = (value, initialValue) => {};

export default function Header(props: IHeaderProps) {
  const { refresh, setRefresh } = props;
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const location = useLocation();
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    Cookies.remove("auth");
    localStorage.removeItem("userInfo");
    navigate("/");
    setRefresh(!refresh);
  };

  const dataUserInfo = localStorage.getItem("userInfo");

  return (
    <>
      <header className="px-5 md:container mx-auto pt-7 relative">
        <div className="header-pc hidden md:block">
          <div className="flex">
            <div className="logo grow-0 mr-8">
              <Link to={"/"}>
                <img src={junnoLogo} alt="logo" />
              </Link>
            </div>
            <div className="grow">
              <div className="flex items-center justify-between">
                <div className="search w-1/2 lg:w-4/6">
                  <div className="flex">
                    <input
                      type="text"
                      id="first_name"
                      className="border border-gray-300 text-gray-900 text-sm rounded-l-md block w-full p-2.5 outline-none"
                      placeholder="Enter your search key..."
                    />
                    <button className="bg-red-500 px-5 py-2 rounded-r-md hover:bg-slate-800">
                      <i className="fas fa-search text-white"></i>
                    </button>
                  </div>
                </div>
                <div className="contact flex items-center">
                  <div className="call flex items-center md:mx-3 lg:mx-8">
                    <div className="text-2xl mr-3">
                      <i className="fas fa-phone-alt"></i>
                    </div>
                    <div>
                      <p className="font-light text-xs">Call Us:</p>
                      <a
                        href="tel:(+123)456789"
                        className="font-bold hover:text-red-500 md:text-sm lg:text-base"
                      >
                        (+123)456789
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center md:gap-x-6">
                    <div className="cursor-pointer group">
                      <div className="relative">
                        <i className="fas fa-heart md:text-2xl group-hover:text-red-600"></i>
                        <span className="absolute text-white bg-red-500 md:w-4 md:h-4 text-center md:text-xs font-bold leading-5 bottom-0 -right-2 rounded-full">
                          0
                        </span>
                      </div>
                    </div>
                    <div className="cursor-pointer group">
                      <div className="relative">
                        <i className="fas fa-shopping-cart md:text-2xl group-hover:text-red-600"></i>
                        <span className="absolute text-white bg-red-500 md:w-4 md:h-4 text-center md:text-xs font-bold leading-5 bottom-0 -right-2 rounded-full">
                          0
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center cursor-pointer group -ml-5">
                      {Cookies.get("auth") ? (
                        <>
                          <Button
                            id="basic-button"
                            aria-controls={open ? "basic-menu" : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? "true" : undefined}
                            onClick={handleClick}
                            style={{ backgroundColor: "transparent", color: "black" }}
                            disableRipple
                          >
                            <i className="fas fa-user md:text-2xl group-hover:text-red-600"></i>
                          </Button>
                          <div className="-ml-4">
                            {dataUserInfo && JSON.parse(dataUserInfo).lastName}
                          </div>
                          <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                              "aria-labelledby": "basic-button",
                            }}
                          >
                            <MenuItem>
                              <Link to={"/user-info"}>Profile</Link>
                            </MenuItem>
                            <MenuItem onClick={handleLogout}>Logout</MenuItem>
                          </Menu>
                        </>
                      ) : (
                        <>
                          <Button
                            id="basic-button"
                            aria-controls={open ? "basic-menu" : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? "true" : undefined}
                            onClick={handleClick}
                            style={{ backgroundColor: "transparent", color: "black" }}
                            disableRipple
                          >
                            <i className="fas fa-user md:text-2xl group-hover:text-red-600"></i>
                          </Button>
                          <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                              "aria-labelledby": "basic-button",
                            }}
                          >
                            <MenuItem>
                              <Link to={"/login"}>Sign In</Link>
                            </MenuItem>
                            <MenuItem>
                              <Link to={"/register"}>Sign Up</Link>
                            </MenuItem>
                          </Menu>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <nav>
                <ul className="flex items-center text-xs gap-x-3 lg:gap-x-5 lg:text-sm xl:gap-x-7 xl:text-base">
                  <li className="hover:text-red-500 font-bold my-5">
                    <NavLink
                      to={"/"}
                      className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-red-500" : ""
                      }
                    >
                      HOME
                    </NavLink>
                  </li>
                  {/* nav1 */}
                  <li className="group relative">
                    <div className="group-hover:text-red-500 font-bold py-5">
                      <NavLink
                        to={"products"}
                        className={({ isActive, isPending }) =>
                          isPending ? "pending " : isActive ? "text-red-500" : ""
                        }
                      >
                        BAGS & SHOES <i className="fas fa-angle-down text-xs"></i>
                      </NavLink>
                    </div>
                    <div className="bg-white p-5 text-gray-500 border absolute opacity-0 -z-10 translate-y-0 invisible transition ease-linear delay-300 group-hover:opacity-100 group-hover:visible group-hover:z-50 md:w-submenu-md lg:w-submenu-lg xl:w-submenu-xl">
                      <div className="flex justify-between">
                        <div>
                          <Link
                            to={"products"}
                            className="hover:text-red-500 font-bold text-black inline-block mb-3"
                          >
                            SHOES
                          </Link>
                          <ul>
                            <li className="hover:text-red-500 mb-1 hover:translate-x-2 transition ease-linear delay-150">
                              <Link to={"products"}>Women Shoes</Link>
                            </li>
                            <li className="hover:text-red-500 mb-1 hover:translate-x-2 transition ease-linear delay-150">
                              <Link to={"products"}>Men Shoes</Link>
                            </li>
                            <li className="hover:text-red-500 mb-1 hover:translate-x-2 transition ease-linear delay-150">
                              <Link to={"products"}>Boots</Link>
                            </li>
                            <li className="hover:text-red-500 mb-1 hover:translate-x-2 transition ease-linear delay-150">
                              <Link to={"products"}>Casual Shoes</Link>
                            </li>
                            <li className="hover:text-red-500 mb-1 hover:translate-x-2 transition ease-linear delay-150">
                              <Link to={"products"}>Flip Flops</Link>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <Link
                            to={"products"}
                            className="hover:text-red-500 font-bold text-black inline-block mb-3"
                          >
                            LUGGAGE & BAGS
                          </Link>
                          <ul>
                            <li className="hover:text-red-500 mb-1 hover:translate-x-2 transition ease-linear delay-150">
                              <Link to={"products"}>Stylish Backpacks</Link>
                            </li>
                            <li className="hover:text-red-500 mb-1 hover:translate-x-2 transition ease-linear delay-150">
                              <Link to={"products"}>Shoulder Bags</Link>
                            </li>
                            <li className="hover:text-red-500 mb-1 hover:translate-x-2 transition ease-linear delay-150">
                              <Link to={"products"}>Crossbody Bags</Link>
                            </li>
                            <li className="hover:text-red-500 mb-1 hover:translate-x-2 transition ease-linear delay-150">
                              <Link to={"products"}>Briefcases</Link>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <Link
                            to={"products"}
                            className="hover:text-red-500 font-bold text-black inline-block mb-3"
                          >
                            OTHER BAGS & ACCESSORIES
                          </Link>
                          <ul>
                            <li className="hover:text-red-500 mb-1 hover:translate-x-2 transition ease-linear delay-150">
                              <Link to={"products"}>Cosmetic Bags & Cases</Link>
                            </li>
                            <li className="hover:text-red-500 mb-1 hover:translate-x-2 transition ease-linear delay-150">
                              <Link to={"products"}>Wallets & Card Holders</Link>
                            </li>
                            <li className="hover:text-red-500 mb-1 hover:translate-x-2 transition ease-linear delay-150">
                              <Link to={"products"}>Luggage Covers</Link>
                            </li>
                            <li className="hover:text-red-500 mb-1 hover:translate-x-2 transition ease-linear delay-150">
                              <Link to={"products"}>Passport Covers</Link>
                            </li>
                            <li className="hover:text-red-500 mb-1 hover:translate-x-2 transition ease-linear delay-150">
                              <Link to={"products"}>Bag Parts & Accessories</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="cursor-pointer overflow-hidden mt-3">
                        <img
                          src={bannerSubmenu}
                          alt="banner submenu"
                          className="w-full transition ease-linear delay-150 hover:scale-105"
                        />
                      </div>
                    </div>
                  </li>
                  {/* end nav1 */}
                  <li className="group relative">
                    <div className="group-hover:text-red-500 font-bold py-5">
                      <NavLink
                        to={"shoes"}
                        className={({ isActive, isPending }) =>
                          isPending ? "pending " : isActive ? "text-red-500" : ""
                        }
                      >
                        SHOES <i className="fas fa-angle-down text-xs"></i>
                      </NavLink>
                    </div>
                    <div className="bg-white text-gray-500 border absolute opacity-0 -z-10 translate-y-0 invisible transition ease-linear delay-300 group-hover:opacity-100 group-hover:visible group-hover:z-50">
                      <div>
                        <ul>
                          <li className="hover:text-red-500 hover:translate-x-2 transition ease-linear delay-150 pb-1 w-52 px-5 my-2">
                            <Link to={"products"}>Women Shoes</Link>
                          </li>
                          <li className="hover:text-red-500 hover:translate-x-2 transition ease-linear delay-150 pb-1 w-52 px-5 my-2">
                            <Link to={"products"}>Men Shoes</Link>
                          </li>
                          <li className="hover:text-red-500 hover:translate-x-2 transition ease-linear delay-150 pb-1 w-52 px-5 my-2">
                            <Link to={"products"}>Boots</Link>
                          </li>
                          <li className="hover:text-red-500 hover:translate-x-2 transition ease-linear delay-150 pb-1 w-52 px-5 my-2">
                            <Link to={"products"}>Casual Shoes</Link>
                          </li>
                          <li className="hover:text-red-500 hover:translate-x-2 transition ease-linear delay-150 pb-1 w-52 px-5 my-2">
                            <Link to={"products"}>Flip Flops</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* end submenu */}
                  </li>
                  <li className="group relative">
                    <div className="group-hover:text-red-500 font-bold py-5">
                      <NavLink
                        to={"other-bags-accessories"}
                        className={({ isActive, isPending }) =>
                          isPending ? "pending " : isActive ? "text-red-500" : ""
                        }
                      >
                        OTHER BAGS & ACCESSORIES <i className="fas fa-angle-down text-xs"></i>
                      </NavLink>
                    </div>
                    <div className="bg-white text-gray-500 border absolute opacity-0 -z-10 translate-y-0 invisible transition ease-linear delay-300 group-hover:opacity-100 group-hover:visible group-hover:z-50">
                      <div>
                        <ul>
                          <li className="hover:text-red-500 hover:translate-x-2 transition ease-linear delay-150 pb-1 w-64 px-5 my-2">
                            <Link to={"products"}>Cosmetic Bags & Cases</Link>
                          </li>
                          <li className="hover:text-red-500 hover:translate-x-2 transition ease-linear delay-150 pb-1 w-64 px-5 my-2">
                            <Link to={"products"}>Wallets & Card Holders</Link>
                          </li>
                          <li className="hover:text-red-500 hover:translate-x-2 transition ease-linear delay-150 pb-1 w-64 px-5 my-2">
                            <Link to={"products"}>Luggage Covers</Link>
                          </li>
                          <li className="hover:text-red-500 hover:translate-x-2 transition ease-linear delay-150 pb-1 w-64 px-5 my-2">
                            <Link to={"products"}>Passport Covers</Link>
                          </li>
                          <li className="hover:text-red-500 hover:translate-x-2 transition ease-linear delay-150 pb-1 w-64 px-5 my-2">
                            <Link to={"products"}>Bag Parts & Accessories</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li className="hover:text-red-500 font-bold py-5">
                    <NavLink
                      to={"contact-us"}
                      className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-red-500" : ""
                      }
                    >
                      CONTACT US
                    </NavLink>
                  </li>
                  <li className="hover:text-red-500 font-bold py-5">
                    <NavLink
                      to={"about-us"}
                      className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-red-500" : ""
                      }
                    >
                      ABOUT US
                    </NavLink>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div className="header-mobile block md:hidden mx-3 pb-3">
          <div className="flex justify-between mb-2 items-center">
            <div className="grow">
              <button onClick={() => setShowMenu(!showMenu)}>
                <i className="fas fa-bars text-2xl"></i>
              </button>
              <div
                className={`absolute z-50 h-screen top-0 left-0 w-screen transition ease-linear after:absolute after:w-full after:h-full after:bg-black after:opacity-50 after:top-0 after:z-10 ${
                  showMenu ? "translate-x-0" : "-translate-x-full"
                }`}
              >
                <NestedList setShowMenu={setShowMenu} showMenu={showMenu} />
              </div>
            </div>
            <div className="logo grow flex justify-center">
              <Link to={"/"}>
                <img src={junnoLogo} alt="logo" />
              </Link>
            </div>
            <div className="grow">
              <div className="flex justify-end">
                <div className="cursor-pointer group mx-2">
                  <div className="relative">
                    <i className="fas fa-shopping-cart text-2xl group-hover:text-red-600"></i>
                    <span className="absolute text-white bg-red-500 w-4 h-4 text-center text-xs font-bold leading-4 bottom-0 -right-2 rounded-full">
                      0
                    </span>
                  </div>
                </div>
                <div className="cursor-pointer group mx-2">
                  <div className="relative">
                    <i className="fas fa-user text-2xl group-hover:text-red-600"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="search w-full">
            <div className="flex">
              <input
                type="text"
                className="border border-gray-300 text-gray-900 text-sm rounded-l-md block w-full p-2.5 outline-none"
                placeholder="Enter your search key..."
              />
              <button className="bg-red-500 px-5 py-2 rounded-r-md hover:bg-slate-800">
                <i className="fas fa-search text-white"></i>
              </button>
            </div>
          </div>
        </div>
      </header>
      <div>
        {location.pathname === "/" ? (
          ""
        ) : (
          <div className="text-center bg-gray-100 py-20">
            <p className="font-bold italic">
              Home <span className="text-red-500">{location.pathname}</span>
            </p>
          </div>
        )}
      </div>
    </>
  );
}
