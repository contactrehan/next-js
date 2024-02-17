import Link from "next/link";
export default function UserCard(params:{name:string,email:string,username:string,id:number}) {
  return (
    <div className="max-w-md mx-auto mt-8 bg-white rounded-lg shadow-md overflow-hidden">
      <div className="px-4 py-5 sm:px-6">
        <h2 className="text-lg font-semibold text-gray-800">User Profile</h2>
      </div>
      <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
        <dl className="sm:divide-y sm:divide-gray-200">
          <div className="flex justify-between py-2 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:py-3">
            <dt className="text-sm font-medium text-gray-500 m-2">Name</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-1">{params.name}</dd>
          </div>
          <div className="flex justify-between py-2 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:py-3">
            <dt className="text-sm font-medium text-gray-500 m-2">Email</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-1">{params.email}</dd>
          </div>
          <div className="flex justify-between py-2 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:py-3">
            <dt className="text-sm font-medium text-gray-500 m-2">Username</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-1 m-2">{params.username}</dd>
          </div>
        </dl>
      </div>
      <div className="px-4 py-3 bg-gray-50 sm:px-6">
        <Link href={`/users/${params.id}`} className="text-sm font-medium text-blue-600 hover:text-blue-800">
          Show More
        </Link>
      </div>
    </div>
  );
};
  
