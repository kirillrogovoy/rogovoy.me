export function GetGood() {
  const practicePerDay = 4
  const totalHours = 10000
  const totalDays = Math.ceil(totalHours / practicePerDay)
  const totalYears = Math.ceil(totalDays / 365)
  const daysArray = Array.from(Array(totalDays).keys())
  return (
    <div className="">
      <p>
        {`It's`} simple, and it just takes ~{totalYears} years of daily practice.
      </p>
      <p>
        {daysArray.map((day) => (
          <span key={day} className="flex">
            Day {day + 1}: {practicePerDay} hours of practice
          </span>
        ))}
      </p>

      <p>Done! Now you are good. 🎉</p>
    </div>
  )
}
