import { Client, Account} from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('669e69e70036c9aaecb6'); 

export const account = new Account(client);
export { ID } from 'appwrite';
