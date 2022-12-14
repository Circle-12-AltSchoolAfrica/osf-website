import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

import { patterns } from "./cloudImages";

function Header() {
  return (
    <section>
      <div className="z-20 flex flex-wrap lg:flex-row bg-dark-blue-primary px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 pt-32 pb-10 sm:pb-6 lg:pt-40 lg:pb-12 xl:pb-24 2xl:pt-56 2xl:pb-48 sm:text-left">
        <div className="absolute left-0">
          <img className="-mt-24 -mb-12 -pl-4" src={patterns.headerRec} alt="" />
        </div>
        <div className="w-full xl:w-1/2 lg:w-1/2 sm:w-2/3 mb-4 relative z-10 text-white">
          <h1 className="font-ubuntu text-4xl lg:text-6xl leading-tight font-bold uppercase">
            Open Source Festival 2020 + Sustain OSS
          </h1>
          <div className="font-ubuntu flex flex-wrap mt-2">
            <div className="w-full sm:w-1/2 lg:w-1/2 xl:w-1/2 text-lg lg:text-xl uppercase">
              <i className="pr-2">
                <FontAwesomeIcon icon={faCalendar} />
              </i>
              20TH - 22ND FEB, 2020
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/2 xl:w-1/2 lg:-ml-2 text-lg lg:text-xl uppercase">
              <i className="pr-2">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </i>
              Lagos, Nigeria
            </div>
          </div>
          <p className="text-lg lg:text-xl text-gray-700 mt-4">
            An annual open source gathering under <br /> Open Source Community Africa
          </p>
          <a
            href="https://blog.oscafrica.org/the-chronicles-of-open-source-festival-2020-ck84qc32s04zmzns18q5x8fjp"
            target="_blank"
            rel="noopener noreferrer"
            className="w-1/2 block sm:inline-block sm:w-auto mt-8 px-12 py-3 bg-orange-primary text-black rounded-lg text-center uppercase"
          >
            Event Recap
            <i className="ml-4 pr-2">
              <FontAwesomeIcon icon="external-link-alt" />
            </i>
          </a>
        </div>

        <div className="w-full -mt-48 lg:mt-0 sm:w-1/2 lg:w-1/2 xl:w-1/2 mb-4">
          <img className="pl-24" src={patterns.africanMap} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Header;
