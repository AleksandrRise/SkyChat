export default function Main() {
    return (
        <form>
            <section>
                <h1>Create <span>Account</span></h1>
                <p>Create account to enter the chat</p>
            </section>

            <section>
                <input type="text" placeholder="Your Username" />
                <input type="email" placeholder="Your Email" />
                <input type="password" placeholder="Your Password" />
            </section>

            <section>
                <button>Sign In</button>
                <input type="submit" value="Submit" />
            </section>
        </form>
    )
}