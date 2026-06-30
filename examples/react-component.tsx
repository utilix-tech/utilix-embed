/**
 * Utilix Embed — React integration examples
 */

import { UtilixTool } from '@utilix-tech/embed/react'

// --- Basic embed ---
export function JsonFormatterPage() {
  return (
    <div>
      <h1>JSON Formatter</h1>
      <UtilixTool tool="json-formatter" theme="auto" />
    </div>
  )
}

// --- Pre-filled input ---
export function HashDemo() {
  return (
    <UtilixTool
      tool="hash"
      defaultInput="hello world"
      theme="dark"
      height={400}
    />
  )
}

// --- Listening to output changes ---
export function TokenCounter({ onTokenCount }: { onTokenCount: (n: number) => void }) {
  return (
    <UtilixTool
      tool="estimate-tokens"
      theme="auto"
      onChange={(output) => {
        const result = output as { tokens?: number }
        if (result.tokens !== undefined) onTokenCount(result.tokens)
      }}
    />
  )
}

// --- Conditionally rendered, custom styling ---
export function EmbeddedDashboard({ showPii }: { showPii: boolean }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
      <UtilixTool tool="json-formatter" theme="auto" hideHeader />
      <UtilixTool tool="base64-encoder" theme="auto" hideHeader />
      {showPii && (
        <UtilixTool
          tool="detect-pii"
          theme="auto"
          hideHeader
          style={{ gridColumn: '1 / -1' }}
        />
      )}
    </div>
  )
}

// --- Using the imperative API from React ---
import { useEffect, useRef } from 'react'
import { UtilixEmbed, type UtilixInstance } from '@utilix-tech/embed'

export function ImperativeEmbed({ input }: { input: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const instance = useRef<UtilixInstance | null>(null)

  useEffect(() => {
    if (!ref.current) return
    instance.current = UtilixEmbed.mount(ref.current, {
      tool: 'json-formatter',
      theme: 'auto',
    })
    return () => instance.current?.unmount()
  }, [])

  // Update input when prop changes
  useEffect(() => {
    instance.current?.setInput(input)
  }, [input])

  return <div ref={ref} />
}
