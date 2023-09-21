import { NextResponse } from "next/server";
import mailchimp from "@mailchimp/mailchimp_marketing";

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_KEY,
  server: process.env.MAILCHIMP_SERVER,
});

export async function POST(req) {
  // Process a POST request
  // const { email } = req.body;
  const data = await req.json();
  const { email } = data;

  // make sure email is present
  if (!email) {
    return new NextResponse(JSON.stringify({ error: "Email is required" }), {
      status: 400,
    });
  }

  // try to add email to list
  try {
    await mailchimp.lists.addListMember(process.env.MAILCHIMP_LIST_ID, {
      email_address: email,
      status: "subscribed",
    });

    return new NextResponse(JSON.stringify({ error: "" }), {
      status: 201,
    });
  } catch (error) {
    // if error.status is 400, it means the email is already subscribed
    if (error.status === 400) {
      return new NextResponse(
        JSON.stringify({ error: "Email is already subscribed." }),
        {
          status: 400,
        }
      );
    }

    return new NextResponse(
      JSON.stringify({ error: error.message || error.toString() }),
      {
        status: 500,
      }
    );
  }
}
