import CircularProgress from '@mui/material/CircularProgress';
import { Stack } from '@mui/material';

const LoadingDiagGlobalShared = (_props: any) => {
  /**
   *
   * funcs
   *
   * **/

  return (
    <>
      <div className="flex w-[5rem] h-[5rem] justify-center items-center"
      >
        <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
          <CircularProgress color="inherit" />
        </Stack>
      </div>
    </>
  );
};

export default LoadingDiagGlobalShared;
