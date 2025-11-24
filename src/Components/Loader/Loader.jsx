import { ClipLoader } from 'react-spinners';

export default function Loader({ size = 60, color = "#36d7b7", height = "h-96" }) {
  return (
    <div className={`flex justify-center items-center ${height}`}>
      <ClipLoader color={color} size={size} />
    </div>
  );
}

