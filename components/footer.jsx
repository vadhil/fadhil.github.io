import React from 'react'

const Footer = () => {
  return (
<footer className='container-fluid'>
  <div class="container text-center py-3">
    
  
    <div className="row">
      <div className="col">
        <h6 className='text-warning '>alamat</h6>
        <a href='https://www.google.co.id/' className='fw-light'>Jl. Jend Sudirman no.115 wonomulyo Polewali Mandar</a>
      </div>
      <div className="col ">
        <h6>kontak</h6>
        <div className='d-flex flex-column'>
          <ul className='list-unstyled'>
            <li><a className='ig' href="">fadhil.alra@gmail.com</a></li>
            <li><a className='' href="">+62 895397455556</a></li>
          </ul>
        </div>
      </div>
      <div className="col">
        <h6>sosial media</h6>
        <div className='d-flex flex-column'>
          <ul className='list-unstyled'>
            <li><a className='ig' href="">instagram</a></li>
            <li><a className='' href="">twitter</a></li>
            <li><a className='' href="">facebook</a></li>
          </ul>
        </div>
        </div>
    </div>
    <div className="">
    </div>

    </div>
    <p className='fw-light copy text-warning text-center'>Copyright &copy; Def X | Designed by <u>Fadhil - Powered by Def X</u></p>
</footer>

  //   <footer className="bg-dark text-light rounded-top">
  //   <div className="container-fluid" >
  //     <div className="row row-col">
  //     <div className="col row row-col">
  //       <h5 className=''>sosial media</h5>
  //       <div className='d-grid col gap-3'>
  //         <a href="">ig</a>
  //         <a href="">facebook</a>
  //         <a href="">twitter</a>
  //       </div>
  //     </div>
  //       <div className="col row">
  //         <h5>alamat</h5>
  //         <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
  //         Cumque distinctio dignissimos natus tempore nesciunt deleniti.</p>
  //       </div>
  //     </div>

  //     <div className="row text-center">
        
  //         <p>&copy; Copyright 2023 fadhil</p>
    
  //     </div>
  //   </div>
  // </footer>
  
  )
}

export default Footer
