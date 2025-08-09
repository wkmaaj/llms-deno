import { GoogleGenAI } from '@google/genai'

export class GoogleGemini {
  #apiClient

  constructor() {
    this.#apiClient = new GoogleGenAI({
      apiKey: Deno.env.get('GOOGLE_API_KEY')
    })
  }
}
