import React from "react";
import Link from "next/link";
export default function CardButton({
  btn_text,
  btn_class,
  id,
}: {
  btn_text: string;
  btn_class: string;
  id?: number;
}) {
  return (
    <div>
      {id ? (
        <button className={`${btn_class} `}>
          <Link href={`/employees/${id}`}>{btn_text}</Link>
        </button>
      ) : (
        <button className={`${btn_class}`}>{btn_text}</button>
      )}
    </div>
  );
}
