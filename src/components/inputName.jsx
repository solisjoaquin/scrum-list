"use client";
import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { useState, useEffect } from "react";
import { useThemeContext } from "../context/list";

const generateId = () => Math.random().toString(36).substr(2, 9);

const InputName = () => {
  const [isClient, setIsClient] = useState(false);
  const { setList } = useThemeContext();
  const [tempValue, setTempValue] = useState({
    name: "",
  });

  const handleChange = (e) => {
    setTempValue({ ...tempValue, name: e.target.value, id: generateId() });
  };

  const handleClick = () => {
    setList((prev) => [...prev, tempValue]);
    setTempValue({ name: "", id: "" });
  };

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <div className="flex w-full max-w-sm items-center justify-between space-x-2 py-4">
      {isClient && (
        <Input
          type="email"
          placeholder="Email"
          onChange={handleChange}
          value={tempValue.name}
        />
      )}

      <Button type="submit" onClick={handleClick}>
        Subscribe
      </Button>
    </div>
  );
};

export default InputName;
