import BookCard from "@/components/BookCard";
import Link from "next/link";
import SearchForm from "@/app/searchForm";

type Book = {
  id: number;
  title: string;
  author: string;
  price: number;
  available: boolean;
}

export default async function Home({searchParams}: {searchParams: Promise<{q?: string}>}) {
  const {q} = await searchParams;
  let status;
  let books: Book[] = [];
  try {
    const bookRes = await fetch(`http://localhost:8080/api/books?q=${q ?? ""}`);
    status = bookRes.status;
    if(status === 200) {
      books = await bookRes.json();
    }
  } catch (error) {
    status = 500;
  }

  let element;

  if (status == 200) {
    element = (books.map((book: Book) => (
      <BookCard
        key={book.id}
        id={book.id}
        title={book.title}
        author={book.author}
        price={book.price}
        available={book.available}/>
    )));
  }
  else if(status == 204) {
    element = (
      <p className="text-red-500 text-lg font-semibold my-10">검색 결과가 없습니다.</p>
    )
  }
  else {
    element = (
      <p className="text-red-500 text-lg font-semibold my-10">서버 오류가 발생했습니다.</p>
    )
  }
    

  return (
    <>
      <div className="flex justify-between">
        <h3 className="text-2xl font-bold ml-2 pt-1 text-[#EF6C33]">검색 결과</h3>
        <Link
          href={`/`}
          className="p-2 inline-block bg-blue-300 rounded-xl mr-2 mb-2 hover:bg-blue-400"
        >돌아가기</Link>
      </div>
      <SearchForm/>
      <div className="border border-dashed border-gray-500 rounded-2xl px-4 py-2">
        {element}
      </div>
    </>
  );
}
