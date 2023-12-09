import { useEffect, useState } from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa6";

const Footer = () => {

    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    useEffect(() => {
        setCurrentYear(new Date().getFullYear())
    }, [])

    return (
        <footer>
            <div className="footer bg-neutral text-neutral-content gap-0">
                <div className="flex flex-col items-center w-full bg-[#1F2937] p-10">
                    <h2 className="text-2xl">Contact Us</h2>
                    <p className="text-center">123 ABS Street, Uni 21, Bangladesh <br />
                        +88 123456789 <br />
                        Mon - Fri: 08:00 - 22:00 <br />
                        Sat - Sun: 10:00 - 23:00</p>
                </div>
                <div className="flex flex-col items-center w-full h-full bg-[#111827] p-10">
                    <h2 className="text-2xl">Follow Us</h2>
                    <p>Join us on social media</p>
                    <div className="grid grid-flow-col gap-4 text-2xl">
                        <a><FaFacebookF /></a>
                        <a><FaTwitter /></a>
                        <a><FaInstagram /></a>
                    </div>
                </div>
            </div>
            <div className="footer footer-center p-4 bg-base-300 text-base-content">
                <aside>
                    <p>Copyright © {currentYear} - All right reserved by ACME Industries Ltd</p>
                </aside>
            </div>
        </footer>
    );
};

export default Footer;