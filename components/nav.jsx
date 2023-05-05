import Link from 'next/link'
import React, { useState, useEffect } from 'react'

export default function Nav() {
    const [active, setActive] =useState(null)

    const MenuItem = (path, title, style = "mr-5 item nav-link") => {
    return <Link href={path} className={style}>{title}</Link>
    }

  return (<>
  <div className="header-wrapperr">

  <nav class="navbar navbar-expand-lg bg-white navbar-light text-light ">
  <div class="container  ">
    <div className=''>
      {MenuItem("/", "aex","navbar-brand clash")}
    </div>
    <div className='mx-auto'>
      {MenuItem("/", "fadhil","navbar-brand clash fadhil")}

    </div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse py-2  mx-auto text-end justify-content-end px-4 " id="navbarNavAltMarkup">
      <div class="navbar-nav rounded text-center px-4 ">
             {MenuItem("/", "home")}
            {MenuItem("/about", "About")}
            {MenuItem("/profile", "Profile")}
        </div>
            <button className="btn-blue btn-blue-sm px-5 d-sm-none d-md-block ">register</button>
    </div>
  </div>
</nav>
</div>

</>
  )
}

