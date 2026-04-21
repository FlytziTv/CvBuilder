export function InputGroup({
  label,
  value,
  type = "text",
  placeholder,
  cols,
}: {
  label: string;
  value?: string;
  type?: string;
  placeholder?: string;
  cols?: boolean;
}) {
  return (
    <div className={`flex flex-col gap-1 w-full ${cols ? "col-span-2" : ""}`}>
      <label className="label" htmlFor={value}>
        {label}
      </label>
      <input
        type={type}
        className="input"
        id={value}
        placeholder={placeholder}
      />
    </div>
  );
}

export function TextareaGroup({
  label,
  value,
  placeholder,
  cols,
}: {
  label: string;
  value?: string;
  type?: string;
  placeholder?: string;
  cols?: boolean;
}) {
  return (
    <div className={`flex flex-col gap-1 w-full ${cols ? "col-span-2" : ""}`}>
      <label className="label" htmlFor={value}>
        {label}
      </label>
      <textarea
        rows={4}
        value={value}
        placeholder={placeholder}
        className="input resize-none"
      />
    </div>
  );
}
