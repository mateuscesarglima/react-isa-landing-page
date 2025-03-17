import photo1 from "@images/portifolio-photo-1.png";
import photo2 from "@images/portifolio-photo-2.png";
import photo3 from "@images/portifolio-photo-3.png";
import photo4 from "@images/portifolio-photo-4.png";
import photo5 from "@images/portifolio-photo-5.png";
import photo6 from "@images/portifolio-photo-6.png";

const photos = [
  {
    src: photo1,
    alt: "Uma pessoa pilotando um drone com um oculos",
  },
  {
    src: photo2,
    alt: "Pessoa vestida socialmente",
  },
  {
    src: photo3,
    alt: "Mariana Ximenes",
  },
  {
    src: photo4,
    alt: "",
  },
  {
    src: photo5,
    alt: "",
  },
  {
    src: photo6,
    alt: "",
  },
];

export default function PhotoPortfolio() {
  return (
    <section id="fotos" className="mt-[10rem] py-10">
      <h2 className="mb-8 text-center text-4xl font-semibold">Fotos</h2>
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-4">
        {photos.map((photo, index) => (
          <div key={index} className="group relative">
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-h-full h-full rounded-lg object-cover shadow-md transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
