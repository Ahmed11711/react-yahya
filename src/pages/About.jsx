import TableComponent from "../components/TableComponent";

export default function AboutPage() {
  const headers = [
    { key: "id", label: "ID" },
    { key: "team", label: "Team Member" },
    { key: "role", label: "Role" },
    { key: "photo", label: "Photo", type: "image" },
    { key: "active", label: "Active", type: "boolean" },
  ];

  const data = [
    {
      id: 1,
      team: "Ahmed Samir",
      role: "Founder & Developer",
      photo: "https://pbs.twimg.com/media/EN3c2ViWAAU3Q-6.jpg",
      active: true,
    },
    {
      id: 2,
      team: "Omar Khaled",
      role: "UI/UX Designer",
      photo: "https://miro.medium.com/v2/resize:fit:2400/1*FK05bsc_EKBWE1yDnbl8sw.jpeg",
      active: true,
    },
  ];

  const handleEdit = (row) => {
    alert(`Edit team member: ${row.team}`);
  };

  const handleDelete = (row) => {
    if (confirm(`Delete ${row.team}?`)) {
      alert("Deleted!");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4 text-blue-600">
        About Our Team
      </h1>
      <TableComponent
        headers={headers}
        data={data}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}
