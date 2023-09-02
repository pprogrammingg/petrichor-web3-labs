import { useRdt } from '../rdt/hooks/useRdt';
import { useEntityDetails } from '../rdt/hooks/useEntitiesDetails';

function Member() {
  
  let rdt = useRdt()!;
  console.log("rdt in Member is: ");
  console.log(rdt);

  let entities = useEntityDetails();
  // console.log("value of entities response in member is: " + JSON.stringify(entities, null, 2) );
  console.log("value of entities address in member is: " + JSON.stringify(entities["address"], null, 2) );
  
  // <h2>Entities are { JSON.stringify(entities, null, 2) } </h2>
  // what I need 
  return (
    <>
        <h1>Welcome Member!</h1>
        <h2>Persona:</h2>
        <h2>Account:</h2>
        
    </>
  );
}

export default Member