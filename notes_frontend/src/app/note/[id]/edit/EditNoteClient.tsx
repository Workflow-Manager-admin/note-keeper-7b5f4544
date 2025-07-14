'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { updateNote } from '@/app/api/notes'
import NoteEditor from '@/components/NoteEditor'
import { Note } from '@/types/note'

export default function EditNoteClient({ noteId, note }: { noteId: string, note: Note }) {
  const router = useRouter()
  const [saving, setSaving] = useState(false)

  async function handleSave(data: { title: string; content: string }) {
    setSaving(true)
    await updateNote(noteId, data)
    setSaving(false)
    router.push(`/note/${noteId}`)
    router.refresh()
  }

  return (
    <NoteEditor note={note} onSave={handleSave} saving={saving}/>
  )
}
