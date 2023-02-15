import avatar from '../../assets/img/Circular_buffer.svg'

export default function SelectOperation() {
    return (
        <>
            <div>
                <img src={avatar} alt='generic avatar' />
            </div>
            <div>
                <h2>Hola, USUARIO</h2>
                <h4>¿Que herramienta usaras?</h4>
            </div>
            <div>
                <button type="button">Diagnostico Vial</button>
            </div>
            <div>
                <button type="button">Calculadora de proyectos</button>
            </div>
            <div>
                <button type="button">Manual de normas viales</button>
            </div>
        </>
    )
}