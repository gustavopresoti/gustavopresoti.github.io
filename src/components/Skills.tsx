import { SiNodedotjs } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiGit } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiAmazonaws } from "react-icons/si";

export function Skills() {
  return (
    <div className="font-title flex flex-wrap space-x-6 mb-6 mt-10 text-sectionsColor">
        <div className="flex flex-col items-center space-y-1 w-12">
          <SiNodedotjs className="h-6 w-6" />
          <span className="text-sm">Node.js</span>
        </div>
        <div className="flex flex-col items-center space-y-1 w-12">
          <SiTypescript className="h-6 w-6" />
          <span className="text-sm">Typescript</span>
        </div>
        <div className="flex flex-col items-center space-y-1 w-12">
          <SiJavascript className="h-6 w-6" />
          <span className="text-sm">Javascript</span>
        </div>
        <div className="flex flex-col items-center space-y-1 w-12">
          <SiMongodb className="h-6 w-6" />
          <span className="text-sm">MongoDB</span>
        </div>
        <div className="flex flex-col items-center space-y-1 w-12">
          <SiAmazonaws className="h-6 w-6" />
          <span className="text-sm">AWS</span>
        </div>
        <div className="flex flex-col items-center space-y-1 w-12">
          <SiReact className="h-6 w-6" />
          <span className="text-sm">React</span>
        </div>
        <div className="flex flex-col items-center space-y-1 w-12">
          <SiGit className="h-6 w-6" />
          <span className="text-sm">Git</span>
        </div>
        <div className="flex flex-col items-center space-y-1 w-12">
          <SiHtml5 className="h-6 w-6" />
          <span className="text-sm">Html5</span>
        </div>
        <div className="flex flex-col items-center space-y-1 w-12">
          <SiCss3 className="h-6 w-6" />
          <span className="text-sm">Css3</span>
        </div>
      </div>
  )
}