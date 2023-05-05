import Image from 'next/image'
import React from 'react'

export default function Cards() {
 
    const Card = (link) =>{
        return (
            <div className="col d-flex mb-4 ">
                <div class="card-blue mx-auto border-blue d-flex flex-column align-items-center justify-items-center">
                  <Image src={link} class="card-img-top border-bottom-blue img-card" alt="..." />
                  <div class="card-body flex-grow-1 align-self-center mt-4">
                    <h3 className="  fw-bold text-align-center">40 section</h3>
                  </div>
            </div>
          </div>)
    }

    return (
        <section className="include mt-5">
        <div className="container-fluid text-center">
          <h3 className="display-2 fw-bold">what is included in Tech3D</h3>
          <p className="font-size fw-normal text-center text-grey col-10 mx-auto">Tech3D X Webflow Template includes over 20 pages in total, with more than 40 sections.</p>
          <div className="row row-cols-1 row-cols-md-3 row-cols-lg-3 p-5 justify-content-center">
            {Card ("https://cdn.pixabay.com/photo/2017/05/13/17/31/fruit-2310212_960_720.jpg")}
           {Card("https://images.pexels.com/photos/2324808/pexels-photo-2324808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")}
            {Card ("https://images.pexels.com/photos/3045245/pexels-photo-3045245.jpeg?auto=compress&cs=tinysrgb&w=600")}
           {/* {Card ("https://images.pexels.com/photos/1841841/pexels-photo-1841841.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")} */}
          </div>
        </div>
      </section>
    )


}
