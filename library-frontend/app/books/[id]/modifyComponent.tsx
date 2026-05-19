"use client"

import Link from "next/link";
import {useState} from "react";
import {useRouter} from "next/navigation";
import {apiUrl} from "@/libs/api";

const ModifyComponent = (
  {id, beforeTitle, beforeAuthor, beforePrice, beforeAvailable}: {
    id: number,
    beforeTitle: string,
    beforeAuthor: string,
    beforePrice: number | null,
    beforeAvailable: boolean
  }
) => {
  const router = useRouter();
  const inputClassName = "my-2";
  const [isActive, setIsActive] = useState<boolean>(false);

  const [title, setTitle] = useState(beforeTitle);
  const [author, setAuthor] = useState(beforeAuthor);
  const [price, setPrice] = useState<number | null>(beforePrice);
  const [available, setAvailable] = useState(beforeAvailable);

  const modifyBook = async () => {
    if(title === "") {
      alert("제목이 입력되지 않았습니다.");
      return;
    }
    else if(author === "") {
      alert("저자가 입력되지 않았습니다.");
      return;
    }

    if (!confirm("수정하시겠습니까?"))
      return;

    let status;
    try {
      const res = await fetch(apiUrl(`/books/${id}`), {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({id, title, author, price, available})
      });
      status = res.status;
    } catch (err) {
      status = 500;
    }

    if (status === 200) {
      alert("정보를 수정했습니다.")
      setIsActive(false);
      router.refresh();
    }
    else {
      alert(`정보 수정을 실패했습니다. (${status})`);
    }
  }

  return(
    <>
      {!isActive ? (
        <button
          type="button"
          className="bg-green-300 p-2 rounded-xl mt-5 ml-3 hover:bg-green-400 cursor-pointer"
          onClick={() => setIsActive(!isActive)}
        >수정하기</button>
      ) : <></>}
      {
        isActive ?
          <form>
            <hr className="my-8 border-gray-400"/>
            <h5 className="font-semibold text-gray-700 mb-3">수정할 정보를 입력하세요</h5>
            <p className={inputClassName}>제목: <input
              className="border rounded-lg pl-1"
              type="text"
              required={true}
              value={title}
              placeholder="제목을 입력하세요"
              onChange={(e) => setTitle(e.target.value)}
            /></p>

            <p className={inputClassName}>저자: <input
              className="border rounded-lg pl-1"
              type="text"
              required={true}
              value={author}
              placeholder="저자를 입력하세요"
              onChange={(e) => setAuthor(e.target.value)}
            /></p>

            <p className={inputClassName}>가격: <input
              className="border rounded-lg pl-1"
              type="number"
              value={price ?? ""}
              placeholder="가격을 입력하세요"
              onChange={(e) =>
                setPrice(e.target.value === "" ? null : Number(e.target.value))}
            /></p>

            <p className={inputClassName}>구매 가능 여부: <input
              className="border rounded-lg pl-1"
              type="checkbox"
              defaultChecked={available}
              onChange={(e) => setAvailable(e.target.checked)}
            /></p>

            <button
              type="button"
              className="bg-red-300 px-4 py-2 rounded-xl mt-5 inline-block hover:bg-red-400 cursor-pointer"
              onClick={() => setIsActive(!isActive)}
            >취소</button>
            <button
              type="button"
              className="bg-green-300 px-4 py-2 rounded-xl mt-5 ml-3 hover:bg-green-400 cursor-pointer"
              onClick={modifyBook}
            >수정</button>
          </form>
          :
          <></>
      }
    </>
  );
}

export default ModifyComponent