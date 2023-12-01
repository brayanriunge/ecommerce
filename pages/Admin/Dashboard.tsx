import { useForm } from "react-hooks-useform";

type FormValues = {
  name: string;
  description: string;
  category: string;
  quantity: number;
  price: number;
};

export default function Dashboard() {
  return (
    <div className="flex min-h-full bg-blue-400 gap-16 py-10 px-40 mb-0 md:h-full md:pb-20">
      <div className="bg-slate-50  mx-auto p-6 min-w-md m-16 w-full rounded-xl h-3/4 mb-20 mt-20 ">
        <div className="m-auto px-4 py-4">
          <div>
            <p className="font-bold text-2xl py-4 text-gray-800">
              Add Products:
            </p>
          </div>
          <form className="flex items-center justify-between gap-8 ">
            <div className="flex flex-col items-center gap-5 p-5 ml-4">
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
                  type="price"
                  placeholder="price"
                  required
                  className="rounded-xl px-6 py-5 focus:outline-none border-none"
                />
              </div>
              <div className="flex border border-gray-400 relative rounded-md">
                <input
                  type="category"
                  placeholder="category"
                  required
                  className="rounded-md px-6 py-5 focus:outline-none border-none"
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
            <div className="flex flex-col items-center p-5 mr-4">
              <div className="flex justify-content-center border border-gray-400 relative rounded-md p-10">
                <input
                  type="image"
                  placeholder="picture"
                  required
                  className="rounded-xl px-10 py-5 focus:outline-none w-5/6 border-dotted"
                />
              </div>
              <button
                className="rounded-xl px-6 py-2 bg-orange-400 mt-10 "
                type="submit"
              >
                <p className="font-bold hover:text-white">Submit</p>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
