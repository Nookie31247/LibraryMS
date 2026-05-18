import Link from "next/link";
import DeleteButton from "@/app/books/[id]/deletebutton";

type Book = {
  id: number;
  title: string;
  author: string;
  price: number;
  available: boolean;
}

const BookPage = async ({params}: {params: Promise<{id: number}>}) => {
  const {id} = await params;
  const spanClass = "text-gray-600";
  const bookRes = await fetch(`http://localhost:8080/api/books/${id}`);
  const book: Book = await bookRes.json();

  return (
    <>
      <h5 className="font-semibold mx-2 text-gray-500 mb-2">검색 결과</h5>
      <h4 className="text-xl font-semibold m-2">{book.title}</h4>
      <ul className="list-disc ml-10 mr-2">
        <li><span className={spanClass}>작가: </span>{book.author}</li>
        <li><span className={spanClass}>가격: </span>{
          book.price == null ? "가격 미정": `${book.price}원`
        }</li>
        <li><span className={spanClass}>상태: </span>{book.available ? "구매 가능" : "구매 불가능"}</li>
        <li><span className={spanClass}>id: </span>{book.id}</li>
      </ul>
      <Link
        className="bg-blue-300 p-2 rounded-xl mt-5 inline-block hover:bg-blue-400"
        href={`/`}
      >돌아가기</Link>
      <DeleteButton id={book.id}/>
    </>
  );
}

export default BookPage;