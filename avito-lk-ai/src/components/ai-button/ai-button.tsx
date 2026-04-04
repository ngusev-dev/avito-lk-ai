import { Button } from "../ui/button";
import Light from "../../assets/light.svg";
import Restart from "../../assets/restart.svg";
import type { AdItem } from "@/services";
import { useMutation } from "@tanstack/react-query";
import { aiService } from "@/services/ai.service";
import {
  GENERATE_DESCRIPTON_PROMT,
  GENERATE_PRICE_PROMT,
  type PromtTypeValue,
} from "@/shared";
import { Spinner } from "../ui/spinner";
import { useId, useState } from "react";
import type { UseFormGetValues } from "react-hook-form";
import { TooltipModal } from "./tooltip-modal";

interface AiButtonProps {
  getValues: UseFormGetValues<AdItem>;
  type: PromtTypeValue;
}

export const AiButton = ({ type, getValues }: AiButtonProps) => {
  const id = useId();

  const [aiText, setAiText] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const { mutate, isPending, isError } = useMutation({
    mutationKey: [type, id],
    mutationFn: async () => {
      const prompt =
        type === "generate_price"
          ? GENERATE_PRICE_PROMT(getValues())
          : GENERATE_DESCRIPTON_PROMT(getValues());
      return await aiService.generateAiResponse(prompt, type);
    },
    onSuccess: (data) => {
      if (data.data.done) {
        setAiText(data.data.response);
        setIsOpen(true);
      }
    },
    onError: () => {
      setIsOpen(true);
    },
  });

  const clickHandler = () => {
    setIsOpen(false);
    if (!isPending) mutate();
  };

  return (
    <>
      <TooltipModal
        id={id}
        type={type}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        aiText={aiText}
        isError={isError}
      />

      <Button
        id={`btn-ai-${id}`}
        type="button"
        onClick={clickHandler}
        variant={"ghost"}
        size={"lg"}
        className="min-w-50 w-fit  bg-[rgba(249,241,230,1)] text-[rgba(255,169,64,1)] hover:bg-[rgba(249,241,230,1)]/70 hover:text-[rgba(255,169,64,1)]"
      >
        {isPending ? (
          <>
            <Spinner className="size-3.5" /> Выполняется запрос
          </>
        ) : (
          <>
            {aiText ? (
              <>
                <img src={Restart} alt="AI" />
                <p>Повторить запрос</p>
              </>
            ) : (
              <>
                <img src={Light} alt="AI" />
                <p>
                  {type === "generate_price"
                    ? "Узнать рыночную цену"
                    : "Придумать описание"}
                </p>
              </>
            )}
          </>
        )}
      </Button>
    </>
  );
};
