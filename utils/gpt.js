const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

// create an async function
async function GPT3_API(prompt) {
  const openai = new OpenAIApi(configuration);

  try {
    const completion = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content:
            'You are a resume assistant and job placement specialist who know how to edit a resume to get your client the job, and graphic web designer expert in html css.',
        },
        { role: 'user', content: prompt },
      ],
      max_tokens: 2000,
    });

    const response = completion.data.choices[0].message.content;
    console.log('The prompt has been sent successfully');
    return response;
  } catch (error) {
    console.dir(error, { depth: null });
  }
}

module.exports = GPT3_API;
