import { useState } from "react"
import {usePollingEffect } from './usePollingEffect'
import { getEntityDetails } from "../helpers/entity-details-from-gateway";

export const useEntityDetails = () => {
  const [data, setData] = useState<any>({});
  usePollingEffect(
    async () => {
        console.log("async Data is ...")
        console.log(data);
        console.log("setting async Data ...")
        setData(await getEntityDetails())
      },
    [],
    { interval: 6000, onCleanUp: () => {console.log("cleaning up")} } // optional
  );

  return data;
}
// import { useState, useEffect } from 'react';
// import { getEntityDetails, EntityDetailsSuccess, EntityDetailsError } from '../helpers/entity-details-from-gateway';

// export const useEntityDetails = () => {
//   const [entityDetails, setEntityDetails] = useState<EntityDetailsSuccess | EntityDetailsError>({});

//   useEffect(() => {
//     await 
//     const interval = setInterval(() => {
//         let entityDetails = getEntityDetails();
//         setEntityDetails(entityDetails);
//     }, 3000);

//     return () => {
//       clearInterval(interval);
//     };
//   }, []);

//   return entityDetails;
// };
