import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const EspritSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl lg:text-5xl text-primary mb-6">L'esprit du lieu</h2>
          <div className="w-24 h-[1px] bg-primary/30 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full"
          >
            <img 
              src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070&auto=format&fit=crop" 
              alt="Nature Retreat" 
              className="w-full h-[600px] object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col gap-8"
          >
            <img 
              src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2120&auto=format&fit=crop" 
              alt="Yoga Retreat" 
              className="w-full h-[350px] object-cover"
            />
            <div className="text-right">
              <Link to="/reservation" className="inline-block border border-primary text-primary px-8 py-3 uppercase tracking-widest text-sm hover:bg-primary hover:text-white transition-colors duration-300">
                Découvrir le programme
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
