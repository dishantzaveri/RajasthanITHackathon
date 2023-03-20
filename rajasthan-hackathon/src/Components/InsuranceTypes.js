import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/bundle'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper'
import InsuranceCard from './InsuranceCard'

const TasksArray = [
  {
    id: 0,
    image:
      'https://www.kindpng.com/picc/m/217-2178735_blue-insurance-icon-png-transparent-png.png',
    taskName: 'Jurisdiction Insurance',
    btnTxt: 'Apply Now',
  },
  {
    id: 1,
    image:
      'https://www.nicepng.com/png/detail/208-2081015_free-icons-png-life-insurance-icon-png.png',
    taskName: 'Life Insurance',
    btnTxt: 'Apply Now',
  },
  {
    id: 2,
    image:
      'https://i.pinimg.com/originals/dd/ab/65/ddab65c29aeaedb3847a9201f352e072.jpg',
    taskName: 'Health Insurance',
    btnTxt: 'Apply Now',
  },
  {
    id: 3,
    image:
      'https://c8.alamy.com/zooms/9/a81bb1d874544fbab04345639a548904/p8hkxg.jpg',
    taskName: 'Housing Insurance',
    btnTxt: 'Apply Now',
  },
  {
    id: 4,
    image:
      'https://www.pngkit.com/png/detail/208-2081271_car-insurance-car-insurance-icon-blue.png',
    taskName: 'Auto Insurance',
    btnTxt: 'Apply Now',
  },
]

function Tasks() {
  return (
    <>
     <div sx={{ alignItems: 'left' , marginInline: '15%'}}>
      {/* <h4>Daily Tasks</h4> */}
      <h4></h4>
      <Swiper
        slidesPerView={1}
        breakpoints={{
          650: {
            slidesPerView: 1,
          },
          850: {
            slidesPerView: 2,
          },
          950: {
            slidesPerView: 3,
          },
        }}
        modules={[Autoplay]}
        autoplay={{ delay: 2000 }}
        loop={true}
        spaceBetween={10}
      >
        {TasksArray.map((task) => {
          return (
            <div sx={{width: '400px'}}>
            <SwiperSlide key={task.id} sx={{marginInline: "15%"}}>
              <InsuranceCard
                taskName={task.taskName}
                image={task.image}
                btnTxt={task.btnTxt}
              />
            </SwiperSlide>
            </div>
          )
        })}
      </Swiper>
       </div>
    </>
  )
}

export default Tasks
