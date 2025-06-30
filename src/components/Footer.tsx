import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm text-gray-700">
        {/* Logo & About */}
        <div>
          <div className="flex items-center mb-4 space-x-2">
            <Image src="/images/logo-transparent.png" alt="Q247 Logo" width={120} height={40} />
          </div>
          <p className="text-gray-600 mb-4">
            Q247 is a fast-paced quiz platform delivering bite-sized challenges every hour.
          </p>
          <p className="text-sm">© {new Date().getFullYear()}. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-purple-600">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="#" className="hover:text-purple-600">
              <i className="fab fa-twitter" />
            </a>
            <a href="#" className="hover:text-purple-600">
              <i className="fab fa-youtube" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-2">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/blog" className="hover:text-purple-600">Blog</Link></li>
            <li><Link href="/faqs" className="hover:text-purple-600">FAQs</Link></li>
            <li><Link href="/support" className="hover:text-purple-600">Support</Link></li>
            <li><Link href="/about" className="hover:text-purple-600">About</Link></li>
          </ul>
        </div>

        {/* Product */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-2">q247</h3>
          <ul className="space-y-2">
            <li><Link href="/leaderboard" className="hover:text-purple-600">Leaderboard</Link></li>
            <li><Link href="/stats" className="hover:text-purple-600">Statistics</Link></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-2">Legal</h3>
          <ul className="space-y-2">
            <li><Link href="/gdpr" className="hover:text-purple-600">GDPR</Link></li>
            <li><Link href="/privacy" className="hover:text-purple-600">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-purple-600">Terms of Service</Link></li>
            <li><Link href="/disclaimer" className="hover:text-purple-600">Disclaimer</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
  