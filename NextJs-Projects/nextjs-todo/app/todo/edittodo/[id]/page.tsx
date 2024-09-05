"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const getTodoById = async (id: any) => {
  try {
    const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching topic:", error);
    return null;
  }
};



export default function EditTodo({ params }: { params: any }) {
  const { id } = params;

  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTodoById(id);

      if (data && data.topic) {
        setTitle(data.topic.title);
        setDescription(data.topic.description);
      } else {
        console.log("Failed to load topic data");
      }
    };

    fetchData();
  }, [id]);

  const handleSumbit = async (e) => {
    try {
      const res = await fetch(`http://localhost:3000/api/topics/${id}` , {
        method: "PUT",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({
          title, description
        })
      });

      if (!res.ok) {
        throw new Error("Failed to update topic");
      }

      router.push("/")
    } catch (error) {}
  }

  return (
    <div className="flex justify-center">
      <div className="grid w-9/12 max-w-sm items-center gap-1.5">
        <div className="space-y-2">
          <Label htmlFor="title">Todo Heading</Label>
          <Input
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            type="text"
            id="title"
            placeholder="Title"
          />
        </div>
        <div className="mt-2 space-y-2">
          <Label htmlFor="description">Todo Description</Label>
          <Input
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            type="text"
            id="description"
            placeholder="Description"
          />
        </div>
        <div className="w-full">
          <Button onClick={handleSumbit} className="w-full mt-2">Edit Todo</Button>
        </div>
      </div>
    </div>
  );
}
