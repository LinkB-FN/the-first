import '../styles/StaticPage.css';

const Contacto = () => {
    return (
        <div className="static-page">
            <h1>Atención a Clientes</h1>
            <p>
                ¿Tienes alguna duda o comentario? Estamos para escucharte y ayudarte a resolver
                cualquier inconveniente con nuestro servicio.
            </p>
            <div className="contact-info">
                <p><strong>Teléfono:</strong> 552 122 6060</p>
                <p><strong>Correo Electrónico:</strong> aac@atencioncinepolis.com</p>
                <p><strong>Redes Sociales:</strong> @AyudaCinepolis</p>
            </div>
        </div>
    );
};

export default Contacto;
