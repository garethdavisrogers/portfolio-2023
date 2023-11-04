//component imports
import Summary from "./components/summary";
import Resume from "./components/resume";
import Projects from "./components/projects";
import resumeJson from "./components/resumeComponents.json";
import {IResume} from "./components/Iresume";

export default function Home() {

  const resume: IResume = resumeJson;
  return (
  <div>
    <header className="p-5 flex justify-between bg-green-200 fixed top-0 w-full">
      <div className="pl-2">
        <h1 className="text-3xl">Gareth Rogers</h1>
        <h2 className="leading-relaxed">Full-Stack Software Engineer</h2>
      </div>
      <div>
        <ul className="flex justify-between pt-5 px-4">
          <li className="px-5 justify-center align-center text-lg hover:text-white"><a href="#summary">Summary</a></li>
          <li className="px-5 justify-center align-center text-lg hover:text-white"><a href="#resume">Resume</a></li>
          <li className="px-5 justify-center align-center text-lg hover:text-white"><a href="#projects">Projects</a></li>
        </ul>
      </div>
    </header>
    <div className="flex-col align-center pt-6">
      <Summary resume={resume}/>
      <Resume resume={resume}/>
      <Projects/>
    </div>
  </div>
  );
}