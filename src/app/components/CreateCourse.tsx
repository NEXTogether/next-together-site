export default function CreateCourse() {
  return (
    <div className="w-full bg-[#1e293b] text-white rounded-xl p-5 space-y-5">
      <h1 className="text-left">Quick Actions</h1>
      <div className="flex flex-row w-full items-center justify-center space-x-2">
        <button className="w-1/2 px-1 py-2 rounded-md bg-gradient-to-r from-[#2361e7] to-[#7939e9]">
          Create New Course
        </button>
        <button className="w-1/2 px-1 py-2 rounded-md bg-[#334155]">
          Assign Training
        </button>
      </div>
    </div>
  );
}
