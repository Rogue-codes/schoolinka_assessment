export default function Footer() {
  const date = new Date();
  return (
    <div className="fixed hidden bg-[#3F5BF6] w-full text-xs lg:text-md left-0 bottom-0 lg:flex justify-between items-center px-4 lg:px-12 py-1 text-white">
      <p>Rogue-codes</p>

      <p>(C){date.getFullYear()}</p>

      <a href="https://github.com/Rogue-codes">Github</a>
    </div>
  );
}
