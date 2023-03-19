import React from "react"

import Button from "../Button"
import ToastShelf from "../ToastShelf"

import styles from "./ToastPlayground.module.css"
import {useToast} from "../ToastProvider/ToastProvider"

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"]

const DEFAULT_VARIANT = "notice"

function ToastPlayground() {
  const [message, setMessage] = React.useState("")
  const [selectedVariant, setSelectedVariant] = React.useState(DEFAULT_VARIANT)

  const toast = useToast()

  function handlePopToast(event) {
    event.preventDefault()

    toast.show({message, variant: selectedVariant})

    setSelectedVariant(DEFAULT_VARIANT)
    setMessage("")
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf />

      <form onSubmit={handlePopToast}>
        <div className={styles.controlsWrapper}>
          <div className={styles.row}>
            <label htmlFor="message" className={styles.label} style={{alignSelf: "baseline"}}>
              Message
            </label>
            <div className={styles.inputWrapper}>
              <textarea
                id="message"
                required
                className={styles.messageInput}
                value={message}
                onChange={event => setMessage(event.target.value)}
              />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label}>Variant</div>
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              {VARIANT_OPTIONS.map(variant => {
                const label = `variant-${variant}`
                return (
                  <label key={variant} htmlFor={label}>
                    <input
                      id={label}
                      type="radio"
                      required
                      checked={variant === selectedVariant}
                      name="variant"
                      value={variant}
                      onChange={event => setSelectedVariant(event.target.value)}
                    />
                    {variant}
                  </label>
                )
              })}
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label} />
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              <Button type="submit">Pop Toast!</Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default ToastPlayground
