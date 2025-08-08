import process from 'node:process'
import ollama from 'ollama'

const output = await ollama.generate({
  model: 'deepseek-r1:32b',
  //   model: 'llama3.2',
  prompt: 'why is America the richest nation in the world?',
  stream: true
})

// console.log(output)

for await (const part of output) {
  //   console.log(part)
  process.stdout.write(part.response)

  if (part.done === true) {
    console.log(
      `\nstats: ${(part.eval_count / (part.eval_duration / 1000000000)).toFixed(
        2
      )} tokens per second`
    )
  }
}
