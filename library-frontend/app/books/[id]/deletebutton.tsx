"use client"

import {useRouter} from "next/navigation";
import {error} from "next/dist/build/output/log";
import {apiUrl} from "@/libs/api";

const DeleteButton = ({ id }: { id: number }) => {
  const router = useRouter();

  const deleteBook = async () => {
    if (!confirm("정말 삭제하시겠습니까?"))
      return;

    let status;
    try {
      const result = await fetch(apiUrl(`/books/${id}`), {
        method: "DELETE"
      });
      status = result.status;
    } catch (error) {
      status = 500;
    }

    if (status === 204) {
      alert("삭제되었습니다.");
      router.push("/");
    } else {
      alert(`삭제에 실패했습니다. (${status})`);
    }
  }

  return(
    <button
        className="bg-red-300 p-2 rounded-xl mt-5 ml-3 hover:bg-red-400 cursor-pointer"
        onClick={deleteBook}
      >삭제하기</button>
  );
}

export default DeleteButton;