import React from 'react'
import Heading from './Heading'

const Bitacora5 = () => {
    return (
        <div className='img1 bg-[#0b1011] ' >
            <Heading title="Bitacora - Proyecto de corte" />
            <div className='text-center py-2 text-xl'>Inicio proyecto del corte </div>

            <div >
                <img id="imagen6" src="bender0.jpeg" alt="Arduino 1"></img>
            </div>
            <div className='py-4 px-2 text-center '>
                <p>Comenzamos la eleccion y planeacion del animatronico </p>
            </div>
            <div >
                <img id="imagen6" src="bender1.jpeg" alt="Arduino 1"></img>
            </div>
            <div className='py-4 px-2 text-center '>
                <p>Comenzamos a moldear la arcilla para crear el molde de bender </p>
            </div>
            <div >
                <img id="imagen6" src="bender3.jpeg" alt="Arduino 1"></img>
            </div>
            <div className='py-4 px-2 text-center '>
                <p>Con agua se iba moldeando la arcilla para la contruccion de bender </p>
            </div>
            <div >
                <img id="imagen6" src="bender2.jpeg" alt="Arduino 1 "></img>
            </div>
            <div className='py-4 px-2 text-center '>
                <p>Nos toco utilizar palos para que la estructura mantuviera la forma mientras secaba </p>
            </div>
            <div >
                <img id="imagen6" src="bender4.jpeg" alt="Arduino 1 "></img>
            </div>
            <div className='py-4 px-2 text-center '>
                <p>Midiendo la base de donde se van a posicionar los ojor y la boca </p>
            </div>
            <div >
                <img id="imagen6" src="bender5.jpeg" alt="Arduino 1 "></img>
            </div>
            <div className='py-4 px-2 text-center '>
                <p>Tomando medidas de la base </p>
            </div>
            <div >
                <img id="imagen6" src="base1.jpeg" alt="Arduino1"></img>
            </div>
            <div className='py-4 px-2 text-center '>
                <p>organizando la base</p>
            </div>
            <div >
                <img id="imagen6" src="yeso1.jpeg" alt="Arduino1"></img>
            </div>
            <div className='py-4 px-2 text-center '>
                <p>Aplicado capas de yeso para poder realizar el molde con latex</p>
            </div>
            <div >
                <img id="imagen6" src="yeso2.jpeg" alt="Arduino1"></img>
            </div>
            <div className='py-4 px-2 text-center '>
                <p>le colocamos un globo para qeu sostuviera la forma de la cabeza</p>
            </div>
            <div >
                <img id="imagen6" src="yeso3.jpeg" alt="Arduino1"></img>
            </div>
            <div className='py-4 px-2 text-center '>
                <p>como va quedando con el yeso</p>
            </div>
            <div >
                <img id="imagen6" src="latex 3.jpeg" alt="Arduino1"></img>
            </div>
            <div className='py-4 px-2 text-center '>
                <p>Finalizado para que se seque el yeso </p>
            </div>
            <div >
                <img id="imagen6" src="baseojos2.jpeg" alt="Arduino1"></img>
            </div>
            <div className='py-4 px-2 text-center '>
                <p>pegando los ojos a la base y haciendo el uso del servomotor para el movimiento</p>
            </div>
            <div >
                <img id="imagen6" src="baseojos3.jpeg" alt="Arduino1"></img>
            </div>
            <div className='py-4 px-2 text-center '>
                <p>Haciendo conexion con el arduino y la protoboard</p>
            </div>
            <div >
                <img id="imagen6" src="baseojos4.jpeg" alt="Arduino1"></img>
            </div>
            <div className='py-4 px-2 text-center '>
                <p>Haciendo la boca con otro servo</p>
            </div>
            <div >
                <img id="imagen6" src="molde1.jpeg" alt="Arduino1"></img>
            </div>
            <div className='py-4 px-2 text-center '>
                <p>ropiendo el molde de yeso para sacar el del latex </p>
            </div>
            <div >
                <img id="imagen6" src="final 1.jpeg" alt="Arduino1"></img>
            </div>
            <div className='py-4 px-2 text-center '>
                <p>Aqui como quedo el animatronico </p>
            </div>

            <div id='video' alt="video" className='py-2' >
                <video controls muted type="video.mp4">
                    <source src="VideoFinal.mp4" />
                </video>
                <p className='text-center py-2'>Aqui podemos observar el resultado final de la Dicos usando servomotores leds</p>

            </div>
            

        </div>






    )
}

export default Bitacora5