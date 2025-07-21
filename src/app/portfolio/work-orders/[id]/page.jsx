

export default function WorkOrder({ params }) {
  console.log(params.id);
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <h1 className="text-4xl font-bold">Work Order {params.id}</h1>
    </div>
  );
}