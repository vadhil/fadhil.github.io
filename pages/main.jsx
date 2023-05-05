import Image from "next/image"

export default function Main() {

    const MainCard = (link, content = "main pages") =>{
        return (
            <div className="col d-flex mb-4 mt-5 ">
                <div class="card-blue mx-auto bd border-blue bg-white d-flex flex-column align-items-center justify-items-center">
                  <Image src={link} class="card-img-top border-bottom-white-blue img-card" alt="..." />
                  <div class="card-body flex-grow-1 align-self-center mt-5">
                    <h2 className="fw-bold text-align-center ">{content}</h2>
                  </div>
            </div>
          </div>)
    }

  return (
    <section className="main-pages mt-5 bg-blue ">
    <div className="container-fluid  center bg-blue py-5 ">
      <h3 className="display-3 text-white fw-bold text-center ">Main Pages</h3>
      <h6 className="text-grey text-center">Take a look at the main pages included in the Tech3D X Templates</h6>
      <div className="row ">
          {MainCard ("https://assets.website-files.com/639c961f9a43a1ef0fe3a779/639c961f9a43a154d8e3a9fb_home-image-tech3d-x-webflow-template.png", "Home" )}
          {MainCard ("https://assets.website-files.com/639c961f9a43a1ef0fe3a779/639c961f9a43a1f0b5e3a9fe_about-image-tech3d-x-webflow-template.png", "About")}
          {MainCard ("https://assets.website-files.com/639c961f9a43a1ef0fe3a779/639c961f9a43a1229ce3aa02_blog-image-tech3d-x-webflow-template.png","blog")}
          {MainCard("https://assets.website-files.com/639c961f9a43a1ef0fe3a779/639c961f9a43a168fce3a9ff_blog-post-image-tech3d-x-webflow-template.png", "Blog post")}
          {MainCard ("https://assets.website-files.com/639c961f9a43a1ef0fe3a779/639c961f9a43a1ce34e3aa05_pricing-image-tech3d-x-webflow-template.png", "Pricing")}
          {MainCard("https://assets.website-files.com/639c961f9a43a1ef0fe3a779/639c961f9a43a19697e3aa01_careers-image-tech3d-x-webflow-template.png","Karir")}
          {MainCard("https://assets.website-files.com/639c961f9a43a1ef0fe3a779/639c961f9a43a1104ae3a9fa_team-member-image-tech3d-x-webflow-template.png", "Team Member")}
          {MainCard("https://assets.website-files.com/639c961f9a43a1ef0fe3a779/639c961f9a43a1c2b8e3aa04_feature-single-image-tech3d-x-webflow-template.png", "Fitur")}
          {MainCard("https://assets.website-files.com/639c961f9a43a1ef0fe3a779/639c961f9a43a1a71fe3aa00_contact-image-tech3d-x-webflow-template.png", "Kontak")}
      </div>
      <button className="center btn-blue-sm btn-outline-blue mt-4">Buy Template</button>
    </div>
  </section>
  )
}
