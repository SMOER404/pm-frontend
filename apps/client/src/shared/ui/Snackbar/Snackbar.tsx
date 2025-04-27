import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './Snackbar.module.css'

export interface SnackbarProps {
  open: boolean
  message: string
  severity: 'success' | 'error'
  onClose: () => void
  autoHideDuration?: number
}

export const Snackbar: React.FC<SnackbarProps> = ({
  open,
  message,
  severity,
  onClose,
  autoHideDuration = 3000
}) => {
  React.useEffect(() => {
    if (open) {
      const timer = setTimeout(onClose, autoHideDuration)
      return () => clearTimeout(timer)
    }
  }, [open, autoHideDuration, onClose])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className={`${styles.snackbar} ${styles[severity]}`}
        >
          <div className={styles.content}>
            <span className={styles.message}>{message}</span>
            <button onClick={onClose} className={styles.closeButton}>
              ✕
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
} 