import { useForm } from "react-hooks-useform";

type FormValues = {
  name: string;
  description: string;
  category: string;
  quantity: number;
};

export default function Dashboard() {
  return (
    <div className="flex min-h-full bg-blue-400 gap-16 py-10 mb-0 md:h-full md:pb-20">
      <form className="flex items-center justify-between gap-8">
        <div className="flex flex-col items-center gap-5">
          <div className="flex border border-gray-400 relative rounded-md">
            <input
              type="name"
              placeholder="name"
              required
              className="rounded-xl px-6 py-5 focus:outline-none border-none"
            />
          </div>
          <div className="flex border border-gray-400 relative rounded-md">
            <input
              type="category"
              placeholder="category"
              required
              className="rounded-xl px-6 py-5 focus:outline-none border-none"
            />
          </div>
          <div className="flex border border-gray-400 relative rounded-md">
            <input
              type="description"
              placeholder="Description"
              required
              className="rounded-xl px-6 py-5 focus:outline-none border-none"
            />
          </div>
          <div className="flex border border-gray-400 relative rounded-md">
            <input
              type="quantity"
              placeholder="quantity"
              required
              className="rounded-xl px-6 py-5 focus:outline-none border-none"
            />
          </div>
        </div>
        {/* image */}
        <div></div>
      </form>
    </div>
  );
}
