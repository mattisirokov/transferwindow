import { Button } from "@chakra-ui/react";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link href="/login">
        <Button bg="brand.green" color="black">
          Login
        </Button>
      </Link>
    </div>
  );
}
