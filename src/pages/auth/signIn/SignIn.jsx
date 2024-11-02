import './SignIn.css'

function SignIn() {
  return (
    <main className="signin">
      <section className="signin__section">
        <div className="signin__container">
          <header className="signin__header">
            <h1 className="signin__title">Faça o seu Login</h1>
          </header>
          <form className="signin__form">
            <div className="signin__form-group">
              <label className="signin__label" htmlFor="email">
                E-mail:
              </label>
              <input
                className="signin__input"
                type="email"
                name="email"
                id="email"
                placeholder="Digite seu e-mail"
              />
            </div>
            <div className="signin__form-group">
              <label className="signin__label" htmlFor="password">
                Senha:
              </label>
              <input
                className="signin__input"
                type="password"
                name="password"
                id="password"
                placeholder="Digite sua senha"
              />
            </div>
            <div className="signin__login-button-container">
              <button className="signin__login-button" type="submit">
                Login
              </button>
            </div>
            <div className="signin__register">
              <p className="signin__register-text">
                Não tem uma conta?{" "}
                <a className="signin__register-link" href="signUp">
                  Faça o cadastro
                </a>
              </p>
            </div>
            <div className="signin__google-login">
              <p className="signin__google-text">
                Realize o login pelo Google:
              </p>
              <button className="signin__google-button" type="button">
                <img
                  className="signin__google-image"
                  src="../../../public/google.svg"
                  alt="imagem-google"
                />
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

export default SignIn;
