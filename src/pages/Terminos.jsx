import React from 'react';

const Terminos = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Términos y Condiciones</h1>
            <p style={styles.text}>
                El uso de nuestro sitio web y aplicación móvil está sujeto a los siguientes
                términos y condiciones. Al navegar en nuestra plataforma, aceptas de manera
                expresa nuestras normativas de uso, compra de boletos y participación en promociones.
            </p>
            <p style={styles.text}>
                Nos reservamos el derecho de modificar estos términos en cualquier momento
                para mejorar la experiencia de nuestros usuarios y cumplir con la legislación vigente.
            </p>
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
        marginBottom: '15px'
    }
};

export default Terminos;
