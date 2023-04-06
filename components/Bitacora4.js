import React from 'react'
import Heading from './Heading'

const Bitacora4 = () => {
    return (
        <div className='img1 bg-[#0b1011] ' >
            <Heading title="Bitacora - Sesion4" />
            <div className='text-center py-2 text-xl'>Inicio proyecto DISCO 🥳🥳🥳</div>

            <div >
                <img id="imagen6" src="Disco1.jpg" alt="Arduino 1"></img>
            </div>
            <div className='py-4 px-2 text-center '>
                <p>Comienzo conexion de jumpers a la protoboard y al arduino </p>
            </div>
            <div >
                <img id="imagen6" src="Disco2.jpg" alt="Arduino 1"></img>
            </div>
            <div className='py-4 px-2 text-center '>
                <p>Comienzo conexion de los jumpers a los led y a la base </p>
            </div>
            <div >
                <img id="imagen6" src="Disco3.jpg" alt="Arduino 1"></img>
            </div>
            <div className='py-4 px-2 text-center '>
                <p>Encendieron los leds!! </p>
            </div>
            <div id='videocel' alt="video" >
                <video controls muted type="video.mp4">
                    <source src="VDisco1.mp4" />
                </video>
                <p className='text-center py-2'>Aqui podemos ver que se conectaron los jumpers al arduino y al la protoboard y tambien se uso el servomotor para el movimiento de la base</p>

            </div>

            <div id="grd" className="grid grid-cols-4 gap-3 py-2">
                <div className="bg-blue-10" ><img src="Disco4.jpg" alt="Arduino 1"></img></div>
                <div className="bg-blue-100 "><img id="imagen6" src="Disco5.jpg" alt="Arduino 1"></img></div>
                <div className="bg-blue-100"><img id="imagen6" src="Disco6.jpg" alt="Arduino 1"></img></div>

            </div>
            <p className='text-center'>Como podemos ver aqui ya tenemos construido la base con su funcionamiento con un servomotor y los led de colores diferentes

            </p>

            <div id='video' alt="video" className='py-2' >
                <video controls muted type="video.mp4">
                    <source src="VDisco2.mp4" />
                </video>
                <p className='text-center py-2'>Aqui podemos observar el resultado final de la Dicos usando servomotores leds</p>

            </div>

        </div>






    )
}

export default Bitacora4