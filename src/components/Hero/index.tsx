import isaImg from "@images/isa.png";
import imgBack from "@images/img-back.png";
import Navbar from "@components/ui/Navbar";
import { InstagramLogo, LinkedinLogo } from "@phosphor-icons/react";

export default function Hero() {
  return (
    <section className="mx-auto w-full max-w-[100rem] px-20">
      <Navbar />
      <div className="mt-[4rem] grid grid-cols-2 place-items-center">
        <div className="flex flex-col gap-8">
          <div>
            <p className="text-[1.5rem] font-semibold">Hello, I am</p>
            <p className="text-primary text-3xl font-semibold">Isa Leite</p>
            <h1 className="text-8xl font-semibold text-wrap">
              Analista de <br /> Marketing
              <br /> Digital
            </h1>
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-justify">
              Meu nome é Isa Leite, e trabalho com Marketing Digital há 4 anos.
              Durante esse tempo, adquiri uma ampla experiência na área da
              comunicação, unindo criatividade e estratégia para entregar
              resultados que realmente fazem a diferença.
            </p>
            <p className="text-justify">
              Sou fotógrafa e videomaker, apaixonada por transformar ideias em
              imagens e vídeos impactantes. Também domino a área de social
              media, criando conteúdos inovadores e fora da caixa que ajudam
              empresas a crescerem e se destacarem no mercado. Se você busca
              alguém com visão criativa e foco em resultados para alavancar sua
              empresa, estou aqui para fazer isso acontecer!
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="flex flex-col items-center before:absolute before:top-70 before:-left-20 before:-z-2 before:h-50 before:w-50 before:rounded-full before:bg-[#FF9654] before:opacity-50 after:absolute after:top-40 after:-right-30 after:-z-2 after:h-30 after:w-30 after:rounded-full after:bg-[#FF9654] after:opacity-20">
            <div className="mt-5 before:absolute before:top-20 before:-left-10 before:-z-2 before:h-30 before:w-30 before:rounded-full before:bg-[#FF9654] before:opacity-30"></div>
            <img src={isaImg} alt="Imagem da isa pensando" width={350} />
            <div id="social-media" className="mt-5 flex gap-2">
              <button className="cursor-pointer">
                <InstagramLogo size={40} weight="fill" />
              </button>
              <button className="cursor-pointer">
                <LinkedinLogo size={40} weight="fill" />
              </button>
            </div>
          </div>
          <div className="absolute -top-5 -z-1 h-[50rem]">
            <img src={imgBack} alt="image background" />
          </div>
        </div>
      </div>
    </section>
  );
}
