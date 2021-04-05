import { entity } from 'simpler-state'

export const counter = entity(0)

export const reset = () => {
  counter.set(0)
}

export const increment = by => {
  counter.set(value => value + by)  
  // --OR-->  counter.set(counter.get() + by)  
}