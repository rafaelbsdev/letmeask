import illustrationImg from "../assets/images/illustration.svg"
import logoImg from "../assets/images/logo.svg"
import googleIconImg from "../assets/images/google-icon.svg"

export function Home (){
          return(
                    <div>
                              <aside>
                                        <img src={illustrationImg} alt="Ilustra��o simbolizando perguntas e respostas "/>
                                        <strong>Crie salar de Q&amp;A ao-vivo</strong>
                                        <p>Tire as d�vidas da sua audi�ncia em tempo-real</p>
                                        <main>
                                                  <div>
                                                            <img src = {logoImg} alt = "Letmeask"/>
                                                            <button>
                                                                      <img>src ={googleIconImg} alt ="Logo"</img>
                                                                      Crie sua sala com o Google
                                                                      </button>
                                                                      <div>
                                                                           ou entre em uma sala
                                                                      </div>
                                                                      <form>
                                                                           <input type = "text"
                                                                           placeholder = "Digite o c�digo da sala"

                                                                           />
                                                                           <button type = "submit">
                                                                                Entrar na sala
                                                                           </button>
                                                                      </form>
                                                  </div>
                                        </main>
                              </aside>
                    </div>
          )
}