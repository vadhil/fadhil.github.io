import Card, { BBlueCard, blueCard } from "@/components/card"

export default function Utility() {
  return (
        <section className="utility py-5 ">
            <div className="container ">
                <div className="title ">
                    <h3 className="display-3 text-blue fw-bold text-center ">Utility Pages</h3>
                    <h6 className="text-blue mb-4 ">Take a look at the utility pages included in the <b> Tech3D X Template </b></h6>
                </div>
                <div className="row justify-content-center">
                {Card ("https://assets.website-files.com/639c961f9a43a1ef0fe3a779/639c961f9a43a19d19e3aa07_404-not-found-image-tech3d-x-webflow-template.png","404 Not Found")}
                {Card ("https://assets.website-files.com/639c961f9a43a1ef0fe3a779/639c961f9a43a11edfe3aa06_password-protected-image-tech3d-x-webflow-template.png", "Password Protected")}
                </div>
            </div>
        </section>
  )
}
