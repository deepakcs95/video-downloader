import ClientSideWrapper from "@/components/ClientSideWrapper";

export default function Home() {
  return (
    <div className="relative pt-20 min-h-screen bg-primary flex flex-col items-center justify-center px-4 py-8">
      <header className="absolute top-7 left-7  max-w-6xl   mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-secondary">DownloadDash</h1>
      </header>

      <main className="w-full max-w-2xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">
          Fast & Easy Video Downloads
        </h2>
        <p className="text-base sm:text-lg text-secondary mb-8">
          Effortlessly download and store your favorite videos with a single click.
        </p>

        <ClientSideWrapper />
      </main>
    </div>
  );
}
