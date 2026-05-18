import BookCard from "@/components/BookCard";
import Link from "next/link";

type Book = {
  id: number;
  title: string;
  author: string;
  price: number;
  available: boolean;
}

export default async function Home() {
  const bookRes = await fetch("http://localhost:8080/api/books");
  const books: Book[] = await bookRes.json();

  return (
    <>
      <div className="flex justify-between">
        <h3 className="text-2xl font-bold ml-2 pt-1 text-[#EF6C33]">전체 책 목록</h3>
        <Link
          href={`/register`}
          className="p-2 inline-block bg-green-300 rounded-xl mr-2 mb-2 hover:bg-green-400"
        >책 등록하기</Link>
      </div>
      <div className="border border-gray-400 rounded-2xl px-4 py-2">
        {books.map((book: Book) => (
          <BookCard
            key={book.id}
            id={book.id}
            title={book.title}
            author={book.author}
            price={book.price}
            available={book.available}/>
        ))}
      </div>
    </>
  );
}
