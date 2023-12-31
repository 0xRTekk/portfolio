import { motion } from "framer-motion";

import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

const StarWrapper = (Component, idName, customClassName = false) =>
  function HOC() {

    const classes = customClassName ? customClassName : `${styles.padding} max-w-7xl mx-auto relative z-0`;

    return (
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className={classes}
      >
        <span className='hash-span' id={idName}>
          &nbsp;
        </span>

        <Component />
      </motion.section>
    );
  };

export default StarWrapper;
