"use client"

import {useRouter} from "next/navigation";

const DeleteButton = ({ id }: { id: number }) => {
  const router = useRouter();

  const deleteBook = async () => {
    if(!confirm("정말 삭제하시겠습니까?"))
      return;

    await fetch(`http://localhost:8080/api/books/${id}`, {
      method: "DELETE"
    });

    router.push("/");
  }

  return(
    <button
        className="bg-red-300 p-2 rounded-xl mt-5 ml-3 hover:bg-red-400 cursor-pointer"
        onClick={deleteBook}
      >삭제하기</button>
  );
}

export default DeleteButton;