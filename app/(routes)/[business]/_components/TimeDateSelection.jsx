import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import React from 'react'

function TimeDateSelection({date,handleDateChange,timeSlots,setSelectedTime,enableTimeSlot,selectedTime,prevBooking}) {


  /**
   * Used to check timeslot whether its already booked or not
   * @param {*} time 
   * @returns Boolean
   */
  const checkTimeSlot=(time)=>{
    return (prevBooking.filter(item=>item.selectedTime==time)).length>0;
  }
  return (
    <div className='md:col-span-2 md:flex'>
    <div className='flex flex-col'>
        <h2 className='font-bold text-lg'>Select Date & Time</h2>
        <Calendar
            mode="single"
            selected={date}
            onSelect={(d)=>handleDateChange(d)}
            className='rounded-md border mt-5'
           disabled={(date)=>date<=new Date()}
        />
    </div>
    <div className='flex flex-col w-full overflow-auto gap-4 p-5'
    style={{maxHeight:'400px'}}
    >
        {timeSlots?.map((time,index)=>(
            <Button
            disabled={!enableTimeSlot||checkTimeSlot(time)}
            onClick={()=>setSelectedTime(time)}
            className={`border-red-300
             text-red-600
             ${time==selectedTime&&'bg-red-600 text-white'}
             `} variant="outline">{time}</Button>
        ))}
    </div>
</div>
  )
}

export default TimeDateSelection