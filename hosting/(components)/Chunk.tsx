import Logo from "./Logo";
import styles from "./Chunk.module.css"
export default function Chunk() {
  return (
    
    <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
      <a href="/">
          <div className={styles.chunk__container} >
            <div className={styles.logo__img}></div>
            <div data-text="Triplet..." className={styles.logo__text}>Triplet...</div>
          </div>
        <div className="flex flex-col ml-5 w-1/2 max-md:ml-0 max-md:w-full">
        </div>
      </a>
    </div>
  );
}
