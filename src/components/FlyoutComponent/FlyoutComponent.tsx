// src/components/FlyoutComponent.tsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { hideFlyout, clearSelectedItems } from '../../store/flyoutSlice';

const FlyoutComponent: React.FC = () => {
  const dispatch = useDispatch();
  const { isVisible, selectedItems } = useSelector((state: RootState) => state.flyout);

  const handleUnselectAll = () => {
    dispatch(clearSelectedItems());
    dispatch(hideFlyout());
  };

  const handleDownload = () => {
    const csvContent = `data:text/csv;charset=utf-8,${selectedItems.map(item => `"${item}"`).join('\n')}`;
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `${selectedItems.length}_items.csv`);
    document.body.appendChild(link);
    link.click();
  };

  if (!isVisible) return null;

  return (
    <div className="flyout">
      <p>{selectedItems.length} item(s) selected</p>
      <button onClick={handleUnselectAll}>Unselect All</button>
      <button onClick={handleDownload}>Download</button>
    </div>
  );
};

export default FlyoutComponent;
