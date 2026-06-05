export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-100 to-slate-200 p-6 pb-28">
      <h1 className="text-3xl font-bold mb-6">
        Print Management System
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="rounded-3xl bg-white/80 backdrop-blur p-5 shadow-lg">
          <p className="text-gray-500">Total Orders</p>
          <h2 className="text-3xl font-bold">125</h2>
        </div>

        <div className="rounded-3xl bg-white/80 backdrop-blur p-5 shadow-lg">
          <p className="text-gray-500">Pending</p>
          <h2 className="text-3xl font-bold text-red-500">18</h2>
        </div>

        <div className="rounded-3xl bg-white/80 backdrop-blur p-5 shadow-lg">
          <p className="text-gray-500">Production</p>
          <h2 className="text-3xl font-bold text-orange-500">34</h2>
        </div>

        <div className="rounded-3xl bg-white/80 backdrop-blur p-5 shadow-lg">
          <p className="text-gray-500">Completed</p>
          <h2 className="text-3xl font-bold text-green-500">107</h2>
        </div>
      </div>

      <div className="bg-white rounded-3xl shadow-lg p-5">
        <h2 className="text-xl font-semibold mb-4">
          Recent Orders
        </h2>

        <table className="w-full text-sm">
          <thead>
            <tr>
              <th>OD No</th>
              <th>Party</th>
              <th>City</th>
              <th>Product</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>1001</td>
              <td>ABC Interior</td>
              <td>Rajkot</td>
              <td>Wallpaper</td>
              <td>Completed</td>
            </tr>

            <tr>
              <td>1002</td>
              <td>Modern Decor</td>
              <td>Surat</td>
              <td>Blind</td>
              <td>Production</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="fixed bottom-5 left-1/2 -translate-x-1/2 bg-white shadow-2xl rounded-full px-8 py-4 flex gap-8">
        <button>🏠</button>
        <button>📋</button>
        <button>🖨️</button>
        <button>📦</button>
        <button>🚚</button>
        <button>📊</button>
      </div>
    </div>
  );
}