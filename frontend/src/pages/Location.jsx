import { useState } from "react";
import Title from "../components/Title";
import { MapPinCheckInside } from "lucide-react";
import { cityList } from "../assets/assets";
import { Link } from "react-router-dom";


export default function Locations() {
  const [mapUrl, setMapUrl] = useState(
    "https://www.google.com/maps?q=North+Carolina&t=m&z=6&output=embed"
  );

  const showCity = (city) => {
    setMapUrl(
      `https://www.google.com/maps?q=${city.replaceAll(" ", "+")}&t=m&z=10&output=embed`
    );
  };

  return (
    <div className="max-w-6xl mx-auto  md:p-20 p-8">

       {/* Heading */}
      <Title title="Our Service Areas" subtitle=" We currently provide services in the following cities. Click a city to view it on the map."/>


      <div className="grid md:grid-cols-2 gap-20 md:mt-20">

        {/* City List */}
        <div>
          <h2 className="text-xl font-semibold m-5">
            Available Locations
          </h2>

          {cityList.map((city, index) => (
            <div
              key={index}
              onClick={() => showCity(city)}
              className="flex gap-4 cursor-pointer rounded-lg p-4 mb-3 hover:bg-blue-200 transition"
            >
              <MapPinCheckInside className="text-primary"/>{city}
            </div>
          ))}
        </div>

        {/* Google Map */}
        <div>
          <iframe
            title="service-map"
            className="w-full h-[420px] rounded-xl shadow"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src={mapUrl}
          />
        </div>

      </div>

      {/* Footer Note */}
      <div className="mt-8 text-gray-600">
        Not in your area yet?  <span className="text-blue-600 font-medium cursor-pointer"> {" "}<Link to="/contact-us">Contact us</Link></span>{" "}— we’re expanding soon.
      </div>

    </div>
  );
}
