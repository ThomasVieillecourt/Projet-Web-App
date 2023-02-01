import React from "react";
import { path } from "@/config";
import Image from "next/image";
import { motion } from "framer-motion";

const SplineAnim = () => {
  return (
    <div className="sphere-container">
      <motion.div
        whileHover={{ scale: 1.4 }}
        whileTap={{ scale: 0.8 }}
        style={{ gridArea: "js" }}
      >
        <Image
          src={path + "/img/js.svg"}
          alt=""
          width={220}
          height={220}
          className="jslogo-banner"
        />
      </motion.div>
      <motion.div
        style={{ gridArea: "react" }}
        whileHover={{ scale: 1.2 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <Image
          src={path + "/img/reactjs.svg"}
          alt=""
          width={180}
          height={180}
        />
      </motion.div>
      <motion.div
        style={{ gridArea: "ts" }}
        whileHover={{ scale: 1.2 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <Image
          src={path + "/img/typescriptbanner.png"}
          alt=""
          width={180}
          height={180}
        />
      </motion.div>
      <motion.div
        style={{ gridArea: "node" }}
        whileHover={{ scale: 1.2 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <Image src={path + "/img/nodejs.svg"} alt="" width={180} height={180} />
      </motion.div>
      <motion.div
        style={{ gridArea: "next" }}
        whileHover={{ scale: 1.2 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <Image src={path + "/img/nextjs.svg"} alt="" width={180} height={180} />
      </motion.div>
      {/* <img
        src="../img/gitlab.png"
        alt=""
        width={100}
        style={{ gridArea: "gitlab" }}
      />
      <img
        src="../img/gitbanner.png"
        alt=""
        width={100}
        style={{ gridArea: "git" }}
      /> */}
    </div>
  );
};

export default SplineAnim;
