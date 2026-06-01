import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="h-screen px-36 py-6">
        <h1 className="text-3xl">Welcome to Next.js!</h1>
        <Button className="text-xl h-11 px-6 cursor-pointer">Sign In</Button>
    </main>
  );
}
