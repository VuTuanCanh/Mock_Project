import React from "react";
import cms from "../../assets/jordan.jpg"
export interface IAboutUsProps {

}
export default function AboutUs (props: IAboutUsProps) {
return (
        <div className="container mx-auto">
            <div className="">
                <div className="p-3 mx-10">
                    <header className="mb-3">
                        <h1 className="px-2 text-2xl capitalize font-medium">About us</h1>
                    </header>
                    <div className="py-4 text-justify">
                        <div className="flex flex-wrap">

                            {/* Our company */}
                            <div className="sm:w-full md:w-1/3 px-4 mb-7">
                                <div>
                                    <h3 className="capitalize font-medium mb-2">Our company</h3>
                                    <div className="text-sm font-light">
                                    <p className="mb-2 italic underline">
                                        <strong>
                                        After opening its Milan flagship store late last year, 
                                        Jordan Brand has revealed its debut World of Flight location in Tokyo.
                                        </strong>
                                    </p>
                                    <p>
                                        The first-of-its-kind retail destination is encapsulated by endless 
                                        asketball culture as Michael Jordan and Nike (NYSE:NKE +1.62%) continue 
                                        to refine the physical shopping experience.
                                    </p>
                                    <p>
                                        Opening its doors on March 25, it continues the imprint’s 
                                        community-first mentality packed with artwork by local artists that study the city’s 
                                        deep athletic knowledge. Furthermore, Tokyo-based footwear collectors display their 
                                        collections throughout the store, debuting Nike’s progressive Membership program through new 
                                        content creation studios and product customization venues.
                                    </p>
                                    <ul>
                                        <li>Top quality products</li>
                                        <li>Best customer service</li>
                                        <li>30-days money back guarantee</li>
                                    </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Our tearn */}
                            <div className="sm:w-full md:w-1/3 px-4 mb-7">
                                <div>
                                    <h3 className="capitalize font-medium mb-2">Our team</h3>
                                    <div className="text-sm font-light">
                                    <div className="w-full mb-4">
                                        <img src={cms} alt="" className="w-full h-full object-contain"/>           
                                    </div>
                                    <p className="mb-2 italic underline">
                                        <strong>
                                            Jordan Brand Opens Doors to World of Flight Store in Shibuya, Tokyo.
                                        </strong>
                                    </p>
                                    <p>
                                        Located in Shibuya, the 9,200-square-foot space is the largest World of 
                                        Flight store to date and pays tribute to Jordan Brand’s undeniable foothold on basketball culture.
                                    </p>
                                    </div>
                                </div>
                            </div>

                            {/* Testimonials */}
                            <div className="sm:w-full md:w-1/3 px-4 mb-7">
                                <div>
                                    <h3 className="capitalize font-medium mb-2">Testimonials</h3>
                                   <div className="text-sm font-light">
                                   <div>
                                        <p>
                                        The ultra-modern building welcomes shoppers through an 
                                        NBA-style gateway that mimics court-entry arena portals, 
                                        leading into an exclusive Members Lounge decorated with 
                                        Jordan memorabilia. In addition, World of Flight offers 
                                        an extensive selection of men’s, women’s, and kid’s footwear 
                                        and apparel options. Nike’s essential SNKRS pick-up facilities 
                                        are also available for limited launches throughout the year.
                                        </p>
                                    </div>
                                    <p className="my-2 italic underline">
                                        <strong>
                                        Lorem ipsum dolor sit
                                        </strong>
                                    </p>
                                    <div>
                                        <p>
                                        Take a look inside Jordan Brand’s World of Flight flagship store 
                                        in the gallery above and visit the space on March 25 at Meiji Dori 
                                        Street in Shibuya, Tokyo.
                                        </p>
                                    </div>
                                    <p className="mt-2 italic underline">
                                        <strong>
                                            Ipsum dolor sit
                                        </strong>
                                    </p>
                                   </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              </div>

            </div>
       
  );
}
