import { useCallback, useState } from "react";
import type { CityType } from "./../types/type";
import axios from "axios";

// 市区町村データ取得用APIキー
const X_API_KEY = import.meta.env.VITE_RESAS_API_KEY;
// 図書館データ取得用APIキー
const CALIL_API_KEY = import.meta.env.VITE_CALIL_API_KEY;

export const useFetchData = () => {
  const [pref, setPref] = useState<string[]>([]); // 都道府県のデータ
  const [city, setCity] = useState<CityType[]>([]); // 都道府県ごとの市区町村データ
  const [isSelect, setIsSelect] = useState(false); // 都道府県のセレクトボックスを選択したかどうか

  const handleChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>): void => {
    let val: string | string[] = e.target.value;
    val = val.split(",");
    const prefName = val[0];
    const prefCode = val[1];
    setPref([prefName, prefCode]);
    setIsSelect((prev) => !prev);
  }, []);

  const handleClick = useCallback(() => {
    getLibraryData();
  }, []);

  const getLibraryData = useCallback(async () => {
    // 図書館データを取得
    const URL = `https://api.calil.jp/library?appkey=${CALIL_API_KEY}&pref=${pref[0]}`;
    console.log(URL);

    await axios
      .get(URL)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const getPrefData = useCallback(async () => {
    // 市区町村データを取得
    const URL = `https://opendata.resas-portal.go.jp/api/v1/cities?prefCode=${pref[1]}`;
    await axios({
      method: "get",
      url: URL,
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "X-API-KEY": `${X_API_KEY}`,
      },
    })
      .then((res) => {
        console.log(res);

        setCity(res.data.result);
        setIsSelect((prev) => !prev);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [pref]);

  return { handleChange, handleClick, getPrefData, isSelect, pref, city };
};
