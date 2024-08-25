import { ActionGetResponse, ActionPostRequest, ActionPostResponse, ACTIONS_CORS_HEADERS} from "@solana/actions"
import { clusterApiUrl, Connection } from "@solana/web3.js";
import { SystemProgram } from "@solana/web3.js";
import { Transaction, PublicKey } from "@solana/web3.js";

export async function GET(request: Request) {    
  const responseBody : ActionGetResponse = {
    icon: "https://pbs.twimg.com/profile_images/1800094112772689920/eF2Kjdus_400x400.jpg",
    description: " This is a solana blinks and actions demo",
    title: " Blinks/Actions Demo",
    label: " Try it out ",
    // error: {
    //   message: "Blinks not fully implemented",
    // },
    type: "action"
  }  
  const response = Response.json(responseBody, {headers: ACTIONS_CORS_HEADERS}); 
  return response
}


export async function POST(request: Request) {   
  
  const requestBody: ActionPostRequest  = await request.json();
  const userPubkey = requestBody.account;
  console.log(userPubkey);

  const user = new PublicKey(userPubkey);

  const connection = new Connection(clusterApiUrl("mainnet-beta"))

  const ix = SystemProgram.transfer({
    fromPubkey: user,
    toPubkey: new PublicKey('DYkYYRX3pQz1xhvA2bdpsYmByqah3YQSTSWomH4PSSHV'),
    lamports: 1    
  })

  const tx = new Transaction();
  tx.add(ix)
  tx.feePayer = user
  tx.recentBlockhash = (await connection.getLatestBlockhash({commitment: "finalized"})).blockhash;
  const serialTX = tx.serialize({requireAllSignatures: false, verifySignatures: false}).toString("base64")

  const response : ActionPostResponse = {
    transaction: serialTX,
    message: "Public key "+userPubkey,
  }  
  return Response.json(response, {headers: ACTIONS_CORS_HEADERS})
}


export async function OPTIONS(request: Request) {
  return new Response(null, {headers: ACTIONS_CORS_HEADERS})
}  
