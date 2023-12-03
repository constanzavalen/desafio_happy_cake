
import "./contact.css"
const Contact = () => {
  return (
    <div className="contacto">
      <h1>Cuentanos, ¿en qué te podemos ayudar?</h1>
      <br />
      <card className= "card">
          <p>Correo:</p>
          <input className="input" type="email" placeholder=" name@example.com" />
          <p>Descripción:</p>
          <input className="input2" type="text"/>
          <br />
          <button className="button">Enviar</button>
      </card>
    </div>
  )
}

export default Contact