import { MapPin, Phone, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Dr. Serena Blake</h3>
            <p className="text-gray-300 mb-4">Licensed Clinical Psychologist (PsyD)</p>
            <p className="text-gray-300">Providing compassionate, evidence-based therapy to help you thrive.</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <MapPin className="w-4 h-4 mr-3" />
                <span className="text-sm">1287 Maplewood Drive, Los Angeles, CA 90026</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="w-4 h-4 mr-3" />
                <span className="text-sm">(323) 555-0192</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="w-4 h-4 mr-3" />
                <span className="text-sm">serena@blakepsychology.com</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Office Hours</h4>
            <div className="text-gray-300 text-sm space-y-2">
              <p>
                <strong>In-person:</strong> Tue & Thu, 10 AM–6 PM
              </p>
              <p>
                <strong>Virtual:</strong> Mon, Wed & Fri, 1 PM–5 PM
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Dr. Serena Blake Psychology. All rights reserved. | Licensed Clinical Psychologist in California
          </p>
        </div>
      </div>
    </footer>
  )
}
