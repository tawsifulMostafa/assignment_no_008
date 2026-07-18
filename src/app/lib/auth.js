import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
 

const client = new MongoClient(process.env.BETTER_AUTH_URI_DB);

export const db = client.db("assignment_008_data");

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
  },
  
  database: mongodbAdapter(db, {

    client
  }),
});