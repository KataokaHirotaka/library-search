import { useEffect, useMemo, useState } from "react";
import { Form } from "../components/form";
import { Header } from "../components/header";
import { useFetchData } from "../hooks/useFetchData";

export const Home = (): JSX.Element => {
  console.log("Homeコンポーネント");
  const { handleChange, handleClick, getPrefData, isSelect, pref, city } = useFetchData();

  // 市区町村データの取得
  useEffect(() => {
    if (isSelect) {
      getPrefData();
    }
  }, [pref]);

  return (
    <>
      <Header />
      <Form handleChange={handleChange} city={city} handleClick={handleClick} />
    </>
  );
};
