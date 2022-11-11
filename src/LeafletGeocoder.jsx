import React, { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from 'leaflet';

function LeafletGeocoder() {

    const map = useMap();
    useEffect(() => {
        L.Control.geocoder({
            defaultMarkGeocode: false
        })
            .on('markgeocode', function (e) {
                console.log(e);
                var bbox = e.geocode.bbox;
                console.log(bbox);

                var latlgn = e.geocode.center;
                L.marker(latlgn).addTo(map).bindPopup(e.geocode.name);
                map.fitBounds(e.geocode.bbox);

                var poly = L.polygon([
                    bbox.getSouthEast(),
                    bbox.getNorthEast(),
                    bbox.getNorthWest(),
                    bbox.getSouthWest()
                ]).addTo(map);
                map.fitBounds(poly.getBounds());
            })
            .addTo(map);
    }, []);


    return null;
};

export default LeafletGeocoder