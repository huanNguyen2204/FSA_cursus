import { AppContext } from '@/App';
import SearchIcon from '@mui/icons-material/Search';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router';

const SearchView = () => {
  /**
   * 
   * states
   * 
   * **/
  const context = useContext(AppContext);
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [text, setText] = useState<string>("");
  const navigate = useNavigate();

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
          value={text}
          onChange={(e: any) => {
            e.preventDefault();
            setText(e.target.value)
          }}
        />
        {/* End input fields */}
      </div>
      {/* End input */}

      <button className='w-max h-[3rem] bg-gray-500 hover:bg-gray-400 px-3 text-white'
        onClick={() => {
          context.setFilter((prev: any) => ({
            ...prev,
            courseName: text
          }))
          navigate("/cursus-student/layout/");
        }}
      >
        Search
      </button>
    </div>
  )
}

export default SearchView;