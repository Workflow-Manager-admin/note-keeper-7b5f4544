import { listNotes } from '@/app/api/notes'
import AppHeader from '@/components/AppHeader'
import Sidebar from '@/components/Sidebar'
import NoteList from '@/components/NoteList'
import Link from "next/link";

export default async function Home() {
  const notes = await listNotes()
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <AppHeader />
      <div className="flex flex-1 flex-col md:flex-row">
        {/* Sidebar for medium screens and up */}
        <Sidebar notes={notes} />

        {/* Main panel */}
        <main className="flex-1 flex flex-col items-center px-2">
          <section className="w-full max-w-2xl mt-10 md:mt-16 px-2 flex flex-col gap-8">
            <div className="flex items-end justify-between pb-2 border-b border-gray-100">
              <h2 className="text-2xl font-bold tracking-tight">Your Notes</h2>
              <Link href="/new" className="md:hidden">
                <button
                  className="bg-primary hover:bg-secondary text-background px-4 py-2 rounded-full font-medium transition-colors"
                  style={{ background: 'var(--primary, #1976d2)' }}
                >
                  + New
                </button>
              </Link>
            </div>
            <div className="rounded-lg shadow border border-gray-100 bg-white">
              <NoteList notes={notes} />
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
