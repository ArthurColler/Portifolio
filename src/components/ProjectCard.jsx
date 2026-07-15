import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import MediaPlaceholder from './MediaPlaceholder.jsx'

export default function ProjectCard({ project, index = 0 }) {
  return (
    <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.25, ease: 'easeOut' }}>
      <Link
        to={`/projetos/${project.slug}`}
        className="group block card-surface rounded-2xl p-3 hover:border-accent/30 transition-colors"
      >
        <MediaPlaceholder
          seed={index}
          label={project.mediaLabel}
          className="aspect-[4/3] w-full"
        />
        <div className="px-2 pt-4 pb-2">
          <div className="flex flex-wrap gap-2 mb-3">
            {project.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="text-[11px] uppercase tracking-wide text-accent/80 bg-accent/10 px-2 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
          <h3 className="text-lg font-semibold text-white group-hover:text-accent transition-colors">
            {project.title}
          </h3>
          <p className="mt-2 text-sm text-slate-400 line-clamp-2">{project.summary}</p>
        </div>
      </Link>
    </motion.div>
  )
}
