const currentDate = new Date();

const dateFormatter = new Intl.DateTimeFormat('en-GB', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
});

const formattedDate = dateFormatter.format(currentDate);

// Add the ordinal suffix (st, nd, rd, th)
const day = currentDate.getDate();
const suffix = getOrdinalSuffix(day);
const today = `${day}${suffix} ${formattedDate.split(' ')[1]} ${formattedDate.split(' ')[2]}`;

// Helper function to get the ordinal suffix
function getOrdinalSuffix(day) {
  if (day >= 11 && day <= 13) {
    return 'th';
  }
  switch (day % 10) {
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    default:
      return 'th';
  }
}

export { today }