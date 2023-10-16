import { copyrightSign } from "../assets/icons"
import { footerLogo } from "../assets/images"
import { footerLinks, socialMedia } from "../Constants"

function Footer() {
  return (
    <footer className="max-container">
        <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
            <div className="flex flex-col items-start">
                <a href="">
                    <img src={footerLogo} alt="" width={150} height={160} 
                    className="m-0" />
                </a>
                <p className="text-base mt-6 leading-7 font-montserrat text-white-400 sm:max-w-sm">
                Get shoes ready for the new term at your nearest Nike store. Find
                 Your perfect Size In Store. Get Rewards
                </p>

                <div className="flex items-center gap-5 mt-8">
                {socialMedia.map((icon)=>(
                    <div className="bg-white flex justify-center items-center w-12 h-12 rounded-full">
                        <img src={icon.src} alt="" width={24} height={24} />
                    </div>
                ))}
            </div>
        </div>


        <div className="flex flex-1 justify-between gap-20 lg:gap-10 flex-wrap">
            {footerLinks.map((link)=>(
                <div>
                    <h4 className="font-montserrat text-2xl text-white-400 font-medium mb-6 leading-normal">
                        {link.title}
                    </h4>
                    <ul>
                        {link.links.map((item)=>(
                            <li className="mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray">
                                <a href={item.link}>{item.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>            
        </div>

        <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
            <div className="flex flex-1 gap-2">
                <img src={copyrightSign} alt="" width={20} height={20}
                className="m-0 rounded-full"
                />
                <p className="text-slate-gray">Copyright. All rights reserved.</p>
            </div>

            <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
        </div>
    </footer>
  )
}

export default Footer