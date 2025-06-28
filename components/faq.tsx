"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "Do you accept insurance?",
    answer:
      "No, I do not accept insurance directly. However, I provide a superbill for each session that you can submit to your insurance company for potential reimbursement. Many clients find that their out-of-network benefits help cover a portion of the cost.",
  },
  {
    question: "Are online sessions available?",
    answer:
      "Yes! I offer virtual sessions via Zoom on Mondays, Wednesdays, and Fridays from 1 PM to 5 PM. Online therapy can be just as effective as in-person sessions and offers the convenience of receiving care from the comfort of your own space,feel free to book one.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "I require 24-hour notice for cancellations. This allows me to potentially offer the time slot to another client who may need it. Cancellations made with less than 24 hours notice will be charged the full session fee.",
  },
  {
    question: "How long are therapy sessions?",
    answer:
      "Individual therapy sessions are 50 minutes long, while couples sessions are 60 minutes. This gives us adequate time to explore your concerns and work on therapeutic goals while maintaining a structured framework.",
  },
  {
    question: "How often should I attend therapy sessions?",
    answer:
      "Most clients benefit from weekly sessions, especially when starting therapy. As you progress, we may adjust the frequency based on your needs and goals. Some clients transition to bi-weekly or monthly sessions over time.",
  },
  {
    question: "What should I expect in my first session?",
    answer:
      "Your first session will focus on getting to know you and understanding what brings you to therapy. We'll discuss your goals, review my policies, and begin to develop a treatment plan tailored to your specific needs. It's normal to feel nervous - I'll help you feel comfortable and supported.",
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about therapy and my practice
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-gray-50 rounded-lg px-6 border-0">
                <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-teal-600 py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 pb-6 leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
