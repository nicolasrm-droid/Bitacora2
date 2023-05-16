import React from 'react'
import Heading from './Heading'

const Bitacora5 = () => {
    return (
        <div className='img1 bg-[#0b1011] ' >
            <Heading title="Proyecto final" />
            <div className='text-center py-2 text-xl'>Inicio proyecto final </div>

            <div >
                <p className='texto text-center py-3'>Para el proyecto final se penso en la planeacion de un cementerio el cual usara elementos como leds
                    servo motores y un motor que no habiamos usado un DC gorilla, el cual a diferencia del servomotor
                    este puede dar un giro de 360°.
                </p>
            </div>

            <div >
                <img id="imagen6" src="arboles.jpeg" alt="Cementerio"></img>
            </div>
            <div className='py-4 px-2 text-center '>
                <p>Comenzamos con la elaboracion de los arboles. </p>
            </div>

            <div >
                <img id="imagen6" src="lapidas1.jpeg" alt="Cementerio"></img>
            </div>
            <div className='py-4 px-2 text-center '>
                <p>Se realizaron las lapidas con un diseño acorde al cementerio. </p>
            </div>
            <div >
                <img id="imagen6" src="personajes.jpeg" alt="Cementerio"></img>
            </div>
            <div className='py-4 px-2 text-center '>
                <p>Se crearon los personajes en foamy moldeable, para que fuera menos esado para los servomotores. </p>
            </div>
            <div >
                <img id="imagen6" src="reloj.jpeg" alt="Cementerio"></img>
            </div>
            <div className='py-4 px-2 text-center '>
                <p>Se construyo el reloj con carton paja donde vamos a usar el motor DC-GORILLA. </p>
            </div>
            <div >
                <img id="imagen6" src="MotorDCGorilla.jpeg" alt="Cementerio"></img>
            </div>
            <div className='py-4 px-2 text-center '>
                <p>Ese es el motor DC-Gorila el cual se uso en el reloj para el movimiento del minutero.
                    Este motor tiene una conexion supremamente facil puesto que es soldar los jumpers en las puntas y se
                    conecta a la placa la cual a su vez va aconectada al arduino. </p>
            </div>

            <div id='videocel' alt="video" className='py-2' >
                <video controls muted type="video.mp4">
                    <source src="VideoMotorDC.mp4" />
                </video>
                <p className='text-center py-2'>Aqui podemos observar el resultado final de la Dicos usando servomotores leds</p>

            </div>
            <div >
                <img id="imagen6" src="Imagen Zombie1.jpeg" alt="Cementerio"></img>
            </div>
            <div className='py-4 px-2 text-center '>
                <p>Aqui podemos ver el personaje del zombie. </p>
            </div>
            <div >
                <img id="imagen6" src="FinalFinal.jpeg" alt="Cementerio"></img>
            </div>
            <div className='py-4 px-2 text-center '>
                <p>Aqui podemos ver el resultado del proyecto final. </p>
            </div>



        </div>






    )
}

export default Bitacora5