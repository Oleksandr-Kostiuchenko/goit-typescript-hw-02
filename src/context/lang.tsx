//* React
import { createContext, ReactNode, useState } from "react";

//* TS
export type LangContextType = {
  lang: LangValue;
  changeFunc: null | ((newLang: LangValue) => void);
};

export type LangValue = "en" | "uk";

type Props = {
  children: ReactNode;
};

//* Context
export const LangContext = createContext<LangContextType>({
  lang: "en",
  changeFunc: null,
});

const LangProvider = ({ children }: Props) => {
  const [appLang, setAppLang] = useState<LangValue>("en");

  const changeLang: LangContextType["changeFunc"] = (newLang) => {
    setAppLang(newLang);
  };

  return (
    <LangContext value={{ lang: appLang, changeFunc: changeLang }}>
      {children}
    </LangContext>
  );
};

export default LangProvider;
