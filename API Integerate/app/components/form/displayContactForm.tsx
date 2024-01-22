import { ContactInfoType, contactInfo } from "@/types/componentTypes";

export default function DisplayContact(props: { contactData: contactInfo[] }) {
  return (
    <>
      <h1 className="text-3xl font-bold mb-4">Contact Lists</h1>

      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Phone</th>
            <th className="px-4 py-2">Message</th>
          </tr>
        </thead>
        <tbody>
          {props.contactData.map((contactData,id) => (
            <tr key={id} className="bg-gray-100">
              <td className="px-4 py-2">{contactData.name}</td>
              <td className="px-4 py-2">{contactData.email}</td>
              <td className="px-4 py-2">{contactData.phone}</td>
              <td className="px-4 py-2">{contactData.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
