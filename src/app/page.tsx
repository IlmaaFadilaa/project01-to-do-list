import Image from "next/image";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";

export default function Home() {
  return (
    <main className="text-[#561c24] min-h-screen bg-[#561c24] flex flex-col items-center justify-center px-6 py-12">
      
      {/* FOTO */}
      <Image
        src="/profile.jpg"    
        alt="Profile"
        width={120}
        height={120}
        className="rounded-full mb-6 border-2 border-[#c7b7a3]
                  hover:border-transparent
                  hover:shadow-[0_6px_16px_rgba(255,255,255,0.20)]
                  hover:scale-110
                  transition-all duration-300 ease-out shadow-lg"
      /> 

      {/* HERO */}
      <h1 className="text-[#c7b7a3] text-4xl font-bold mb-2">Hi, I am Ila</h1>
      <p className="text-[#c7b7a3] text-300 text-center max-w-md mb-12">    
        Informatic student at Nahdlatul Ulama University in Yogyakarta.
      </p>    

      {/* ABOUT */}
      <h2 className="text-[#c7b7a3] text-2xl font-semibold mb-2">About Me</h2>
      <p className="text-[#c7b7a3] text-300 text-center max-w-md mb-12">
        Passionate about coding and problem-solving, I am currently learning web development and exploring how technology can create better user experiences.
      </p>

      {/* SKILLS */}
      <h2 className="text-[#c7b7a3] text-2xl font-semibold mb-6">Skills</h2>
        <div className="flex gap-6 text-4xl mb-16">
          <SiHtml5 size={40} color="#F97316" className="hover:scale-110 transition-all duration-300" />
          <SiCss3 size={40} color="#2563EB" className="hover:scale-110 transition-all duration-300" />
          <SiJavascript size={40} color="#FACC15" className="hover:scale-110 transition-all duration-300" />
          <SiReact size={40} color="#22D3EE" className="hover:scale-110 transition-all duration-300" />
          <SiNextdotjs size={40} color="#FFFFFF" className="hover:scale-110 transition-all duration-300" />
          <SiTailwindcss size={40} color="#38BDF8" className="hover:scale-110 transition-all duration-300" />
        </div>

      {/* CONTACT */}
      <h2 className="text-[#c7b7a3] text-2xl font-semibold mb-3">Contact</h2>
      <p className="text-[#c7b7a3] text-400 mb-4">Let’s build something together!</p>
      <a
        href="mailto:fadilailma550@gmail.com"
        className="px-6 py-3 bg-gradient-to-b from-[#9C8F87]  to-[#E4DBD3] rounded-lg font-bold hover:scale-110 hover:shadow-[0_6px_16px_rgba(255,255,255,0.20)] transition-all duration-300"
      >
        Email Me
      </a>  

    </main>
  );
}
