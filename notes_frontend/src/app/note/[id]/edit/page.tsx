import { getNote, listNotes } from '@/app/api/notes'
import AppHeader from '@/components/AppHeader'
import Sidebar from '@/components/Sidebar'
import dynamic from 'next/dynamic'

const EditNoteClient = dynamic(() => import('./EditNoteClient'), { ssr: false })

export default async function EditNotePage({ params }: { params: { id: string } }) {
  const id = params.id
  const [notes, note] = await Promise.all([
    listNotes(),
    getNote(id),
  ])

  if (!note) return (
    <div className="text-center py-24 text-gray-500">
      Note not found.
    </div>
  )

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <AppHeader />
      <div className="flex flex-1 flex-col md:flex-row">
        <Sidebar notes={notes} selectedId={id} />
        <main className="flex-1 flex flex-col items-center px-2">
          <section className="w-full max-w-xl mt-10 md:mt-16 px-2">
            <h2 className="text-xl font-bold mb-6">Edit Note</h2>
            {/* Client component handles mutation/navigation */}
            <EditNoteClient noteId={id} note={note} />
          </section>
        </main>
      </div>
    </div>
  )
}
