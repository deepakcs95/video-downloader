export default function InputField({ value, onChange, placeholder }) {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      className="bg-transparent p-2 outline-none w-full"
      placeholder={placeholder}
    />
  );
}
