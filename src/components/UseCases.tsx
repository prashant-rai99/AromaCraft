import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight } from "lucide-react";

export function UseCases() {
  const cases = [
    {
      title: "Home Cooks",
      description: "Transform your everyday cooking with scientific precision. Never waste ingredients and always achieve restaurant-quality results.",
      image: "https://images.unsplash.com/photo-1616632125404-33e2addbff09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHZlZ2V0YWJsZXMlMjBjb29raW5nfGVufDF8fHx8MTc2MzY0MDMxMHww&ixlib=rb-4.1.0&q=80&w=1080",
      tag: "Most Popular",
    },
    {
      title: "Professional Chefs",
      description: "Elevate your culinary artistry with molecular insights. Perfect for menu development and creating signature dishes with data-backed precision.",
      image: "https://images.unsplash.com/photo-1658921034679-0d9e999ddc43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVmJTIwY29va2luZyUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjM2NTUzNjd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      tag: "Pro Level",
    },
    {
      title: "Food Scientists",
      description: "Research and experiment with flavor pairing theories. Access comprehensive molecular data for culinary innovation and product development.",
      image: "https://images.unsplash.com/photo-1684259498900-afdea87b1a97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwc2NpZW5jZSUyMGxhYm9yYXRvcnl8ZW58MXx8fHwxNzYzNzQyMjE3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      tag: "Research",
    },
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-gray-900 mb-4">
            Built for Every Culinary Journey
          </h2>
          <p className="text-gray-600">
            From home kitchens to professional restaurants, AromaCraft adapts to your needs
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((useCase, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <ImageWithFallback
                  src={useCase.image}
                  alt={useCase.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                {/* Tag Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-[#fbbf24] text-gray-900 rounded-full">
                    {useCase.tag}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-gray-900 mb-3">
                  {useCase.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {useCase.description}
                </p>
                <button className="flex items-center gap-2 text-[#1e40af] hover:gap-3 transition-all group/btn">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
