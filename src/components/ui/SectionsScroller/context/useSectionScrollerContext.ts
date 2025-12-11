import { useContext } from 'react'
import { SectionsScrollerContext } from './SectionsScrollerContext'

export const useSectionsScrollerContext = () => {
  return useContext(SectionsScrollerContext)
}
