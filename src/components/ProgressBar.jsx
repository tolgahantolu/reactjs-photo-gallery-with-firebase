import { useEffect } from "react";
import useStorage from "../hooks/useStorage";
import { motion } from "framer-motion";

const ProgressBar = (props) => {
  const { file, setFile } = props;
  const { url, progress } = useStorage(file);

  useEffect(() => {
    if (url) setFile(null);
  }, [url, setFile]);

  console.log(progress, url);

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: progress + "%" }}
      className="progress"
    ></motion.div>
  );
};

export default ProgressBar;
