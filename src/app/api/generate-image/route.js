import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    // Parse the incoming request body
    const body = await request.json();
    const { text } = body;

    // Call the Modal web endpoint with the text prompt
    const response = await fetch(process.env.MODAL_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt: text }),
    });

    if (!response.ok) {
      throw new Error("Failed to generate image");
    }

    // Convert the image response to a blob
    const imageBuffer = await response.arrayBuffer();

    return new Response(imageBuffer, {
      headers: {
        "Content-Type": "image/jpeg",
      },
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: "Failed to generate image" },
      { status: 500 }
    );
  }
}
