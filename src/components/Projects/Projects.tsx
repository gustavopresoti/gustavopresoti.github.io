import findYourDuoImage from '../../assets/find-your-duo-landing.svg';
import portfolioImage from '../../assets/portfolio-landing.png';
import moveItImage from '../../assets/moveit-banner.svg';
import { ProjectCard } from './ProjectCard';
import { ThumbnailPlugin } from '../Slider'

import { useKeenSlider } from "keen-slider/react"
import { SliderBanner } from '../SliderBanner';

export function Projects() {
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
  })
  const [thumbnailRef] = useKeenSlider(
    {
      initial: 0,
      slides: {
        perView: 4,
        spacing: 10,
      },
    },
    [ThumbnailPlugin(instanceRef)]
  )

  return (
    <div className="bg-sectionsColor mt-10 w-4/5 shadow-md shadow-gray-900 rounded-lg">
      <div className="flex flex-col items-center text-center mb-10 mt-6">
        <h1 className="text-5xl font-extrabold text-titleColor">
          \Projetos
        </h1>

        <div className="border border-b-0 border-t-2 border-backgroundColor w-1/2 mt-6"></div>

        <div className="flex flex-col gap-12 w-11/12">
          <div ref={sliderRef} className="keen-slider h-3/4">
            <div className="keen-slider__slide">
              <ProjectCard
                title="Portfolio" 
                description="O projeto deste site pessoal foi desenvolvido para reforçar as minhas habilidades de front-end web.
                O site também serve como um portfolio, onde você pode ver mais informações sobre mim, alguns projetos que já desenvolvi 
                e linguagens/ferramentas que já utilizei."
                stack="Typescript, ReactJS e TailwindCSS"
                image={portfolioImage}
                link="http://gustavopresoti.github.io/"
              />
            </div>
            <div className="keen-slider__slide">
              <ProjectCard
                title="FindYourDuo" 
                description="Esse projeto foi desenvolvido durante a Next Level Week e-Sports da Rocketseat.
                A ideia foi contruir uma aplicação completa e multi-plataforma, passando pelo desenvolvimento do back-end e front-end (web e mobile).
                Com essa aplicação, os jogadores podem criar anúncios de partidas para os jogos disponíveis e se conectarem através do Discord."
                stack="Typescript, Node.js, ReactJS, React Native, Prisma e TailwindCSS"
                image={findYourDuoImage}
                link="https://github.com/gustavopresoti/find-your-duo-web"
              />
            </div>
            <div className="keen-slider__slide">
              <ProjectCard
                title="Move.it" 
                description="Esse projeto foi desenvolvido durante a Next Level Week #4 da Rocketseat.
                A ideia foi contruir uma aplicação web completa, passando pelo desenvolvimento do back-end e front-end.
                O Move.it é uma aplicação que estimula as pessoas a fazerem intervalos para descanso durante suas atividades e praticarem exercícios 
                simples, aplicando a técnica Pomodoro."
                stack="Typescript, Next.js e ReactJS"
                image={moveItImage}
                link="https://github.com/gustavopresoti/Move.it"
              />
            </div>
            <div className="keen-slider__slide">
              <ProjectCard
                title="E-coleta" 
                description="Esse projeto foi desenvolvido durante a Next Level Week #3 da Rocketseat.
                A ideia foi contruir uma aplicação completa e multi-plataforma, passando pelo desenvolvimento do back-end e front-end (web e mobile).
                Com essa aplicação, os jogadores podem criar anúncios de partidas para os jogos disponíveis e se conectarem através do Discord."
                stack="Typescript, Node.js, ReactJS, React Native, Prisma e TailwindCSS"
                image={findYourDuoImage}
              />
            </div>
          </div>

          <div ref={thumbnailRef} className="keen-slider thumbnail h-50">
            <div className="keen-slider__slide flex items-center justify-center h-20 text-2xl text-white bg-titleColor hover:bg-subtitleColor cursor-pointer">
              <SliderBanner
                title="Portfolio"
                bannerUrl={portfolioImage}
              />
            </div>
            
            <div className="keen-slider__slide flex items-center justify-center h-20 text-2xl text-white bg-titleColor hover:bg-subtitleColor cursor-pointer">
              <SliderBanner
                title="FindYourDuo"
                bannerUrl={findYourDuoImage}
              />
            </div>
            
            <div className="keen-slider__slide flex items-center justify-center h-20 text-2xl text-white bg-titleColor hover:bg-subtitleColor cursor-pointer">
              <SliderBanner
                title="Move.it"
                bannerUrl={moveItImage}
              />
            </div>
            
            <div className="keen-slider__slide flex items-center justify-center h-20 text-2xl text-white bg-titleColor hover:bg-subtitleColor cursor-pointer">
              <SliderBanner
                title="E-coleta"
                bannerUrl={findYourDuoImage}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}