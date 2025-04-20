import 'jsr:@std/dotenv/load'
import OpenAI from 'openai'
import {
  toCamelCaseUtil,
  toKebabCaseUtil,
  toPascalCaseUtil,
  toSnakeCaseUtil
} from './utils.ts'

const openai = new OpenAI({
  apiKey: Deno.env.get('OPENAI_API_KEY')
})

const completion = openai.chat.completions.create({
  model: 'gpt-4o-mini',
  store: true,
  messages: [
    // {
    //   role: 'system',
    //   content:
    //     'You are an expert in Islamic jurisprudence with a focus on inheritance.'
    // },
    // {
    //   role: 'user',
    //   content:
    //     "When a man dies and leaves behind a wife, 8 sons, and 5 daughters, what is each person's share?"
    // },
    // {
    //   role: 'user',
    //   content: 'Write a rap song about AI, Deno, and the future of programming.'
    // }
    {
      role: 'system',
      content: 'You are world renowed marriage counselor.'
    },
    {
      role: 'user',
      content: 'What are your thoughts on marriage?'
    }
  ]
})

export function add(a: number, b: number): number {
  return a + b
}

// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
  console.log('Add 2 + 3 =', add(2, 3))
  completion.then((result) => console.log(result.choices[0].message))
  console.log(toCamelCaseUtil('HOLA MUNDO'))
  console.log(toKebabCaseUtil('HOLA MUNDO'))
  console.log(toSnakeCaseUtil('HOLA MUNDO'))
  console.log(toPascalCaseUtil('HOLA MUNDO'))
}
