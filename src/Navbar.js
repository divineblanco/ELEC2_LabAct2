function Navbar(){
    return(
      <div className='wrap'>
        <div className='header'>
          <div className='ArtistLogo_mainLogo'>
            <img src = 'images/logo.png' alt='Logo'></img>
          </div>
          <button className='ham_menu' type='button'>
            <img src='images/toggle.png' alt="toggle" ></img>
          </button>
        </div>
      </div>
      
    );
}

export default Navbar;