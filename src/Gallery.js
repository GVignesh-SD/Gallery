import './Gallery.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import * as React from 'react';



function Gallery() {
  return (
    <div className="galleryPage">
      <Carousel infiniteLoop autoPlay className='main-slide'  showThumbs={false}>
        <div className="image">
          <img src="https://media.istockphoto.com/id/1391517615/photo/close-up-on-a-couple-using-the-gps-while-driving-a-car.jpg?b=1&s=170667a&w=0&k=20&c=FSxrQyMNmIsxX4mQdKuXMvZupd2QJ-egSS8haSuBnHE=" alt="" />
        </div>
        <div className="image">
          <img src="https://media.istockphoto.com/id/1388822385/photo/generic-modern-car-in-front-of-concrete-wall.jpg?b=1&s=170667a&w=0&k=20&c=WMEeAcnmhdt4Gj1oqlYyKMMYNy7VecQP4NfTqPiEQ48=" alt="" />
        </div>
        <div className="image">
          <img src="https://media.istockphoto.com/id/1391517615/photo/close-up-on-a-couple-using-the-gps-while-driving-a-car.jpg?b=1&s=170667a&w=0&k=20&c=FSxrQyMNmIsxX4mQdKuXMvZupd2QJ-egSS8haSuBnHE=" alt="" />
        </div>
        <div className="image">
          <img src="https://media.istockphoto.com/id/1423325870/photo/tow-truck-transportation.jpg?b=1&s=170667a&w=0&k=20&c=g1nLskSe23SzMb4quMAC4ktEOdyfunfYY12hFVFZ0go=" alt="" />
        </div>
        <div className="image">
          <img src="https://media.istockphoto.com/id/1391517615/photo/close-up-on-a-couple-using-the-gps-while-driving-a-car.jpg?b=1&s=170667a&w=0&k=20&c=FSxrQyMNmIsxX4mQdKuXMvZupd2QJ-egSS8haSuBnHE=" alt="" />
        </div>
        <div className="image">
          <img src="https://media.istockphoto.com/id/1423325870/photo/tow-truck-transportation.jpg?b=1&s=170667a&w=0&k=20&c=g1nLskSe23SzMb4quMAC4ktEOdyfunfYY12hFVFZ0go=" alt="" />
        </div>
        <div className="image">
          <img src="https://media.istockphoto.com/id/1391517615/photo/close-up-on-a-couple-using-the-gps-while-driving-a-car.jpg?b=1&s=170667a&w=0&k=20&c=FSxrQyMNmIsxX4mQdKuXMvZupd2QJ-egSS8haSuBnHE=" alt="" />
        </div>
        <div className="image">
          <img src="https://media.istockphoto.com/id/1423325870/photo/tow-truck-transportation.jpg?b=1&s=170667a&w=0&k=20&c=g1nLskSe23SzMb4quMAC4ktEOdyfunfYY12hFVFZ0go=" alt="" />
        </div>
        <div className="image">
          <img src="https://media.istockphoto.com/id/1391517615/photo/close-up-on-a-couple-using-the-gps-while-driving-a-car.jpg?b=1&s=170667a&w=0&k=20&c=FSxrQyMNmIsxX4mQdKuXMvZupd2QJ-egSS8haSuBnHE=" alt="" />
        </div>
        <div className="image">
          <img src="https://media.istockphoto.com/id/1423325870/photo/tow-truck-transportation.jpg?b=1&s=170667a&w=0&k=20&c=g1nLskSe23SzMb4quMAC4ktEOdyfunfYY12hFVFZ0go=" alt="" />
        </div>
      </Carousel>
      <div className="imageGallery">
        <h1>Image Gallery</h1>
        <div class="row">
          <div class="column">
            <img src="https://www.w3schools.com/w3images/underwater.jpg" alt='image' />
            <img src="https://www.w3schools.com/w3images/underwater.jpg" alt='image' />
            <img src="https://www.w3schools.com/w3images/underwater.jpg" alt='image'/>
            <img src="https://www.w3schools.com/w3images/underwater.jpg" alt='image'/>
            <img src="https://www.w3schools.com/w3images/underwater.jpg" alt='image'/>
            <img src="https://www.w3schools.com/w3images/underwater.jpg" alt='image'/>
            <img src="https://www.w3schools.com/w3images/underwater.jpg" alt='image'/>
          </div>
          <div class="column">
            <img src="https://www.w3schools.com/w3images/underwater.jpg" />
            <img src="https://www.w3schools.com/w3images/underwater.jpg" />
            <img src="https://www.w3schools.com/w3images/underwater.jpg" />
            <img src="https://www.w3schools.com/w3images/underwater.jpg" />
            <img src="https://www.w3schools.com/w3images/underwater.jpg" />
            <img src="https://www.w3schools.com/w3images/underwater.jpg" />
            <img src="https://www.w3schools.com/w3images/underwater.jpg" />
          </div>
          <div class="column">
            <img src="https://www.w3schools.com/w3images/underwater.jpg" />
            <img src="https://www.w3schools.com/w3images/underwater.jpg" />
            <img src="https://www.w3schools.com/w3images/underwater.jpg" />
            <img src="https://www.w3schools.com/w3images/underwater.jpg" />
            <img src="https://www.w3schools.com/w3images/underwater.jpg" />
            <img src="https://www.w3schools.com/w3images/underwater.jpg" />
            <img src="https://www.w3schools.com/w3images/underwater.jpg" />
          </div>
          <div class="column">
            <img src="https://www.w3schools.com/w3images/underwater.jpg" />
            <img src="https://www.w3schools.com/w3images/underwater.jpg" />
            <img src="https://www.w3schools.com/w3images/underwater.jpg" />
            <img src="https://www.w3schools.com/w3images/underwater.jpg" />
            <img src="https://www.w3schools.com/w3images/underwater.jpg" />
            <img src="https://www.w3schools.com/w3images/underwater.jpg" />
            <img src="https://www.w3schools.com/w3images/underwater.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
}


export default Gallery;
