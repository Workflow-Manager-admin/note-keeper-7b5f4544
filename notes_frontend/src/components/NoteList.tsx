import Link from 'next/link'
import { Note } from '@/types/note'

interface NoteListProps {
  notes: Note[];
  selectedId?: string;
}

export default function NoteList({ notes, selectedId }: NoteListProps) {
  return (
    <nav aria-label="Notes list"
      className="flex flex-col gap-0">
      {notes.length === 0 && (
        <p className="text-gray-400 px-5 py-4 text-center">No notes yet.</p>
      )}
      {notes.map(note => (
        <Link
          href={`/note/${note.id}`}
          key={note.id}
          className={`block px-5 py-3 border-b border-gray-100 transition-colors truncate ${
            selectedId === note.id 
              ? 'bg-accent/10 font-bold text-primary' 
              : 'hover:bg-gray-100'
          }`}
          aria-current={selectedId === note.id ? 'page' : undefined}
        >
          <div className="truncate">{note.title || <i>(Untitled)</i>}</div>
          <div className="text-xs text-gray-400 mt-0.5">{new Date(note.updated).toLocaleString()}</div>
        </Link>
      ))}
    </nav>
  )
}
