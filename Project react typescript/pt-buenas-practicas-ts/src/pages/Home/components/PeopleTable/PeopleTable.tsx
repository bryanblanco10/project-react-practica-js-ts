import { Person } from "@/models";
import { addFavorite } from "@/redux";
import { AppStore } from "@/redux/store";
import { Checkbox } from "@mui/material";
import { GridColDef, GridRenderCellParams, DataGrid } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";

const PeopleTable = () => {
	const dispatch = useDispatch()
  const statePeople = useSelector(((state: AppStore) => state.people))
  const stateFavorites = useSelector(((state: AppStore) => state.favorites))
  
	const findPerson = (id: string) : boolean => !!stateFavorites.find((item) => item.id == id)
	const personFilters = (id: string) => stateFavorites.filter(item => item.id !== id)

	const handleOnChange = (person: Person) => {
    const peopleFilter = findPerson(person.id) ? personFilters(person.id) : [...stateFavorites, person]
    dispatch(addFavorite(peopleFilter))
	}

	const columns: GridColDef[] = [
    {
      field: "actions",
      headerName: "",
      width: 50,
			type: "actions",
			sortable: false,
      renderCell: (params: GridRenderCellParams<Person>) => (
        <>
          <Checkbox size="small" checked={findPerson(params.row.id)} onChange={() => handleOnChange(params.row)} />
        </>
      ),
    },
    {
      field: "name",
      headerName: "Nombre",
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
    {
      field: "category",
      headerName: "Categoría",
      flex: 1,
    },
    {
      field: "category-image",
      headerName: "Img Categoría",
      flex: 1,
    },
    {
      field: "company",
      headerName: "Compañia",
      flex: 1,
    },
    {
      field: "company-image",
      headerName: "Img Compañia",
      flex: 1,
    },
  ];
	return (
		<DataGrid
      rows={statePeople}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 5,
          },
        },
      }}
      pageSizeOptions={[5]}
      disableRowSelectionOnClick
      disableColumnSelector
      autoHeight
    />
	);
};

export default PeopleTable;
