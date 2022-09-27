import { motion } from "framer-motion";

const Modal = (props) => {
  const { selectedImage, setSelectedImage } = props;

  const clickBackdropHandler = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setSelectedImage(null);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="backdrop"
      onClick={clickBackdropHandler}
    >
      <motion.img
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
        src={selectedImage}
        alt="images source: pixabay "
      />
    </motion.div>
  );
};

export default Modal;
