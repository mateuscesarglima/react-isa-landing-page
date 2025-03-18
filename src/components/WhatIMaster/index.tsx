import DomainCard from "@components/ui/DomainCard";
import { Typograph } from "@components/ui/Typograph";
import photoshop from "@images/photoshop.png";
import premiere from "@images/premiere.png";
import capcut from "@images/capcut.jpeg";

export default function WhatIMaster() {
  return (
    <section id="o-que-domino" className="mt-[10rem]">
      <div className="flex flex-col items-center justify-center gap-8">
        <Typograph.Title>O que eu domino?</Typograph.Title>
        <Typograph.Paragraph style={{ textAlign: "center" }}>
          Domino CapCut, Photoshop e Adobe Premiere, com habilidades avançadas{" "}
          <br />
          em edição de vídeos criativos, manipulação de imagens e design gráfico
          de alta qualidade.
        </Typograph.Paragraph>
      </div>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-5">
        <DomainCard id="capcut">
          <img
            src={capcut}
            alt="capcut logo"
            width={60}
            className="rounded-2xl shadow-lg"
          />
          <Typograph.CardTitle>Capcut</Typograph.CardTitle>
          <Typograph.Paragraph>
            Domino o CapCut com experiência avançada, criando vídeos criativos e
            profissionais com edições, efeitos, transições e ajustes de áudio de
            alta qualidade que engajam o público.
          </Typograph.Paragraph>
        </DomainCard>
        <DomainCard id="photoshop">
          <img src={photoshop} alt="Adobe photoshop logo" width={60} />
          <Typograph.CardTitle>Photoshop</Typograph.CardTitle>
          <Typograph.Paragraph>
            Tenho expertise no Photoshop, dominando edição de imagens, layouts,
            manipulação digital e design gráfico, criando conteúdos visuais de
            alta qualidade que valorizam marcas e comunicação."
          </Typograph.Paragraph>
        </DomainCard>
        <DomainCard id="adobe-premiere">
          <img src={premiere} alt="Adobe premire logo" width={60} />
          <Typograph.CardTitle>Adobe Premiere</Typograph.CardTitle>
          <Typograph.Paragraph>
            Sou habilidosa no Adobe Premiere, editando vídeos com cortes,
            transições, correção de cor e elementos gráficos de forma
            profissional.
          </Typograph.Paragraph>
        </DomainCard>
      </div>
    </section>
  );
}
