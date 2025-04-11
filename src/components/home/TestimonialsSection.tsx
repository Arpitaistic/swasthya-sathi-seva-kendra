
import React from 'react';
import { User } from 'lucide-react';

interface Testimonial {
  content: string;
  author: string;
  location: string;
  avatarUrl?: string;
}

const TestimonialsSection = () => {
  const testimonials: Testimonial[] = [
    {
      content: "SwasthyaSaarthi helped my mother get the right medical care when she had unusual symptoms. The app guided us on what to do next, even without internet!",
      author: "Ramesh Kumar",
      location: "Udaipur, Rajasthan"
    },
    {
      content: "I didn't know I was eligible for a healthcare subsidy until the app showed me. Now my family can afford regular check-ups. This is life-changing!",
      author: "Sunita Devi",
      location: "Lakhimpur, Uttar Pradesh"
    },
    {
      content: "The emergency feature saved me when I felt unsafe walking home. My brother received my location and could come get me. So grateful for this app.",
      author: "Priya Sharma",
      location: "Nagpur, Maharashtra"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-swasthya-text-light max-w-2xl mx-auto">
            Real stories from rural communities using SwasthyaSaarthi
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md border border-gray-100 animate-fade-in" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                {testimonial.avatarUrl ? (
                  <img 
                    src={testimonial.avatarUrl} 
                    alt={testimonial.author}
                    className="h-12 w-12 rounded-full mr-4 object-cover" 
                  />
                ) : (
                  <div className="h-12 w-12 rounded-full bg-swasthya-primary/10 flex items-center justify-center mr-4">
                    <User className="h-6 w-6 text-swasthya-primary" />
                  </div>
                )}
                <div>
                  <h4 className="font-semibold">{testimonial.author}</h4>
                  <p className="text-sm text-swasthya-text-light">{testimonial.location}</p>
                </div>
              </div>
              <p className="text-swasthya-text-light italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
