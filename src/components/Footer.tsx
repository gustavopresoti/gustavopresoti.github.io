import { FormEvent } from "react";
import { SiGithub } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";

export function Footer() {
  return (
    <div className="flex flex-col gap-4 items-center text-sectionsColor mt-10">
      <p>Desenvolvido por <span className="text-titleColor">Gustavo Presoti</span></p>

      <section className="flex gap-6">
        <SiGithub 
          size={32}
          cursor="pointer"
          className="hover:text-titleColor"
          onClick={(event: FormEvent) => {
            event.preventDefault();
            window.open("https://www.github.com/gustavopresoti")
          }}
        />

        <SiLinkedin 
          size={32}
          cursor="pointer"
          className="hover:text-titleColor"
          onClick={(event: FormEvent) => {
            event.preventDefault();
            window.open("https://www.linkedin.com/in/gustavopresoti")
          }}
        />
      </section>
    </div>
  )
}