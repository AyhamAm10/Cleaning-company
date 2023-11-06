import axios from 'axios';
import React, { useState } from 'react'

const Foraplicants = ({ myservice }) => {

    const [namevalue, setnamevalue] = useState(null);
    const [famvalue, setfamvalue] = useState(null);
    const [locationvalue, setlocationvalue] = useState(null);
    const [numbervalue, setnumbervalue] = useState(null);
    const [emailvalue, setemailvalue] = useState(null);
    const [myordervalue, setmyordervalue] = useState(null);
    const [success, setsuccess] = useState(null);
    const [error, seterror] = useState(null);
    const [typeerror, settypeerror] = useState(false);



    console.log(myservice)

    const handleSubmit = () => {
        axios.post('http://localhost:3000/', {
            item: myservice.item,
            name: namevalue,
            number: numbervalue,
            email: emailvalue,
            location: locationvalue
        })
            .then((response) => {
                console.log(response.data);
                setsuccess('successful')
                setTimeout(() => {
                    setsuccess(null)
                }, 5000);
            })
            .catch((error) => {
                console.error(error.message);
                seterror(error.message);
                setTimeout(() => {
                    seterror(null)
                }, 5000);
            });
    }

    return (
        <div>
            {
            success ?
            <div class="alert alert-success alert-order col-10 col-md-5 col-lg-4" role="alert">
               The operation succeeded 
            </div> : null
        }
        {
            error ?
            <div class="alert alert-danger alert-order col-10 col-md-5 col-lg-4" role="alert">
               error :  {typeerror.message}
            </div> : null
        }

            <h1 style={{ background: "#f2f2f2", padding: "30px" }}>Meine Karriere. Mein Erfolg.</h1>
            <div className="margin-p">
                <h4 className="text-c">WIR HABEN DEN PASSENDEN JOB FÜR DICH. SENDE UNS DEINE <br />
                </h4>
                <h3 className='margin-p text-c'>INITIATIVBEWERBUNG </h3>
            </div>
            <div className="container">
                <div className="row align-items-center ">
                    <form className="  col-12 col-md-6 col-lg-6 padding-cont" onSubmit={(e) => {
                        
                        e.preventDefault()
                        handleSubmit()
                    }} >
                        <div className="inputs ">
                            <div className='d-flex flex-column margin-p ' >
                                <label htmlFor="">name *</label>
                                <input type="text" className='form-control' onChange={(e) => { setnamevalue(e.target.value) }} required />
                            </div>
                            
                            <div className='d-flex flex-column margin-p' >
                                <label htmlFor="">location *</label>
                                <input type="text" className='form-control' onChange={(e) => { setlocationvalue(e.target.value) }} required />
                            </div>
                            <div className='d-flex flex-column margin-p' >
                                <label htmlFor="">number phone *</label>
                                <input type="text" className='form-control' onChange={
                                    (e) => {setnumbervalue(e.target.value)
                                    console.log(typeof(numbervalue))}
                                
                                } required />
                            </div>
                            <div className='d-flex flex-column margin-p' >
                                <label htmlFor="">E-Mail *</label>
                                <input type="text" className='form-control' onChange={(e) => setemailvalue(e.target.value)} required />
                            </div>

                        </div>
                        <input type="submit" className='btn btn-outline-success btn-lg' onSubmit={(e) => {
                            e.preventDefault()
                            
                        }} />
                    </form>
                    <div className="col-12 col-md-6 col-lg-6 padding-cont">
                        <p className=" text-c margin-px">Der passende Job ist noch nicht mit dabei? Keine Sorge, senden Sie uns einfach eine Initiativbewerbung. Unsere Experten überprüfen im nächsten Schritt Ihre Bewerbung und prüfen ob wir ein passendes Angebot haben. Beim Vorgespräch im Rahmen einer Personalberatung vermitteln Ihnen unsere Karriereberater diskrete Stellenangebote und finden gemeinsam mit Ihnen den passenden Arbeitsplatz. Neben der Personalvermittlung zählt auch die Personalberatung zu unseren Stärken, daher sind wir der starke Partner für Ihren Karriereweg, der vor allem eins sein sollte: individuell. Jedes unserer Stellenangebote ist genau auf Ihr Qualifikationen und Kenntnisse spezifiziert, sodass wir genau das richtige für Ihre Bedürfnisse finden. </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Foraplicants
