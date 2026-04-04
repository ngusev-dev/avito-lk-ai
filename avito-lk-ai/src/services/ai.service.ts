import {
  AI_API,
  DESCRIPTION_SYSTEM_PROMPT,
  PRICE_SYSTEM_PROMPT,
  type PromtTypeValue,
} from "@/shared";
import type { AxiosResponse } from "axios";
import type { OllamaGenerateResponse } from "./types";

export class AiService {
  async generateAiResponse(
    promtData: string,
    type: PromtTypeValue,
  ): Promise<AxiosResponse<OllamaGenerateResponse>> {
    return await AI_API.post("api/generate", {
      model: "llama3",
      system:
        type === "generate_price"
          ? PRICE_SYSTEM_PROMPT
          : DESCRIPTION_SYSTEM_PROMPT,
      prompt: promtData,
      stream: false,
    });
  }
}

export const aiService = new AiService();
