import Image from "next/image"


export default function Card(link, content) {
  return (
    <div className="col d-flex mb-4 ">
        <div class="card-blue mx-auto border-blue d-flex flex-column align-items-center justify-items-center">
          <Image src={link} class="card-img-top border-bottom-blue img-card" alt="..." />
          <div class="card-body flex-grow-1 align-self-center mt-4">
            <h3 className="fw-bolder text-blue  text-align-center">{content}</h3>
          </div>
    </div>
  </div>)
}


 const BBlueCard = (link, content) => {
  return (
    <div className="col d-flex mb-4 mt-5 ">
        <div class="card-blue mx-auto bd border-blue bg-white d-flex flex-column align-items-center justify-items-center">
          <img src={link} class="card-img-top border-bottom-white-blue img-card" alt="..." />
          <div class="card-body flex-grow-1 align-self-center mt-5">
            <h2 className="fw-bold text-align-center ">{content}</h2>
          </div>
    </div>
  </div>)
}

