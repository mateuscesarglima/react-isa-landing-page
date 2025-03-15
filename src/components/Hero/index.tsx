import isaImg from "@images/isa.png";
import imgBack from "@images/img-back.png";
import Navbar from "@components/ui/Navbar";

export default function Hero() {
  return (
    <section className="px-30">
      <Navbar />
      <div className="relative flex items-center justify-center bg-red-200">
        <div>
          <p>Hello, I am</p>
          <p>Isa Leite</p>
        </div>
        <div>
          <div className="before:absolute before:top-[20rem] before:h-30 before:w-30 before:rounded-full before:bg-blue-500">
            <img src={isaImg} alt="Imagem da isa pensando" width={500} />
          </div>
          <img src={imgBack} alt="image background" />
        </div>
      </div>
    </section>
  );
}
