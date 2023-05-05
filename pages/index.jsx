import Cards from "./cards";
import Cta from "./cta";
import Hero from "./hero";


export default function Home() {


  return (
    <>
     <Hero />
      <Cards />
      <Cta />
      <section className="main-pages mt-5 bg-blue ">
        <div className="container-fluid  full pt-5 ">
          <h3 className="display-3 text-white fw-bold text-center ">Main Pages</h3>
          <h6 className="text-grey text-center">Take a look at the main pages included in the Tech3D X Templates</h6>
          <div className="row">
            <div className="col"> main pages</div>
          </div>
        </div>
      </section>

     
    </>
  )
}


// <section className="test-card">
// <div className="container">
//   <div className="row">
//     <div className="col">
//       <div className="card-blue border-blue d-flex flex-column  ">
//         <div className=" ">
//           <img className="card-img-top " src="https://cdn.pixabay.com/photo/2017/05/13/17/31/fruit-2310212_640.jpg" alt="" />
//         </div>
//         <div className="col-3 text-center ">
//           <h3 className="fw-bold ">hello</h3>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
// </section>