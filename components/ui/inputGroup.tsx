import React from "react";

export function InputGroup({
  label,
  type = "text",
  placeholder,
  cols,
  ...rest
}: {
  label: string;
  type?: string;
  placeholder?: string;
  cols?: boolean;
} & React.ComponentPropsWithoutRef<"input">) {
  return (
    <div className={`flex flex-col gap-1 w-full ${cols ? "col-span-2" : ""}`}>
      <label className="label" htmlFor={rest.name}>
        {label}
      </label>
      <input
        type={type}
        className="input"
        id={rest.name}
        placeholder={placeholder}
        {...rest}
      />
    </div>
  );
}

export function TextareaGroup({
  label,
  placeholder,
  fullWidth = false,
  ...rest
}: {
  label: string;
  placeholder?: string;
  fullWidth?: boolean;
} & React.ComponentPropsWithoutRef<"textarea">) {
  return (
    <div
      className={`flex flex-col gap-1 w-full ${fullWidth ? "col-span-2" : ""}`}
    >
      <label className="label" htmlFor={rest.name}>
        {label}
      </label>
      <textarea
        rows={4}
        placeholder={placeholder}
        className="input resize-none"
        {...rest}
      />
    </div>
  );
}
