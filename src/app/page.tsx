export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="mx-auto flex min-h-[70vh] max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
            Your sound. Your instrument.
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Find the right gear for your sound.
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Discover guitars, keyboards, drums, DJ equipment, studio gear,
            microphones, and everything you need to make music.
          </p>
        </div>
      </section>
    </main>
  );
}