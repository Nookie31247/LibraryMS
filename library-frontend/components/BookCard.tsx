import Link from "next/link";

const BookCard = (
  {id, title, author, price, available}: {
    id: number,
    title: string;
    author: string;
    price: number;
    available: boolean;
  }
) => {
  const spanClass = "text-gray-600";
  const tdClass = "px-4 pb-2 w-1/3";

  return (
    <Link className="bg-gray-200 rounded-xl my-3 inline-block hover:bg-gray-300" href={`/books/${id}`}>
      <h3 className="text-lg font-semibold px-4 my-1">{title}</h3>
      <table className="w-full table-fixed">
        <tbody>
          <tr>
            <td className={tdClass}><span className={spanClass}>작가: </span>{author}</td>
            <td className={tdClass}>
              <span className={spanClass}>가격: </span>
              {price != null ? `${price}원` : "가격 미정"}
            </td>
            <td className={tdClass}>
              <span className={spanClass}>상태: </span>{available ? "구매 가능" : "구매 불가능"}
            </td>
          </tr>
        </tbody>
      </table>
    </Link>
  );
}

export default BookCard;