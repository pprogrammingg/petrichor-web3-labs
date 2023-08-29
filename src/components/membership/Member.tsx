import { useRdt } from '../rdt/hooks/useRdt';
import { getEntityDetails } from '../rdt/helpers/gateway';

function Member() {
  const rdt = useRdt();
  console.log('Value of rdt:', rdt); // Log the value of rdt

  const result = getEntityDetails("account_tdx_d_1295e4znmu5lm4kwd804u7r5chlld9hqduwx0vl378yje74pwsg65as");

  result
    .map((response) => {
      console.log('Entity details:', response);
    })
    .mapErr((error) => {
      console.error('Error:', error);
    });

  console.log("result is " + response.fungible_resources);
  return (
    <>
        <h1>Welcome Member!</h1>
        <h2>Your rewards balance is: </h2>
    </>
  );
}

export default Member