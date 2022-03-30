import { memo } from "react";
import { PREFECTURE_ARY } from "../../data/data";
import { ResourceContext } from "../../providers/resourceProvider";
import styles from "./index.module.scss";
import type { CityType } from "../../types/type";

type Props = {
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  city: CityType[];
  handleClick: () => void;
};

export const Form = (props: Props): JSX.Element => {
  console.log("Formコンポーネント");
  const { handleChange, city, handleClick } = props;
  console.log(city);

  return (
    <div className={styles.form}>
      <p>form</p>
      <div>
        <div>
          <label htmlFor="">都道府県を選択してください</label>
          <select onChange={(e) => handleChange(e)}>
            {PREFECTURE_ARY.map((item) => {
              const prefName = item.prefName;
              const prefCode = item.prefCode;
              return (
                <option key={prefCode} value={[prefName, prefCode]} id={prefCode}>
                  {prefName}
                </option>
              );
            })}
          </select>
        </div>
        {city ? (
          <div>
            <label>市区町村を選択してください</label>
            <select>
              {city.map((item) => {
                const cityName = item.cityName;
                const cityCode = item.cityCode;
                return (
                  <option key={cityCode} value={cityName}>
                    {cityName}
                  </option>
                );
              })}
            </select>
          </div>
        ) : undefined}
      </div>
      <div>
        <button onClick={handleClick}>図書館を探す</button>
      </div>
    </div>
  );
};
