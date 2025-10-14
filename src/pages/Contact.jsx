import TableComponent from "../components/TableComponent";

export default function ContactPage() {
  const headers = [
    { key: "id", label: "ID" },
    { key: "name", label: "Name" },
    { key: "email", label: "Email" },
    { key: "status", label: "Status", type: "status" },
  ];

  const data = [
    {
      id: 1,
      name: "Mohamed Ali",
      email: "mohamed@example.com",
      status: "pending",
    },
    {
      id: 2,
      name: "Sara Ahmed",
      email: "sara@example.com",
      status: "approved",
    },
    {
      id: 3,
      name: "Ola Youssef",
      email: "ola@example.com",
      status: "rejected",
    },
  ];

  const handleEdit = (row) => {
    alert(`Edit contact: ${row.name}`);
  };

  const handleDelete = (row) => {
    if (confirm(`Delete contact: ${row.name}?`)) {
      alert("Deleted!");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4 text-blue-600">Contact List</h1>
      <TableComponent
        headers={headers}
        data={data}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}
