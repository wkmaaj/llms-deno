import Anthropic from '@anthropic-ai/sdk'
import { GoogleGenAI } from '@google/genai'
import OpenAI from 'openai'

const systemMessage = 'You are an assistant that is great at telling jokes'
const userPrompt =
  'Tell a light-hearted joke for an audience of data scientists'

const prompts: { role: 'system' | 'user'; content: string }[] = [
  { role: 'system', content: systemMessage },
  { role: 'user', content: userPrompt }
]

export const tellAJoke = (
  ai: OpenAI | Anthropic | GoogleGenAI,
  temperature = 0.7
) => {
  if (ai instanceof OpenAI) {
    console.log('Incoming AI agent is of type OpenAI')
    const completion = ai.chat.completions.create({
      model: 'gpt-4',
      store: true,
      messages: prompts,
      temperature
    })
    completion.then((result) =>
      console.log(
        `OpenAI response:\n${JSON.stringify(
          result.choices[0].message,
          null,
          8
        )}`
      )
    )
  } else if (ai instanceof Anthropic) {
    console.log('Incoming AI agent is of type Anthropic')
    const completion = ai.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 1024,
      temperature,
      system: systemMessage,
      messages: [{ role: 'user', content: userPrompt }]
    })
    completion.then((result) =>
      console.log(
        `Anthropic response:\n${JSON.stringify(result.content, null, 8)}`
      )
    )
  } else if (ai instanceof GoogleGenAI) {
    console.log('Incoming AI agent is of type GoogleGenAI')
  }
}
