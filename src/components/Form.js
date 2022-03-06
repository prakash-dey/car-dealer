
function Form() {
    return (
        <form action="">
            <h3>get in touch</h3>
            <input type="text" placeholder="your name" class="box" />
            <input type="email" placeholder="your email" class="box" />
            <input type="tel" placeholder="subject" class="box" />
            <textarea placeholder="your message" class="box" cols="30" rows="10"></textarea>
            <input type="submit" value="send message" class="btn" />
        </form>
    )
}

export default Form