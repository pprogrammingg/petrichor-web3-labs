// Define the type of each line in the manifest as a string
type ManifestLine = string;

// Define the structure of the manifest builder
interface ManifestBuilder {
  lines: ManifestLine[]; // An array to hold the lines of the manifest
  add: (txt: string) => ManifestBuilder; // A function to add a line to the manifest
  build: () => string; // A function to build the final manifest as a string
}

// Function to create a new instance of the manifest builder
const createManifestBuilder = (): ManifestBuilder => {
  const lines: ManifestLine[] = []; // Initialize an empty array to store lines

  // Define the 'add' function that adds a line to the builder
  const add = (txt: string): ManifestBuilder => {
    return {
      ...createManifestBuilder(), // Create a new builder instance to avoid mutations
      lines: [...lines, txt + ";"], // Add the line to the array of lines
    };
  };

  // Define the 'build' function that returns the final manifest as a string
  const build = (): string => {
    return lines.join("\n"); // Join the lines with line breaks to create the manifest
  };

  // Return an object with the properties and methods of the manifest builder
  return { lines, add, build };
};

// Function to withdraw an amount from an account and add the corresponding line to the manifest
const withdrawFromAccount = (
  builder: ManifestBuilder,
  acct: string,
  addr: string,
  amount: string
): ManifestBuilder => {
  return builder.add(
    `CALL_METHOD Address("${acct}") "withdraw" Address("${addr}") Decimal("${amount}")`
  );
};

// Function to deposit all assets from an account and add the corresponding line to the manifest
const depositAll = (builder: ManifestBuilder, acct: string): ManifestBuilder => {
  return builder.add(
    `CALL_METHOD Address("${acct}") "deposit_batch" Expression("ENTIRE_WORKTOP")`
  );
};

// Function to take all assets from a worktop and put in to a bucket
const takeAllFromWorktop = (
  builder: ManifestBuilder,
  addr: string,
  bucketName: string
): ManifestBuilder => {
  return builder.add(`TAKE_ALL_FROM_WORKTOP Address("${addr}") Bucket("${bucketName}")`);
};

// Sample Usage
/**
   const builder = createManifestBuilder(); // Create a new builder instance
   const withdrawalManifest = withdrawFromAccount(builder, "senderAccount", "recipientAddress", "10.0").build();
   console.log(withdrawalManifest); // Print the final withdrawal manifest
 */

