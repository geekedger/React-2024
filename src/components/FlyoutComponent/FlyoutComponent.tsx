import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { clearSelectedItems } from '../../store/selectedItemsSlice';
import { hideFlyout } from '../../store/flyoutSlice';
import sanitizeDescription from '../../utils/sanitizeText'; // Импортируем санитайзер
import "./FlyoutComponent.css";

const FlyoutComponent = () => {
  const dispatch = useDispatch();
  const selectedItems = useSelector((state: RootState) => state.selectedItems.items) || [];
  const isVisible = useSelector((state: RootState) => state.flyout.isVisible);

  if (!isVisible) return null;

  const handleUnselectAll = () => {
    dispatch(clearSelectedItems());
    dispatch(hideFlyout());
  };

  const handleDownload = () => {
    const csvContent = "data:text/csv;charset=utf-8," + selectedItems.map(e => {
      const sanitizedDescription = sanitizeDescription(e.description).replace(/\n/g, ' ').replace(/\s+/g, ' ').trim(); // Применяем санитайзер и убираем новые строки
      return `"${e.name}","${sanitizedDescription}","${e.details}"`;
    }).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `${selectedItems.length}_Pokemons.csv`);
    document.body.appendChild(link);
    link.click();
  };

  return (
    <div className="flyout">
      <p>{selectedItems.length} items are selected</p>
      <button onClick={handleUnselectAll}>Unselect all</button>
      <button onClick={handleDownload}>Download</button>
    </div>
  );
};

export default FlyoutComponent;
