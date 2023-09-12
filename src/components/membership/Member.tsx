function Member() {

  // console.log("value of entities response in member is: " + JSON.stringify(entities, null, 2) );
  console.log("value of entities address in member is: " + JSON.stringify({entities_address: "example"}, null, 2) );
  
  // <h2>Entities are { JSON.stringify(entities, null, 2) } </h2>
  // what I need 
  return (
    <>
        <h1>Welcome Member!</h1>
        <h2>Persona:{JSON.stringify({entities_address: "example"}, null, 2)}</h2>
        <h2>Account:{JSON.stringify({entities_address: "example"}, null, 2)}</h2>
    </>
  );
}

export default Member