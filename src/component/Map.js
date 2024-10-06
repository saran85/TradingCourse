import React from 'react';

function Map() {
  return (
    <section className="map">
        <p>Chennai, India</p>
      <div id="google-map">
        <iframe
          src="https://maps.google.com/maps?q=Chennai,India&t=&z=13&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="300"
          frameBorder="0"
          allowFullScreen
          title="Google Maps"
        ></iframe>
      </div>
      
    </section>
  );
}

export default Map;
