
import Navbarhome from '../Homepage/Navbar' 
import  Footerhome from '../Homepage/footerhome'
function Aboutpage(){
    return(
        <>
            <Navbarhome/>
            <h2 className='text-center m-5 pt-5'>About Our Charity</h2>
            <div className='container'>
                <div className='row'>
                        
                    <div className='col-12 col-lg-6 order-2 order-md-1'>
                        <h1 className='m-2' >We Are Nature Lovers</h1>
                        <p className='m-2 ' style={{textAlign:"justify" ,lineHeight:"2.3",textIndent:"50px"}}>Tourism is travel for pleasure, and the 
                        commercial activity of providing and supporting such travel. The World Tourism Organization defines tourism more generally, 
                        in terms which go "beyond the common perception of tourism as being limited to holiday activity only", as people "travelling 
                        to and staying in places outside their usual environment for not more than one consecutive year for leisure and not less than 24 hours,
                         business and other purposes". Tourism can be domestic or international, and international tourism has both incoming and outgoing
                          implications on a country's balance of payments.
                        </p>
                    </div>
                    <div className='col-12 col-lg-6 order-1 order-md-2'>
                        <img src="https://www.yudaah.com/demo/bootstrap-travel-website-templates/assets/images/about.jpg" style={{width:'600px',height:'400px',borderRadius:'5px'}} alt="about" />
                    </div>
                   
                </div>

            </div>
             <br></br>
             <br></br>
             <br></br>

            <Footerhome/>

        </>
    )
}

export default Aboutpage