import React from 'react';
import { Result, Button } from 'antd';
import { Link } from 'react-router-dom';

const PageNotFound: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Result
        status="404"
        title="404"
        subTitle="Oops, trang bạn đang tìm kiếm này không tồn tại."
        extra={
          <Link to="/">
            <Button type="primary">Về Trang chủ</Button>
          </Link>
        }
      />
    </div>
  );
};

export default PageNotFound;
// import React from 'react';
// import { Button } from 'antd';
// import { Link } from 'react-router-dom';

// const PageNotFound: React.FC = () => {
//   return (
//     <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
//       <h1 className="text-6xl font-bold text-gray-800">404</h1>
//       <p className="text-xl text-gray-600 mt-4">Oops! The page you're looking for doesn't exist.</p>
//       <Link to="/" className="mt-6">
//         <Button type="primary" size="large">
//           Go Back Home
//         </Button>
//       </Link>
//     </div>
//   );
// };

// export default PageNotFound;