import React from 'react'
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
const Sectionimg = () => {
  return (
    <div>
        <div style={{"margin":"50px 20px"}} className="tape ">
            <div className="d-flex flex-wrap justify-content-between align-items-center ">
                <div className="item">
                    <img src="https://manwork.at/wp-content/uploads/2021/07/Button-Handwerk-e1641898663130.webp" width="150px" height="150px"  />
                </div>
                <div className="item">
                    <img src="https://manwork.at/wp-content/uploads/2021/07/Button-Bau-e1641898725813.webp" width="150px" height="150px" />
                </div>
                <div className="item">
                    <img src="https://manwork.at/wp-content/uploads/2021/07/Button-Industrie-e1641898791424.webp" width="150px" height="150px" />
                </div>
                <div className="item">
                    <img src="https://manwork.at/wp-content/uploads/2021/07/Button-Logistik-e1641898823793.webp" width="150px" height="150px" />
                </div>
                <div className="item">
                    <img src="https://manwork.at/wp-content/uploads/2021/07/Button-Experten-e1641898851837.webp" width="150px" height="150px" />
                </div>
                <div className="item">
                    <img src="https://manwork.at/wp-content/uploads/2021/07/Button-Office-e1641898881338.webp" width="150px" height="150px" />
                </div>
            </div>
        </div>
        <div className="container mt-50">
            <div className="row align-items-center">
                <div className="col-12 col-md-6 ">
                    <div className="text p-20">
                        <h3>FÜR BEWERBER</h3>
                        <h3>Sie suchen Ihren Traumjob?</h3>
                        <p className='margin-p'>Die moderne Arbeitswelt ist geprägt von vielen Herausforderungen. Den passenden Job zu finden, ist dabei gar nicht so leicht. Das spannende Feld der Arbeitskräfteüberlassung und des Recruiting / Rekrutierung mag auf viele eher kalt und sehr technisch wirken. Bei uns hingegen spielt der Faktor Menschlichkeit auf dem Weg zum Traumberuf eine zentrale Rolle. Wir unterstützen Menschen unterschiedlicher beruflicher Hintergründe – vom Facharbeiter bis hin zum Hilfsarbeiter – auf der Suche nach geeigneten Jobs. Wenden Sie sich vertrauensvoll an unsere Experten für Leiharbeit und finden Sie eine Arbeitsstelle, die zu Ihren Stärken und Interessen passt!</p>
                    </div>
                </div>
                <div className="col-12 col-md-6 bgimg  p-20" style={{backgroundImage : `url(${img1})` , minHeight : "350px"}}>
                    
                </div>
            </div>
        </div>
        <div className="container mt-50">
            <div className="row align-items-center">

                <div className="col-12 col-md-6 bgimg  p-20" style={{backgroundImage : `url(${img2})` , minHeight : "350px"}}>
                    
                </div>
                <div className="col-12 col-md-6 ">
                    <div className="text p-20">
                        <h3>FÜR UNTERNEHMEN</h3>
                        <h3>TOP Mitarbeiter gesucht?</h3>
                        <p className='margin-p'>Wir verbinden, was zusammen gehört. Jeden Tag. Egal, ob es sich bei Ihrem Betrieb um ein KMU oder einen internationalen Konzern handelt: Wir behalten den Überblick über das große Ganze und finden für jedes Firmengefüge das fehlende Puzzleteil. Und wir verstehen Personalservice sowie Personalleasing als ganzheitliche und nachhaltige Dienstleistungen. Unseren Spezialisten für Personaldienstleistungen geht es nicht um das bloße Abarbeiten von Aufträgen. Wir legen großen Wert darauf, enge Beziehungen zu unseren Kunden aufzubauen und ihnen langfristig zur Seite zu stehen. Ein gutes Vertrauensverhältnis bildet die Basis erfolgreicher Personalberatung und Personalvermittlung.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sectionimg
