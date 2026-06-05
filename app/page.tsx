export default function Home() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">
        Print Management System
      </h1>

      <div className="overflow-x-auto">
        <table className="border-collapse border min-w-full">
          <thead>
            <tr>
              <th className="border p-2">Date</th>
              <th className="border p-2">OD No</th>
              <th className="border p-2">Party Name</th>
              <th className="border p-2">City</th>
              <th className="border p-2">Product</th>
              <th className="border p-2">Media</th>
              <th className="border p-2">Width</th>
              <th className="border p-2">Height</th>
              <th className="border p-2">Qty</th>
              <th className="border p-2">SQ FT</th>
              <th className="border p-2">Status</th>
              <th className="border p-2">Designer</th>
              <th className="border p-2">Print Status</th>
              <th className="border p-2">Dispatch Status</th>
              <th className="border p-2">Remarks</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="border p-2">05-06-2026</td>
              <td className="border p-2">1001</td>
              <td className="border p-2">Intima Decor</td>
              <td className="border p-2">Rajkot</td>
              <td className="border p-2">Wallpaper</td>
              <td className="border p-2">Canvas</td>
              <td className="border p-2">120</td>
              <td className="border p-2">96</td>
              <td className="border p-2">2</td>
              <td className="border p-2">160</td>
              <td className="border p-2">Pending</td>
              <td className="border p-2">Rahul</td>
              <td className="border p-2">Not Started</td>
              <td className="border p-2">Pending</td>
              <td className="border p-2">Sample Order</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}