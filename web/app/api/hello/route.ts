import { ActionGetRequest, ActionPostRequest, ActionPostResponse} from "@solana/actions"

export async function GET(request: Request) {    
  const response : ActionGetRequest = {
    icons: "/sprintiq.jpg",
    description: " This is a demo blink",
    title: " Do Blink",
    lable: " Click me ",
    error: {
      message: "Ivalid blinks",
    },
  }  
  return Response.json({response})
}


export async function POST(request: Request) {   
  
  const postRequest: ActionPostRequest  = await request.json();
  const userPubkey = postRequest.account;
  console.log(userPubkey);

  const response : ActionPostResponse = {
    transaction: "",
    message: "This is "+userPubkey,
  }  
  return Response.json({response})
}
