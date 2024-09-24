import FloatingShape from './components/FloatingShape';
import LoadingSpinner from './components/LoadingSpinner';
import DashboardPage from './pages/DashboardPage';
import EmailVerificationPage from './pages/EmailVerificationPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ResetPasswordPage from './pages/ResetPasswordPage';
import SignUpPage from './pages/SignUpPage';

const App = () => {
  return (
    <>
      {/* Primeros diseños */}
      <div className='min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-emerald-900 flex flex-col gap-y-20 items-center justify-center relative overflow-hidden'>
        <FloatingShape
          color='bg-green-500'
          size='w-64 h-64'
          top='-5%'
          left='10%'
          delay={0}
        />
        <FloatingShape
          color='bg-emerald-500'
          size='w-48 h-48'
          top='70%'
          left='80%'
          delay={5}
        />
        <FloatingShape
          color='bg-lime-500'
          size='w-32 h-32'
          top='40%'
          left='-10%'
          delay={2}
        />
        <SignUpPage />
        <LoginPage />
        <ForgotPasswordPage />
        <ResetPasswordPage />
        <EmailVerificationPage />
        <DashboardPage />
      </div>
      <LoadingSpinner />
      {/* Diseños alternativos */}
      <div className='min-h-screen bg-gray-900 text-white relative overflow-hidden'>
        {/* Background gradient */}
        <div className='absolute inset-0 overflow-hidden'>
          <div className=' absolute inset-0'>
            <div className='absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top, rgba(16,185,129,0.3)_0%, rgba(10,80,60,0.2)_45%, rgba(0,0,0,0.1)_100%)]' />
          </div>
        </div>

        <div className='relative z-50 pt-20'>
          <RegisterPage />
        </div>
      </div>
    </>
  );
};

export default App;
