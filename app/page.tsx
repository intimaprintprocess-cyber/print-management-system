export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">
        Print Management Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-5 rounded-xl shadow">
          <h2 className="text-gray-500">Total Orders</h2>
          <p className="text-3xl font-bold">125</p>
        </div>

        <div className="bg-white p-5 rounded-xl shadow">
          <h2 className="text-gray-500">Pending</h2>
          <p className="text-3xl font-bold text-red-500">18</p>
        </div>

        <div className="bg-white p-5 rounded-xl shadow">
          <h2 className="text-gray-500">Completed</h2>
          <p className="text-3xl font-bold text-green-500">107</p>
        </div>

        <div className="bg-white p-5 rounded-xl shadow">
          <h2 className="text-gray-500">Today's Orders</h2>
          <p className="text-3xl font-bold text-blue-500">12</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow p-5">
        <h2 className="text-xl font-semibold mb-4">
          Recent Orders
        </h2>

        <table className="w-full border">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 border">Order No</th>
              <th className="p-2 border">Party Name</th>
              <th className="p-2 border">City</th>
              <th className="p-2 border">Product</th>
              <th className="p-2 border">Qty</th>
              <th className="p-2 border">Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="p-2 border">1001</td>
              <td className="p-2 border">ABC Interior</td>
              <td className="p-2 border">Rajkot</td>
              <td className="p-2 border">Wallpaper</td>
              <td className="p-2 border">50</td>
              <td className="p-2 border text-green-600">
                Completed
              </td>
            </tr>

            <tr>
              <td className="p-2 border">1002</td>
              <td className="p-2 border">Modern Decor</td>
              <td className="p-2 border">Surat</td>
              <td className="p-2 border">Blind</td>
              <td className="p-2 border">25</td>
              <td className="p-2 border text-red-600">
                Pending
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}