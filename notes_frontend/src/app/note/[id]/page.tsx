import { getNote, listNotes } from '@/app/api/notes'
import AppHeader from '@/components/AppHeader'
import Sidebar from '@/components/Sidebar'
import NoteView from '@/components/NoteView'
import Link from 'next/link'

export default async function NotePage({ params }: { params: { id: string } }) {
  const [notes, note] = await Promise.all([
    listNotes(),
    getNote(params.id),
  ])
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <AppHeader />
      <div className="flex flex-1 flex-col md:flex-row">
        <Sidebar notes={notes} selectedId={params.id}/>
        <main className="flex-1 flex flex-col items-center px-2">
          <section className="w-full max-w-2xl mt-10 md:mt-16 px-2">
            {!note ? (
              <div className="text-center text-gray-500 mt-24">
                <p className="text-lg mb-2">Note not found.</p>
                <Link href="/" className="text-primary underline">Back to notes</Link>
              </div>
            ) : (
              <NoteView note={note}/>
            )}
          </section>
        </main>
      </div>
    </div>
  )
}
