import Link from 'next/link'
import React from 'react'

/**
 * AppHeader displays the app name and new note button.
 * Uses modern, minimal design and palette.
 */
export default function AppHeader() {
  return (
    <header className="w-full flex items-center justify-between py-4 px-6 border-b border-gray-100 bg-white sticky top-0 z-20 shadow-sm">
      <Link href="/" className="text-xl font-bold tracking-tight" style={{ color: 'var(--primary, #1976d2)' }}>
        <span>Note</span>
        <span style={{color: 'var(--accent, #ffb300)'}}>Keeper</span>
      </Link>
      <Link href="/new">
        <button
          className="bg-primary hover:bg-secondary text-background px-4 py-2 rounded-full font-medium transition-colors shadow"
          style={{
            background: 'var(--primary, #1976d2)',
          }}
        >
          + New Note
        </button>
      </Link>
    </header>
  )
}
