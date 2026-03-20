import { motion } from "framer-motion";

const videos = [
  { id: 1, src: "/videos/raf-raf-1.mp4", title: "Vue panoramique" },
  { id: 2, src: "/videos/raf-raf-2.mp4", title: "Ambiance du village" },
  { id: 3, src: "/videos/raf-raf-3.mp4", title: "Détente au bord de l'eau" },
];

export function VillageGallerySection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-wellness mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <div className="w-12 h-[1px] bg-primary/40" />
            <span className="text-sm font-medium text-accent uppercase tracking-widest">
              Galerie
            </span>
            <div className="w-12 h-[1px] bg-primary/40" />
          </div>
          <h2 className="heading-section text-foreground mb-6">
            Découvrez <span className="italic text-primary">Raf Raf</span>
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            Plongez dans l'atmosphère unique de La Marée Village, 
            une oasis de tranquillité à Raf Raf.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group rounded-3xl overflow-hidden shadow-elevated bg-secondary/50"
            >
              <div className="aspect-[4/5] md:aspect-square lg:aspect-[4/5] relative">
                <video 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  src={video.src}
                />
                
                {/* Gradient overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <h3 className="text-white font-medium text-xl">{video.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
