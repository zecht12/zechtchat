import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-full bg-slate-100 flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Image src=".../public/assets/logo.png" alt="logo" width={100%} />
      </div>
    </div> 
  )
}
