import { Button } from "./ui/button";
import Light from "../assets/light.svg";

export const AiButton = () => {
  return (
    <Button
      type="button"
      variant={"ghost"}
      className="bg-[rgba(249,241,230,1)] text-[rgba(255,169,64,1)] hover:bg-[rgba(249,241,230,1)]/70 hover:text-[rgba(255,169,64,1)]"
    >
      <img src={Light} alt="AI" />
      <p>Узнать рыночную цену</p>
    </Button>
  );
};
