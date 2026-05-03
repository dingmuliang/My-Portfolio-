'use client';

import { motion } from 'framer-motion';
import { personalInfo, skills } from '@/data/portfolio';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-gray-50/50 dark:bg-[#0d0d1a]/50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-16"
        >
          关于我
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 左侧头像区域 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-full overflow-hidden border-4 border-gray-200 dark:border-gray-700 shadow-xl">
                <img
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* 装饰圆环 */}
              <div className="absolute -inset-4 rounded-full border-2 border-dashed border-blue-500/20 dark:border-blue-400/20 animate-spin-slow" />
            </div>
          </motion.div>

          {/* 右侧简介 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              {personalInfo.name}
              <span className="text-blue-500 dark:text-blue-400"> / {personalInfo.role}</span>
            </h3>
            {personalInfo.bio.map((paragraph, i) => (
              <p
                key={i}
                className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4"
              >
                {paragraph}
              </p>
            ))}
          </motion.div>
        </div>

        {/* 技能进度条 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16"
        >
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-8 text-center">
            技术栈
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-5 max-w-2xl mx-auto">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <div className="flex justify-between mb-1.5">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {skill.name}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-500">
                    {skill.level}%
                  </span>
                </div>
                <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: i * 0.05, ease: 'easeOut' }}
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
