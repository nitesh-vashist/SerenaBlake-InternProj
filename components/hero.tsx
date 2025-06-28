"use client"

import { Button } from "@/components/ui/button"

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

//   return (
//     <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-50 to-blue-50">
//       <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-10"></div>
//       <div className="relative z-10 container mx-auto px-4 text-center">
//         <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
//           Find Your Path to
//           <span className="text-teal-600 block">Mental Wellness</span>
//         </h1>
//         <h2 className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
//           Compassionate, evidence-based therapy to help you overcome anxiety, strengthen relationships, and heal from
//           trauma in a safe, supportive environment.
//         </h2>
//         <div className="flex flex-col sm:flex-row gap-4 justify-center">
//           <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-lg px-8 py-4" onClick={scrollToContact}>
//             Book a Free Consultation
//           </Button>
//           <Button
//             size="lg"
//             variant="outline"
//             className="border-teal-600 text-teal-600 hover:bg-teal-50 text-lg px-8 py-4 bg-transparent"
//             onClick={() => {
//               const element = document.getElementById("about")
//               if (element) element.scrollIntoView({ behavior: "smooth" })
//             }}
//           >
//             Learn More
//           </Button>
//         </div>
//       </div>
//     </section>
//   )
// }

return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")'
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold text-white mb-6 leading-tight">
            Find Your Path to
            <span className="block text-blue-300">Mental Wellness</span>
          </h1>
          
          <h2 className="text-xl sm:text-2xl text-gray-200 mb-8 font-light max-w-3xl mx-auto leading-relaxed">
           Empowering you to heal, grow, and connect through compassionate, evidence-based therapy.
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={scrollToContact}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105"
            >
              Book a Free Consultation
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => {
                const element = document.getElementById('about');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg rounded-full transition-all duration-300 bg-transparent"
            >
              Learn More
            </Button>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

