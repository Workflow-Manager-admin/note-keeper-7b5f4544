import { listNotes, createNote } from '@/app/api/notes'
import AppHeader from '@/components/AppHeader'
import Sidebar from '@/components/Sidebar'
import NoteEditor from '@/components/NoteEditor'

export default async function NewNotePage() {
  const notes = await listNotes();

  async function handleSave(data: { title: string; content: string }) {
    'use server'
    await createNote(data)
  }

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <AppHeader />
      <div className="flex flex-1 flex-col md:flex-row">
        <Sidebar notes={notes} />
        <main className="flex-1 flex flex-col items-center px-2">
          <section className="w-full max-w-xl mt-10 md:mt-16 px-2">
            <h2 className="text-xl font-bold mb-6">Create New Note</h2>
            <NoteEditor onSave={handleSave} saving={false} />
          </section>
        </main>
      </div>
    </div>
  )
}
