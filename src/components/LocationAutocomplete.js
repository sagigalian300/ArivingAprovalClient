import React, { useEffect } from "react";

const loadScript = (url) => {
  return new Promise((resolve, reject) => {
    const existingScript = document.querySelector(`script[src="${url}"]`);
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = url;
      script.async = true;
      script.defer = true;
      script.onload = resolve;
      script.onerror = reject;
      document.body.appendChild(script);
    } else {
      resolve();
    }
  });
};

const LocationAutocomplete = ({ onSelect }) => {
  useEffect(() => {
    const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
    const url = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;

    loadScript(url)
      .then(() => {
        const input = document.getElementById("autocomplete-input");
        if (!input) return;

        // Use the legacy Autocomplete constructor
        const autocomplete = new window.google.maps.places.Autocomplete(input, {
          types: ["establishment"],
        });

        autocomplete.addListener("place_changed", () => {
          const place = autocomplete.getPlace();
          if (onSelect) onSelect(place);
        });
      })
      .catch((err) => console.error("Google Maps script failed to load", err));
  }, [onSelect]);

  return (
    <input
      id="autocomplete-input"
      placeholder="Wazeחפש יעד לניווט ב"
      className="text-center p-2 outline-none border-[1px] bg-gray-300 rounded-full focus:border-gray-400 transition-all m-2"
    />
  );
};

export default LocationAutocomplete;
