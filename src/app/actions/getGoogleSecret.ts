// import { SecretManagerServiceClient } from '@google-cloud/secret-manager';

// // Create the Secret Manager client
// const client = new SecretManagerServiceClient();

// export async function accessSecret() {
//   const [version] = await client.accessSecretVersion({
//     name: 'projects/880481577403/secrets/google_map_api/versions/1',
//   });

//   let secretPayload;
//   if (version?.payload?.data) secretPayload  = version.payload.data.toString(); 

//   console.log(`Secret: ${secretPayload}`);

//   return secretPayload;
// }