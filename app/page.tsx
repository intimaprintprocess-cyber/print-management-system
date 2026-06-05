export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">
        New Order Entry
      </h1>

      <div className="bg-white rounded-3xl shadow-lg p-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            className="border p-3 rounded-xl"
            placeholder="OD Number"
          />

          <input
            className="border p-3 rounded-xl"
            placeholder="Party Name"
          />

          <input
            className="border p-3 rounded-xl"
            placeholder="City"
          />

          <input
            className="border p-3 rounded-xl"
            placeholder="Product"
          />

          <input
            className="border p-3 rounded-xl"
            placeholder="Width"
          />

          <input
            className="border p-3 rounded-xl"
            placeholder="Height"
          />

          <input
            className="border p-3 rounded-xl"
            placeholder="Qty"
          />

          <input
            className="border p-3 rounded-xl"
            placeholder="SQ FT"
          />

          <select className="border p-3 rounded-xl">
            <option>Pending</option>
            <option>Production</option>
            <option>Packed</option>
            <option>Dispatched</option>
            <option>Delivered</option>
          </select>
        </div>

        <button className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-xl">
          Save Order
        </button>
      </div>
    </div>
  );
}