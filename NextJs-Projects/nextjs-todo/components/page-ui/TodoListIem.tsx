"use client";

import { Pencil, Trash2 } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import RemoveButton from "./RemoveButton";

interface Topic {
  _id: string;
  title: string;
  description: string;
}

const getTopics = async (): Promise<{topics: Topic[] } | null> => {
  try {
    const res = await fetch("http://localhost:3000/api/topics", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch Topics");
    }

    const data = await res.json();
    console.log("Fetched data:", data); // Log fetched data for debugging
    return data;
  } catch (error) {
    console.log("Error loading topics = ", error);
    return null;
  }
};

export default function TodoListItem() {
  const [topics, setTopics] = useState<Topic[]>([]);

  useEffect(() => {
    const loadTopics = async () => {
      const data = await getTopics();

      if (data) {
        setTopics(data.topics);
      } else {
        console.log("Data imported is invalid");
      }
    };

    loadTopics();
  }, []);

  return (
    <div className="space-y-4">
      {topics.length > 0 ? (
        topics?.map((topic) => (
          <div
          key={topic._id}
          className="flex items-center p-4 w-full justify-between bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
            <div>
              <div className="text-lg font-semibold text-gray-800">
                {topic.title}
              </div>
              <div className="text-sm text-gray-500">{topic.description}</div>
            </div>
            <div className="flex items-center space-x-2">
              <RemoveButton id={topic._id}/>
              <Link href={`todo/edittodo/${topic._id}`}>
                <button
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-150"
                  aria-label="Edit"
                >
                  <Pencil className="text-blue-500" />
                </button>
              </Link>
            </div>
          </div>
        ))
      ) : (
        <div>No Topics Available</div>
      )}
    </div>
  );
}
