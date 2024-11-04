import Image from "next/image";

export default function Home() {
  return (
    <div className="grid lg:grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full md:w-auto">
        <table className="w-full">
          <tbody>
            <tr>
              <td className="border p-2">
                <h1 className="text-lg">Rent:</h1>
              </td>
              <td className="border p-2">
                <b>1756.64</b>
              </td>
            </tr>
            <tr>
              <td className="border p-2">
                <h1 className="text-lg">Electricity:</h1>
              </td>
              <td className="border p-2">
                <b>81.16</b>
              </td>
            </tr>
            <tr>
              <td className="border p-2">
                <h1 className="text-lg">Total:</h1>
              </td>
              <td className="border p-2">
                <b>1837.80</b>
              </td>
            </tr>
            <tr>
              <td className="border p-2">
                <h1 className="text-lg">Per Person:</h1>
              </td>
              <td className="border p-2">
                <b>{1837.8 / 3}</b>
              </td>
            </tr>
          </tbody>
        </table>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        @2024 Zakarya Noori
      </footer>
    </div>
  );
}
