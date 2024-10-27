import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';

const FilterCourseView = (props: any) => {
  return (
    <button className="w-max h-max flex items-center justify-center space-x-1
    border-[1px] border-emerald-600 text-emerald-600 pl-1 pr-2
    hover:bg-emerald-600 hover:text-white transition-all delay-0
  "
    onClick={props._onClickOpenFilter}
  >
    <FilterAltOutlinedIcon sx={{fontSize:20}} />
    <p className='text-base'>Filter</p>
  </button>
  )
}

export default FilterCourseView