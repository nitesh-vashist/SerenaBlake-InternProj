// import { Heart, Users, Shield } from "lucide-react"

// const services = [
//   {
//     icon: Heart,
//     title: "Anxiety & Stress Management",
//     description:
//       "Learn effective coping strategies and evidence-based techniques to manage anxiety and reduce stress. Through cognitive-behavioral therapy and mindfulness practices, we'll work together to help you regain control and find peace in your daily life.",
//     image: "https://images.unsplash.com/photo-1620486729163-23b5225ae75d?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     price: "$200 / session",
//   },
//   {
//     icon: Users,
//     title: "Relationship Counseling",
//     description:
//       "Strengthen your relationships through improved communication, conflict resolution, and deeper understanding. Whether you're working on romantic partnerships, family dynamics, or friendships, we'll explore patterns and develop healthier ways of connecting.",
//     image: "/placeholder.svg?height=300&width=400",
//     price: "$240 / couples session",
//   },
//   {
//     icon: Shield,
//     title: "Trauma Recovery",
//     description:
//       "Heal from past traumatic experiences in a safe, supportive environment. Using trauma-informed approaches, we'll work at your pace to process difficult experiences and develop resilience, helping you reclaim your sense of safety and empowerment.",
//     image: "/placeholder.svg?height=300&width=400",
//     price: "$200 / session",
//   },
// ]

// export default function Services() {
//   return (
//     <section id="services" className="py-20 bg-gray-50">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Services & Specialties</h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Personalized therapy approaches tailored to your unique needs and goals
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {services.map((service, index) => {
//             const IconComponent = service.icon
//             return (
//               <div
//                 key={index}
//                 className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
//               >
//                 <img
//                   src={service.image || "/placeholder.svg"}
//                   alt={service.title}
//                   className="w-full h-48 object-cover"
//                 />
//                 <div className="p-6">
//                   <div className="flex items-center mb-4">
//                     <div className="bg-teal-100 p-3 rounded-lg mr-4">
//                       <IconComponent className="w-6 h-6 text-teal-600" />
//                     </div>
//                     <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
//                   </div>
//                   <p className="text-gray-700 mb-4 leading-relaxed">{service.description}</p>
//                   <div className="border-t pt-4">
//                     <p className="text-teal-600 font-semibold">{service.price}</p>
//                   </div>
//                 </div>
//               </div>
//             )
//           })}
//         </div>
//       </div>
//     </section>
//   )
// }



import { Card, CardContent } from '@/components/ui/card';

const ServicesSection = () => {
  const services = [
    {
      title: "Anxiety & Stress Management",
      description: "Learn effective coping strategies and evidence-based techniques to manage anxiety, reduce stress, and regain control over your daily life. Through cognitive-behavioral approaches and mindfulness practices, we'll work together to break the cycle of worry and create lasting calm.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "$200"
    },
    {
      title: "Relationship Counseling",
      description: "Strengthen your relationships through improved communication, conflict resolution, and deeper emotional connection. Whether you're working on romantic partnerships, family dynamics, or friendships, we'll develop tools to build healthier, more fulfilling relationships.",
      image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "$240"
    },
    {
      title: "Trauma Recovery",
      description: "Navigate your healing journey from traumatic experiences with compassionate, trauma-informed care. Using evidence-based therapies, we'll work at your pace to process difficult experiences, develop healthy coping mechanisms, and reclaim your sense of safety and empowerment.",
      image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "$200"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wide">Services</span>
          <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-gray-900 mt-2 mb-4">
            Specialized Therapy Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive mental health support tailored to your unique needs and goals
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover-lift border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                  <span className="text-sm font-semibold text-primary">{service.price}/session</span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-playfair font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {service.description}
                </p>
                
                <div className="flex items-center text-primary font-medium group-hover:text-primary-foreground transition-colors">
                  <span className="text-sm">Learn More</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-gradient-to-r from-primary/5 to-blue-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-playfair font-semibold text-gray-900 mb-4">
            Flexible Session Options
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-3">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div>
                <div className="font-semibold text-gray-900">In-Person Sessions</div>
                <div className="text-sm text-gray-600">1287 Maplewood Drive, Los Angeles</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <div className="font-semibold text-gray-900">Virtual Sessions</div>
                <div className="text-sm text-gray-600">Secure Zoom consultations</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
