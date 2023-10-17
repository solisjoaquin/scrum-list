"use client";
import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { useState, useEffect } from "react";

const InputName = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <div className="flex w-full max-w-sm items-center justify-between space-x-2 py-4">
      {isClient && (
        <Input
          type="email"
          placeholder="Email"
          suppressHydrationWarning={true}
        />
      )}

      <Button type="submit">Subscribe</Button>
    </div>
  );
};

export default InputName;
