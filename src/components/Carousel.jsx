import React from 'react'
import './Carousel.css'

export default function Carousel() {
  return (
    <div className='d-flex justify-content-center'>
      <div id="carouselExampleCaptions" className="carousel slide pt w-100 h-25 " data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={3} aria-label="Slide 4" />
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={4} aria-label="Slide 5" />
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://static1.topspeedimages.com/wordpress/wp-content/uploads/2024/01/2024-ktm-1390-super-duke-r-action-shot-3.jpg" className="d-block w-100" alt="KTM" />
      <div className="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://4kwallpapers.com/images/wallpapers/honda-cbr1000rr-r-fireblade-sp-racing-bikes-stunt-race-1920x1080-6958.jpg" className="d-block w-100" alt="HONDA" />
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://wallup.net/wp-content/uploads/2019/09/606854-kawasaki-ninja-zx-rr-motorcycle-hd-wallpaper-1920x1080-19149.jpg" className="d-block w-100" alt="KAWASAKI" />
      <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://static1.topspeedimages.com/wordpress/wp-content/uploads/2023/12/sbk-899-panigale_2014_amb01_w_1920x1080-mediagallery_output_image_1920x1080.jpg" className="d-block w-100" alt="DUCATI" />
      <div className="carousel-caption d-none d-md-block">
        <h5>fourth slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://www.hdwallpapers.in/download/yamaha_mt_10_2020-1920x1080.jpg" className="d-block w-100" alt="YAMAHA" />
      <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

    </div>
  )
}


