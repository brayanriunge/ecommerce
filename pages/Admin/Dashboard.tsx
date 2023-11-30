import { useForm } from "react-hooks-useform";

type FormValues = {
  name: string;
  description: string;
  quantity: number;
};

export default function Dashboard() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  return (
    <div>
      <form onSubmit={handleSubmit()}></form>
    </div>
  );
}
