import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const chats = ['Product Ideas', 'Design Feedback', 'Marketing Plan', 'Daily Notes']

export default function Home() {
  return (
    <main className={`${inter.className} flex h-screen bg-neutral-50 text-neutral-900`}>
      <aside className="w-[260px] shrink-0 border-r border-neutral-200 bg-white p-4">
        <div className="flex h-full flex-col gap-4">
          <h1 className="px-2 text-xl font-semibold">Astra</h1>

          <button className="rounded-2xl border border-neutral-200 bg-white px-4 py-2 text-left text-sm shadow-sm transition hover:bg-neutral-100">
            + New Chat
          </button>

          <nav className="flex flex-col gap-2">
            {chats.map((chat) => (
              <button
                key={chat}
                className="rounded-2xl px-3 py-2 text-left text-sm text-neutral-700 transition hover:bg-neutral-100"
              >
                {chat}
              </button>
            ))}
          </nav>
        </div>
      </aside>

      <section className="flex min-h-0 flex-1 flex-col">
        <div className="flex flex-1 items-center justify-center px-6">
          <p className="text-sm text-neutral-400">Start a conversation with Astra</p>
        </div>

        <div className="sticky bottom-0 border-t border-neutral-200 bg-white p-4">
          <div className="mx-auto flex w-full max-w-3xl items-center gap-2 rounded-2xl bg-neutral-100 px-4 py-2">
            <input
              type="text"
              placeholder="Message Astra…"
              className="flex-1 bg-transparent text-sm text-neutral-700 outline-none placeholder:text-neutral-400"
            />
            <button className="rounded-xl px-3 py-1 text-sm text-neutral-600 transition hover:bg-neutral-200">
              Send
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
