export default function Home() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">
        Print Management System
      </h1>

      <table className="border-collapse border">
        <thead>
          <tr>
            <th className="border p-2">OD No</th>
            <th className="border p-2">Party Name</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">1001</td>
            <td className="border p-2">Intima Decor</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}