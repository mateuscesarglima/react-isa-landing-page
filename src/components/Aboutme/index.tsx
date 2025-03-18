import isaImg from "@images/isa-black-and-white.png";
import imgBack from "@images/img-back-2.png";
import photoProgress from "@images/fotograph-progress.png";
import videoMakerProgress from "@images/videomaker-progress.png";
import socialMediaProgress from "@images/social-media-progress.png";
import { Typograph } from "@components/ui/Typograph";

export default function Aboutme() {
  return (
    <section
      id="about-me"
      className="mt-[10rem] grid grid-cols-2 place-items-center"
    >
      <div className="relative">
        <div className="before:absolute before:top-70 before:-left-20 before:-z-2 before:h-50 before:w-50 before:rounded-full before:bg-[#FF9654] before:opacity-50 after:absolute after:top-40 after:-right-30 after:-z-2 after:h-30 after:w-30 after:rounded-full after:bg-[#FF9654] after:opacity-20">
          <div className="mt-5 before:absolute before:top-20 before:-left-10 before:-z-2 before:h-30 before:w-30 before:rounded-full before:bg-[#FF9654] before:opacity-30"></div>
          <img src={isaImg} width={350} alt="imagem da isa em preto e branco" />
          <div className="absolute -top-5 -z-1 h-[50rem]">
            <img src={imgBack} alt="image background" />
          </div>
        </div>
      </div>
      <div className="flex max-w-[40rem] flex-col gap-4">
        <Typograph.Title>Sobre mim</Typograph.Title>
        <Typograph.Paragraph>
          Sou fotógrafa e videomaker, apaixonada por transformar ideias em
          imagens e vídeos impactantes. Também domino a área de social media,
          criando conteúdos inovadores e fora da caixa que ajudam empresas a
          crescerem e se destacarem no mercado. Se você busca alguém com visão
          criativa e foco em resultados para alavancar sua empresa, estou aqui
          para fazer isso acontecer!
        </Typograph.Paragraph>
        <div className="mt-5 flex flex-col gap-2">
          <div>
            <span className="font-semibold">Fotografia</span>
            <img src={photoProgress} alt="" width={600} />
          </div>
          <div>
            <span className="font-semibold">Videomaker</span>
            <img src={videoMakerProgress} alt="" width={600} />
          </div>
          <div>
            <span className="font-semibold">Social media</span>
            <img src={socialMediaProgress} alt="" width={600} />
          </div>
          <div>
            <span className="font-semibold">Comunicação</span>
            <img src={photoProgress} alt="" width={600} />
          </div>
        </div>
      </div>
    </section>
  );
}
