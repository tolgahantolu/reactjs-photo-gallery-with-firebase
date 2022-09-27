import { motion } from "framer-motion";
import useFirestore from "../hooks/useFirestore";

const ImageGrid = (props) => {
  const { setSelectedImage } = props;

  const { docs } = useFirestore("images"); // "images": collection name

  console.log(docs);

  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => {
          return (
            <motion.div
              layout
              whileHover={{ opacity: 1 }}
              className="img-wrap"
              key={doc.id}
              onClick={() => setSelectedImage(doc.url)}
            >
              <motion.img
                src={doc.url}
                alt="images source: pixabay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              />
            </motion.div>
          );
        })}
    </div>
  );
};

export default ImageGrid;
