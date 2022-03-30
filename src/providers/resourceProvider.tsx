/**
 *
 * useContextはアプリケーション全体で使用する情報を管理する
 * コンポーネントの再利用性がさがってしまうため
 * 例) ログイン中のユーザー情報　言語設定　テーマ設定
 *
 */
import { createContext, FC, SetStateAction, useState, VFC } from "react";

type Props = {
  children: JSX.Element | React.ReactDOM;
};

export const ResourceContext = createContext("");

export const ResourceProvider = (props: Props): JSX.Element => {
  const [pref, setPref] = useState<string>("");
  const handleChange = (e: { target: { value: SetStateAction<string> } }) => {
    setPref(e.target.value);
  };
  console.log(pref);

  const value: any = [handleChange, pref];
  return <ResourceContext.Provider value={handleChange}>{props.children}</ResourceContext.Provider>;
};
