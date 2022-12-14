import React from "react";

import { gallery, patterns } from "./cloudImages";

function Gallery() {
  return (
    <section id="gallery" className="bg-white lg:flex-row px-4 lg:px-40 pt-12 lg:pt-24">
      <div className="absolute left-0">
        <img className="-mt-8 lg:-mt-12 -pl-4" src={patterns.headerRec} alt="" />
      </div>
      <div className="flex flex-wrap">
        <div className="mb-8 lg:mb-12 w-full lg:w-1/2 text-dark-blue-primary-600">
          <h1 className="text-sec font-bold font-ubuntu">Gallery</h1>
        </div>
        <div className="w-full hidden lg:block lg:w-1/2 pl-12 mt-10 text-white">
          <img src={patterns.section} alt="" className="w-auto" />
        </div>
      </div>

      <div className="flex flex-wrap justify-center text-white my-20">
        {[
          {
            day: "Day 1",
            tag: "Workshop",
            image: gallery.one,
            href: "https://www.flickr.com/photos/187223404@N02/albums/72157713316605613"
          },
          {
            day: "Day 1",
            tag: "Sustain Africa",
            image: gallery.two,
            href: "https://www.flickr.com/photos/187223404@N02/albums/72157713315626001"
          },
          {
            day: "Day 2",
            tag: "Conference Day 1",
            image: gallery.three,
            href: "https://www.flickr.com/photos/187223404@N02/albums/72157713321504593"
          },
          {
            day: "Day 3",
            tag: "Conference Day 2",
            image: gallery.four,
            href: "https://www.flickr.com/photos/187223404@N02/albums/72157713320683546"
          }
        ].map((gallery) => (
          <a
            href={gallery.href}
            key={gallery.tag}
            className="relative w-full h-full lg:w-1/2 max-w-sm rounded px-1 py-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <figure className="cursor-pointer">
              <img className="w-auto mx-auto" src={gallery.image} alt={`An amazing photograph from ${gallery.tag}.`} />
              <div className="z-0 -mt-20 pt-4 px-6 w-auto h-20 bg-black opacity-50 text-white">
                <p className="text-sm lg:text-xs">{gallery.day}</p>
                <h3 className="font-bold text-base">{gallery.tag}</h3>
              </div>
            </figure>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
