import { useRouter } from "next/router";
import React from "react";

export default function KebabMenuView(props: any) {
  const router = useRouter();
  const onEdit = () => {
    router.push({
      pathname: "/payment/bank/Edit",
      query: { id: props.id },
    });
  };

  const onDelete = () => {
    router.push({
      pathname: "/hotels/facility/[id]",
      query: { id: props.id },
    });
  };

  return (
    <div className="absolute top-10 border-black text-black">
      <ul className="bg-white z-40 absolute right-3  border-black border-solid border-2 rounded-md text-center">
        <li>
          <button onClick={() => onEdit()} className="p-3 hover:bg-black hover:text-white w-full">
            Edit
          </button>
        </li>
        <li>
          <button className="p-3 hover:bg-black hover:text-white w-full" onClick={() => onDelete()}>
            Delete
          </button>
        </li>
      </ul>
    </div>
  );
}
