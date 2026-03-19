import React from 'react';

const Contacto = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Atención a Clientes</h1>
            <p style={styles.text}>
                ¿Tienes alguna duda o comentario? Estamos para escucharte y ayudarte a resolver
                cualquier inconveniente con nuestro servicio.
            </p>
            <div style={styles.contactInfo}>
                <p><strong>Teléfono:</strong> 552 122 6060</p>
                <p><strong>Correo Electrónico:</strong> aac@atencioncinepolis.com</p>
                <p><strong>Redes Sociales:</strong> @AyudaCinepolis</p>
            </div>
        </div>
    );
};

const styles = {
    container: {
        padding: '40px 20px',
        maxWidth: '800px',
        margin: '0 auto',
        fontFamily: 'sans-serif',
        flex: 1
    },
    title: {
        color: '#0f172a',
        marginBottom: '20px'
    },
    text: {
        color: '#334155',
        lineHeight: '1.6',
        marginBottom: '25px'
    },
    contactInfo: {
        backgroundColor: '#f8fafc',
        padding: '20px',
        borderRadius: '8px',
        border: '1px solid #e2e8f0',
        color: '#334155'
    }
};

export default Contacto;
