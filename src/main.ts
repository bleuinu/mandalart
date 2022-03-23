import './style.css'

window.onload = () => {
  const gridEdit: HTMLElement = document.querySelector('.grid_edit') as HTMLElement;
  const grids: NodeList = document.querySelectorAll('.grid') as NodeList;

  grids.forEach(grid => {
    grid.addEventListener('click', () => {
      let g: HTMLElement = grid as HTMLElement;
        gridEdit.style.display = "grid";
    })
  })

  document.querySelector('button[data-action="cancel"')?.addEventListener('click', () => {
    gridEdit.style.display = "none";
  })
}