import { Pencil, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useReducer } from "react";

export default function RemoveButton({ id }: { id: any }) {
  const router = useRouter();

  const removeTopic = async () => {
    const confirmed = confirm("Are you sure?");

    if (confirmed) {
      const res = await fetch(`http://localhost:3000/api/topics?id=${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        router.refresh();
      }
    }
  };

  return (
    <button
      onClick={removeTopic}
      className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-150"
      aria-label="Delete"
    >
      <Trash2 className="text-red-500" />
    </button>
  );
}
