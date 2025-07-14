'use client'

import Link from 'next/link'
import { Note } from '@/types/note'
import { useRouter } from 'next/navigation'
import { deleteNote } from '@/app/api/notes'
import { useState } from 'react'

interface NoteViewProps {
  note: Note
}

export default function NoteView({ note }: NoteViewProps) {
  const router = useRouter()
  const [deleting, setDeleting] = useState(false)
  const handleDelete = async () => {
    // Confirm before deleting
    if (!window.confirm('Delete this note? This cannot be undone.')) return
    setDeleting(true)
    await deleteNote(note.id)
    setDeleting(false)
    router.push('/')
    router.refresh()
  }

  return (
    <article className="w-full max-w-2xl">
      <div className="mb-6 flex items-center justify-between gap-2">
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold truncate">{note.title || <i>(Untitled)</i>}</h1>
          <div className="text-xs text-gray-400 mt-0.5">
            Updated {new Date(note.updated).toLocaleString()}
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <Link href={`/note/${note.id}/edit`}>
            <button className="px-3 py-2 rounded-full text-sm font-medium bg-primary text-background hover:bg-secondary transition-colors"
              style={{background:'var(--primary,#1976d2)'}}>
              Edit
            </button>
          </Link>
          <button
            onClick={handleDelete}
            className="px-3 py-2 rounded-full text-sm font-medium bg-gray-100 text-red-600 hover:bg-red-50 transition-colors"
            disabled={deleting}
          >
            {deleting ? "Deleting..." : "Delete"}
          </button>
        </div>
      </div>
      <div className="prose max-w-full whitespace-pre-line text-base">
        {note.content}
      </div>
    </article>
  )
}
