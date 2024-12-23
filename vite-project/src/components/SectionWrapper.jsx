import { motion } from 'framer-motion'

const SectionWrapper = ({ children, id }) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, type: "tween" }}
    >
      {children}
    </motion.section>
  )
}

export default SectionWrapper 