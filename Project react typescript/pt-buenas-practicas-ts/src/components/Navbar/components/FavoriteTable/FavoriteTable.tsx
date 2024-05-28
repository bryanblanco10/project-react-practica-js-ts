import { Person } from "@/models";
import { removeFavorite } from "@/redux";
import { AppStore } from "@/redux/store";
import { Delete } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";

const FavoriteTable = () => {
  const stateFavorites = useSelector(((state: AppStore) => state.favorites))
  const dispatch = useDispatch()
  const handleClick = (id: string) => {
    dispatch(removeFavorite(id))
  }
	const columns: GridColDef[] = [
    {
      field: "actions",
      headerName: "",
      width: 50,
			type: "actions",
			sortable: false,
      renderCell: (params: GridRenderCellParams<Person>) => <>
				<IconButton aria-label="favorite" onClick={() => handleClick(params.row.id)}>
            <Delete />
          </IconButton>
			</>,
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
      rows={stateFavorites}
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

export default FavoriteTable;
