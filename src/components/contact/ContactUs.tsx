import React from "react";
export interface IContactUsProps {

}
export default function ContactUs (props: IContactUsProps) {
return (
    <div className="container m-auto ">
        <div className=" flex flex-wrap mx-10"> 
            {/* Store */}
            <div className="store sm:w-full lg:w-1/4 ">
                <div className="px-4" >
                    <h4 className="text-2xl font-semibold mb-8">Store Information</h4>
                    <div className="font-light">
                        {/* Map */}
                        <div className="flex">
                            <div className="icon  w-14">
                                <i className="fas fa-map-marker-alt text-2xl text-slate-400 "></i>
                            </div>
                            <div className="data truncate w-auto">Junno Responsive Prestashop Theme <br/> United States</div>
                        </div>
                        <hr className="my-4"/>
                        {/* Call */}
                        <div className="flex">
                            <div className="icon  w-14">
                                <i className="fas fa-phone-alt text-2xl text-slate-400"></i>
                            </div>
                            <div className="data truncate w-auto">
                                Call us: 
                                <br />
                                <a href="tel: (+84)123456789">(+84)0123456789</a>
                            </div>
                        </div>
                        <hr className="my-4"/>
                        {/* Mail */}
                        <div className="flex">
                            <div className="icon  w-14">
                                <i className="fas fa-envelope text-2xl text-slate-400"></i>
                            </div>
                            <div className="data truncate w-auto">
                                Email us:
                                <br />
                                <a href="mailto: abc@gmail.com">abc@gmail.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact */}
            <div className="contact sm:w-full sm:mt-16 lg:mt-0 lg:px-5 lg:w-3/4">
                <div className="px-4">
                    <div>
                        <h3 className="text-2xl font-semibold mb-8">Contact Us</h3>
                    </div>
                    <div  className="font-light">
                         {/* Subject */}
                        <div className="lg:flex mb-4 ">
                            <label className="text-left w-1/4">Subject</label>
                            <div className=" sm:w-full sm:mt-3 lg:w-1/2 lg:mt-0 border-2">
                                <select name="" id="" className="w-full py-2 px-4">
                                <option value="" className="" >Customer service</option>
                                <option value="" className="">Webmaster</option> 
                                </select>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="lg:flex mb-4">
                            <label className="text-left w-1/4">Email address</label>
                            <div className=" sm:w-full sm:mt-3 lg:w-1/2 lg:mt-0 border-2">
                                <input type="email" placeholder="your@email.com" className="w-full py-2 px-4" />
                            </div>
                        </div>

                        {/* Attachment */}
                        <div className="lg:flex mb-4">
                            <label className="text-left w-1/4">Attachment</label>
                            <div className=" sm:w-full sm:mt-3 lg:w-1/2 lg:mt-0 border-2">
                                <input type="file" name="file" className="w-full "/>
                            </div>
                        </div>  

                        {/* Message */}
                        <div className="lg:flex mb-4"> 
                            <label className="text-left w-1/4">Message</label>
                            <div className=" sm:w-full sm:mt-3 lg:w-3/4 lg:mt-0 border-2">
                                <textarea name="" id="" placeholder="How can hlep you???" className="w-full py-2 px-4"></textarea>
                            </div>
                        </div>

                        {/* Send */}
                        <div className="float-right">
                            <input type="submit" name="" value="Send" className="py-1 px-5 bg-black text-white rounded" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}