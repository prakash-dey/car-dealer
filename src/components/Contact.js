import Form from "./Form"
import GoogleMap from "./GoogleMap"

function Contact() {
  return (
    <section className="contact" id="contact">

    <h1 className="heading">contact us</h1>

    <div className="row">

        <GoogleMap/>
        <Form/>

    </div>

</section>
  )
}

export default Contact