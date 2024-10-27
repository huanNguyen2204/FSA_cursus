import * as React from 'react';
import Popover from '@mui/material/Popover';

export default function ButtonNavbarView(props: any) {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div>
      <button
        className="w-[3.5rem] h-[3.5rem] text-black hover:text-emerald-600
        hover:bg-[#e5e5e5]
        transition-all delay-0"
        aria-owns={open ? 'mouse-over-popover' : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}

        onClick={() => props._onClickNavigate(props.url)}
      >
        {props.icon}
      </button>
      <Popover
        id="mouse-over-popover"
        sx={{ pointerEvents: 'none' }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <div className="text-xs w-max h-max p-1">{props.text}</div>
      </Popover>
    </div>
  );
}
