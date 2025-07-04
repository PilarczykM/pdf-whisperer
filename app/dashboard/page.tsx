import Documents from "@/components/Documents";

export const dynamic = "force-dynamic";

function Dashboard() {
  return (
    <div className="mx-auto h-full max-w-7xl">
      <h1 className="bg-gray-100 p-5 text-3xl font-extralight text-indigo-600">
        My Documents
      </h1>

      <Documents />
    </div>
  );
}

export default Dashboard;
