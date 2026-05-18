"use client"

import {useState} from "react";
import Link from "next/link";
import {useRouter} from "next/navigation";

const RegisterPage = () => {
  const router = useRouter();
  const inputClassName = "my-2";

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState<number | null>(null);
  const [available, setAvailable] = useState(true);

  const addBook = async () => {
    if(title === "") {
      alert("제목이 입력되지 않았습니다.");
      return;
    }
    else if(author === "") {
      alert("저자가 입력되지 않았습니다.");
      return;
    }

    if (!confirm("등록하시겠습니까?"))
      return;

    let status;
    try {
      const res = await fetch("http://localhost:8080/api/books", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({title, author, price, available})
      });
      status = res.status;
    } catch (error) {
      status = 500;
    }

    if (status === 201) {
      alert("등록에 성공했습니다.")
      router.push("/")
    }
    else {
      alert("등록에 실패했습니다.")
    }
  }

  return (
    <>
      <h4 className="text-xl font-bold text-blue-900 mx-2 mb-4">책 등록하기</h4>
      <form>
        <p className={inputClassName}>제목: <input
          className="border rounded-lg pl-1"
          type="text"
          required={true}
          placeholder="제목을 입력하세요"
          onChange={(e) => setTitle(e.target.value)}
        /></p>

        <p className={inputClassName}>저자: <input
          className="border rounded-lg pl-1"
          type="text"
          required={true}
          placeholder="저자를 입력하세요"
          onChange={(e) => setAuthor(e.target.value)}
        /></p>

        <p className={inputClassName}>가격: <input
          className="border rounded-lg pl-1"
          type="number"
          placeholder="가격을 입력하세요"
          onChange={(e) =>
            setPrice(e.target.value === "" ? null : Number(e.target.value))}
        /></p>

        <p className={inputClassName}>구매 가능 여부: <input
          className="border rounded-lg pl-1"
          type="checkbox"
          defaultChecked={true}
          onChange={(e) => setAvailable(e.target.checked)}
        /></p>

        <Link
          className="bg-blue-300 p-2 rounded-xl mt-5 inline-block hover:bg-blue-400"
          href={`/`}
        >돌아가기</Link>
        <button
          type="button"
          className="bg-green-300 p-2 rounded-xl mt-5 ml-3 hover:bg-green-400 cursor-pointer"
          onClick={addBook}
        >등록하기</button>
      </form>
    </>
  );
}

export default RegisterPage;