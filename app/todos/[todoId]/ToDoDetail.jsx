'use client'
import { usePathname } from 'next/navigation';
export default function ToDoDetail() {
    const pathname = usePathname();
  return (
      <div>ToDoDetail {pathname}{ pathname.slice(7,8)}</div>
  )
}
