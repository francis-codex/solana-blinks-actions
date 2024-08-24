import { ActionGetResponse, ActionPostRequest, ActionPostResponse, ACTIONS_CORS_HEADERS} from "@solana/actions"
import { SystemProgram } from "@solana/web3.js";
import { Transaction, PublicKey } from "@solana/web3.js";

export async function GET(request: Request) {    
  const responseBody : ActionGetResponse = {
    icon: "https://pbs.twimg.com/profile_images/1800094112772689920/eF2Kjdus_400x400.jpg",
    description: " This is a solana blinks and actions demo",
    title: " Blinks/Actions Demo",
    label: " Try it out ",
    error: {
      message: "Blinks not fully implemented",
    },
    type: "action"
  }  
  const response = Response.json(responseBody, {headers: ACTIONS_CORS_HEADERS}); 
  return response
}


export async function POST(request: Request) {   
  
  const requestBody: ActionPostRequest  = await request.json();
  const userPubkey = requestBody.account;
  console.log(userPubkey);

   const tx = new Transaction();
  tx.feePayer = new PublicKey(userPubkey);
  tx.recentBlockhash = SystemProgram.programId.toBase58();
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
