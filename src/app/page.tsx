import Image from "next/image";
import External from "./components/External";

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

        <div className="w-full">
          <External />
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        @2024 Zakarya Noori
      </footer>
    </div>
  );
}
