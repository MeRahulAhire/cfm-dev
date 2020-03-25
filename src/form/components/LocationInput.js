import React from "react";
import '../styles/LocationInput.css'

import PlacesAutocomplete from "react-places-autocomplete";

export default function LocationInput() {
  const [address, setAddress] = React.useState("");
  

  const handleSelect = async value => {
    setAddress(value);
  };

  return (
    <div>
      <PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
        
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div >
            

            <input className="typo"{...getInputProps({ placeholder: "Search Your College" })} />

            <div>
              {loading ? <div>...loading</div> : null}

              {suggestions.map(suggestion => {
                const style = {
                  backgroundColor: suggestion.active ? "#41b6e6" : ""
                };

                return (
                 
                  <div className="suggestion"  {...getSuggestionItemProps(suggestion, { style })}>
                    {suggestion.description}
                  </div>
                 
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    </div>
  );
}