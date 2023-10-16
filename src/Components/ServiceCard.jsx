import { services } from "../Constants"
function ServiceCard() {
  return (
    <section className="max-container flex justify-center flex-wrap gap-9">
        {services.map((service)=>(
            <div className="flex-1 w-full rounded-[20px] shadow-3xl px-10 py-16 sm:min-w-[350px]">
                <div className="w-11 h-11 flex justify-center items-center bg-coral-red rounded-full">
                    <img src={service.imgURL} alt="" height={24} width={24} />
                </div>
                <h3 className="mt-5 font-palanquin text-3xl leading-normal font-bold">
                    {service.label}
                </h3>
                <p className="mt-3 font-montserrat text-lg leading-normal text-slate-gray break-words">
                    {service.subtext}
                </p>
            </div>
        ))}
    </section>
  )
}

export default ServiceCard