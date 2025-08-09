import Anthropic from '@anthropic-ai/sdk'

export class AnthropicClaude {
  #apiCLient

  constructor() {
    this.#apiCLient = new Anthropic({
      apiKey: Deno.env.get('ANTHROPIC_API_KEY')
    })
  }
}
