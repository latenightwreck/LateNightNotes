import { Bars3Icon } from '@heroicons/react/24/outline';

export default function NavBar() {
  return (
    <div className=' bg-slate-200 fixed flex top-0 justify-between w-screen h-10 items-center'>
      <div className='flex justify-start text-cyan-800'>
        <Bars3Icon className='stroke-cyan-800 w-6 h-6 mx-3' />
        <div>Latenight Notes</div>
      </div>
      <i>b</i>
    </div>
  );
}
