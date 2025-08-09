import OpenAI from 'openai'

export class OpenAiGpt {
  #apiClient

  constructor() {
    this.#apiClient = new OpenAI({
      apiKey: Deno.env.get('OPENAI_API_KEY')
    })
  }
}
