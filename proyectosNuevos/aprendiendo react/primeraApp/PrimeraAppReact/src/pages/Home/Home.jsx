import React from 'react'
import './Home.css'

function Home() {

    const a =1;

  return (

    <div class="">
           
            <div class="gridImages">
                    <div class="gridContainer" > 
                            <h2>Los Reyunos</h2>
                         <img class="gridImages__img" src="https://www.argentina.gob.ar/sites/default/files/reyunos1.jpg" alt="" />
                         <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet, molestiae. Enim iusto, nisi itaque fuga ipsam repellendus totam obcaecati in, deleniti delectus nulla, dolore deserunt nesciunt? Recusandae voluptatem debitis mollitia?</p>
                         
                    </div>

                    <div  class="gridContainer"> 
                            <h2>Laberinto de Borgues</h2>
                        <img class="gridImages__img" src="https://www.laberintodeborges.com/media/espacios/mirador.webp" alt="" />
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet, molestiae. Enim iusto, nisi itaque fuga ipsam repellendus totam obcaecati in, deleniti delectus nulla, dolore deserunt nesciunt? Recusandae voluptatem debitis mollitia?</p>
                    </div>

                    <div class="gridContainer" >
                            <h2>Valle Grande</h2>
                        <img class="gridImages__img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKYDVgQG-FTIHNQiyvuE_ycKTA1TvB1ULuWQ&usqp=CAU" alt="" />
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet, molestiae. Enim iusto, nisi itaque fuga ipsam repellendus totam obcaecati in, deleniti delectus nulla, dolore deserunt nesciunt? Recusandae voluptatem debitis mollitia?</p>

                           <a class="grid__buttom" href="https://maps.app.goo.gl/qb4mCHEtDSBU1DTy9"  target='_blank'>Ubicación</a>
                        
                    </div>
                    
                    
                    

            </div>
    </div>


  )
}

export default Home
