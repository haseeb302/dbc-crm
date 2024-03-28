"use client";

import { useFormStatus } from "react-dom";
import { Button } from "./components/ui/button";

export default function SubmitButton({ value }) {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" aria-disabled={pending}>
      {value}
    </Button>
  );
}
