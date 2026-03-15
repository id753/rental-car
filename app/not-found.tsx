import Link from "next/link";
import css from "../app/src/styles/not-found.module.css";

const NotFound = () => {
  return (
    <div className={css.container}>
      <h1 className={css.title}>404</h1>
      <h2 className={css.subtitle}>Page Not Found</h2>
      <p className={css.text}>
        Sorry, the page you&#39;re looking for doesn&#39;t exist.
      </p>
      <Link href="/" className={css.button}>
        Go back home
      </Link>
    </div>
  );
};

export default NotFound;
