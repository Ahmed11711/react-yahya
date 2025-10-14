import TableComponent from "../components/TableComponent";

export default function UsersPage() {
  const headers = [
    { key: "id", label: "ID" },
    { key: "name", label: "Name" },
    { key: "avatar", label: "Avatar", type: "image" },
    { key: "status", label: "Status", type: "status" },
    { key: "active", label: "Active", type: "boolean" },
  ];

  const data = [
    {
      id: 1,
      name: "Ahmed Samir",
      avatar: "https://masterpiecer-images.s3.yandex.net/76a157d888a311eea7306ac6a1596643:upscaled",
      status: "approved",
      active: true,
    },
    {
      id: 2,
      name: "Omar Khaled",
      avatar: "https://www.junckers.co.uk/admin/public/getimage.ashx?Crop=0&Image=/Files/Images/iStock-471346152_web.jpg&Format=jpg&Width=5120&Height=5120&Quality=75",
      status: "pending",
      active: false,
    },
  ];

  const handleEdit = (row) => {
    alert(`Edit user: ${row.name}`);
  };

  const handleDelete = (row) => {
    if (confirm(`Delete user: ${row.name}?`)) {
      alert("Deleted!");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Users</h1>
      <TableComponent
        headers={headers}
        data={data}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}
