import React from 'react'

const testimonials = () => {
    const testimonials = [{
        testimonial : "I’ve done a shot in five minutes, which normally would have taken me five hours. You're not going through it frame by frame, you're just tapping a couple of things and it's done.",
        person : "Harry",
        occupation : "SEO Expert",
        color : "#90FCBD",
    }, 
    {
        testimonial : "I was completely blown away by the ease of use and quality of Runway. I can’t stress this enough, I am very eager to continue to work with Runway.",
        person : "Vishnuu",
        occupation : "web developer",
        color : "#FF8674",
    },{
        testimonial : "Oh my god! this is a lifeSaver. It saved our hours",
        person : "Ali",
        occupation : "web developer",
        color : "#00FDFD",
    },
]

  return (
    <>
    <div className='testimonials_page'>
        {testimonials.length > 0 && testimonials.map((ele, i)=>{
            return <div className="testimonial_card" key={i}
            // style={{
            //     "::after" : {

            //         "background" : `${ele.color}`,
            //     }
            // }}
            >
                {/* <p className="quotation_mark"> */}
                <svg className="quotation_mark" width="36" height="27" viewBox="0 0 36 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.8904 8.46818V0H14.5479C5.54795 0 0 5.64545 0 16.0773V27H9.86301V16.4455C9.86301 11.1682 11.9589 8.46818 15.1644 8.46818H16.8904ZM36 8.46818V0H33.6575C24.7808 0 19.2329 5.64545 19.2329 16.0773V27H28.9726V16.4455C28.9726 11.1682 31.0685 8.46818 34.274 8.46818H36Z" fill="black"></path></svg>
                {/* </p> */}
                <p className='testimonial'>{ele.testimonial}</p>
            <span>
                <p>{ele.person}</p>
                <p>{ele.occupation}</p>
            </span>
            </div>
        })}
      
    </div>
    </>
  )
}

export default testimonials
