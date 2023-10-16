import Button from "./Button"

function Subcribe() {
  return (
    <section className="flex gap-10 justify-between max-container items-center max-lg:flex-col">
      <h3 className='text-4xl font-palanquin font-bold leading-[68px]'>
      Sign Up from <br /> 
      <span className='text-coral-red'>Updates</span> & 
      <br />
       Newsletter
      </h3>

      <div className="p-3 sm:border sm:border-slate-gray rounded-full lg:max-w-[40%] w-full flex items-center">
      <input type="mail" placeholder='Subcribe@nike.com' className="input"/>
      <div>
        <Button label="Sign Up"/>
      </div>
      </div>
    </section>
  )
}

export default Subcribe