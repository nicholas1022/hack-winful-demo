export function PageWrapper(props: { children?: JSX.Element | JSX.Element[] }) {
  const { children } = props;
  return (
    <main className={"bg-slate-50 w-full min-h-screen h-full"}>
      <nav className='flex items-center justify-between flex-wrap bg-blue-500 p-6'>
        <div className='flex items-center flex-shrink-0 text-white mr-6'>
          <span className='font-semibold text-xl tracking-tight'>
            Real-time Inventory
          </span>
        </div>
        <div className='block lg:hidden'>
          <button className='flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white'>
            <svg
              className='fill-current h-3 w-3'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <title>Menu</title>
              <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
            </svg>
          </button>
        </div>
        <div className='w-full block flex-grow lg:flex lg:items-center lg:w-auto gap-2'>
          <div className='text-sm lg:flex-grow'>
            <a
              href='create-item'
              className='block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white mr-6'
            >
              Create Item
            </a>
            <a
              href='item-order'
              className='block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white mr-6'
            >
              Item Order
            </a>
            <a
              href='manage-inventory'
              className='block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white mr-6'
            >
              Manage Inventory
            </a>
            <a
              href='order'
              className='block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white mr-6'
            >
              Order List
            </a>
          </div>
        </div>
      </nav>
      <div className={"container py-10"}>{children}</div>/
    </main>
  );
}
