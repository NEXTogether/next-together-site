// UsersPreview.tsx
interface Employee {
  companyRole: string;
  progress: number;
  startColor: string;
  endColor: string;
}

interface UsersPreviewProps {
  employees: Record<string, Employee>;
}

export default function UsersPreview({ employees }: UsersPreviewProps) {
  return (
    <div className="bg-[#1e293b] rounded-xl min-h-20 w-full p-8">
      <h1 className="relative text-xl xl:text-2xl text-white w-fit mb-6">
        Employee Progress
      </h1>
      <div className="flex flex-col gap-y-6">
        {Object.entries(employees).map(([name, employee]) => (
          <div
            key={name}
            className="flex flex-row items-center gap-5 text-white justify-between p-5 rounded-xl h-fit bg-[#334155] hover:-translate-y-1 hover:shadow-xl transition-all ease-linear duration-100"
          >
            <div
              className="rounded-full max-h-full min-w-12 aspect-square"
              style={{
                background: `linear-gradient(90deg, ${employee.startColor}, ${employee.endColor})`,
              }}
            ></div>
            <div className="truncate text-sm md:text-md lg:text-xl text-left w-full">
              <p className="truncate">{name}</p>
              <p className="truncate text-[#7b97b1]">{employee.companyRole}</p>
            </div>
            <div className="text-right w-1/1 lg:w-1/3">
              <p>{employee.progress}%</p>
              <div className="w-full bg-[#475569] rounded-full h-2.5">
                <div
                  className="h-2.5 rounded-full"
                  style={{
                    width: `${employee.progress}%`,
                    background: `linear-gradient(90deg, ${employee.startColor}, ${employee.endColor})`,
                  }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
