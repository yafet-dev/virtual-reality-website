import { testimonials } from "../constants";

function Testimonials() {
  return (
    <div className="mt-20 tracking-wide">
      <h2 className="text-3xl text-center sm:text-5xl lg:text-6xl my-10 lg:my-20">
        What people are saying
      </h2>

      <div className="flex flex-wrap justify-center ">
        {testimonials.map((testimonial, index) => {
          return (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
              <div className="bg-neutral-900 rounded-md p-6 text-md border border-neutral-800 font-thin">
                <p>{testimonial.text}</p>
                <div className="flex mt-8 items-start">
                  <img
                    className="h-12 w-12 mr-6 rounded-full border border-neutral-300"
                    src={testimonial.image}
                    alt={testimonial.user}
                  />
                  <div>
                    <h6 className="font-normal text-neutral-200">
                      {testimonial.user}
                    </h6>
                    <span className="text-sm font-normal italic text-neutral-600">
                      {testimonial.company}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Testimonials;
