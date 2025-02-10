import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Heart } from "lucide-react";
import { useEffect, useState } from "react";

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
}

function generateStars(count: number): Star[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 3 + 1,
  }));
}

export default function Home() {
  const { toast } = useToast();
  const [stars] = useState<Star[]>(() => generateStars(50));

  const handleYesClick = () => {
    toast({
      title: "Yay! 💖",
      description: "Thank you for saying yes! You've made me the happiest person!",
      duration: 5000,
    });
  };

  const bounceAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatType: "reverse" as const,
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 via-purple-900 to-pink-900 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Stars */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Hearts */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", duration: 0.5 }}
        className="absolute top-10 right-10 z-10"
      >
        <Heart className="w-12 h-12 text-pink-400" fill="currentColor" />
      </motion.div>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", duration: 0.5, delay: 0.2 }}
        className="absolute bottom-10 left-10 z-10"
      >
        <Heart className="w-8 h-8 text-red-400" fill="currentColor" />
      </motion.div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-center text-white mb-12">
          Will you be my Valentine?
        </h1>

        <div className="flex flex-col sm:flex-row gap-4">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            animate={bounceAnimation}
          >
            <Button
              size="lg"
              variant="secondary"
              className="bg-pink-400 hover:bg-pink-500 text-white text-xl px-8 py-6"
              onClick={handleYesClick}
            >
              Yes
            </Button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            animate={bounceAnimation}
          >
            <Button
              size="lg"
              variant="secondary"
              className="bg-pink-400 hover:bg-pink-500 text-white text-xl px-8 py-6"
              onClick={handleYesClick}
            >
              Yes
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-12 text-white text-lg text-center relative z-10"
        >
          💝 Pick any button - they both lead to happiness! 💝
        </motion.div>
      </motion.div>
    </div>
  );
}