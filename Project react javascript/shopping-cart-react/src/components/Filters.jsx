import { useId } from "react"
import "./Filters.css"
import { useFilters } from "../hooks/useFilters";
export const Filters = () => {
  const minPriceFilterId = useId();
  const categoryFilterId = useId();
  const {
    filters,
    setFilters,
  } = useFilters();
  const handleChangeMinPrice = (event) => {
    const { value } = event.target;
    setFilters(prevState => ({
      ...prevState,
      minPrice: value,
    }));
  }

  const handleChangeCategory = (event) => {
    const { value } = event.target;
    setFilters(prevState => ({
      ...prevState,
      category: value,
    }));
  }

  return (
    <section className="filters">
      <div>
        <label htmlFor={minPriceFilterId}>Precio apartir de:</label>
        <input 
          type="range"
          id={minPriceFilterId}
          min="0"
          max="2000"
          onChange={handleChangeMinPrice}
        />
        <span>${filters?.minPrice}</span>
      </div>
      <div>
        <label htmlFor={categoryFilterId}>Categoría</label>
        <select id={categoryFilterId} value={filters?.category} onChange={handleChangeCategory}>
          <option value="all">Todas</option>
          <option value="laptops">Portátiles</option>
          <option value="smartphones">Celulares</option>
        </select>
      </div>
    </section>
  )
}