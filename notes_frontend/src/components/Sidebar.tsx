import { Note } from '@/types/note'
import NoteList from './NoteList'
import Link from 'next/link'

interface SidebarProps {
  notes: Note[]
  selectedId?: string
}

export default function Sidebar({ notes, selectedId }: SidebarProps) {
  return (
    <aside className="hidden md:flex md:flex-col w-80 shrink-0 min-h-0 bg-white border-r border-gray-100">
      <div className="px-4 py-3">
        <Link href="/" className="block text-lg font-bold" style={{ color: 'var(--primary, #1976d2)' }}>
          Notes
        </Link>
      </div>
      <div className="overflow-y-auto flex-1 pt-2" style={{ minHeight: 0 }}>
        <NoteList notes={notes} selectedId={selectedId}/>
      </div>
    </aside>
  )
}
