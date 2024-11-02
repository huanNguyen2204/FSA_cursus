import Skeleton from '@mui/material/Skeleton';

const LoadingSkeletonShared = () => {
  return (
    <div
      className="w-full h-[20rem] flex flex-col
      border-[1.5px] border-slate-400
      "
    >
      <Skeleton variant="rectangular" sx={{ width: '100%', height: '10rem' }} />

      <div className="w-full h-[10rem] flex flex-col p-2 text-left">
        <Skeleton variant="text" sx={{ width: '100%', height: '2rem' }} />

        <Skeleton variant="text" sx={{ width: '50%', height: '2rem' }} />

        <Skeleton variant="text" sx={{ width: '30%', height: '2rem' }} />

        <Skeleton variant="text" sx={{ width: '30%', height: '2rem' }} />
      </div>
    </div>
  );
};

export default LoadingSkeletonShared;
