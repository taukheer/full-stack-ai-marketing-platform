import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="text-2xl bg-red-500 font-bold">Hello</div>
      <Button variant="outline">Click me</Button>
    </div>
  );
}
