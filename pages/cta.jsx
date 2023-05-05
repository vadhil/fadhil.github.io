import React from 'react'

export default function Cta() {
  return (
    <section className=" mx-auto bg-dange">
        <div className="container  mx-auto  center bg-warnin">
          <div className="ro row-cols- row-cols-md- cta d-flex flex-column flex-md-row center mx-auto border-blue">
            <div className="col flex-grow-1">
              <div className="d-flex flex-column center  p-4 mt-4">
                <h1>Def X</h1>
                <h3>Figma file included</h3>
                <p className='fw-normal'>Send us an email to tech3dx@brixtemplates.com with your purchase receipt, and we will send you the editable Figma file for the Tech3D X template.</p>
                <button className="btn-blue-sm btn-blue">Request</button>
              </div>
            </div>
            <div className=" div-img-cta bg-danger flex-grow-1 ">
              <img className="img-cta" src="https://cdn.pixabay.com/photo/2014/02/25/22/06/staircase-274614_960_720.jpg" alt="" />
            </div>
          </div>
          <button className="btn-blue-sm btn-blue mt-4 mx-auto ">Buy template</button>
        </div>
      </section>
  )
}
