import Logo from "./Logo";
import styles from "./Chunk.module.css"
export default function Chunk() {
  return (
    
    <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
      <a href="/">
        <div className={styles.logo__img}></div>
        <div className="flex flex-col ml-5 w-1/2 max-md:ml-0 max-md:w-full">
          <div className={`self-stretch my-auto text-7xl font-bold tracking-tighter text-white whitespace-nowrap max-md:mt-10 max-md:text-4xl ${styles.text__header}`}>
            Triplet
          </div>
        </div>
      </a>
    </div>
  );
}
