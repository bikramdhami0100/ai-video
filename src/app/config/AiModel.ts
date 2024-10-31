const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
//   const { GoogleAIFileManager } = require("@google/generative-ai/server");
  
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
//   const fileManager = new GoogleAIFileManager(apiKey);
  
  /**
   * Uploads the given file to Gemini.
   *
   * See https://ai.google.dev/gemini-api/docs/prompting_with_media
   */
//   async function uploadToGemini(path, mimeType) {
//     const uploadResult = await fileManager.uploadFile(path, {
//       mimeType,
//       displayName: path,
//     });
//     const file = uploadResult.file;
//     console.log(`Uploaded file ${file.displayName} as: ${file.name}`);
//     return file;
//   }
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  
  // async function run() {
    // TODO Make these files available on the local file system
    // You may need to update the file paths
    // const files = [
    //   await uploadToGemini("Unknown File", "application/octet-stream"),
    // ];
  
    export const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "write a script to generate 30 seconds video on topic : interesting historical story along with AI image prompt in Realistic format for each scene and give me the result in json format with image pormpt and Cotent Text as field"},
          ],
        },
        // {
        //   role: "model",
        //   parts: [
        //     {
        //       fileData: {
        //         mimeType: files[0].mimeType,
        //         fileUri: files[0].uri,
        //       },
        //     },
        //   ],
        // },
        {
          role: "user",
          parts: [
            {text: "write a script to generate 30 seconds video on topic : interesting historical story along with AI image prompt in Realistic format for each scene and give me the result in json format with imagePrompt and CotentText as field\n"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "## 30-Second Historical Video Script (JSON Format)\n\n```json\n[\n  {\n    \"imagePrompt\": \"A bustling marketplace in ancient Rome, with merchants selling goods, people haggling, and a chariot pulling through the crowd.\",\n    \"contentText\": \"In the heart of ancient Rome, a bustling marketplace teemed with life. Merchants hawked their wares, the aroma of spices filled the air, and the sound of bartering echoed through the crowded streets.\"\n  },\n  {\n    \"imagePrompt\": \"A close-up portrait of a Roman soldier, his face weathered and determined, wearing a helmet and armor.\",\n    \"contentText\": \"Among the throngs, a Roman soldier, hardened by years of service, stood guard. His keen eyes scanned the crowd, ever vigilant for trouble.\"\n  },\n  {\n    \"imagePrompt\": \"A grand Roman temple, bathed in sunlight, with intricate carvings and statues, people entering to pray.\",\n    \"contentText\": \"The city's grandeur was reflected in its magnificent temples, where people sought solace and guidance from the gods.\"\n  },\n  {\n    \"imagePrompt\": \"A group of Roman citizens gathered around a public forum, listening to a speaker passionately delivering a speech.\",\n    \"contentText\": \"In the bustling Forum, passionate orators debated matters of state, their words echoing across the vast space, shaping the city's destiny.\"\n  },\n  {\n    \"imagePrompt\": \"A close-up of a Roman coin with the image of a Roman emperor, highlighting the inscription 'SPQR' (Senatus Populusque Romanus).\",\n    \"contentText\": \"Rome's influence extended far beyond its borders, its coins, emblazoned with the inscription 'SPQR,' a testament to the strength and might of the Roman Empire.\"\n  }\n]\n```\n\n**Notes:**\n\n* This script is designed to create a 30-second video with a fast pace, showcasing a glimpse of ancient Roman life.\n* The image prompts are designed to generate realistic images with a historical accuracy.\n* The content text is concise and informative, providing a quick overview of the scene.\n* You can adjust the scene length by changing the number of frames per second in your video editing software.\n* You can also add additional scenes or modify the existing ones to create a more detailed and engaging video.\n\n**Tips for AI Image Generation:**\n\n* Use specific details in your prompts to achieve accurate results.\n* Consider the time of day and weather conditions when creating your prompts.\n* Utilize AI image generators like Midjourney, DALL-E 2, or Stable Diffusion for high-quality outputs.\n\nThis script is a starting point, and you can customize it to suit your own creative vision and storytelling needs."},
          ],
        },
      ],
    });
  
  //   const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
  //   console.log(result.response.text());
  // }
  
  // run();