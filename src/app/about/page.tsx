import Image from "next/image";
import styles from "./about.module.css";

export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image
          src="./assets/my-image.jpeg"
          alt="Placeholder"
          width={300}
          height={300}
        />
      </div>
      <div className={styles.text}>
        <h1>About Me</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  );
}
