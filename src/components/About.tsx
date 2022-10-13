import profilePicture from "../assets/profile-picture.png";

export function About() {
  return (
    <div className="bg-sectionsColor mt-10 w-4/5 shadow-md shadow-gray-900 rounded-lg">
      <div className="flex flex-col items-center text-center mb-10 mt-6">
        <h1 className="text-5xl font-extrabold text-titleColor">
          \Sobre mim
        </h1>

        <div className="border border-b-0 border-t-2 border-backgroundColor w-1/2 mt-6"></div>

        <div className="flex gap-12 px-10 w-11/12 mt-10">
          <img src={profilePicture} className="w-64 h-80 rounded-lg shadow-md shadow-titleColor object-cover" />
    
          <section className="flex flex-col gap-5 font-title text-xl text-justify text-backgroundColor">
            <p>
              Olá, mundo! Sou o Gustavo, tenho 24 anos e sou um desenvolvedor full-stack. Minha linguagem principal hoje é o Typescript, tanto para back, quanto para front.
              
              Tenho mais experiência com back-end, tendo 2 anos de experiência com Node.js e já tendo utilizado os frameworks Express e Serverless. Além disso, também atuei 
              com MongoDB, AWS, Git e Jest.

              Nunca trabalhei com front-end web, mas já desenvolvi diversos projetos utilizando ReactJS, HTML e CSS, principalmente.
            </p>
            <p>
              Desenvolver é minha paixão desde criança, quando comecei a brincar de fazer blog e editar templates que encontrava na internet. De lá pra cá o gosto só aumentou 
              e hoje estou terminando o curso que sempre sonhei, Ciência da Computação, e buscando uma nova oportunidade profissional.
            </p>
            <p>
              Me mande um oi em minhas redes que terei o enorme prazer de bater um papo e descobrir como posso colaborar com você.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}