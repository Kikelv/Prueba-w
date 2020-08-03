import React, { useState } from 'react';
import { Link } from 'react-router-dom';




function Nav() {
    let [style, setStyle] = useState('noVisible');
    let [style2, setStyle2] = useState('visible');
    let [styleBoton1, setStyleBoton1] = useState('boton1Visible');
    let [styleBoton2, setStyleBoton2] = useState('boton2NoVisible');
    let [posicionBarra, setPosicionBarra] = useState('barraSign');
    let [posicionForm, setForm] = useState('formLogin');
    let [boton1sign, setBoton1sign] = useState('boton1signVisible');
    let [boton2sign, setBoton2sign] = useState('');


    function desplegar() {
        setStyle('desplegable');
        setStyle2('visible')
        setStyleBoton1('boton1NoVisible')
        setStyleBoton2('boton2Visible')
        setBoton2sign('boton2signNoVisible')
        setForm('noVisible')
    }
    function cerrar() {
        setStyle('noVisible');
        setStyle2('visible');
        setStyleBoton1('boton1Visible');
        setStyleBoton2('boton2NoVisible');
        setPosicionBarra('barraSign');
    }
    function desplegarSign() {
        setPosicionBarra('arriba');
        setForm('formLogin');
        setBoton1sign('boton1signNoVisible');
        setBoton2sign('boton2signVisible')
    }
    function cerrarSign() {
        setPosicionBarra('barraSign');
        setForm('noVisible');
        setBoton2sign('boton2signNoVisible')
        setBoton1sign('boton1signVisible')
    }
    return (
        <>
            <nav>
                <header>
                    <svg width="87" height="28" viewBox="0 0 87 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="14" cy="14" r="14" fill="#5596DF" />
                        <path d="M24.2549 18.6289V20H17.8564H16.4854V7.20312H18.1904V18.6289H24.2549Z" fill="white" />
                        <path d="M30.9117 15.1484C30.9117 14.2285 31.0875 13.4023 31.4391 12.6699C31.7906 11.9375 32.2916 11.3633 32.942 10.9473C33.5982 10.5254 34.36 10.3145 35.2271 10.3145C36.1061 10.3145 36.8736 10.5254 37.5299 10.9473C38.1861 11.3633 38.69 11.9375 39.0416 12.6699C39.3932 13.4023 39.5689 14.2285 39.5689 15.1484V15.3506C39.5689 16.2705 39.3932 17.0967 39.0416 17.8291C38.69 18.5557 38.1861 19.1299 37.5299 19.5518C36.8795 19.9678 36.1178 20.1758 35.2447 20.1758C34.3717 20.1758 33.607 19.9678 32.9508 19.5518C32.3004 19.1299 31.7965 18.5557 31.4391 17.8291C31.0875 17.0967 30.9117 16.2705 30.9117 15.3506V15.1484ZM32.5553 15.3506C32.5553 15.9951 32.6549 16.584 32.8541 17.1172C33.0592 17.6504 33.3639 18.0752 33.7682 18.3916C34.1725 18.7021 34.6646 18.8574 35.2447 18.8574C35.8189 18.8574 36.3082 18.7021 36.7125 18.3916C37.1168 18.0752 37.4186 17.6504 37.6178 17.1172C37.8229 16.584 37.9254 15.9951 37.9254 15.3506V15.1484C37.9254 14.5039 37.8229 13.915 37.6178 13.3818C37.4127 12.8486 37.108 12.4238 36.7037 12.1074C36.2994 11.791 35.8072 11.6328 35.2271 11.6328C34.6529 11.6328 34.1637 11.791 33.7594 12.1074C33.3609 12.4238 33.0592 12.8486 32.8541 13.3818C32.6549 13.915 32.5553 14.5039 32.5553 15.1484V15.3506Z" fill="white" />
                        <path d="M50.9016 10.3145C51.007 10.3145 51.1389 10.3291 51.2971 10.3584C51.4553 10.3818 51.5637 10.4082 51.6223 10.4375V11.9404C51.3703 11.8936 51.1037 11.8701 50.8225 11.8701C50.2834 11.8701 49.8322 11.9902 49.4689 12.2305C49.1115 12.4707 48.842 12.8076 48.6604 13.2412V20H47.0168V10.4902H48.6164L48.6516 11.5713C48.8977 11.1729 49.2082 10.8652 49.5832 10.6484C49.9582 10.4258 50.3977 10.3145 50.9016 10.3145Z" fill="white" />
                        <path d="M66.1805 15.6934H59.7469C59.7645 16.2852 59.8875 16.8213 60.116 17.3018C60.3445 17.7822 60.6668 18.1631 61.0828 18.4443C61.5047 18.7197 61.9969 18.8574 62.5594 18.8574C63.1102 18.8574 63.5848 18.7461 63.9832 18.5234C64.3875 18.3008 64.7479 17.9814 65.0643 17.5654L66.0574 18.3389C65.7059 18.8779 65.2371 19.3203 64.6512 19.666C64.0652 20.0059 63.3387 20.1758 62.4715 20.1758C61.6043 20.1758 60.8396 19.9795 60.1775 19.5869C59.5154 19.1943 59.0027 18.6494 58.6395 17.9521C58.282 17.2549 58.1033 16.4639 58.1033 15.5791V15.2012C58.1033 14.2109 58.2967 13.3467 58.6834 12.6084C59.0701 11.8643 59.5799 11.2959 60.2127 10.9033C60.8514 10.5107 61.534 10.3145 62.2605 10.3145C63.1453 10.3145 63.8777 10.5137 64.4578 10.9121C65.0438 11.3047 65.4773 11.8496 65.7586 12.5469C66.0398 13.2441 66.1805 14.0498 66.1805 14.9639V15.6934ZM64.5369 14.252C64.49 13.5078 64.2879 12.8867 63.9305 12.3887C63.5789 11.8848 63.0223 11.6328 62.2605 11.6328C61.6043 11.6328 61.0564 11.873 60.617 12.3535C60.1834 12.8281 59.9109 13.502 59.7996 14.375H64.5369V14.252Z" fill="white" />
                        <path d="M83.6215 10.3145C84.6645 10.3145 85.4555 10.5928 85.9945 11.1494C86.5336 11.7061 86.8031 12.5732 86.8031 13.751V20H85.1596V13.7334C85.1596 12.9775 84.9867 12.4473 84.641 12.1426C84.3012 11.832 83.8002 11.6768 83.1381 11.6768C82.7162 11.6768 82.3471 11.7676 82.0307 11.9492C81.7143 12.125 81.4652 12.3652 81.2836 12.6699C81.1078 12.9746 80.9994 13.3174 80.9584 13.6982V20H79.3148V13.7422C79.3148 12.3652 78.6381 11.6768 77.2846 11.6768C76.7396 11.6768 76.2885 11.7969 75.9311 12.0371C75.5736 12.2715 75.3012 12.5996 75.1137 13.0215V20H73.4701V10.4902H75.0258L75.0785 11.5186C75.4066 11.1318 75.8051 10.8359 76.2738 10.6309C76.7426 10.4199 77.2787 10.3145 77.8822 10.3145C78.5092 10.3145 79.057 10.4404 79.5258 10.6924C80.0004 10.9385 80.3578 11.3164 80.598 11.8262C80.9262 11.3574 81.3451 10.9883 81.8549 10.7188C82.3705 10.4492 82.9594 10.3145 83.6215 10.3145Z" fill="white" />
                    </svg><Link to="/login">
                        <span className="sign">Sign in</span></Link><button onClick={desplegar} className={styleBoton1} ><i class="fas fa-bars"></i></button><button onClick={cerrar} className={styleBoton2}><i class="fas fa-times"></i></button></header>
            </nav>


            <div className={style}> <ul>
                <li>Products</li>
                <li>About us</li>
                <li>Contact</li>

            </ul>
                <div className="barraSign" className={posicionBarra}><div className="signBoton"><span className="singBlue">Sign in</span><button onClick={desplegarSign} className={boton1sign}> <i class="fas fa-chevron-up" ></i></button><button onClick={cerrarSign} className={boton2sign}><i class="fas fa-chevron-down" ></i></button></div><div className="cajaLogin2"><form className={posicionForm}><label>Username<input type="text" name="name" /></label><label>Password<input type="password" name="password" /></label><button className="botonSign">Sign in</button></form></div>
                </div>
            </div>



        </>
    );
}


export default Nav;

