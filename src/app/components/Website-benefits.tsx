"use client";
import { FaRobot, FaCogs, FaDatabase, FaProjectDiagram } from "react-icons/fa";

export default function Benefits() {
  return (
    <section className="bg-[#211e59] py-10">
     

      {/* Services Section */}
      <div className="max-w-7xl mx-auto mt-10 mb-10 px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-100 text-center">
         Benefits of <span className="text-[#98792a]"> Web Design
</span>
        </h2>
        <p className="text-base sm:text-lg text-gray-100 leading-relaxed text-center mt-4">
A digital showcase that embodies your brand identity and captures your audience’s attention.

        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-4 gap-6 mt-12">
          {/* Highlighted Card */}
          <div className="bg-[#98792a] text-white rounded-xl p-6 shadow-lg">
            <FaRobot className="text-4xl mb-4" />
            <h3 className="text-xl font-semibold">Enhanced Brand Image
</h3>
            <p className="mt-2 text-sm">
A thoughtfully designed website leaves a strong first impression and strengthens your brand identity.

</p>
          </div>

          {/* Other Cards */}
          <div className="bg-gray-50 rounded-xl p-6 shadow hover:shadow-lg transition">
            <FaCogs className="text-4xl text-[#98792a] mb-4" />
            <h3 className="text-xl font-semibold">Increased Conversions</h3>
            <p className="mt-2 text-sm text-gray-600">
Strategic design turns website visitors into customers by seamlessly guiding them through the sales journey.

            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 shadow hover:shadow-lg transition">
            <FaDatabase className="text-4xl text-[#98792a] mb-4" />
            <h3 className="text-xl font-semibold">Better Search Engine Rankings
</h3>
            <p className="mt-2 text-sm text-gray-600">
Search engines favor visually engaging and user-friendly websites, leading to improved search rankings.

         </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 shadow hover:shadow-lg transition">
            <FaProjectDiagram className="text-4xl text-[#98792a] mb-4" />
            <h3 className="text-xl font-semibold">Improved User Experience
</h3>
            <p className="mt-2 text-sm text-gray-600">
A user-friendly website simplifies navigation, allowing visitors to easily find the information they need.

            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
