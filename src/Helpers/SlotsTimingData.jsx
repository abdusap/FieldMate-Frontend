export const Slots=[
    { label: "04PM-05PM", value: "04PM-05PM" },
    { label: "05PM-06PM", value: "05PM-06PM" },
    { label: "06PM-07PM", value: "06PM-07PM" },
    { label: "07PM-08PM", value: "07PM-08PM" },
    { label: "08PM-09PM", value: "08PM-09PM" },
    { label: "09PM-10PM", value: "09PM-10PM" },
    { label: "10PM-11PM", value: "10PM-11PM" },
  ]
 
  export const slotsArray=[
     "04PM-05PM",
     "05PM-06PM",
     "06PM-07PM",
     "07PM-08PM",
     "08PM-09PM",
     "09PM-10PM",
     "10PM-11PM",
  ]




const currentTime = new Date();

const availableSlots = slotsArray.filter((slot) => {
  const [startTime, endTime] = slot.split("-");
  const [startHour, startMinute] = startTime.split("PM")[0].split(":");
  const [endHour, endMinute] = endTime.split("PM")[0].split(":");
  const start = new Date(currentTime);
  start.setHours(parseInt(startHour) + 12, parseInt(startMinute), 0, 0);
  const end = new Date(currentTime);
  end.setHours(parseInt(endHour) + 12, parseInt(endMinute), 0, 0);
  return currentTime < end;
});


