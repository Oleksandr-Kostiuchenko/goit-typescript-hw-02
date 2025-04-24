import { use } from "react";
import { LangContext } from "../context/lang";
import { LangContextType } from "../context/lang";

export const useLang = (): LangContextType => {
  const ctx: LangContextType = use(LangContext);

  return ctx;
};
