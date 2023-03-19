import React from "react"

import Toast from "../Toast"
import styles from "./ToastShelf.module.css"
import {useToast} from "../ToastProvider/ToastProvider"

import {useEscapeKey} from "../../hooks"

function ToastShelf() {
  const toast = useToast()
  useEscapeKey(toast.reset)

  return (
    <ol className={styles.wrapper} role="region" aria-live="polite" aria-label="Notification">
      {toast.stack.map(({id, message, variant}) => {
        return (
          <li key={id} className={styles.toastWrapper}>
            <Toast variant={variant} onDismiss={() => toast.remove(id)}>
              {message}
            </Toast>
          </li>
        )
      })}
    </ol>
  )
}

export default React.memo(ToastShelf)
