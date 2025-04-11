"use client"

import { createContext, useContext, useState, type ReactNode, type HTMLAttributes } from "react"
import styles from "../styles/Tabs.module.css"

type TabsContextValue = {
  value: string
  onValueChange: (value: string) => void
}

const TabsContext = createContext<TabsContextValue | undefined>(undefined)

function useTabs() {
  const context = useContext(TabsContext)
  if (!context) {
    throw new Error("Tabs components must be used within a TabsProvider")
  }
  return context
}

interface TabsProps extends HTMLAttributes<HTMLDivElement> {
  defaultValue: string
  children: ReactNode
}

function Tabs({ defaultValue, children, className, ...props }: TabsProps) {
  const [value, setValue] = useState(defaultValue)

  return (
    <TabsContext.Provider value={{ value, onValueChange: setValue }}>
      <div className={`${styles.tabs} ${className || ""}`} {...props}>
        {children}
      </div>
    </TabsContext.Provider>
  )
}

interface TabsListProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

function TabsList({ children, className, ...props }: TabsListProps) {
  return (
    <div className={`${styles.tabsList} ${className || ""}`} {...props}>
      {children}
    </div>
  )
}

interface TabsTriggerProps extends HTMLAttributes<HTMLButtonElement> {
  value: string
  children: ReactNode
}

function TabsTrigger({ value, children, className, ...props }: TabsTriggerProps) {
  const { value: selectedValue, onValueChange } = useTabs()
  const isSelected = selectedValue === value

  return (
    <button
      className={`${styles.tabsTrigger} ${className || ""}`}
      onClick={() => onValueChange(value)}
      data-state={isSelected ? "active" : "inactive"}
      {...props}
    >
      {children}
    </button>
  )
}

interface TabsContentProps extends HTMLAttributes<HTMLDivElement> {
  value: string
  children: ReactNode
}

function TabsContent({ value, children, className, ...props }: TabsContentProps) {
  const { value: selectedValue } = useTabs()
  const isSelected = selectedValue === value

  if (!isSelected) return null

  return (
    <div className={`${styles.tabsContent} ${className || ""}`} {...props}>
      {children}
    </div>
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent }
