import React from "react";
import { motion } from "framer-motion";
import Popular from "../components/Popular";
import Vegetarian from "../components/Vegetarian";

function Home() {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Vegetarian />
      <Popular />
    </motion.div>
  );
}

export default Home;
