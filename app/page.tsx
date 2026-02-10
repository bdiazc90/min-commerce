import Catalog from "@/src/components/catalog";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full bg-zinc-50 dark:bg-black">
      <section className="min-w-3xl mx-auto bg-white p-4">
        <h1 className="text-4xl text-blue-900 font-bold font-manrope">Min Commerce</h1>
        <hr className=" border-t-teal-200 my-4" />
        <Catalog />
      </section>
    </main>
  );
}
