import { Link } from "react-router-dom";
import styles from "./index.module.scss";

export const Header = (): JSX.Element => {
  return (
    <header className={styles.header}>
      <h1>{/* <Link to="/">図書館検索</Link> */}</h1>
      <nav>
        <ul>
          <li>
            <Link to="/test">test</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
