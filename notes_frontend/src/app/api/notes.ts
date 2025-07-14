'use server'

import { Note } from '@/types/note'

/**
 * Simulated in-memory notes API for demo purposes.
 * In production, replace with backend API fetch logic.
 */
let notes: Note[] = [
  {
    id: '1',
    title: 'Welcome to Note Keeper',
    content: 'Start taking notes!',
    created: new Date().toISOString(),
    updated: new Date().toISOString(),
  },
]

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

// PUBLIC_INTERFACE
export async function listNotes(): Promise<Note[]> {
  /** Returns all notes. In a real implementation, call the backend API here. */
  await delay(300)
  // Sort by most recently updated
  return notes.slice().sort((a, b) => new Date(b.updated).getTime() - new Date(a.updated).getTime())
}

// PUBLIC_INTERFACE
export async function getNote(id: string): Promise<Note | undefined> {
  /** Returns a note by id. */
  await delay(200)
  return notes.find((n) => n.id === id)
}

// PUBLIC_INTERFACE
export async function createNote(data: { title: string; content: string }): Promise<Note> {
  /** Creates a new note with the given title and content. */
  await delay(200)
  const newNote: Note = {
    id: Date.now().toString(),
    created: new Date().toISOString(),
    updated: new Date().toISOString(),
    ...data,
  }
  notes = [newNote, ...notes]
  return newNote
}

// PUBLIC_INTERFACE
export async function updateNote(id: string, data: { title: string; content: string }): Promise<Note | undefined> {
  /** Updates the note with the given id. */
  await delay(200)
  const idx = notes.findIndex((n) => n.id === id)
  if (idx === -1) return undefined
  notes[idx] = {
    ...notes[idx],
    ...data,
    updated: new Date().toISOString(),
  }
  return notes[idx]
}

// PUBLIC_INTERFACE
export async function deleteNote(id: string): Promise<boolean> {
  /** Deletes the note with the given id. */
  await delay(200)
  const prevLen = notes.length
  notes = notes.filter((n) => n.id !== id)
  return notes.length < prevLen
}
