import Footer from "../components/Footer";
import SearchHeader from "../components/searchComponents/SearchHeader";
import SearchHeaderOptions from "../components/searchComponents/SearchHeaderOptions";


export default function layout({ children}) {
  return (
      <div>
        <SearchHeader />
        <SearchHeaderOptions/>
      {children}
      </div>
  )
}
