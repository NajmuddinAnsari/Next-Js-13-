'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
export default function Header() {
    const pathname=usePathname();
  return (
      <div>
          <ul className='flex justify-around  p-3 text-xl bold  '>
              <li className={`${pathname=='/'?'text-red-500':''}`}>
                  <Link href={'/'}>Home</Link>
              </li>
              <li className={`${pathname=='/posts'?'text-red-500':''}`}>
                  <Link href={'/posts'}>Posts</Link>
              </li>
              <li>{pathname}</li>
          </ul>
    </div>
  )
}
