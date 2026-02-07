import Link from "next/link"

export function Footer() {
  return (
    <footer
      className="text-white mt-16"
      style={{ background: "linear-gradient(180deg, #174460 0%, #0f2d40 100%)" }}
    >
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">HealthCare Recruitment</h3>
            <p className="text-white/70">Connecting healthcare professionals with opportunities</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-white/70">
              <li>
                <Link href="/services" className="hover:text-[#06C144] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#06C144] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-[#06C144] transition-colors">
                  Pricing
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-white/70">
              <li>
                <a href="#" className="hover:text-[#06C144] transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#06C144] transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#06C144] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-white/70">
              <li>
                <a href="#" className="hover:text-[#06C144] transition-colors">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#06C144] transition-colors">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#06C144] transition-colors">
                  HIPAA
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70">&copy; 2025 HealthCare Recruitment. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="text-white/70 hover:text-[#06C144] transition-colors">
              LinkedIn
            </a>
            <a href="#" className="text-white/70 hover:text-[#06C144] transition-colors">
              Twitter
            </a>
            <a href="#" className="text-white/70 hover:text-[#06C144] transition-colors">
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
