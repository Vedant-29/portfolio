"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AddNewTodo() {
  const router = useRouter();
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");


  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!title || !description) {
      alert("Both are required");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/topics", {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify({
          title, description
        })
      })

      if (res.ok) {
        router.push('/')
      } else {
        throw new Error("Failed to create a Todo")
      }
    } catch (error) {}

  }

  return (
    <div className="flex justify-center">
      <div className="grid w-9/12 max-w-sm items-center gap-1.5">
        <div className="space-y-2">
          <Label htmlFor="email">Todo Heading</Label>
          <Input onChange={(e) => setTitle(e.target.value)} value={title} type="text" id="text" placeholder="Title" />
        </div>
        <div className="mt-2 space-y-2">
          <Label htmlFor="email">Todo Description</Label>
          <Input onChange={(e) => setDescription(e.target.value)} value={description} type="text" id="text" placeholder="Description" />
        </div>
        <div className="w-full">
          <Button onClick={handleSubmit} className="w-full mt-2">Add Todo</Button>
        </div>
      </div>
    </div>
  );
}
