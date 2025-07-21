'use client';

import DataTableComponent from "@/components/DataTableComponent";

export default function WorkOrders() {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <h1 className="text-4xl font-bold">Work Orders</h1>
      <DataTableComponent />
    </div>
  );
}