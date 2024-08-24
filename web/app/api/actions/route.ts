import { ActionGetResponse, ActionPostRequest, ActionPostResponse, ACTIONS_CORS_HEADERS} from "@solana/actions"

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

  const response : ActionPostResponse = {
    transaction: "",
    message: "This is "+userPubkey,
  }  
  return Response.json({response})
}


export async function OPTIONS(request: Request) {
  return new Response(null, {headers: ACTIONS_CORS_HEADERS})
}  
