import FloatingShape from './components/FloatingShape';
import LoadingSpinner from './components/LoadingSpinner';
import DashboardPage from './pages/DashboardPage';
import EmailVerificationPage from './pages/EmailVerificationPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import LoginPage from './pages/LoginPage';
import ResetPasswordPage from './pages/ResetPasswordPage';
import SignUpPage from './pages/SignUpPage';

const App = () => {
  return (
    <>
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
    </>
  );
};

export default App;
