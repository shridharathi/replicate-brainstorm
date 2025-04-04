import { type NextRequest, NextResponse } from "next/server"
import Replicate from "replicate"

export async function POST(req: NextRequest) {
  try {
    const { prompt } = await req.json()
    console.log("API received prompt:", prompt)

    if (!prompt) {
      return NextResponse.json({ error: "Prompt is required" }, { status: 400 })
    }

    const replicate = new Replicate({
      auth: process.env.REPLICATE_API_KEY,
    })

    // Using nvidia/sana model
    console.log("Calling Replicate API with model nvidia/sana-sprint-1.6b...")
    const prediction = await replicate.predictions.create({
      version: "6ed1ce77cdc8db65550e76d5ab82556d0cb31ac8ab3c4947b168a0bda7b962e4",
      input: {
        seed: -1,
        width: 1024,
        height: 786,
        prompt: prompt,
        output_format: "jpg",
        guidance_scale: 4.5,
        output_quality: 80,
        inference_steps: 2,
        intermediate_timesteps: 1.3,
      },
    })

    console.log("Prediction ID:", prediction.id)

    // Wait for the prediction to complete
    const finalPrediction = await replicate.wait(prediction)
    console.log("Final prediction:", finalPrediction)

    // Extract the output
    const output = finalPrediction.output
    console.log("API output type:", typeof output)
    console.log("API output value:", output)


    // Try to handle different response formats
    let imageUrl
    if (Array.isArray(output) && output.length > 0) {
      // If it's an array, use the first item
      imageUrl = output[0]
    } else if (output && typeof output === "object") {
      // If it's an object, check for common URL properties
      const outputAsRecord = output as Record<string, unknown>
      imageUrl = outputAsRecord.url || outputAsRecord.image || outputAsRecord.output || output
    } else if (typeof output === "string") {
      // If it's a string, use it directly
      imageUrl = output
    }

    console.log("Extracted image URL:", imageUrl)

    if (!imageUrl) {
      console.error("Could not extract image URL from output")
      return NextResponse.json({ error: "No image URL in output" }, { status: 500 })
    }

    return NextResponse.json({ output: imageUrl })
  } catch (error) {
    console.error("Error generating image:", error)
    return NextResponse.json(
      { error: "Failed to generate image", details: error instanceof Error ? error.message : String(error) },
      { status: 500 },
    )
  }
}

