import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Meet Dr. Serena Blake</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, with eight years of
              experience and over 500 client sessions. She blends evidence-based approaches—like cognitive-behavioral
              therapy and mindfulness—with compassionate, personalized care to help you overcome anxiety, strengthen
              relationships, and heal from trauma.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Whether you meet in her Maplewood Drive office or connect virtually via Zoom, Dr. Blake is committed to
              creating a safe, supportive space for you to thrive.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-teal-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Experience</h3>
                <p className="text-gray-700">8 years of practice</p>
                <p className="text-gray-700">500+ client sessions</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Credentials</h3>
                <p className="text-gray-700">PsyD, Clinical Psychology</p>
                <p className="text-gray-700">Licensed in California</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-xl">
              <img
                src="https://img.freepik.com/free-photo/portrait-young-businesswoman-holding-eyeglasses-hand-against-gray-backdrop_23-2148029483.jpg"
                alt="Dr. Serena Blake"
                className="w-full h-[600px] object-cover rounded-lg mb-6"
              />

              <div className="space-y-4">
                <div className="flex items-center text-gray-700">
                  <MapPin className="w-5 h-5 mr-3 text-teal-600" />
                  <span>1287 Maplewood Drive, Los Angeles, CA 90026</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Phone className="w-5 h-5 mr-3 text-teal-600" />
                  <span>(323) 555-0192</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Mail className="w-5 h-5 mr-3 text-teal-600" />
                  <span>serena@blakepsychology.com</span>
                </div>
              </div>
            </div>

            <div className="bg-teal-50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <Clock className="w-5 h-5 mr-3 text-teal-600" />
                <h3 className="font-semibold text-gray-900">Office Hours</h3>
              </div>
              <div className="space-y-2 text-gray-700">
                <p>
                  <strong>In-person:</strong> Tue & Thu, 10 AM–6 PM
                </p>
                <p>
                  <strong>Virtual (Zoom):</strong> Mon, Wed & Fri, 1 PM–5 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
