import "./Blog.css";
import Logo from "../../img/guestLogo.png"

const Blog = () =>{
    return(
        <article className="blog">
            <figure className="blog__figure">
                <img src={Logo} alt="" className="blog__img"/>
            </figure>
            <div className="fotoFade">
                <section className="blog__info">
                    <h1 className="blog__title">GuestCompass</h1>
                </section>
            </div>
        </article>
    )
}

export default Blog;