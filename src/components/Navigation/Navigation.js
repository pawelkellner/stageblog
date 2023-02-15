import "./Navigation.css";
const Navigation = () =>{
    return(
        <nav className="nav">
            <section className="logoWrapper">
                <p className="nav__title">PAWEL KELLNER</p>
            </section>
            <section className="buttonsWrapper">
                <svg xmlns="http://www.w3.org/2000/svg" width="27.632" height="27.209" viewBox="0 0 27.632 27.209">
                    <path id="Icon_open-account-login" data-name="Icon open-account-login" d="M10.362,0V3.887H24.178V23.322H10.362v3.887h17.27V0Zm3.454,7.774v3.887H0v3.887H13.816v3.887l6.908-5.83Z"/>
                </svg>
            </section>
        </nav>
    );
}

export default Navigation;