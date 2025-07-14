'use client'

import { useState } from 'react'
import { Note } from '@/types/note'

interface NoteEditorProps {
  note?: Note
  onSave: (data: { title: string; content: string }) => void
  saving?: boolean
}

export default function NoteEditor({ note, onSave, saving }: NoteEditorProps) {
  const [title, setTitle] = useState(note?.title || '')
  const [content, setContent] = useState(note?.content || '')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    onSave({ title, content })
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full max-w-xl">
      <input
        className="border px-4 py-2 rounded bg-background text-foreground focus:outline-primary text-lg font-semibold"
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        disabled={saving}
        maxLength={120}
        required
        autoFocus
      />
      <textarea
        className="border px-4 py-2 rounded bg-background text-foreground min-h-[140px] resize-y focus:outline-primary"
        placeholder="Write your note..."
        value={content}
        onChange={e => setContent(e.target.value)}
        disabled={saving}
        required
        maxLength={5000}
      />
      <div className="flex gap-2 mt-2">
        <button
          type="submit"
          disabled={saving}
          className="bg-primary hover:bg-secondary text-background rounded-full px-6 py-2 transition-colors font-medium shadow"
          style={{ background: 'var(--primary, #1976d2)' }}
        >
          {saving ? 'Saving...' : 'Save'}
        </button>
      </div>
    </form>
  )
}
