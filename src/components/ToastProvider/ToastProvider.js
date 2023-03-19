import React from "react"

const ToastContext = React.createContext({})

export function ToastProvider({children}) {
  const [stack, setStack] = React.useState([])

  const show = React.useCallback(({message, variant}) => {
    // @ts-ignore
    setStack(stack => {
      const nextToastStack = [...stack]

      nextToastStack.push({
        id: Math.random(),
        message,
        variant,
      })

      return nextToastStack
    })
  }, [])

  const remove = React.useCallback(id => {
    // @ts-ignore
    setStack(state => state.filter(stack => stack.id !== id))
  }, [])

  const reset = React.useCallback(() => {
    setStack([])
  }, [])

  const value = React.useMemo(() => {
    return {
      stack,
      show,
      remove,
      reset,
    }
  }, [show, remove, stack, reset])

  return <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
}

export function useToast() {
  const toastContext = React.useContext(ToastContext)

  if (!toastContext) {
    console.warn(`useToast hook must be used inside ToastProvider`)
  }

  return toastContext
}

export default ToastProvider
