import { Link } from 'react-router-dom'

export default function Register() {
  return (
    <div className='bg-red'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='grid justify-center  grid-cols-1 lg:grid-cols-5 lg:py-12 py-8 lg:pr-10'>
          <div className='h-[482px] content-center lg:col-span-2 lg:col-start-4'>
            <form action='' className='p-[32px] h-[428px] w-full max-w-[400px] rounded bg-white shadow-md'>
              <div className='text-[20px]'>Đăng ký</div>
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
              <div className='mt-1 text-red min-h-[1rem] text-sm'></div>
              <div className='mt-2'>
                <input
                  type='password'
                  name='confirmPassword'
                  placeholder='Confirm Password'
                  className='p-[12px]  w-full outline-none border border-gray3 focus:border-gray1 rounded-sm focus:shadow-sm'
                />
              </div>
              <div className='mt-1 text-red-600 min-h-[1rem] text-sm'></div>
              <button className='w-full h-[40px] rounded-sm mt-3 text-center py-[10px] px-0 ippercase bg-orange text-white text-[14px] hover:bg-red-600'>
                ĐĂNG KÝ
              </button>
              <div className='flex mt-8 gap-1 justify-center'>
                <span className='text-[14px] text-gray2'>Bạn đã có tài khoản?</span>
                <Link to='/login' className=' text-[14px] text-orange '>
                  Đăng nhập
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
