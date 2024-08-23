import { ActionGetRequest, ActionPostRequest, ActionPostResponse, ACTIONS_CORS_HEADERS} from "@solana/actions"

export async function GET(request: Request) {    
  const responseBody : ActionGetRequest = {
    icons: "/sprintiq.jpg",
    description: " This is a demo blink",
    title: " Do Blink",
    lable: " Click me ",
    error: {
      message: "Invalid blinks",
    },
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
