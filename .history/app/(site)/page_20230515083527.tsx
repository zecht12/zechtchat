import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-full bg-slate-100 flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Link href={}>
          <Image src="/assets/logo.png" alt="logo" width={100} height={100} className="rounded-full w-[70px] h-[70px] cursor-pointer hover:scale-110 " />
        </Link>
      </div>
    </div> 
  )
}
