import About from "@/components/about";
import Education from "@/components/education";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <About />
      <Education />
    </main>
  );
}
