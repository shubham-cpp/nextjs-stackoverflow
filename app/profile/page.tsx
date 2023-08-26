import { getServerSession } from "next-auth";
import { FunctionComponent, HTMLProps } from "react";
import { options } from "../api/auth/[...nextauth]/options";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type InputProps = HTMLProps<HTMLInputElement | HTMLTextAreaElement> & {
  label: string;
};
const Input: FunctionComponent<InputProps> = ({
  label,
  name,
  type = "text",
  value = "",
  disabled = true,
  ...props
}) => {
  return (
    <div className="mb-6">
      <label
        htmlFor={props?.id ?? name}
        className="mb-2 block text-sm font-medium text-zinc-800 dark:text-slate-100"
      >
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          {...props}
          type={type}
          id={props?.id ?? name}
          name={name}
          defaultValue={value}
          disabled={disabled}
          aria-readonly={disabled}
          readOnly={disabled}
          className={cn([
            "block w-full rounded-lg border border-zinc-300 bg-slate-100 p-2.5 text-sm text-zinc-900 focus:border-primary focus:ring-primary-foreground dark:border-zinc-700 dark:bg-zinc-700 dark:text-white dark:placeholder-zinc-400 dark:focus:border-primary-foreground dark:focus:ring-primary-foreground",
            disabled && "cursor-not-allowed",
          ])}
        />
      ) : (
        <input
          {...props}
          type={type}
          id={props?.id ?? name}
          name={name}
          defaultValue={value}
          disabled={disabled}
          aria-readonly={disabled}
          className={cn([
            "block w-full rounded-lg border border-zinc-300 bg-slate-100 p-2.5 text-sm text-zinc-900 focus:border-primary focus:ring-primary-foreground dark:border-zinc-700 dark:bg-zinc-700 dark:text-white dark:placeholder-zinc-400 dark:focus:border-primary-foreground dark:focus:ring-primary-foreground",
            disabled && "cursor-not-allowed",
          ])}
        />
      )}
    </div>
  );
};
const ProfilePage = async () => {
  const session = await getServerSession(options);
  if (!session) {
    return <div>This will never render since we&apos re not logged in</div>;
  }
  return (
    <>
      <form method="POST" className="mx-auto max-w-xl space-y-6 pt-20">
        <Input
          label="Email"
          name="email"
          type="email"
          disabled
          value={session?.user?.email ?? ""}
        />
        <Input
          label="Full Name"
          name="name"
          disabled={false}
          value={session?.user?.name ?? ""}
        />
        <Input
          label="Description"
          name="description"
          type="textarea"
          disabled={false}
          rows={3}
          cols={50}
        />
        <div className="mt-6 flex justify-end space-x-4">
          <Button>Update</Button>
          <Button variant="secondary" type="reset">
            Reset
          </Button>
        </div>
      </form>
    </>
  );
};
export default ProfilePage;
