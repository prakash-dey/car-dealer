import Form from "./Form"
import GoogleMap from "./GoogleMap"

function Contact() {
  return (
    <section class="contact" id="contact">

    <h1 class="heading"><span>contact</span> us</h1>

    <div class="row">

        <GoogleMap/>
        <Form/>

    </div>

</section>
  )
}

export default Contact