
import Image from 'next/image'
import SignIn from './SignIn'

export default function Auth() {
    return (
        <div className='relative bg-black w-full h-full lg:bg-opacity-50'>
            <Image src={"/assets/landing/1.jpeg"} fill className="bg-no-repeat bg-center bg-fixed bg-cover" alt="background" />
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-t from-transparent to-stone-950"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-stone-950"></div>
            </div>
            <div className="-top-6 absolute px-10">
                <Image src={"/assets/landing/logo.png"} alt="Netflix" height={100} width={200} />
            </div>
            <section className='absolute flex justify-center w-full mt-20'>
                <SignIn />
            </section>
        </div>
    )
}
