import Aos from 'aos';
import "aos/dist/aos.css"
import React from 'react';


const Datadisplay = (props) => {

    Aos.init();
    console.log(props.product)

    const handleOption = (e) => {
      const joblocation = e.currentTarget.id;
      if(joblocation === "usa"){
        document.getElementById("usaopeningdisplay").style.display = "block";
        document.getElementById("bangopeningdisplay").style.display = "none";
        document.getElementById("hydopeningdisplay").style.display = "none";
      }
      else if(joblocation === "bang"){
        document.getElementById("bangopeningdisplay").style.display = "block";
        document.getElementById("hydopeningdisplay").style.display = "none";
        document.getElementById("usaopeningdisplay").style.display = "none";
      }
      else if(joblocation === "hyd"){
        document.getElementById("hydopeningdisplay").style.display = "block";
        document.getElementById("bangopeningdisplay").style.display = "none";
        document.getElementById("usaopeningdisplay").style.display = "none";
      }
    }

    const showModal = (e) => {
        const clicked = e.currentTarget.id;
        if(clicked === "ds"){
          document.getElementById("showmod").innerHTML = `
                  <div class='shadow rounded p-1 m-1'  style="border-bottom:8px solid red">
                    <div class='mb-2 d-flex flex-wrap'>
                      <span class='border p-1 m-1'>${props.product.ds1}</span>
                      <span class='border p-1 m-1'>${props.product.ds2}</span>
                      <span class='border p-1 m-1'>${props.product.ds3}</span>
                      <span class='border p-1 m-1'>${props.product.ds4}</span>
                      <span class='border p-1 m-1'>${props.product.ds5}</span>
                      <span class='border p-1 m-1'>${props.product.ds6}</span>
                    </div>
                    <h6 class='text-danger text-center'>${props.product.dsHead}</h6>
                    <p class='m-4'>${props.product.dsDescription2}</p>
                  </div>
          `
        }
        else if(clicked === "reactjs"){
          document.getElementById("showmod").innerHTML = `
          <div class='shadow rounded p-1 m-1' style="border-bottom:8px solid red">
          <div class='mb-2 d-flex flex-wrap'>
            <span class='border p-1 m-1'>${props.product.react1}</span>
            <span class='border p-1 m-1'>${props.product.react2}</span>
            <span class='border p-1 m-1'>${props.product.react3}</span>
            <span class='border p-1 m-1'>${props.product.react4}</span>
            <span class='border p-1 m-1'>${props.product.react5}</span>
            <span class='border p-1 m-1'>${props.product.react6}</span>
            <span class='border p-1 m-1'>${props.product.react7}</span>
          </div>
          <h6 class='text-danger text-center'>${props.product.reactHead}</h6>
          <p class='m-4'>${props.product.reactDescription2}</p>      
          </div>
          `
        }
        else if(clicked === "analyst"){
          document.getElementById("showmod").innerHTML = `
          <div class='shadow rounded p-1 m-1' style="border-bottom:8px solid red">
                    <div class='mb-2 d-flex flex-wrap'>
                      <span class='border p-1 m-1'>${props.product.analyst1}</span>
                      <span class='border p-1 m-1'>${props.product.analyst2}</span>
                      <span class='border p-1 m-1'>${props.product.analyst3}</span>
                      <span class='border p-1 m-1'>${props.product.analyst4}</span>
                      <span class='border p-1 m-1'>${props.product.analyst5}</span>
                    </div>
                    <h6 class='text-danger text-center'>${props.product.analystHead}</h6>
                    <p class='m-4'>${props.product.analystDescription2}</p>      
                  </div>
          `
        }
        else if(clicked === "aws"){
          document.getElementById("showmod").innerHTML = `
          <div class='shadow rounded p-1 m-1' style="border-bottom:8px solid red">
          <div class='mb-2 d-flex flex-wrap'>
            <span class='border p-1 m-1'>${props.product.aws1}</span>
            <span class='border p-1 m-1'>${props.product.aws2}</span>
            <span class='border p-1 m-1'>${props.product.aws3}</span>
            <span class='border p-1 m-1'>${props.product.aws4}</span>
            <span class='border p-1 m-1'>${props.product.aws5}</span>
            <span class='border p-1 m-1'>${props.product.aws6}</span>
            <span class='border p-1 m-1'>${props.product.aws7}</span>
          </div>
          <h6 class='text-danger text-center'>${props.product.awsHead}</h6>
          <p class='m-4'>${props.product.awsDescription2}</p>      
        </div>
          `
        }
        else if(clicked === "app"){
          document.getElementById("showmod").innerHTML = `
          <div class='shadow rounded p-1 m-1' style="border-bottom:8px solid red">
          <div class='mb-2 d-flex flex-wrap'>
            <span class='border p-1 m-1'>${props.product.app1}</span>
            <span class='border p-1 m-1'>${props.product.app2}</span>
            <span class='border p-1 m-1'>${props.product.app3}</span>
            <span class='border p-1 m-1'>${props.product.app4}</span>
            <span class='border p-1 m-1'>${props.product.app5}</span>
            <span class='border p-1 m-1'>${props.product.app6}</span>
          </div>
          <h6 class='text-danger text-center'>${props.product.appHead}</h6>
          <p class='m-4'>${props.product.appDescription2}</p>      
        </div>
          `
        }
        else if(clicked === "dga"){
          document.getElementById("showmod").innerHTML = `
          <div class='shadow rounded p-1 m-1' style="border-bottom:8px solid red">
          <div class='mb-2 d-flex flex-wrap'>
            <span class='border p-1 m-1'>${props.product.dga1}</span>
            <span class='border p-1 m-1'>${props.product.dga2}</span>
            <span class='border p-1 m-1'>${props.product.dga3}</span>
            <span class='border p-1 m-1'>${props.product.dga4}</span>
          </div>
          <h6 class='text-danger text-center'>${props.product.dgaHead}</h6>
          <p class='m-4'>${props.product.dgaDescription2}</p>      
        </div>
          `
        }
    };

  return (
      <div className="">
        <img src={props.product.url} width="100%" alt='carrers logo'></img>

        {/* body */}
        <div className='m-5'>

          {/* Careers */}
          <h1 className='text-primary mb-4'>{props.product.carrers}</h1>
          <div className='row d-flex flex-column'>
            <div className='d-md-flex'>
              <div className=" shadow rounded m-2 p-4 col-md-6" data-aos="slide-right" data-aos-duration="1500" data-aos-once="true" style={{borderBottom:"8px solid red"}}>
                <img src={props.product.imageConnection.url} height="60px" alt='Connection'></img>
                <p>{props.product.connectionImageDescription}</p>
              </div>
              <div className=" shadow rounded m-2 p-4 col-md-6" data-aos="slide-left" data-aos-duration="1500" data-aos-once="true"  style={{borderBottom:"8px solid red"}}>
                <img src={props.product.imageCloudNetwork.url} height="60px" alt='CloudNetwork'></img>
                <p>{props.product.cloudNetworkDescription}</p>
              </div>
            </div>
            <div className='d-md-flex'>
              <div className=" shadow rounded m-2 p-4 col-md-6" data-aos="slide-right" data-aos-duration="1500" data-aos-once="true"  style={{borderBottom:"8px solid red"}}>
                <img src={props.product.imageComputer.url} height="60px" alt='Computer'></img>
                <p>{props.product.computerDescription}</p>
              </div>
              <div className=" shadow rounded m-2 p-4 col-md-6" data-aos="slide-left" data-aos-duration="1500" data-aos-once="true"  style={{borderBottom:"8px solid red"}}>
                <img src={props.product.imageRocket.url} height="60px" alt='Rocket'></img>
                <p>{props.product.rocketDescription}</p>
              </div>
            </div>
          </div>

          {/* current openings */}
          <h1 className=' text-primary mb-4 mt-4'>{props.product.currentOpeningsHeading}</h1>
          <div className='d-md-flex justify-content-around mt-5'>
            <div>
              <input type='radio' id='usa' onChange={handleOption} name='currentopenings' className='m-1'></input>
              <label className='openings-label border-0 text-info p-2 rounded'>{props.product.usaOpenings}</label>
            </div>
            <div>
              <input type='radio' id='bang' onChange={handleOption} name='currentopenings' className='m-1'></input>
              <label className='openings-label border-0 text-info p-2 rounded'>{props.product.bangOpenings}</label>
            </div>
            <div>
              <input type='radio' id='hyd' onChange={handleOption} name='currentopenings' className='m-1'></input>
              <label className='openings-label border-0 text-info p-2 rounded'>{props.product.hydOpenings}</label>
            </div>
          </div>

{/* usa opening */}
          <div className='overflow-x-auto' id='usaopeningdisplay'>
            <table className='table table-hover border mt-3'>
              <thead>
              <tr>
                <th>#</th>
                <th>Location</th>
                <th>Job Name</th>
                <th>Skills</th>
                <th>Experience(years)</th>
                <th>No of Positions</th>
                <th></th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>{1}</td>
                <td>New York, USA</td>
                <td>{props.product.dsHead}</td>
                <td>{props.product.ds1},{props.product.ds2},{props.product.ds3},{props.product.ds4}</td>
                <td className='text-center'>{5}</td>
                <td className='text-center'>{3}</td>
                <td>
                  <button className='btn-primary border-0 rounded p-2' id='ds' onClick={showModal} data-bs-toggle="modal" data-bs-target="#myModal">{props.product.dsButton}</button>
                </td>
              </tr>
              <tr>
                <td>{2}</td>
                <td>Georgia, USA</td>
                <td>{props.product.reactHead}</td>
                <td>{props.product.react1},{props.product.react2},{props.product.react3},{props.product.react4}</td>
                <td className='text-center'>{3}</td>
                <td className='text-center'>{10}</td>
                <td>
                  <button className='btn-primary border-0 rounded p-2' id='reactjs' onClick={showModal}  data-bs-toggle="modal" data-bs-target="#myModal">{props.product.reactButton}</button>
                </td>
              </tr>
              </tbody>
            </table>
          </div>

          {/* Banglore opening */}
          <div className='overflow-x-auto' id='bangopeningdisplay'>
            <table className='table table-hover border mt-3'>
              <thead>
              <tr>
                <th>#</th>
                <th>Location</th>
                <th>Job Name</th>
                <th>Skills</th>
                <th>Experience(years)</th>
                <th>No of Positions</th>
                <th></th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>{1}</td>
                <td>Marathahalli, Banglore</td>
                <td>{props.product.analystHead}</td>
                <td>{props.product.analyst2}, {props.product.analyst3}, {props.product.analyst4}</td>
                <td className='text-center'>{5}</td>
                <td className='text-center'>{2}</td>
                <td>
                  <button className='btn-primary border-0 rounded p-2' id='analyst' onClick={showModal}  data-bs-toggle="modal" data-bs-target="#myModal">{props.product.analystButton}</button>
                </td>
              </tr>
              <tr>
                <td>{2}</td>
                <td>Basavangudi, Banglore</td>
                <td>{props.product.awsHead}</td>
                <td>{props.product.aws1}, {props.product.aws2}, {props.product.aws3}</td>
                <td className='text-center'>{9}</td>
                <td className='text-center'>{12}</td>
                <td>
                  <button className='btn-primary border-0 rounded p-2' id='aws' onClick={showModal}  data-bs-toggle="modal" data-bs-target="#myModal">{props.product.awsButton}</button>
                </td>
              </tr>
              </tbody>
            </table>
          </div>

          {/* Hyderabad opening */}
          <div className='overflow-x-auto' id='hydopeningdisplay'>
            <table className='table table-hover border mt-3'>
              <thead>
              <tr>
                <th>#</th>
                <th>Location</th>
                <th>Job Name</th>
                <th>Skills</th>
                <th>Experience(years)</th>
                <th>No of Positions</th>
                <th></th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>{1}</td>
                <td>Panjagutta, Hyderabad</td>
                <td>{props.product.appHead}</td>
                <td>{props.product.app1}, {props.product.app5}, {props.product.app2}</td>
                <td className='text-center'>{10}</td>
                <td className='text-center'>{5}</td>
                <td>
                  <button className='btn-primary border-0 rounded p-2' id='app' onClick={showModal}  data-bs-toggle="modal" data-bs-target="#myModal">{props.product.appButton}</button>
                </td>
              </tr>
              <tr>
                <td>{2}</td>
                <td>Hitech-city, Hyderabad</td>
                <td>{props.product.dgaHead}</td>
                <td>{props.product.dga2}, {props.product.dga3}</td>
                <td className='text-center'>{6}</td>
                <td className='text-center'>{9}</td>
                <td>
                  <button className='btn-primary border-0 rounded p-2' id='dga' onClick={showModal}  data-bs-toggle="modal" data-bs-target="#myModal">{props.product.dgaButton}</button>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
         
          {/* <div className='d-flex m-2' data-aos="slide-right" data-aos-duration="1500" data-aos-once="true" >
            <div className='shadow rounded p-1 m-1'  style={{borderBottom:"8px solid red"}}>
              <div className='mb-2 d-flex flex-wrap'>
                <span className='border p-1 m-1'>{props.product.ds1}</span>
                <span className='border p-1 m-1'>{props.product.ds2}</span>
                <span className='border p-1 m-1'>{props.product.ds3}</span>
                <span className='border p-1 m-1'>{props.product.ds4}</span>
                <span className='border p-1 m-1'>{props.product.ds5}</span>
                <span className='border p-1 m-1'>{props.product.ds6}</span>
              </div>
              <h6 className='text-danger text-center'>{props.product.dsHead}</h6>
              <p className='m-4'>{props.product.dsDescription}</p>
              <div className='text-center'><button className='btn-primary border-0 rounded p-2' id='ds' onClick={showModal} data-bs-toggle="modal" data-bs-target="#myModal">{props.product.dsButton}</button></div>
            </div>
            <div className='shadow rounded p-1 m-1' style={{borderBottom:"8px solid red"}}>
              <div className='mb-2 d-flex flex-wrap'>
                <span className='border p-1 m-1'>{props.product.react1}</span>
                <span className='border p-1 m-1'>{props.product.react2}</span>
                <span className='border p-1 m-1'>{props.product.react3}</span>
                <span className='border p-1 m-1'>{props.product.react4}</span>
                <span className='border p-1 m-1'>{props.product.react5}</span>
                <span className='border p-1 m-1'>{props.product.react6}</span>
                <span className='border p-1 m-1'>{props.product.react7}</span>
              </div>
              <h6 className='text-danger text-center'>{props.product.reactHead}</h6>
              <p className='m-4'>{props.product.reactDescription}</p>
              <div className='text-center'><button className='btn-primary border-0 rounded p-2' id='reactjs' onClick={showModal}  data-bs-toggle="modal" data-bs-target="#myModal">{props.product.reactButton}</button></div>
            </div>
            <div className='shadow rounded p-1 m-1' style={{borderBottom:"8px solid red"}}>
              <div className='mb-2 d-flex flex-wrap'>
                <span className='border p-1 m-1'>{props.product.analyst1}</span>
                <span className='border p-1 m-1'>{props.product.analyst2}</span>
                <span className='border p-1 m-1'>{props.product.analyst3}</span>
                <span className='border p-1 m-1'>{props.product.analyst4}</span>
                <span className='border p-1 m-1'>{props.product.analyst5}</span>
              </div>
              <h6 className='text-danger text-center'>{props.product.analystHead}</h6>
              <p className='m-4'>{props.product.analystDescription}</p>
              <div className='text-center mb-1'><button className='btn-primary border-0 rounded p-2' id='analyst' onClick={showModal}  data-bs-toggle="modal" data-bs-target="#myModal">{props.product.analystButton}</button></div>
            </div>
          </div>

          <div className=' d-flex m-2' data-aos="slide-right" data-aos-duration="1500" data-aos-once="true" >
            <div className='shadow rounded p-1 m-1' style={{borderBottom:"8px solid red"}}>
              <div className='mb-2 d-flex flex-wrap'>
                <span className='border p-1 m-1'>{props.product.aws1}</span>
                <span className='border p-1 m-1'>{props.product.aws2}</span>
                <span className='border p-1 m-1'>{props.product.aws3}</span>
                <span className='border p-1 m-1'>{props.product.aws4}</span>
                <span className='border p-1 m-1'>{props.product.aws5}</span>
                <span className='border p-1 m-1'>{props.product.aws6}</span>
                <span className='border p-1 m-1'>{props.product.aws7}</span>
              </div>
              <h6 className='text-danger text-center'>{props.product.awsHead}</h6>
              <p className='m-4'>{props.product.awsDescription}</p>
              <div className='text-center'><button className='btn-primary border-0 rounded p-2' id='aws' onClick={showModal}  data-bs-toggle="modal" data-bs-target="#myModal">{props.product.awsButton}</button></div>
            </div>
            <div className='shadow rounded p-1 m-1' style={{borderBottom:"8px solid red"}}>
              <div className='mb-2 d-flex flex-wrap'>
                <span className='border p-1 m-1'>{props.product.app1}</span>
                <span className='border p-1 m-1'>{props.product.app2}</span>
                <span className='border p-1 m-1'>{props.product.app3}</span>
                <span className='border p-1 m-1'>{props.product.app4}</span>
                <span className='border p-1 m-1'>{props.product.app5}</span>
                <span className='border p-1 m-1'>{props.product.app6}</span>
              </div>
              <h6 className='text-danger text-center'>{props.product.appHead}</h6>
              <p className='m-4'>{props.product.appDescription}</p>
              <div className='text-center'><button className='btn-primary border-0 rounded p-2' id='app' onClick={showModal}  data-bs-toggle="modal" data-bs-target="#myModal">{props.product.appButton}</button></div>
            </div>
            <div className='shadow rounded p-1 m-1' style={{borderBottom:"8px solid red"}}>
              <div className='mb-2 d-flex flex-wrap'>
                <span className='border p-1 m-1'>{props.product.dga1}</span>
                <span className='border p-1 m-1'>{props.product.dga2}</span>
                <span className='border p-1 m-1'>{props.product.dga3}</span>
                <span className='border p-1 m-1'>{props.product.dga4}</span>
              </div>
              <h6 className='text-danger text-center'>{props.product.dgaHead}</h6>
              <p className='m-4'>{props.product.dgaDescription}</p>
              <div className='text-center mb-1'><button className='btn-primary border-0 rounded p-2' id='dga' onClick={showModal}  data-bs-toggle="modal" data-bs-target="#myModal">{props.product.dgaButton}</button></div>
            </div>
          </div> */}
        </div>

        {/* Footer */}
        <div className='d-md-flex p-5' style={{backgroundColor:"#e6e4e4"}}>
          <div className='col-md-3 mr-md-5'>
            <img src={props.product.footerImage.url} height="40px" alt='footer'></img>
            <p className='mt-5 text-secondary'>{props.product.footerDescription}</p>
          </div>
          <div className='col-md-3'>
            <h5 className=''>{props.product.footerlinksHead}</h5>
            <ul className='list-inline d-flex' id='keylinks'>
              <div className='mr-5'>
                <li><a href='/' className='text-secondary'><i className="bi bi-chevron-double-right"></i>&nbsp;{props.product.link1}</a></li>
                <li><a href='/' className='text-secondary'><i className="bi bi-chevron-double-right"></i>&nbsp;{props.product.link2}</a></li>
                <li><a href='/' className='text-secondary'><i className="bi bi-chevron-double-right"></i>&nbsp;{props.product.link3}</a></li>
              </div>
              <div>
                <li><a href='/' className='text-secondary'><i className="bi bi-chevron-double-right"></i>&nbsp;{props.product.link4}</a></li>
                <li><a href='/' className='text-secondary'><i className="bi bi-chevron-double-right"></i>&nbsp;{props.product.link5}</a></li>
                <li><a href='/' className='text-secondary'><i className="bi bi-chevron-double-right"></i>&nbsp;{props.product.link6}</a></li>
              </div>
            </ul>
          </div>
          <div className='col-md-3'>
            <h5>{props.product.getInTouchHead}</h5>
            <div className='d-flex flex-column'>
              <span className='text-secondary'><i className="bi bi-geo-alt-fill"></i>&nbsp;{props.product.getInTouchLocation}</span>
              <span className='text-secondary'><i className="bi bi-envelope-fill"></i>&nbsp;
                <a href='mailto:someone@example.com' className='text-secondary link-underline link-underline-opacity-0'>{props.product.getInTouchMail}</a>
              </span>
            </div>
          </div>
          <div className='col-md-3'>
            <h5>{props.product.followUsHead}</h5>
            <div className='mt-2 d-flex'>
              <div className='mr-2 border-0 rounded text-primary' style={{ fontSize:"30px"}} id='followusfacebook'><i className="bi bi-facebook"></i></div>
              <div className='mr-2 ml-2 border-0 rounded text-danger' style={{fontSize:"30px"}} id='followusyoutube'><i className="bi bi-youtube"></i></div>
              <div className='mr-2 ml-2 border-0 rounded text-info' style={{fontSize:"30px"}} id='followuslinkedin'><i className="bi bi-linkedin"></i></div>
            </div>
          </div>
        </div>

        {/* modal */}
        <div className="modal" id="myModal">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">

              <div className="modal-header">
                <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
              </div>

              <div className="modal-body" id='showmod'></div>
              <div className='text-center m-2'>
                <b>{props.product.openingsDetail}</b>
                <span className='border fs-4 p-2 rounded-pill text-dark bg-warning'><b>{props.product.openingsMail}</b></span>
              </div>

              <div className="modal-footer">
                <button className='btn-primary border-0 rounded p-2'>
                  <a href="mailto:someone@example.com" className='text-white link-underline link-underline-opacity-0'>Send Resume</a>
                </button>
                <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
              </div>

            </div>
          </div>
      </div>
    </div>
  );
}
export default Datadisplay;