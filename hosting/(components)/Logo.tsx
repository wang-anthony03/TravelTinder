import logo from './logo.svg'

export default function Logo() {
  return (
    <div className="flex flex-col w-[44%] max-md:ml-0 max-md:w-full">
      <img src={logo.src} />
    </div>
  );
}
