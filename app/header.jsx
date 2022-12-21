import Link from 'next/link'

export default function Header() {
  return (
      <div>
          <ul className='flex justify-around bg-slate-400 p-3 text-xl bold text-white underline'>
              <li>
                  <Link href={'/'}>Home</Link>
              </li>
              <li>
                  <Link href={'/posts'}>Posts</Link>
              </li>
          </ul>
    </div>
  )
}
