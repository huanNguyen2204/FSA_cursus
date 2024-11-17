const formatDateTimeUtil = (timestamp: any) => {
  const date = new Date(timestamp);
  const options: any = { day: '2-digit', month: '2-digit', year: 'numeric' };
  return new Intl.DateTimeFormat('en-GB', options).format(date);
};
