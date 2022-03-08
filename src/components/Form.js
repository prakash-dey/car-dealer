
function Form() {
    return (
        <form action="">
            <h3>get in touch</h3>
            <input type="text" placeholder="your name" className="box" />
            <input type="email" placeholder="your email" className="box" />
            <input type="tel" placeholder="subject" className="box" />
            <textarea placeholder="your message" className="box" cols="30" rows="10"></textarea>
            <input type="submit" value="send message" className="btn" />
        </form>
    )
}

export default Form