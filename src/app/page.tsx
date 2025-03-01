import ApiButton from "@/components/ApiButton";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Next.js + Spring Boot API 호출</h1>
      <ApiButton />
    </main>
  );
}