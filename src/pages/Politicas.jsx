import React from 'react';

const Politicas = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Políticas de Privacidad</h1>
            <p style={styles.text}>
                En Cinépolis valoramos tu privacidad. Esta sección detalla cómo recopilamos, utilizamos
                y protegemos tu información personal y financiera.
            </p>
            <p style={styles.text}>
                Toda tu información es manejada bajo estrictos estándares de seguridad y con fines
                exclusivamente relacionados a la mejora de tu experiencia en nuestra plataforma.
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

export default Politicas;
