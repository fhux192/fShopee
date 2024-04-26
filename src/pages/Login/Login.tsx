import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className='bg-red'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='grid justify-center grid:cols-1 lg:grid-cols-5 lg:py-12 py-8 lg:pr-10'>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form action='' className='p-[32px] h-[482px] w-full max-w-[400px] rounded bg-white shadow-md'>
              <div className='text-[20px]'>Đăng nhập</div>
              <div className='mt-7'>
                <input
                  type='email'
                  name='email'
                  placeholder='Email'
                  className='p-[12px] w-full outline-none border border-gray3 focus:border-gray1 rounded-sm focus:shadow-sm'
                />
              </div>
              <div className='mt-1 text-red min-h-[1rem] text-sm'></div>
              <div className='mt-2'>
                <input
                  type='password'
                  name='password'
                  placeholder='Password'
                  className='p-[12px]  w-full outline-none border border-gray3 focus:border-gray1 rounded-sm focus:shadow-sm'
                />
              </div>
              <div className='mt-1 text-red-600 min-h-[1rem] text-sm'></div>
              <button className='w-full h-[40px] rounded-sm mt-3 text-center py-[10px] px-0 ippercase bg-orange text-white text-[14px] hover:bg-red-600'>
                ĐĂNG NHẬP
              </button>
              <div className='flex gap-[120px]'>
                <div className=' mt-4 text-center'>
                  <Link to='/register' className='text-[14px] text-orange'>
                    Quên mật khẩu?
                  </Link>
                </div>
                <div className=' mt-4 text-center'>
                  <Link to='/register' className='text-[14px] text-orange'>
                    Đăng ký tài khoản
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
