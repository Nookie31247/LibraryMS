import Link from "next/link";
import DeleteButton from "@/app/books/[id]/deletebutton";
import ModifyComponent from "@/app/books/[id]/modifyComponent";
import {apiUrl} from "@/libs/api";

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
  let status;
  let book = {} as Book;
  let element;
  try {
    const bookRes = await fetch(apiUrl(`/books/${id}`));
    status = bookRes.status;
    if(status === 200) {
      book = await bookRes.json();
    }
  } catch (error) {
    status = 500;
  }

  if(status == 200) {
    element = (
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
      <ModifyComponent
        id={book.id}
        beforeTitle={book.title}
        beforeAuthor={book.author}
        beforePrice={book.price}
        beforeAvailable={book.available}
      />
    </>
    );
  }
  else if(status == 404) {
    element = (
      <>
        <p className="text-red-500 text-lg font-semibold my-10">ID 번호 에러</p>
        <Link
          className="bg-blue-300 p-2 rounded-xl mt-5 inline-block hover:bg-blue-400"
          href={`/`}
        >돌아가기</Link>
      </>
    );
  }
  else {
    element = (
      <>
        <p className="text-red-500 text-lg font-semibold my-10">서버 에러 발생 ({status})</p>
        <Link
          className="bg-blue-300 p-2 rounded-xl mt-5 inline-block hover:bg-blue-400"
          href={`/`}
        >돌아가기</Link>
      </>
    );
  }

  return (<>{element}</>);
}

export default BookPage;