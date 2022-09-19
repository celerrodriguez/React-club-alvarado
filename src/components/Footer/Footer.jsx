import React from 'react'
import './Footer.css';

const Footer = () => {
  return (
    <>
        <footer>
            <div className="footer__datos">
                <div>
                    <img    className="club" 
                            src="https://res.cloudinary.com/dcwondno7/image/upload/v1660071953/alvarado/club-atletico-alvarado_gawl1h.png" 
                            alt="Escudo Alvarado" 
                            style={{width:"54", height:"54"}}
                    />
                    <h4>Club Atlético Alvarado</h4>
                </div>
                <div>
                    <img    className="direccion" 
                            src="https://res.cloudinary.com/dcwondno7/image/upload/v1663284083/alvarado/footer/ubicacion-blanca_ngnqkw.png" 
                            alt="Ícono map" 
                            style={{width:"32", height:"32"}}
                    />
                    <p>Rodriguez Peña 4984, Mar del Plata, Bs. As. Argentina</p>
                </div>
                <div>
                    <img    className="telefono" 
                            src="https://res.cloudinary.com/dcwondno7/image/upload/v1663284082/alvarado/footer/telefono-blanco_yz7uwc.png" 
                            alt="Ícono teléfono" 
                            style={{width:"28", height:"28"}}
                    />
                    <p>Teléfono: (0223) 472 1611</p>
                </div>
                <div >
                    <img    className="mail" 
                            src="https://res.cloudinary.com/dcwondno7/image/upload/v1663284082/alvarado/footer/email_bmbhrw.png" 
                            alt="Icono mail" 
                            style={{width:"28", height:"8"}}
                    />
                    <p>E-mail: info@clubalvarado.com.ar</p>
                </div>
            </div>
                <div className="footer__copyright">
                    <p>2022 - Todos los derechos reservados ©️</p>
                </div>

            <>
                <div className="footer__redes">
                    <a href="#">
                        <img    src="https://res.cloudinary.com/dcwondno7/image/upload/v1663284083/alvarado/footer/whatsapp_r6gqci.png" 
                                alt="Ícono whatsapp" 
                                style={{width:"40"}}
                        />
                    </a>
                    <a href="https://www.youtube.com/c/ClubAtl%C3%A9ticoAlvarado">
                        <img    src= "https://res.cloudinary.com/dcwondno7/image/upload/v1663284083/alvarado/footer/youtube_virnne.png" 
                                alt="Ícono Youtube" 
                                style={{width:"40"}}
                        />
                    </a>
                    <a href="https://www.facebook.com/ClubAlvaOficial" >
                        <img    src= "https://res.cloudinary.com/dcwondno7/image/upload/v1663284082/alvarado/footer/facebook_vkyeoy.png" 
                                alt="Ícono facebook" 
                                style={{width:"40"}}
                        />
                    </a>
                    <a href="https://www.instagram.com/clubalvaoficial/">
                        <img    src= "https://res.cloudinary.com/dcwondno7/image/upload/v1663284082/alvarado/footer/instagram_izkpvm.png" 
                                alt="Ícono instagram" 
                                style={{width:"40"}}
                        />
                    </a>
                    <a href= "https://twitter.com/ClubAlvaOficial?s=20">
                        <img    src= "https://res.cloudinary.com/dcwondno7/image/upload/v1663284083/alvarado/footer/twitter_vn2rvc.png" 
                                alt="Ícono twitter" 
                                style={{width:"40"}}
                        />
                    </a>
                    <a href="https://www.twitch.tv/alvarado_esports">
                        <img    src= "https://res.cloudinary.com/dcwondno7/image/upload/v1663284082/alvarado/footer/twitch_fmhdst.png" 
                                alt="Ícono twitch" 
                                style={{width:"40"}}
                        />
                    </a>
                </div>

                <div className="footer__sponsor">
                    <img    className="lyon" 
                            src="https://res.cloudinary.com/dcwondno7/image/upload/v1663284069/alvarado/footer/lyon_oxk15o.png" 
                            alt="Logo Lyon" 
                            style={{width:"240"}}
                    />
                    <img    className="weber" 
                            src="https://res.cloudinary.com/dcwondno7/image/upload/v1663284069/alvarado/footer/logo-weber-saint-gobain_wcs3ba.png" 
                            alt="Logo Weber" 
                            style={{width:"150", height:"auto"}} 
                    />
                    <img    className="sierra" 
                            src="https://res.cloudinary.com/dcwondno7/image/upload/v1663284069/alvarado/footer/sierra_de_los_padres_olwqtv.png" 
                            alt="Logo Sierra" 
                            style={{width:"150", height:"auto"}}
                    />
                </div>
            </>
        </footer>
    </>
  )
}

export default Footer