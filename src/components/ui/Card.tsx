import { motion } from 'framer-motion';

interface CardProps {
  titulo: string;
  instituicao: string;
  periodo?: string;
  detalhe?: string;
  index: number;
}

export function Card({
  titulo,
  instituicao,
  periodo,
  detalhe,
  index,
}: CardProps) {
  const delay = 0.2 + index * 0.1;

  return (
    <motion.div
      className="rounded-xl border border-lime-400/20 bg-neutral-900 p-6 shadow-xl"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, amount: 0.5 }}
    >
      <div className="mb-2">
        <h3 className="text-xl font-bold text-white">{titulo}</h3>
        <p className="text-base text-lime-400">{instituicao}</p>
      </div>
      {periodo && <p className="mb-2 text-sm text-neutral-400">{periodo}</p>}
      {detalhe && <p className="text-sm text-neutral-300">{detalhe}</p>}
    </motion.div>
  );
}
