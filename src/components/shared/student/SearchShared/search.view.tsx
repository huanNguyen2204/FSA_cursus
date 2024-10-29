import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';

const SearchView = () => {
  /**
   * 
   * states
   * 
   * **/
  const [isFocus, setIsFocus] = useState<boolean>(false);

  /**
   * 
   * funcs
   * 
   * **/
  const handleKeyUp = (event: any) => {
    event.preventDefault();
    if (event.key == 'Enter') {
    }
  };

  const handleMouseFocus = () => {
    setIsFocus(true);
  };

  const handleMouseBlur = () => {
    setIsFocus(false);
  };

  return (
    <div className='w-full h-full flex xl:px-0 px-2 justify-center items-center'>
      {/* Input fields */}
      <div className="w-full h-[3rem] flex
        border-[2px] transition-all delay-0
      "
        onFocus={handleMouseFocus}
        onBlur={handleMouseBlur}
        onKeyUp={handleKeyUp}

        style={{
          borderColor: isFocus ? "black" : "#9ca3af"
        }}
      >
        {/* Icon */}
        <div className="w-[3rem] h-[2.75rem] bg-white flex justify-center items-center transition-all delay-0"
          style={{
            color: isFocus ? "black" : "#9ca3af"
          }}
        >
          <SearchIcon />
        </div>
        {/* End icon */}

        {/* Input fields */}
        <input 
          className='w-[calc(100%-3rem)] h-full rounded-none text-lg'
        />
        {/* End input fields */}
      </div>
      {/* End input */}
    </div>
  )
}

export default SearchView;