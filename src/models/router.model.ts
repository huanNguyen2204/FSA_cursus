import { ReactNode } from "react"

export interface RouterModel {
  url: string
  page: ReactNode
  title?: string
}