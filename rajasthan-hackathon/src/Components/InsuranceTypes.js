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
      'https://media.istockphoto.com/vectors/wifi-icon-vector-id1261027671?k=20&m=1261027671&s=612x612&w=0&h=qf-Jf_VNhy3Wnilf8QAcE0Q9q7rA8CcCp96XJ5nbHME=',
    taskName: 'How to connect to WiFi?',  
    btnTxt: 'Learn Now',
  },
  {
    id: 1,
    image: 'https://static.thenounproject.com/png/879820-200.png',
    taskName: 'How toggle between airplane mode?',
    btnTxt: 'Learn Now',
  },
  {
    id: 2,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOrEFabfHJvMm_K4ATHeRUcy_FVe0dfzkxZbEFyTXAmEAEa5pfBcMmWoeb0cUngNW6kZw&usqp=CAU',
    taskName: 'How to connect devices with Bluetooth?',
    btnTxt: 'Learn Now',
  },
  {
    id: 3,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjsisauNUF_UGXBzoZf1Y3KizSnwmgg0sQqA&usqp=CAU',
    taskName: 'How to share photos using blutooth?',
    btnTxt: 'Learn Now',
  },
  {
    id: 4,
    image:
      'https://www.howtogeek.com/wp-content/uploads/2020/09/tap-for-flashlight-hero.png?height=200p&trim=2,2,2,2',
    taskName: 'How to turn on flashlight?',
    btnTxt: 'Learn Now',
  },
]

function Tasks() {
  return (
    <>
     <div sx={{ alignItems: 'left' , marginInline: '15%'}}>
      <h4>Daily Tasks</h4>
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
            <div sx={{maxWidth: '400px'}}>
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
