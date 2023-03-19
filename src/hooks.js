import * as React from "react"

function useKeyDown(keyCode, callback) {
  React.useEffect(() => {
    function handleKeydown(event) {
      if (event.code === keyCode) {
        callback()
      }
    }

    window.addEventListener("keydown", handleKeydown)

    return () => {
      window.removeEventListener("keydown", handleKeydown)
    }
  }, [callback, keyCode])
}

export function useEscapeKey(callback) {
  useKeyDown("Escape", callback)
}
