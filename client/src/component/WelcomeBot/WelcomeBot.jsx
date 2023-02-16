import avatar from '../../assets/img/Circular_buffer.svg'

export default function WelcomeBot() {
    return (
        <>
            <div>
                <img src={avatar} alt='generic avatar' />
            </div>
            <div>
                <h5>Hola soy <b>Senvii</b> y te</h5>
                <h5>ayudaré a <b>generar tu</b></h5>
                <h5><b>diagnóstico vial</b></h5>
            </div>
            <div>
                <button type="button">Empezar</button>
            </div>

        </>
    )
}