import { Link } from 'phosphor-react'
import { FormEvent } from 'react';

interface Props {
  title: string;
  description: string;
  stack: string;
  image: string;
  link?: string;
}

export function ProjectCard(props: Props) {
  return (
    <div className="flex gap-12 mt-10 h-[400px] px-2 py-2 rounded">
      <img src={props.image} className="w-1/2 rounded-2xl shadow-md shadow-titleColor object-cover" />
      
      <div className="flex flex-col gap-8 items-start">
        <h1 className="font-bold font-title text-3xl text-titleColor">{props.title}</h1>
        <p className="font-title text-xl text-justify text-backgroundColor">{props.description}</p>
        <p className="font-title text-lg text-justify text-backgroundColor"><b>Stack:</b> {props.stack}</p>

        <button
          type="button"
          className="inline-flex items-center rounded-md bg-titleColor px-4 py-2 text-sm font-medium text-sectionsColor shadow-sm hover:bg-slider-gradient"
          onClick={(event: FormEvent) => {
            event.preventDefault();
            window.open(props.link ?? "https://www.github.com/gustavopresoti")
          }}
        >
          <Link className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
          Acessar
        </button>
      </div>
    </div>
  )
}