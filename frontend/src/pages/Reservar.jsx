import { useState } from 'react';

function Reservar() {
    const [nombre, setNombre] = useState('');
    const [fecha, setFecha] = useState('');
    const [hora, setHora] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Reservación enviada:\nNombre: ${nombre}\nFecha: ${fecha}\nHora: ${hora}`);
        // Aquí luego se enviará al backend
    };

    return (
        <div style={{ padding: "2rem" }}>
            <h2>Reservar</h2>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: "1rem" }}>
                    <label>Nombre: </label><br />
                    <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
                </div>

                <div style={{ marginBottom: "1rem" }}>
                    <label>Fecha: </label><br />
                    <input type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} required />
                </div>

                <div style={{ marginBottom: "1rem" }}>
                    <label>Hora: </label><br />
                    <input type="time" value={hora} onChange={(e) => setHora(e.target.value)} required />
                </div>

                <button type="submit">Reservar</button>
            </form>
        </div>
    );
}

export default Reservar;
