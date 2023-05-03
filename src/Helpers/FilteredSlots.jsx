
function FilteredSlots(slotsArray) {
    const currentTime = new Date();
  const availableSlots = slotsArray.filter((slot) => {
    const [startTime, endTime] = slot.split("-");
    const [startHour] = startTime.split("AM").join("").split("PM").join("").split(":");
    const [endHour] = endTime.split("AM").join("").split("PM").join("").split(":");
    const start = new Date(currentTime);
    start.setHours(parseInt(startHour) + (startTime.includes("PM") ? 12 : 0), 0, 0, 0);
    const end = new Date(currentTime);
    end.setHours(parseInt(endHour) + (endTime.includes("PM") ? 12 : 0), 0, 0, 0);
    return currentTime < end;
  }).filter((slot) => {
    const [startTime] = slot.split("-");
    const [startHour] = startTime.split("AM").join("").split("PM").join("").split(":");
    const start = new Date(currentTime);
    start.setHours(parseInt(startHour) + (startTime.includes("PM") ? 12 : 0), 0, 0, 0);
    return currentTime < start;
  });
      
  return availableSlots
}

export default FilteredSlots