// import { useState } from "react";
// import { useRef } from "react";
// import { useMemo, useCallback } from "react";
// // import {} from ''

// const center = [51.505, -0.09];

// function DraggableMarker() {
//     const [draggable, setDraggable] = useState(true)
//     const [position, setPosition] = useState(center)
//     const markerRef = useRef(null)

//     const eventHandlers = useMemo(
//       () => ({
//         dragend() {
//           const marker = markerRef.current
//           if (marker != null) {
//             setPosition(marker.getLatLng())
//           }
//         },
//       }),
//       [],
//     )
//     const toggleDraggable = useCallback(() => {
//       setDraggable((d) => !d)
//     }, [])
  
//     return (
//       <Marker
//         draggable={draggable}
//         eventHandlers={eventHandlers}
//         position={position}
//         ref={markerRef}>
//         <Popup minWidth={90}>
//           <span onClick={toggleDraggable}>
//             {draggable
//               ? 'Marker is draggable'
//               : 'Click here to make marker draggable'}
//           </span>
//         </Popup>
//       </Marker>
//     )
//   }

// export default DraggableMarker;