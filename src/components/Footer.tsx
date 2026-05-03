'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: 'easeOut' as const }}
      className="border-t border-gray-200/50 dark:border-gray-800/50 py-8 px-6"
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500 dark:text-gray-500">
          &copy; {new Date().getFullYear()} Portfolio. All rights reserved.
        </p>
        <p className="text-sm text-gray-400 dark:text-gray-600">
          Built with Next.js & Framer Motion
        </p>
      </div>
    </motion.footer>
  );
}
