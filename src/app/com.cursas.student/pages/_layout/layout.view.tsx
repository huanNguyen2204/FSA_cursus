import { Outlet } from "react-router";
import HeaderShared from "../../shared/Header/header.shared";
import FooterShared from "../../shared/Footer/footer.shared";

const LayoutView = () => {
  return (
    <div className="w-[100dvw] min-h-[100dvh] max-h-max relative flex flex-col space-y-4">
      {/* Header */}
      <HeaderShared />
      {/* End header */}

      {/* Content */}
      <div className="w-full xl:h-[calc(100%-5rem)] h-[calc(100%-4rem)] flex items-center xl:px-0 px-2 flex-col space-y-4">
        {/* Outlet */}
        <div className="xl:w-[80rem] w-full min-h-[calc(100%-3.5rem)] max-h-max">
          <Outlet />
        </div>
        {/* End outlet */}

        {/* Footer */}
        <FooterShared />
        {/* End footer */}
      </div>
      {/* End content */}
    </div>
  )
}

export default LayoutView;