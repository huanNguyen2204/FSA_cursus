import NotificationsIcon from '@mui/icons-material/Notifications';
import Badge, { BadgeProps } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -1,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
    color: 'white',
    backgroundColor: 'red',
  },
}));

export default function CustomizedBadges() {
  return (
    <button className="text-emerald-600 hover:text-emerald-400">
      <StyledBadge badgeContent={4}>
        <NotificationsIcon />
      </StyledBadge>
    </button>
  );
}
