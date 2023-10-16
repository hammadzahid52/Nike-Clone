import { star } from "../assets/icons"
import { reviews } from "../Constants/index.js"
function CustomerReviews() {
  return (
    <section className="max-container">
      <div>
        <h3 className="text-4xl font-palanquin font-bold text-center">What Our <span className="text-coral-red">Customers</span> Say ?</h3>
        <p className="text-center text-xl mt-4 info-text max-w-lg m-auto">
        Hear genuine stories from our satisfied customers <br /> about their exceptional experiences with us.
        </p>
      </div>

      <div className="flex flex-1 justify-evenly items-center mt-24 gap-14 max-lg:flex-col sm:ml-28">
        {
          reviews.map((review)=>(
            <div className='flex justify-center items-center flex-col'>
            <img
              src={review.imgURL}
              alt='customer'
              className='rounded-full object-cover w-[120px] h-[120px]'
            />
            <p className='mt-6 max-w-sm text-center info-text'>{review.feedback}</p>
            <div className='mt-3 flex justify-center items-center gap-2.5'>
              <img
                src={star}
                width={24}
                height={24}
                alt='rating star'
                className='object-contain m-0'
              />
              <p className='text-xl font-montserrat text-slate-gray'>({review.rating})</p>
            </div>
            <h3 className='mt-1 font-palanquin text-3xl text-center font-bold'>
              {review.customerName}
            </h3>
          </div>
            
          ))
        }
        <div></div>
      </div>
    </section>
  )
}

export default CustomerReviews