import React from 'react';
    
const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light sticky-top d-md-flex justify-content-around">
      <div className='d-flex justify-content-around'>
        <button className="navbar-toggler mr-md-3 border-0 text-light" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <img src='https://infomericainc.com/Content/images/logo.png' height="60px"  alt='Logo'></img>
      </div>
      <div className='col-8 d-flex justify-content-around '  id='unorderedlist'>
          <a href='/' className='text-decoration-none text-dark'>HOME</a>
          <a href='/' className='text-decoration-none text-dark'>ABOUTUS</a>
          <a href='/' className='text-decoration-none text-dark'>INDUSTRIES</a>
          <a href='/' className='text-decoration-none text-dark'>SERVICES</a>
          <a href='/' className='text-decoration-none text-dark'>SOLUTIONS</a>
          <a href='/' className='text-decoration-none text-dark'>CONTACT US</a>
          <a href='/' className='text-decoration-none text-dark'>CSR</a>
          <a href='/' className='text-decoration-none text-dark'>CAREERS</a>
      </div>

      {/* offcanvas */}
      <div className="offcanvas offcanvas-end bg-info-subtle" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div className="offcanvas-header">
        <img src='https://infomericainc.com/Content/images/logo.png' height="60px"  alt='Logo'></img>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end p-5">
          <li className="nav-item">
            <a className="nav-link text-dark" href="#"><b>HOME</b></a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark" href="#"><b>ABOUTUS</b></a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark" href="#"><b>INDUSTRIES</b></a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark" href="#"><b>SERVICES</b></a>
          </li> 
          <li className="nav-item">
            <a className="nav-link text-dark" href="#"><b>SOLUTIONS</b></a>
          </li> 
          <li className="nav-item">
            <a className="nav-link text-dark" href="#"><b>CONTACT US</b></a>
          </li> 
          <li className="nav-item">
            <a className="nav-link text-dark" href="#"><b>CSR</b></a>
          </li> 
          <li className="nav-item">
            <a className="nav-link text-dark" href="#"><b>CAREERS</b></a>
          </li>
        </ul>
      </div>
    </div>

    </nav>
  );
};
export default Navbar;