import Image from "next/image";
import Link from "next/link";
import { Button } from "@/app/ui/components/ui/button";

export default function Home() {
  return (
    <main>
      <h1 className="text-4xl">Go to dashboard</h1>
      <Link href={"/dashboard"}>
        <Button>Go to dashboard</Button>
      </Link>
    </main>
  );
}
