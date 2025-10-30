"use client";
import Link from "next/link";
import Image from "next/image";
import { FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  const icons = [
    {
      href: "https://www.linkedin.com/company/acusky/",
      icon: <FaLinkedin className="text-[#0A66C2]" size={22} />,
    },
    {
      href: "https://x.com/acu_sky",
      icon: <FaXTwitter className="text-black" size={22} />,
    },
    {
      href: "https://www.youtube.com/@AcuskyOfficial",
      icon: <FaYoutube className="text-[#FF0000]" size={22} />,
    },
  ];

  return (
    <>
      <footer
        className="relative overflow-hidden flex items-end justify-between lg:h-[100vh]"
        style={{
          backgroundImage: "url('/FooterBg.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 w-full px-6 md:px-12 py-20 text-gray-300">
          <div className="flex flex-col items-start md:items-start justify-start lg:justify-between">
            <Image
              src="/AcuSkyLogoFooter.png"
              alt="AcuSky Logo"
              width={250}
              height={60}
              className="object-contain"
              loading="lazy"
            />
            <p className=" w-[100%] md:w-[60%] ml-[12px]">
              AcuSky is a modern software development company delivering airport
              management with advanced, cloud-native
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link href="#">Home</Link>
              </li>
              <li>
                <Link href="/under-renovation">Products</Link>
              </li>
              <li>
                <Link href="/under-renovation">Solutions</Link>
              </li>
              <li>
                <Link href="/under-renovation">About Us</Link>
              </li>
              <li>
                <Link href="/under-renovation">Contact Us</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-4 mb-6">
              <li>
                <Link href="/under-renovation">Privacy Policy</Link>
              </li>
              <h3 className="font-semibold mb-3 mt-10">Newsletter Sign up</h3>
              <li>Stay Updated on the Upcoming Updates</li>
              <li>CTA — Subscribe Now !</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact Information</h3>
            <p className="text-sm mb-3">Email: sales@acusky.net</p>
            <p className="text-sm mb-3">Phone: +1-866-711-4350</p>
            <p className="text-sm mb-3">
              Address: 4864 Sparks Blvd, Nevada, 89436
            </p>

            <div>
              <h3 className="font-semibold mt-10 mb-2">Follow us</h3>
              <div className="flex gap-4 mt-3">
                {icons.map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md hover:scale-110 transition-transform"
                  >
                    {item.icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="text-center text-sm text-[#37404C] bg-white py-3">
        © 2025 All Rights Reserved
      </div>
    </>
  );
}
