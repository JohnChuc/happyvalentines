import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Heart } from "lucide-react";

export default function Home() {
  const { toast } = useToast();

  const handleYesClick = () => {
    toast({
      title: "Yay! 💖",
      description: "Thank you for saying yes! You've made me the happiest person!",
      duration: 5000,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-red-50 flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", duration: 0.5 }}
        className="absolute top-10 right-10"
      >
        <Heart className="w-12 h-12 text-pink-400" fill="currentColor" />
      </motion.div>
      
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", duration: 0.5, delay: 0.2 }}
        className="absolute bottom-10 left-10"
      >
        <Heart className="w-8 h-8 text-red-400" fill="currentColor" />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl font-bold text-center text-pink-600 mb-12"
      >
        Will you be my Valentine?
      </motion.h1>

      <div className="flex flex-col sm:flex-row gap-4">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
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
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse",
          }}
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
        className="mt-12 text-pink-600 text-lg text-center"
      >
        💝 Pick any button - they both lead to happiness! 💝
      </motion.div>
    </div>
  );
}
