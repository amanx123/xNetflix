import Image from 'next/image'
import logo from "../public/assets/landing/logo.png"
import background from "../public/assets/landing/1.jpeg"
import Link from 'next/link'
export default function Home() {

  return (
    <>
      {/* Header */}
      <div className=''>
        <Image src={background} className="relative bg-no-repeat bg-center bg-fixed bg-cover h-screen" alt="background" />
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-t from-transparent to-stone-950"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-stone-950"></div>
        </div>
        <nav className="-top-6 absolute flex flex-row items-center justify-between w-full px-10">
          <Image src={logo} alt="Netflix" height={100} width={200} />
          <div className='space-x-8'>
            <form className="bg-gray-400 inline-block" action=''>
              <select id="language" name="english">
                <option selected value="english">English</option>
                <option value="hindi">हिन्दी</option>
              </select>
            </form>
            <Link href={"/login"}>
              <button className="bg-red-600 text-white text-sm font-semibold rounded-md w-20 h-8">Sign In</button>
            </Link>
          </div>
        </nav>
        <section className="absolute top-36 left-32 h-40 -space-y-2">
          <h1 className='text-7xl font-extrabold text-white'>Unlimited movies, TV</h1>
          <br />
          <h1 className='text-7xl font-extrabold text-white'>shows and more</h1>
          <br />
          <h1 className='text-4xl font-extrabold text-white pb-4'>Watch anywhere. Cancel anytime.</h1>
          <br />
          <h1 className='text-2xl font-semibold text-white'>Ready to watch? Enter your email to create or restart your membership.
          </h1>
          {/* Register handler */}
          <span className='space-y-8 space-x-8'>
            <input type="email" className="text-white border border-green-400 p-4 w-72 rounded-md bg-inherit" placeholder='Email address' />
            <button className="relative text-white text-xl font-semibold bg-red-600 h-10 w-40 rounded-md" type="submit">Get Started
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="inline h-5 w-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </span>
        </section>
      </div >
    </>
  )
}
