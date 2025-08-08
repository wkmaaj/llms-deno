import process from 'node:process'
import ollama from 'ollama'

const callOllama = async (
  prompt: string,
  model = 'llama3.2',
  stream = true
) => {
  const output = await ollama.generate({
    model,
    prompt,
    stream: true
  })

  const context: number[] = []

  for await (const part of output) {
    if (part.done === true) {
      console.log('first generate complete')
      context.push(...part.context)
    }
  }

  const output2 = await ollama.generate({
    model,
    prompt: 'can it be another?',
    context,
    stream: true
  })

  for await (const part of output2) {
    process.stdout.write(part.response)
  }
}

callOllama('why is the sky green?', 'deepseek-r1:32b')
