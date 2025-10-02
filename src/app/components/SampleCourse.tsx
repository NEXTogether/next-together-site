// SampleCourse.tsx
interface SampleCourseProps {
  name: string;
  abbreviation: string;
  description: string;
  status: string;
  startingDate: string;
  lessonsDone: number;
  totalLessons: number;
  totalHours: number;
  remainingHours: number;
  startColor: string;
  endColor: string;
}

export default function SampleCourse({
  name,
  abbreviation,
  description,
  status,
  startingDate,
  lessonsDone,
  totalLessons,
  totalHours,
  remainingHours,
  startColor,
  endColor,
}: SampleCourseProps) {
  const progressPercentage = Math.round((lessonsDone / totalLessons) * 100);
  const isUpcoming = status === "Starting";
  const statusText = isUpcoming ? "Upcoming" : `${progressPercentage}%`;
  const statusBg = isUpcoming
    ? "bg-[#344156] text-[#b0c0c8]"
    : "bg-[#2d456a] text-[#6db7fe]";
  const bottomInfo = isUpcoming
    ? `${totalHours} total hours`
    : `${remainingHours} hours to go`;
  const buttonText = isUpcoming ? "Preview" : "Continue";
  const buttonBg = isUpcoming ? "bg-[#475569]" : "bg-[#2562ea]";

  return (
    <div className="bg-linear-to-br from-[#1e283a] to-[#314054] rounded-xl w-90 p-6 hover:-translate-y-1 hover:shadow-xl transition-all ease-linear duration-100">
      <div className="flex flex-row items-center justify-between">
        <div
          className="aspect-square rounded-lg h-12 bg-linear-to-r text-2xl flex font-bold items-center justify-items-center"
          style={{
            background: `linear-gradient(90deg, ${startColor}, ${endColor})`,
          }}
        >
          <p className="mx-auto">{abbreviation}</p>
        </div>
        <div className={`rounded-md px-3 py-1 ${statusBg}`}>
          <h1>{statusText}</h1>
        </div>
      </div>
      <h1 className="mt-4">{name}</h1>
      <h1 className="text-[#7291ae] truncate">{description}</h1>
      <div className="mt-4 w-full text-[#7291ae]">
        <div className="flex flex-row justify-between">
          <p>{status}</p>
          <p className="text-white">
            {isUpcoming
              ? startingDate
              : `${lessonsDone}/${totalLessons} modules`}
          </p>
        </div>
        <div className="w-full bg-[#475569] rounded-full h-2.5">
          <div
            className="bg-linear-to-r from-[#3e7ff5] to-[#845df4] h-2.5 rounded-full"
            style={{ width: `${isUpcoming ? 0 : progressPercentage}%` }}
          ></div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-items-center justify-between text-[#7291ae] mt-4">
        <p>{bottomInfo}</p>
        <p className={`rounded-md px-2 py-1 text-white ${buttonBg}`}>
          {buttonText}
        </p>
      </div>
    </div>
  );
}
