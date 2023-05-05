import Image from "next/image"

export default function More() {

    const CardSide = ( title, content, src, order="") =>{
        return (
            <div className="col row row-cols-1 row-cols-md-2 center mt-5">
            <div className={`col ${order} text-md-start text-center px-5 p-4`}>
                <h4 className="display-6 fw-bold text-white">{title}</h4>
                <p>{content}</p>
            </div>
            <div className="col ">
                <div className="img-more">
                    <Image className="square-img" src={src} alt="" />
                </div>
            </div>
        </div>
        )
    }

  return (
    <section className="more bg-blue text-white pt-4">
        <div className="container">
            <div className="title pt-5">
                <h3 className="display-4 text-white fw-bold">The Tech3D X Webflow Template also comes with more surprises...</h3>
            </div>
        </div>
        <div className="row row-cols-1 gap-5 p-4">
                {CardSide("3 header and footers",
                "With a total of 3 different headers and footers, you can easily customize the Tech3D X Webflow Template to fit your company needs and requirements",
                "https://assets.website-files.com/639c961f9a43a1ef0fe3a779/639c961f9a43a19875e3aa0c_3-headers-and-3-footers-image-tech3d-x-webflow-template-p-800.png")}
                {CardSide("3 Notification Bars", "If you are looking to get more sales, use one of our 3 notification bars included in the Tech3D X Webflow Template, and start promoting your products or services.",
                 "https://assets.website-files.com/639c961f9a43a1ef0fe3a779/639c961f9a43a13992e3aa0a_3-notification-bars-image-tech3d-x-webflow-template.png",
                  "order-sm-first order-lg-last")}
                {CardSide("Social Media Assets",
                "Our Tech3D X Webflow Template Figma file includes a collection of social media covers that match with the Webflow Template design (for Facebook, Twitter and LinkedIn), so you can easily edit, customize, and use them for your own social media profiles.",
                "https://assets.website-files.com/639c961f9a43a1ef0fe3a779/639c961f9a43a18341e3aa0b_social-media-assets-image-tech3d-x-webflow-template-p-800.png")}  
        </div>
    </section>
  )
}
