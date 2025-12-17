import Image from "next/image";

const teamMembers = [
  {
    name: "Mr. NR Gehlot",
    position: "Founder",
    image: "/manhead.jpeg",
  },
  {
    name: "Mr. Udai Singh",
    position: "Director",
    image: "/uday.jpeg",
  },
  {
    name: "Ms. Nimisha Chauhan",
    position: "Project Delivery Head",
    image: "/PDHead.jpeg",
  },
  {
    name: "Ms. Mansi",
    position: "Full Stack Developer",
    image: "/fullstack.jpeg",
  },
];

export default function TeamSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-slate-800">
            Meet Our Team
          </h2>
          <p className="text-slate-500 mt-3 max-w-xl mx-auto">
            Leadership & experts driving innovation and excellence
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl p-8 text-center
                         shadow-sm hover:shadow-2xl
                         transition-all duration-300
                         hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative w-36 h-36 mx-auto mb-6">
                <div className="absolute inset-0 rounded-full 
                                bg-gradient-to-tr from-indigo-500 to-purple-500 
                                blur opacity-20 group-hover:opacity-40 transition" />
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="rounded-full object-cover ring-4 ring-white relative z-10"
                />
              </div>

              {/* Name */}
              <h3 className="text-lg font-semibold text-slate-800">
                {member.name}
              </h3>

              {/* Position */}
              <p className="text-sm font-medium text-indigo-600 mt-1">
                {member.position}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
