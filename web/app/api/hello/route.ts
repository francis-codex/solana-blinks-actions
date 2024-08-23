import { ActionGetRequest} from "@solana/actions"

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
