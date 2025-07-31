import p5 from 'p5'
import { useEffect, useRef } from 'react'

import { sketch } from './AgentsAutonomes'

const AgentsAutonomes = () => {
  const container = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!container.current) return
    const p5Instance = new p5(sketch, container.current)

    return () => {
      p5Instance.remove()
    }
  })
  return <div ref={container}></div>
}

export { AgentsAutonomes }
